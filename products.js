const BASE_PRODUCTS = [
  {
    groupId: "ragi-flour",
    name: "Ragi Flour",
    tagline: "Whole finger millet, roasted and stone-ground",
    image: "assets/Ragi Flour 200g.png",
    swatch: "#A8543A",
    swatchLight: "#F2DDD1",
    tags: ["Iron-rich", "Gluten-free", "Bone health"],
    description: "Whole ragi (finger millet) is roasted, sun-dried, and ground fresh in small batches, the same way it's made at home. No polishing, no bleaching, nothing added. Just one ingredient: whole ragi.",
    ingredients: ["100% Whole Ragi (Finger Millet)"],
    process: ["Dry-roast the whole grain", "Dry at room temperature", "Grind into fine powder"],
    benefits: [
      { title: "Calcium-Rich Bones", detail: "Ragi has about 10 times more calcium than wheat or rice. It is traditionally used to build bone strength in children and maintain bone density in elders." },
      { title: "Easy on the Stomach", detail: "The roasting process breaks down complex starches, making it very gentle on the stomach and supporting natural, easy digestion." },
      { title: "Natural Body Coolant", detail: "Finger millet acts as a natural body coolant, making it perfect as a morning porridge (kanji) to beat the summer heat." },
      { title: "Iron-Rich Energy", detail: "Packed with natural iron, it helps boost red blood cell count, combats anemia, and keeps fatigue away throughout the day." }
    ],
    dishes: ["Ragi Roti", "Ragi Malt", "Ragi Dosa", "Ragi Kali", "Ragi Kanji", "Ragi Kool"],
    variants: [
      { id: "ragi-flour", weight: "200gm", price: 20 },
      { id: "ragi-flour-500g", weight: "500gm", price: 50 },
      { id: "ragi-flour-1kg", weight: "1kg", price: 100 }
    ]
  },
  {
    groupId: "kambu-flour",
    name: "Kambu Flour",
    tagline: "Pearl millet, roasted and ground fine",
    image: "assets/Kambu Flour 200g.png",
    swatch: "#C08A3E",
    swatchLight: "#F5E7CE",
    tags: ["Low GI", "Cooling", "High iron"],
    description: "Whole kambu (pearl millet) grain, cleaned of stone and debris, roasted and dried the traditional way before grinding. Naturally cooling for the body, a summer staple in many South Indian kitchens.",
    ingredients: ["100% Whole Kambu (Pearl Millet)"],
    process: ["Remove stone & debris, roast whole grain", "Dry at room temperature", "Grind into fine powder"],
    benefits: [
      { title: "Beat the Heat", detail: "Kambu is the ultimate traditional coolant. A glass of Kambu Kool (millet porridge with buttermilk) keeps the body cool and hydrated for hours." },
      { title: "High Iron & Stamina", detail: "Provides a high dose of plant-based iron, which helps combat fatigue and maintains energy levels during long workdays." },
      { title: "Sustained Energy", detail: "Rich in complex carbohydrates that digest slowly, keeping you full longer and preventing midday sluggishness." },
      { title: "Good for the Heart", detail: "Contains magnesium and potassium, which help regulate blood pressure and support overall heart health." }
    ],
    dishes: ["Kambu Kool / Kanji", "Kambu Roti", "Kambu Dosa", "Kambu Puttu"],
    variants: [
      { id: "kambu-flour", weight: "200gm", price: 20 },
      { id: "kambu-flour-500g", weight: "500gm", price: 50 },
      { id: "kambu-flour-1kg", weight: "1kg", price: 100 }
    ]
  },
  {
    groupId: "raw-rice-flour",
    name: "Raw Rice flour (Idiyappam)",
    tagline: "Fine stone-ground raw rice flour",
    image: "assets/Raw rice flour.png",
    swatch: "#CFD8DC",
    swatchLight: "#ECEFF1",
    tags: ["Gluten-free", "Fine grind", "Traditional snacks"],
    description: "Premium raw rice washed, sun-dried, and ground into an extremely fine, smooth flour. Perfect for making traditional South Indian snacks and breakfast items like idiyappam.",
    ingredients: ["100% Raw Rice"],
    process: ["Wash and sun-dry raw rice", "Grind to fine powder", "Sift for uniform texture"],
    benefits: [
      { title: "Naturally Gluten-Free", detail: "Perfect alternative for those with gluten sensitivities or celiac disease." },
      { title: "Snack & Breakfast Base", detail: "Creates crispier murukkus and softer idiyappams compared to store-bought rice flour." }
    ],
    dishes: ["Idiyappam", "Kozhukattai", "Murukku", "Rice Dosa"],
    variants: [
      { id: "raw-rice-flour", weight: "200gm", price: 20 },
      { id: "raw-rice-flour-500g", weight: "500gm", price: 50 },
      { id: "raw-rice-flour-1kg", weight: "1kg", price: 100 }
    ]
  },
  {
    groupId: "multigrain-health-mix",
    name: "Multigrain Health Mix",
    tagline: "Nine traditional grains, blended for daily strength",
    image: "assets/Multi Grain Health Mix  200g.png",
    swatch: "#B4813A",
    swatchLight: "#F4E6CC",
    tags: ["Energy", "Digestion", "100% Natural"],
    description: "A wholesome traditional blend of roasted, sun-dried, and stone-ground grains. Contains nine premium ingredients carefully proportioned to provide energy, digestion, and daily strength.",
    ingredients: ["Wheat", "Kambu", "Ragi", "White Cholam", "Corn", "Varagu Rice", "Samai Rice", "Kuthiraicali Rice", "Thinai"],
    process: ["Clean and roast each grain", "Dry at room temperature", "Blend and grind into powder"],
    benefits: [
      { title: "Complete Daily Nutrition", detail: "Blends nine different traditional millets and grains, ensuring you get a balanced mix of proteins, fiber, vitamins, and minerals in a single cup." },
      { title: "Steady Energy Release", detail: "The complex carbohydrates from the mixed millets provide stable, long-lasting energy without the crash associated with refined flour." },
      { title: "High Fiber for Gut Health", detail: "Keeps your digestion smooth, prevents constipation, and supports a healthy weight by keeping you satiated." },
      { title: "Immunity and Strength", detail: "The combination of ragi, kambu, and grains provides trace minerals that fortify the immune system and support daily cell repair." }
    ],
    dishes: ["Pancakes", "Porridge / Kanji", "Instant Dosa", "Health Mix Ladoo"],
    variants: [
      { id: "multigrain-health-mix-200g", weight: "200gm", price: 100, image: "assets/Multi Grain Health Mix  200g.png" },
      { id: "multigrain-health-mix-500g", weight: "500gm", price: 250, image: "assets/Multi Grain Health Mix  500g.png" },
      { id: "multigrain-health-mix-1kg", weight: "1kg", price: 500, image: "assets/Multi Grain Health Mix  500g.png" }
    ]
  },
  {
    groupId: "black-urad-dal-mix",
    name: "Black Ulundhu Mix",
    tagline: "Dry-roasted urad dal, ground with raw rice",
    image: "assets/Black Urad Dal Mix  200g.png",
    swatch: "#6B5B4E",
    swatchLight: "#E7E0D6",
    tags: ["Bone & joint", "Women's health", "Gut health"],
    description: "Black urad dal, dry-roasted and blended with raw rice in the traditional ratio, then stone-ground into a fine mix. The base of ulundhu kali, a thick, iron-rich sweet cooked with jaggery and sesame oil.",
    ingredients: ["Black Urad Dal", "Raw Rice"],
    process: ["Dry-roast the urad dal", "Dry at room temperature", "Mix with raw rice and grind into powder"],
    benefits: [
      { title: "Bone & Joint Strength", detail: "In South India, black urad dal is the go-to remedy for strengthening the spine, hips, and joints. It is traditionally cooked with sesame oil and palm jaggery." },
      { title: "Women's Health Support", detail: "Valued as a strengthening food during puberty, pregnancy, and post-delivery, helping to replenish core energy and soothe back pain." },
      { title: "High Protein & Muscle Build", detail: "Loaded with vegetarian protein, it helps repair muscles and build body strength naturally." },
      { title: "Healthy Digestion", detail: "The combination of soluble and insoluble fiber keeps the gut clean and assists in smooth digestion." }
    ],
    dishes: ["Ulundhu Kali (sweet, made with palm jaggery & sesame oil)", "Ulundhu Kanji (sweet or porridge)", "Instant Ladoo"],
    variants: [
      { id: "black-urad-dal-mix", weight: "200gm", price: 100 },
      { id: "black-urad-dal-mix-500g", weight: "500gm", price: 200 },
      { id: "black-urad-dal-mix-1kg", weight: "1kg", price: 400 }
    ]
  },
  {
    groupId: "karuppu-kavuni-mix",
    name: "Karupu Kavuni Mix",
    tagline: "Black rice, roasted whole with lentils & spices",
    image: "assets/Karuppu Kavini Mix 200g.png",
    swatch: "#4A4056",
    swatchLight: "#E5E1EA",
    tags: ["Antioxidants", "Immunity", "Blood sugar"],
    description: "Black rice (karuppu kavuni) washed, dried and roasted whole along with moong dal, barley, horse gram and warm spices, then ground fine. Rich, nutty, and deeply traditional.",
    ingredients: ["Karuppu Kavuni Rice", "Moong Dal", "Barley", "Horse Gram", "Dry Garlic", "Jeera (Cumin)", "Pepper"],
    process: ["Wash and dry the rice", "Dry-roast", "Dry at room temperature", "Grind into powder"],
    benefits: [
      { title: "Antioxidant Powerhouse", detail: "The deep purple color comes from anthocyanins—the same antioxidants found in blueberries. It helps cleanse the body and fight inflammation." },
      { title: "Low Glycemic Index", detail: "Helps manage blood sugar levels by preventing sudden insulin spikes, making it excellent for diabetic care." },
      { title: "Immunity Booster", detail: "Packed with essential minerals like zinc and iron that build a strong defense system against seasonal colds and infections." },
      { title: "Heart & Liver Detox", detail: "Helps detoxify the body, supports liver function, and helps keep bad cholesterol (LDL) in check." }
    ],
    dishes: ["Porridge / Kanji", "Sweet Malt", "Steamed Puttu"],
    variants: [
      { id: "karuppu-kavuni-mix", weight: "200gm", price: 200 },
      { id: "karuppu-kavuni-mix-500g", weight: "500gm", price: 400 },
      { id: "karuppu-kavuni-mix-1kg", weight: "1kg", price: 800 }
    ]
  },
  {
    groupId: "baby-health-mix",
    name: "Baby Instant Health mix",
    tagline: "A gentle nutrient-rich mix, from 6 Months we can give",
    image: "assets/Baby Health Mix   200g.png",
    swatch: "#C79A4B",
    swatchLight: "#F6ECD5",
    tags: ["From 6 Months", "Protein-rich", "Growing Kids"],
    description: "A nourishing and gentle blend of premium ingredients like badam, cashew, fried gram dal, makhana, and peanuts. Crafted specifically for easy digestion and growth support. Safe to feed babies from 6 months of age.",
    ingredients: ["Badam", "Cashew", "Fried Gram Dall", "Makhana", "White Poha", "Red Poha", "Peanut"],
    process: ["Roast each ingredient separately", "Dry at room temperature", "Grind together into a fine powder"],
    benefits: [
      { title: "Gentle on Tiny Tummies", detail: "The grains and nuts are roasted and stone-ground to a super-fine powder, ensuring it is very easy to digest for babies starting from 6 months." },
      { title: "Healthy Weight Gain", detail: "Formulated with energy-dense ingredients like badam, cashew, and poha to support healthy growth and physical development." },
      { title: "Strong Teeth & Bones", detail: "Packed with natural calcium from grain mixes, essential for forming strong teeth and skeleton structure in early childhood." },
      { title: "Brain Development Support", detail: "Premium nuts (almonds and cashews) provide healthy fats and micronutrients that support early cognitive and brain growth." }
    ],
    dishes: ["Porridge / Kanji", "Steamed cake", "Baby food puree"],
    variants: [
      { id: "baby-health-mix-200g", weight: "200gm", price: 200 },
      { id: "baby-health-mix-500g", weight: "500gm", price: 500 },
      { id: "baby-health-mix-1kg", weight: "1kg", price: 1000 }
    ]
  },
  {
    groupId: "baby-rice-cereal",
    name: "Baby Rice Cereal",
    tagline: "Gentle stone-ground baby rice cereal",
    image: "assets/Baby Rice Cereal.jpg",
    swatch: "#E5C8A6",
    swatchLight: "#FAF5EF",
    tags: ["From 6 Months", "Gluten-free", "Easy digestion"],
    description: "Premium raw rice, washed, sun-dried, and gently stone-ground into a fine powder. Perfect as a baby's first solid food, providing clean energy and easy digestion. Extremely gentle on tiny tummies.",
    ingredients: ["100% Premium Raw Rice"],
    process: ["Wash and clean raw rice", "Sun-dry in a hygienic environment", "Stone-grind into a super-fine powder"],
    benefits: [
      { title: "Perfect First Food", detail: "Naturally gluten-free and low-allergen, making it the safest start for babies transitioning to solids." },
      { title: "Super Gentle Digestion", detail: "Finely ground texture ensures it is extremely easy for tiny tummies to digest and absorb." }
    ],
    dishes: ["Baby Porridge", "Rice Puree"],
    variants: [
      { id: "baby-rice-cereal", weight: "200gm", price: 100 },
      { id: "baby-rice-cereal-500g", weight: "500gm", price: 250 },
      { id: "baby-rice-cereal-1kg", weight: "1kg", price: 500 }
    ]
  }
];

