const BASE_PRODUCTS = [
  {
    groupId: "baby-instant-health-mix",
    name: "Baby Instant Health Mix",
    category: "baby-food",
    tagline: "A gentle nutrient-rich mix, from 6 months onwards",
    image: "assets/baby-health-mix-200g.png",
    swatch: "#C79A4B",
    swatchLight: "#F6ECD5",
    tags: ["From 6 Months", "Protein-rich", "Growing Kids", "Easy Digestion"],
    description: "A nourishing and gentle blend of premium roasted nuts and grains like badam, cashew, fried gram dal, makhana, red & white poha, and peanuts. Crafted specifically for easy digestion and healthy weight gain. Safe and wholesome for babies starting from 6 months.",
    ingredients: ["Badam (Almonds)", "Cashew", "Fried Gram Dal", "Makhana (Fox Nuts)", "White Poha", "Red Poha", "Peanuts", "Cardamom"],
    process: ["Sort & clean premium grains and nuts", "Roast each ingredient separately on low heat", "Cool and stone-grind together into an ultra-fine, silky powder"],
    benefits: [
      { title: "Gentle on Tiny Tummies", detail: "Grains and nuts are roasted and stone-ground to a super-fine powder, ensuring it is very easy to digest for babies starting from 6 months." },
      { title: "Healthy Weight Gain", detail: "Formulated with nutrient-dense ingredients like badam, cashew, and makhana to support healthy growth milestones and active physical development." },
      { title: "Strong Bones & Teeth", detail: "Naturally rich in calcium, phosphorus, and essential minerals vital for healthy bone growth and early dental development." },
      { title: "Brain Growth & Stamina", detail: "Rich in healthy plant fats, Omega fatty acids, and clean protein supporting early cognitive and memory development." }
    ],
    dishes: ["Instant Baby Porridge / Kanji", "Steamed Baby Cupcake", "Fruit & Health Puree"],
    variants: [
      { id: "baby-instant-health-mix-200g", alias: "baby-health-mix-200g", weight: "200g", price: 210, image: "assets/baby-health-mix-200g.png" },
      { id: "baby-instant-health-mix-500g", alias: "baby-health-mix-500g", weight: "500g", price: 525, image: "assets/baby-health-mix-200g.png" },
      { id: "baby-instant-health-mix-1kg", alias: "baby-health-mix-1kg", weight: "1kg", price: 1050, image: "assets/baby-health-mix-200g.png" }
    ]
  },
  {
    groupId: "baby-cerlac",
    name: "Baby Cerlac (Rice & Dal based cereal)",
    category: "baby-food",
    tagline: "Rice & roasted dal based gentle cereal for infants",
    image: "assets/baby-rice-cereal.jpg",
    swatch: "#E5C8A6",
    swatchLight: "#FAF5EF",
    tags: ["From 6 Months", "Gluten-Free", "Zero Preservatives", "Baby's First Solid"],
    description: "Traditional roasted rice and yellow moong dal gently ground to an easily digestible cereal. The safest, most comforting first solid food recommended by grandmothers and pediatric nutrition for delicate baby tummies.",
    ingredients: ["100% Traditional Raw Rice", "Roasted Moong Dal (Yellow Lentil)", "Cumin hint for digestion"],
    process: ["Thoroughly wash and sun-dry premium rice & lentils", "Mild slow roasting to break down tough starches", "Stone-grind into an ultra-fine, smooth baby cereal"],
    benefits: [
      { title: "Safe & Hypoallergenic First Solid", detail: "Rice and moong dal are the most gentle food combination, making transition from breast milk smooth without gas or tummy cramps." },
      { title: "Effortless Digestion", detail: "Slow-roasted grains dissolve instantly without forming lumps, offering soothing warmth and rapid absorption." },
      { title: "Clean Sustained Energy", detail: "Complex carbohydrates provide steady energy for growing infants without sudden spikes or restlessness." }
    ],
    dishes: ["Warm Rice & Dal Porridge", "Savory Cereal with Ghee", "Mild Vegetable Puree Base"],
    variants: [
      { id: "baby-cerlac-200g", alias: "baby-rice-cereal", weight: "200g", price: 110, image: "assets/baby-rice-cereal.jpg" },
      { id: "baby-cerlac-500g", alias: "baby-rice-cereal-500g", weight: "500g", price: 275, image: "assets/baby-rice-cereal.jpg" },
      { id: "baby-cerlac-1kg", alias: "baby-rice-cereal-1kg", weight: "1kg", price: 550, image: "assets/baby-rice-cereal.jpg" }
    ]
  },
  {
    groupId: "multigrain-health-mix",
    name: "Multigrain Health Mix",
    category: "health-mix",
    tagline: "10 traditional millets, grains and nuts, blended for daily strength",
    image: "assets/multigrain-health-mix-200g.png",
    swatch: "#B4813A",
    swatchLight: "#F4E6CC",
    tags: ["10 Millets & Nuts", "Daily Energy", "High Fiber", "100% Natural"],
    description: "A wholesome traditional blend of 10 roasted, sun-dried, and stone-ground millets, grains, and nuts. Carefully proportioned in Amma's kitchen to provide daily sustained vitality, smooth digestion, and complete whole-family wellness.",
    ingredients: [
      "Ragi (Finger Millet)", "Kambu (Pearl Millet)", "Thinai (Foxtail Millet)",
      "Varagu (Kodo Millet)", "Samai (Little Millet)", "Kuthiraivali (Barnyard Millet)",
      "White Cholam (Sorghum)", "Whole Wheat", "Roasted Corn", "Badam (Almonds) & Cashews"
    ],
    process: [
      "Select 10 traditional whole millets, grains, and nuts",
      "Individually slow-roast each grain to seal in natural aroma and vitamins",
      "Cool at room temperature and traditional stone-mill into wholesome powder"
    ],
    benefits: [
      { title: "10 Traditional Millets & Nuts", detail: "Combines 10 power ingredients ensuring your family receives a rich spectrum of dietary fiber, plant proteins, healthy fats, and vital micronutrients." },
      { title: "Steady, Long-Lasting Energy", detail: "Complex unrefined carbohydrates provide 4-6 hours of sustained stamina without insulin spikes or morning fatigue." },
      { title: "Active Gut & Digestive Health", detail: "Abundant soluble and insoluble fiber keeps digestion light, helps eliminate toxins, and supports healthy gut microbiome." },
      { title: "Natural Immunity Defense", detail: "Packed with zinc, magnesium, and natural antioxidants from heirloom millets to build day-to-day resilience." }
    ],
    dishes: ["Morning Health Porridge (Kanji)", "Multigrain Dosa / Cheela", "Wholesome Pancakes", "Nutritious Sweet Ladoo"],
    variants: [
      { id: "multigrain-health-mix-200g", weight: "200g", price: 110, image: "assets/multigrain-health-mix-200g.png" },
      { id: "multigrain-health-mix-500g", weight: "500g", price: 275, image: "assets/multigrain-health-mix-500g.png" },
      { id: "multigrain-health-mix-1kg", weight: "1kg", price: 550, image: "assets/multigrain-health-mix-500g.png" }
    ]
  },
  {
    groupId: "karuppu-kavuni-mix",
    name: "Karuppu Kavuni Mix (Black Rice Mix)",
    category: "health-mix",
    tagline: "Heirloom black rice roasted whole with lentils & warm spices",
    image: "assets/karuppu-kavuni-mix-200g.png",
    swatch: "#4A4056",
    swatchLight: "#E5E1EA",
    tags: ["Rich in Antioxidants", "Low GI Whole Grain", "Heart & Wellness", "Ancient Grain"],
    description: "Royal heirloom black rice (Karuppu Kavuni) washed, sun-dried, and roasted whole along with moong dal, barley, horse gram, and gentle digestive spices. Deep, nutty, aromatic, and rich in natural purple anthocyanin antioxidants.",
    ingredients: ["Karuppu Kavuni Black Rice", "Moong Dal", "Barley", "Horse Gram (Kollu)", "Dry Garlic", "Jeera (Cumin)", "Black Pepper"],
    process: ["Wash and sun-dry heirloom black rice", "Dry-roast with traditional aromatic spices on low embers", "Cool and stone-grind into wholesome multi-benefit mix"],
    benefits: [
      { title: "Anthocyanin Antioxidant Protection", detail: "The deep royal purple hue comes from natural anthocyanins that offer protective antioxidants and support overall cellular wellness." },
      { title: "Naturally Low Glycemic Index", detail: "Its naturally low glycemic index provides slow, steady energy release to support balanced everyday nutrition." },
      { title: "Natural Heart & Gut Wellness", detail: "Wholesome dietary fiber assists natural digestive cleansing and daily regularity." },
      { title: "Seasonal Herbal Comfort", detail: "Enriched with black pepper, garlic, and cumin to offer soothing warmth and daily vitality." }
    ],
    dishes: ["Royal Black Rice Kanji / Porridge", "Sweet Kavuni Halwa / Kali", "Steamed Kavuni Puttu", "Savory Malt"],
    variants: [
      { id: "karuppu-kavuni-mix-200g", alias: "karuppu-kavuni-mix", weight: "200g", price: 200, image: "assets/karuppu-kavuni-mix-200g.png" },
      { id: "karuppu-kavuni-mix-500g", weight: "500g", price: 500, image: "assets/karuppu-kavuni-mix-200g.png" },
      { id: "karuppu-kavuni-mix-1kg", weight: "1kg", price: 1000, image: "assets/karuppu-kavuni-mix-200g.png" }
    ]
  },
  {
    groupId: "black-urad-dal-mix",
    name: "Black Ulandhu Mix (Urad Dal Mix)",
    category: "health-mix",
    tagline: "Whole black urad dal roasted with raw rice for bone & spine strength",
    image: "assets/black-urad-dal-mix-200g.png",
    swatch: "#6B5B4E",
    swatchLight: "#E7E0D6",
    tags: ["Bone & Joint Strength", "Women's Health", "High Plant Protein"],
    description: "Whole black urad dal with its nutrient-dense skin, slow-roasted and ground with raw rice in the authentic South Indian ratio. Renowned across generations as the premier food for back, pelvic, and knee joint strength.",
    ingredients: ["100% Whole Black Urad Dal with Husk", "Raw Rice"],
    process: ["Slow-roast whole black urad dal until nutty fragrance emerges", "Cool to room temperature", "Blend with raw rice and grind into authentic texture"],
    benefits: [
      { title: "Spine, Bone & Joint Strength", detail: "Traditionally cooked with cold-pressed sesame (gingelly) oil and palm jaggery into 'Ulundhu Kali' to fortify backbones and hip joints." },
      { title: "Essential for Women's Wellness", detail: "Cherished as essential nutrition for teenage girls, expectant mothers, and postpartum recovery to rebuild core strength." },
      { title: "High Vegetarian Protein", detail: "Delivers clean, easily absorbable plant protein for lean muscle maintenance and physical stamina." },
      { title: "Natural Digestive Fiber", detail: "Whole husk fiber aids bowel regularity and maintains smooth internal digestion." }
    ],
    dishes: ["Traditional Ulundhu Kali (with palm jaggery & sesame oil)", "Healing Ulundhu Kanji (Sweet or Salted)", "Ulundhu Ladoo"],
    variants: [
      { id: "black-urad-dal-mix-200g", alias: "black-urad-dal-mix", weight: "200g", price: 110, image: "assets/black-urad-dal-mix-200g.png" },
      { id: "black-urad-dal-mix-500g", weight: "500g", price: 275, image: "assets/black-urad-dal-mix-200g.png" },
      { id: "black-urad-dal-mix-1kg", weight: "1kg", price: 500, image: "assets/black-urad-dal-mix-200g.png" }
    ]
  },
  {
    groupId: "ragi-flour",
    name: "Ragi Flour",
    category: "flours",
    tagline: "Whole finger millet, gently roasted and stone-ground fine",
    image: "assets/ragi-flour-200g.png",
    swatch: "#A8543A",
    swatchLight: "#F2DDD1",
    tags: ["Calcium-Rich", "Gluten-Free", "Natural Body Coolant"],
    description: "100% whole finger millet (Ragi) slow-roasted, sun-dried, and stone-ground in small batches. Never polished, zero bleaching, zero chemical additives. Pure traditional whole-grain goodness for every generation.",
    ingredients: ["100% Whole Ragi (Finger Millet)"],
    process: ["Clean whole ragi grains of all chaff & impurities", "Gentle roasting to unlock pleasant nutty flavor", "Stone-grind into fine, silky flour"],
    benefits: [
      { title: "High Calcium Density", detail: "Provides the highest natural calcium density among all cereals, vital for building children's bones and keeping elder joints strong." },
      { title: "Natural Cooling Properties", detail: "Drinking morning Ragi Kool or Kanji soothes stomach heat, balances body temperature, and keeps you refreshed all day." },
      { title: "Wholesome Plant Iron", detail: "Naturally rich in plant-based dietary iron, helping maintain healthy energy levels and active daily vitality." },
      { title: "Gentle on Digestion", detail: "Roasting pre-breaks starches, making it effortless to digest for young children and adults alike." }
    ],
    dishes: ["Soft Ragi Roti / Phulka", "Ragi Malt", "Crispy Ragi Dosa", "Traditional Ragi Kali & Kool", "Ragi Puttu"],
    variants: [
      { id: "ragi-flour-200g", alias: "ragi-flour", weight: "200g", price: 30, image: "assets/ragi-flour-200g.png" },
      { id: "ragi-flour-500g", weight: "500g", price: 60, image: "assets/ragi-flour-200g.png" },
      { id: "ragi-flour-1kg", weight: "1kg", price: 120, image: "assets/ragi-flour-200g.png" }
    ]
  },
  {
    groupId: "kambu-flour",
    name: "Kambu Flour (Pearl Millet)",
    category: "flours",
    tagline: "Roasted pearl millet, ground fine for soft idiyappam, rotis & kool",
    image: "assets/kambu-flour-200g.png",
    swatch: "#C08A3E",
    swatchLight: "#F5E7CE",
    tags: ["Customer Favorite", "Soft Idiyappam", "Body Coolant", "High Iron"],
    description: "Pure whole pearl millet (Kambu) thoroughly de-stoned, traditionally roasted, and ground into smooth, fine flour. Prized for making melt-in-mouth soft Kambu Idiyappam and authentic summer cooling Kambu Kool.",
    ingredients: ["100% Whole Kambu (Pearl Millet)"],
    process: ["De-stone and rinse pearl millet grains", "Dry-roast on low flame to bring out deep aroma", "Stone-grind to fine flour ideal for string hoppers (idiyappam)"],
    benefits: [
      { title: "Ultimate Body Coolant", detail: "South India's time-tested antidote to summer heat. Hydrates body tissues and maintains internal cooling balance." },
      { title: "Makes Exceptionally Soft Idiyappam", detail: "Finely milled texture yields ultra-soft, pliable idiyappam and rotis that do not crumble." },
      { title: "Natural Plant Iron & Stamina", detail: "Good source of natural iron and minerals, supporting stamina and energetic daily performance." },
      { title: "Cardiovascular & Mineral Tone", detail: "Naturally high in dietary potassium and magnesium which help maintain healthy vascular tone." }
    ],
    dishes: ["Soft Kambu Idiyappam", "Kambu Kool / Kanji with Buttermilk", "Kambu Roti / Dosa", "Kambu Puttu"],
    variants: [
      { id: "kambu-flour-200g", alias: "kambu-flour", weight: "200g", price: 30, image: "assets/kambu-flour-200g.png" },
      { id: "kambu-flour-500g", weight: "500g", price: 60, image: "assets/kambu-flour-200g.png" },
      { id: "kambu-flour-1kg", weight: "1kg", price: 120, image: "assets/kambu-flour-200g.png" }
    ]
  },
  {
    groupId: "raw-rice-flour",
    name: "Raw Rice Flour (Idiyappam / Kozhukattai)",
    category: "flours",
    tagline: "Super-fine stone-ground raw rice flour for silky idiyappam & snacks",
    image: "assets/raw-rice-flour.png",
    swatch: "#CFD8DC",
    swatchLight: "#ECEFF1",
    tags: ["Super Fine Grind", "Kozhukattai Special", "Soft Idiyappam", "Crispy Murukku"],
    description: "Selected premium raw rice washed clean, sun-dried, and ground into a silky, fine flour. The secret to tear-free soft idiyappams, flawless non-cracking kozhukattai shells, and ultra-crisp festive snacks.",
    ingredients: ["100% Premium Raw Rice"],
    process: ["Triple-wash and sun-dry raw rice grains", "Gentle stone-milling into micro-fine flour", "Traditional fine sifting for flawless consistency"],
    benefits: [
      { title: "Flawless Dough Elasticity", detail: "Silky fine texture ensures idiyappam strings press smoothly and kozhukattai dough rolls thin without tearing." },
      { title: "Naturally Gluten-Free", detail: "Light, clean, and easily digested breakfast base suitable for sensitive digestions." },
      { title: "Pure Wholesome Snack Base", detail: "Produces golden, crunchy murukkus and thattai with zero oiliness or heavy aftertaste." }
    ],
    dishes: ["Soft Rice Idiyappam", "Kozhukattai / Modak", "Crunchy Murukku & Seedai", "Crisp Rice Dosa"],
    variants: [
      { id: "raw-rice-flour-200g", alias: "raw-rice-flour", weight: "200g", price: 30, image: "assets/raw-rice-flour.png" },
      { id: "raw-rice-flour-500g", weight: "500g", price: 60, image: "assets/raw-rice-flour.png" },
      { id: "raw-rice-flour-1kg", weight: "1kg", price: 120, image: "assets/raw-rice-flour.png" }
    ]
  }
];

