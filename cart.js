const CART_KEY = "liyas-cart-v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? { items: JSON.parse(raw) } : { items: {} };
  } catch (e) {
    return { items: {} };
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(CART.items));
  } catch (e) {}
}

const CART = loadCart();

function cartCount() {
  return Object.values(CART.items).reduce((s, q) => s + q, 0);
}

function addToCart(id, qty = 1) {
  CART.items[id] = (CART.items[id] || 0) + qty;
  saveCart();
  updateCartBadge();
  updateAllCartControls();
  showToast("Added to cart!");
  toggleCartDrawer(true);
}

function adjustCart(id, change) {
  const current = CART.items[id] || 0;
  const target = current + change;
  const newlyAdded = (current === 0 && change > 0);

  if (target <= 0) {
    delete CART.items[id];
  } else {
    CART.items[id] = target;
  }
  saveCart();
  updateCartBadge();
  updateAllCartControls();
  
  // Refresh cart summary page if the rendering function is present
  if (typeof renderCart === "function") {
    renderCart();
  }
  
  // Refresh product details page quantity state if sync function is present
  if (typeof syncDetailQuantity === "function") {
    syncDetailQuantity();
  }

  // Handle drawer behavior
  if (newlyAdded) {
    toggleCartDrawer(true);
  } else if (document.getElementById("cart-drawer")?.classList.contains("open")) {
    renderCartDrawer();
  }
}

function removeDrawerItem(id) {
  delete CART.items[id];
  saveCart();
  updateCartBadge();
  updateAllCartControls();
  renderCartDrawer();
  
  if (typeof renderCart === "function") {
    renderCart();
  }
  if (typeof syncDetailQuantity === "function") {
    syncDetailQuantity();
  }
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

function updateAllCartControls() {
  document.querySelectorAll("[data-cart-control]").forEach(container => {
    const id = container.getAttribute("data-cart-control");
    const qty = CART.items[id] || 0;
    
    if (qty === 0) {
      container.innerHTML = `
        <button class="btn btn-primary" style="width: 100%;" onclick="adjustCart('${id}', 1)">Add to Cart</button>
      `;
    } else {
      container.innerHTML = `
        <div class="card-quantity-selector">
          <button type="button" class="card-quantity-btn" onclick="adjustCart('${id}', -1)">−</button>
          <span class="card-quantity-val">${qty}</span>
          <button type="button" class="card-quantity-btn" onclick="adjustCart('${id}', 1)">+</button>
        </div>
      `;
    }
  });
}

function showToast(msg) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.style.cssText = "position:fixed;left:50%;bottom:30px;transform:translate(-50%,20px);background:#3E5034;color:#fff;padding:12px 22px;border-radius:30px;font-size:14px;font-weight:600;opacity:0;pointer-events:none;transition:opacity .25s ease, transform .25s ease;z-index:1001;";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translate(-50%,0)";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translate(-50%,20px)";
  }, 1800);
}

/* ---------- Cart Drawer Injection and Handlers ---------- */
function toggleCartDrawer(open) {
  // Don't show drawer on cart.html page
  if (window.location.pathname.endsWith("cart.html")) {
    return;
  }

  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  
  if (drawer && overlay) {
    if (open) {
      drawer.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden"; // Prevent scrolling behind
      renderCartDrawer();
    } else {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = ""; // Restore scroll
    }
  }
}

function injectCartDrawer() {
  if (window.location.pathname.endsWith("cart.html")) {
    return;
  }
  if (document.getElementById("cart-drawer")) return;

  const overlay = document.createElement("div");
  overlay.id = "cart-drawer-overlay";
  overlay.className = "cart-drawer-overlay";
  
  const drawer = document.createElement("div");
  drawer.id = "cart-drawer";
  drawer.className = "cart-drawer";
  
  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  overlay.addEventListener("click", () => toggleCartDrawer(false));
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleCartDrawer(false);
    }
  });
}

function renderCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;

  const ids = Object.keys(CART.items);
  let subtotal = 0;
  
  // 1. Header
  let html = `
    <div class="cart-drawer-header">
      <h2>Your Cart (${cartCount()} items)</h2>
      <button class="cart-drawer-close" onclick="toggleCartDrawer(false)" aria-label="Close cart drawer">&times;</button>
    </div>
  `;

  // 2. Items List
  html += `<div class="cart-drawer-items">`;
  if (ids.length === 0) {
    html += `
      <div class="cart-drawer-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 56px; height: 56px; margin-bottom: 12px; stroke: var(--ink-light);">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p style="font-size: 15.5px; color: var(--ink-light);">Your cart is empty.</p>
        <button class="btn btn-primary" style="margin-top: 20px; font-size: 13.5px; padding: 10px 20px;" onclick="toggleCartDrawer(false)">Continue Shopping</button>
      </div>
    `;
  } else {
    ids.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const qty = CART.items[id];
      const lineTotal = p.price * qty;
      subtotal += lineTotal;
      html += `
        <div class="cart-drawer-item">
          <div class="cart-drawer-item-img">
            ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div style="background:${p.swatchLight}; color:${p.swatch}; width:100%; height:100%; border-radius:6px; display:flex; align-items:center; justify-content:center; padding:4px;">${PRODUCT_ICONS[p.groupId] || PRODUCT_ICONS[p.id] || ""}</div>`}
          </div>
          <div class="cart-drawer-item-info">
            <h4>${p.name}</h4>
            <span class="weight">${p.weight}</span>
            <div class="cart-drawer-item-actions">
              <div class="cart-drawer-qty">
                <button type="button" onclick="adjustCart('${id}', -1)">−</button>
                <span>${qty}</span>
                <button type="button" onclick="adjustCart('${id}', 1)">+</button>
              </div>
              <span class="price">₹${lineTotal}</span>
              <button class="cart-drawer-remove" onclick="removeDrawerItem('${id}')" aria-label="Remove item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }
  html += `</div>`; // Close items div

  // 3. Cross-sells (Customers also like)
  const notInCart = PRODUCTS.filter(p => !p.isVariant && !ids.includes(p.id));
  if (notInCart.length > 0 && ids.length > 0) {
    const rp = notInCart[0];
    html += `
      <div class="cart-drawer-cross">
        <h3>Customers also like</h3>
        <div class="cross-item">
          <div class="cross-item-img">
            ${rp.image ? `<img src="${rp.image}" alt="${rp.name}">` : `<div style="background:${rp.swatchLight}; color:${rp.swatch}; width:100%; height:100%; border-radius:6px; display:flex; align-items:center; justify-content:center; padding:4px;">${PRODUCT_ICONS[rp.groupId] || PRODUCT_ICONS[rp.id] || ""}</div>`}
          </div>
          <div class="cross-item-info">
            <h4>${rp.name}</h4>
            <p>₹${rp.price} / ${rp.weight}</p>
          </div>
          <button class="btn btn-outline" style="padding: 6px 14px; font-size: 12.5px; border-radius: 20px; font-weight:600;" onclick="adjustCart('${rp.id}', 1)">Add</button>
        </div>
      </div>
    `;
  }

  // 4. Footer Section
  if (ids.length > 0) {
    html += `
      <div class="cart-drawer-footer">
        <div class="cart-drawer-subtotal">
          <span>Subtotal</span>
          <span class="total-price">₹${subtotal}</span>
        </div>
        <p class="cart-drawer-tax-disclaimer">Taxes and shipping calculated at checkout</p>
        <div class="cart-drawer-actions">
          <button class="btn btn-outline" onclick="location.href='cart.html'">View Cart</button>
          <button class="btn btn-primary" onclick="location.href='cart.html'">Check out</button>
        </div>
      </div>
    `;
  }

  drawer.innerHTML = html;
}

// Click listener to intercept cart button actions globally
document.addEventListener("click", (e) => {
  const cartBtn = e.target.closest(".cart-btn");
  if (cartBtn) {
    if (window.location.pathname.endsWith("cart.html")) {
      return; // allow normal page load on checkout page
    }
    e.preventDefault();
    toggleCartDrawer(true);
  }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  injectCartDrawer();
  updateCartBadge();
  updateAllCartControls();
});
updateCartBadge();