const PRODUCTS = [];
const EXTRA_METADATA = {
  "ragi-flour": { rating: "4.9", reviews: 54, bestseller: true },
  "kambu-flour": { rating: "4.8", reviews: 36 },
  "raw-rice-flour": { rating: "4.9", reviews: 22 },
  "multigrain-health-mix": { rating: "4.9", reviews: 112, bestseller: true },
  "black-urad-dal-mix": { rating: "4.8", reviews: 68, bestseller: true },
  "karuppu-kavuni-mix": { rating: "4.9", reviews: 45 },
  "baby-health-mix": { rating: "4.9", reviews: 89, bestseller: true },
  "baby-rice-cereal": { rating: "4.8", reviews: 15, isNew: true }
};

BASE_PRODUCTS.forEach(base => {
  const meta = EXTRA_METADATA[base.groupId] || { rating: "4.9", reviews: 20 };
  base.variants.forEach((v, idx) => {
    const isMain = (idx === 0);
    PRODUCTS.push({
      ...base,
      ...meta,
      id: v.id,
      weight: v.weight,
      price: v.price,
      image: v.image || base.image,
      isVariant: !isMain,
      variants: base.variants.map(varItem => ({
        id: varItem.id,
        weight: varItem.weight,
        price: varItem.price,
        label: `${varItem.weight}`,
        image: varItem.image || base.image
      }))
    });
  });
});