const PRODUCTS = [];
const EXTRA_METADATA = {
  "baby-instant-health-mix": { rating: "4.9", reviews: 92, bestseller: true },
  "baby-cerlac": { rating: "4.9", reviews: 48, bestseller: true, isNew: true },
  "multigrain-health-mix": { rating: "5.0", reviews: 148, bestseller: true },
  "karuppu-kavuni-mix": { rating: "4.9", reviews: 62 },
  "black-urad-dal-mix": { rating: "4.9", reviews: 84, bestseller: true },
  "ragi-flour": { rating: "4.9", reviews: 71 },
  "kambu-flour": { 
    rating: "5.0", 
    reviews: 58, 
    bestseller: true,
    featuredReview: {
      stars: "⭐⭐⭐⭐⭐",
      quote: "I made kambu idiyappam using this pearl millet flour, and it turned out really well! The idiyappam was soft, tasty, and delicious. The flour quality is excellent and perfect for making healthy, traditional food. Very happy with the product. Highly recommended! Thank you @Liya's Home made🥰",
      author: "Verified Customer"
    }
  },
  "raw-rice-flour": { rating: "4.9", reviews: 39 }
};

BASE_PRODUCTS.forEach(base => {
  const meta = EXTRA_METADATA[base.groupId] || { rating: "4.9", reviews: 25 };
  base.variants.forEach((v, idx) => {
    const isMain = (idx === 0);
    PRODUCTS.push({
      ...base,
      ...meta,
      id: v.id,
      alias: v.alias || v.id,
      weight: v.weight,
      price: v.price,
      image: v.image || base.image,
      isVariant: !isMain,
      variants: base.variants.map(varItem => ({
        id: varItem.id,
        alias: varItem.alias,
        weight: varItem.weight,
        price: varItem.price,
        label: `${varItem.weight}`,
        image: varItem.image || base.image
      }))
    });
  });
});

