const PRODUCTS = [
  {
    id: "ragi-flour",
    image: "assets/product_ragi.png",
    name: "Ragi Flour",
    tagline: "Whole finger millet, roasted and stone-ground",
    price: 180,
    weight: "500g",
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
    dishes: ["Ragi Roti", "Ragi Malt", "Ragi Dosa", "Ragi Kali", "Ragi Kanji", "Ragi Kool"]
  },
  {
    id: "kambu-flour",
    image: "assets/product_kambu.png",
    name: "Kambu Flour",
    tagline: "Pearl millet, roasted and ground fine",
    price: 170,
    weight: "500g",
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
    dishes: ["Kambu Kool / Kanji", "Kambu Roti", "Kambu Dosa", "Kambu Puttu"]
  },
  {
    id: "black-urad-dal-mix",
    image: "assets/product_urad.png",
    name: "Black Urad Dal Mix",
    tagline: "Dry-roasted urad dal, ground with raw rice",
    price: 210,
    weight: "500g",
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
    dishes: ["Ulundhu Kali (sweet, made with palm jaggery & sesame oil)", "Ulundhu Kanji (sweet or porridge)", "Instant Ladoo"]
  },
  {
    id: "karuppu-kavuni-mix",
    image: "assets/product_porridge.png",
    name: "Karuppu Kavuni Mix",
    tagline: "Black rice, roasted whole with lentils & spices",
    price: 230,
    weight: "500g",
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
    dishes: ["Porridge / Kanji", "Sweet Malt", "Steamed Puttu"]
  },
  {
    id: "multigrain-health-mix-500g",
    groupId: "multigrain-health-mix",
    image: "assets/product_traditional.png",
    name: "Multi Grain Health Mix",
    tagline: "Nine traditional grains, blended for daily strength",
    price: 199,
    weight: "500g",
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
      { id: "multigrain-health-mix-200g", weight: "200g", price: 99, label: "200 Gms (Launch Offer)" },
      { id: "multigrain-health-mix-500g", weight: "500g", price: 199, label: "500 Gms" }
    ]
  },
  {
    id: "multigrain-health-mix-200g",
    groupId: "multigrain-health-mix",
    image: "assets/product_traditional.png",
    name: "Multi Grain Health Mix",
    tagline: "Nine traditional grains, blended for daily strength (Launch Offer)",
    price: 99,
    weight: "200g",
    swatch: "#B4813A",
    swatchLight: "#F4E6CC",
    tags: ["Launch Offer", "Energy", "Digestion"],
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
    isVariant: true,
    variants: [
      { id: "multigrain-health-mix-200g", weight: "200g", price: 99, label: "200 Gms (Launch Offer)" },
      { id: "multigrain-health-mix-500g", weight: "500g", price: 199, label: "500 Gms" }
    ]
  },
  {
    id: "baby-health-mix-200g",
    groupId: "baby-health-mix",
    image: "assets/product_immunity.png",
    name: "Baby Health Mix",
    tagline: "A gentle nutrient-rich mix, from 6 Months we can give",
    price: 149,
    weight: "200g",
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
      { id: "baby-health-mix-100g", weight: "100g", price: 79, label: "100 Gms (Launch Offer)" },
      { id: "baby-health-mix-200g", weight: "200g", price: 149, label: "200 Gms" }
    ]
  },
  {
    id: "baby-health-mix-100g",
    groupId: "baby-health-mix",
    image: "assets/product_immunity.png",
    name: "Baby Health Mix",
    tagline: "A gentle nutrient-rich mix, from 6 Months we can give (Launch Offer)",
    price: 79,
    weight: "100g",
    swatch: "#C79A4B",
    swatchLight: "#F6ECD5",
    tags: ["Launch Offer", "From 6 Months", "Protein-rich"],
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
    isVariant: true,
    variants: [
      { id: "baby-health-mix-100g", weight: "100g", price: 79, label: "100 Gms (Launch Offer)" },
      { id: "baby-health-mix-200g", weight: "200g", price: 149, label: "200 Gms" }
    ]
  }
];

const PRODUCT_ICONS = {
  "ragi-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2c-3 4-3 8 0 12s3 8 0 12"/><path d="M8 8c1 2 1 4 0 6M16 8c-1 2-1 4 0 6"/></svg>',
  "kambu-flour": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M9 6l3-3 3 3M8 10h8M7 14h10M9 18h6"/></svg>',
  "black-urad-dal-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
  "karuppu-kavuni-mix": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12c2-6 14-6 16 0-2 6-14 6-16 0z"/><circle cx="12" cy="12" r="2"/></svg>',
  "multigrain-health-mix-500g": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4 8l16 8M20 8L4 16"/></svg>',
  "multigrain-health-mix-200g": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 2v20M4 8l16 8M20 8L4 16"/></svg>',
  "baby-health-mix-200g": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"/></svg>',
  "baby-health-mix-100g": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z"/></svg>'
};

function productPhotoHTML(p) {
  if (p.image) {
    return `<div class="product-img-wrapper"><img src="${p.image}" alt="${p.name}"></div>`;
  }
  return `<div class="product-img-wrapper" style="background:${p.swatchLight}; color:${p.swatch};">${PRODUCT_ICONS[p.id] || ""}</div>`;
}