const PRODUCT_ICONS = {
  "ragi-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c-3 4-3 8 0 12s3 8 0 12"/><path d="M8 8c1 2 1 4 0 6M16 8c-1 2-1 4 0 6"/></svg>',
  "kambu-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M9 6l3-3 3 3M8 10h8M7 14h10M9 18h6"/></svg>',
  "raw-rice-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M9 6l3-3 3 3M8 10h8M7 14h10M9 18h6"/></svg>',
  "multigrain-health-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4 8l16 8M20 8L4 16"/></svg>',
  "black-urad-dal-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  "karuppu-kavuni-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12c2-6 14-6 16 0-2 6-14 6-16 0z"/><circle cx="12" cy="12" r="2"/></svg>',
  "baby-health-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"/></svg>',
  "baby-rice-cereal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M7 12h10M12 7v10"/></svg>'
};

function productPhotoHTML(p) {
  if (p.image) {
    return `<div class="product-img-wrapper"><img src="${p.image}" alt="${p.name}"></div>`;
  }
  return `<div class="product-img-wrapper" style="background:${p.swatchLight}; color:${p.swatch};">${PRODUCT_ICONS[p.groupId] || PRODUCT_ICONS[p.id] || ""}</div>`;
}

// Global variant swapper for listing cards
window.changeCardVariant = function(buttonEl, variantId, price, weight, imageUrl) {
  const card = buttonEl.closest('.product-card');
  if (!card) return;
  
  // 1. Toggle active classes on pills in this card
  card.querySelectorAll('.variant-pill').forEach(btn => btn.classList.remove('active'));
  buttonEl.classList.add('active');
  
  // 2. Update card link href
  card.querySelectorAll('.card-link').forEach(link => {
    link.href = `product.html?id=${variantId}`;
  });
  
  // 3. Update price text
  const priceEl = card.querySelector('.product-price');
  if (priceEl) {
    priceEl.textContent = `₹${price}`;
  }
  
  // 4. Update image if there's a specific image for this variant
  const img = card.querySelector('.product-img-wrapper img');
  if (img && imageUrl) {
    img.src = imageUrl;
  }
  
  // 5. Update data-cart-control attribute
  const cartControl = card.querySelector('[data-cart-control]');
  if (cartControl) {
    cartControl.setAttribute('data-cart-control', variantId);
  }
  
  // 6. Update cart controls to render correct button/quantity
  if (typeof updateAllCartControls === 'function') {
    updateAllCartControls();
  }
};