// Centralized product lookup supporting IDs, aliases, and group IDs
function findProduct(id) {
  if (!id) return null;
  // 1. Direct match in flattened PRODUCTS list
  let found = PRODUCTS.find(x => x.id === id || x.alias === id || x.groupId === id);
  if (found) return found;

  // 2. Deep lookup across BASE_PRODUCTS and their variants
  const base = BASE_PRODUCTS.find(b =>
    b.groupId === id ||
    (b.variants && b.variants.some(v => v.id === id || v.alias === id))
  );
  if (base) {
    const v = (base.variants && base.variants.find(item => item.id === id || item.alias === id)) || (base.variants && base.variants[0]);
    if (v) {
      return PRODUCTS.find(x => x.id === v.id) || {
        ...base,
        id: v.id,
        alias: v.alias || v.id,
        weight: v.weight,
        price: v.price,
        image: v.image || base.image
      };
    }
  }

  // 3. Normalized string fallback
  const clean = String(id).toLowerCase().trim();
  return PRODUCTS.find(x =>
    (x.id && x.id.toLowerCase() === clean) ||
    (x.alias && x.alias.toLowerCase() === clean) ||
    (x.groupId && x.groupId.toLowerCase() === clean)
  ) || null;
}

if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
  window.BASE_PRODUCTS = BASE_PRODUCTS;
  window.findProduct = findProduct;
}

