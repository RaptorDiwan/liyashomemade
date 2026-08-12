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
  showToast("Added to cart!");
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

function showToast(msg) {
  let toast = document.getElementById("site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "site-toast";
    toast.style.cssText = "position:fixed;left:50%;bottom:30px;transform:translate(-50%,20px);background:#3E5034;color:#fff;padding:12px 22px;border-radius:30px;font-size:14px;font-weight:600;opacity:0;pointer-events:none;transition:opacity .25s ease, transform .25s ease;z-index:1000;";
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

// Add click listener for all dynamic add-to-cart buttons
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add-to-cart]");
  if (btn) {
    e.preventDefault();
    addToCart(btn.getAttribute("data-add-to-cart"));
  }
});

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", updateCartBadge);
updateCartBadge();