function renderProductCardHTML(p) {
  const defaultVar = p.variants && p.variants.length > 0 ? p.variants[0] : p;
  
  return `
    <div class="product-card" data-product-id="${p.groupId || p.id}">
      <a class="card-link" href="product.html?id=${defaultVar.id}">
        <div style="position: relative; overflow: hidden; border-radius: 8px;">
          ${productPhotoHTML(p)}
          ${p.bestseller ? `<span style="position: absolute; top: 10px; left: 10px; background-color: var(--brand-green); color: var(--white); padding: 4px 8px; font-size: 9.5px; font-weight: 800; border-radius: 4px; letter-spacing: 0.08em; box-shadow: 0 2px 6px rgba(0,0,0,0.1); z-index: 2;">BESTSELLER</span>` : ''}
          ${p.isNew ? `<span style="position: absolute; top: 10px; left: 10px; background-color: #D35400; color: var(--white); padding: 4px 8px; font-size: 9.5px; font-weight: 800; border-radius: 4px; letter-spacing: 0.08em; box-shadow: 0 2px 6px rgba(0,0,0,0.1); z-index: 2;">NEW</span>` : ''}
        </div>
        <h3>${p.name}</h3>
        
        <!-- Ratings and Reviews -->
        <div style="display: flex; align-items: center; gap: 4px; margin-top: 4px; margin-bottom: 8px; font-size: 12.5px; font-weight: 700; color: #F1C40F;">
          <span>★ ${p.rating || '4.9'}</span>
          <span style="color: var(--ink-light); font-weight: 500;">(${p.reviews || '20'} reviews)</span>
        </div>

        <p class="product-weight" style="min-height: 40px; margin-bottom: 12px; line-height: 1.4;">${p.tagline}</p>
      </a>
      
      <!-- Weight Selector Pills -->
      ${p.variants && p.variants.length > 1 ? `
        <div class="card-variant-selector">
          ${p.variants.map((v, i) => `
            <button type="button" class="variant-pill ${i === 0 ? 'active' : ''}" 
                    onclick="changeCardVariant(this, '${v.id}', ${v.price}, '${v.weight}', '${v.image || p.image || ''}')">
              ${v.weight}
            </button>
          `).join("")}
        </div>
      ` : ''}

      <div class="product-meta">
        <span class="product-price">₹${defaultVar.price}</span>
      </div>
      <div data-cart-control="${defaultVar.id}" style="width: 100%;"></div>
    </div>
  `;
}