const PRODUCT_ICONS = {
  "baby-instant-health-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"/></svg>',
  "baby-cerlac": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M7 12h10M12 7v10"/></svg>',
  "multigrain-health-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4 8l16 8M20 8L4 16"/></svg>',
  "karuppu-kavuni-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12c2-6 14-6 16 0-2 6-14 6-16 0z"/><circle cx="12" cy="12" r="2"/></svg>',
  "black-urad-dal-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  "ragi-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c-3 4-3 8 0 12s3 8 0 12"/><path d="M8 8c1 2 1 4 0 6M16 8c-1 2-1 4 0 6"/></svg>',
  "kambu-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M9 6l3-3 3 3M8 10h8M7 14h10M9 18h6"/></svg>',
  "raw-rice-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M9 6l3-3 3 3M8 10h8M7 14h10M9 18h6"/></svg>'
};

function productPhotoHTML(p) {
  if (p.image) {
    return `<div class="product-img-wrapper"><img src="${p.image}" alt="${p.name}"></div>`;
  }
  return `<div class="product-img-wrapper" style="background:${p.swatchLight}; color:${p.swatch};">${PRODUCT_ICONS[p.groupId] || PRODUCT_ICONS[p.id] || ""}</div>`;
}

// Global variant swapper for listing cards
if (typeof window !== "undefined") {
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
}

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
