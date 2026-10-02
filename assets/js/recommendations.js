/**
 * EDIT / FORM — RECOMMENDATION & STYLE ENGINE
 * Defines style archetypes, palette formulas, silhouettes & intelligent styling rules
 */

const STYLE_PROFILES_DATA = {
  'modern-minimal': {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    tagline: 'Refined restraint, clean proportions & intentional simplicity.',
    description: 'Your aesthetic is anchored in understated luxury, disciplined neutral tones, and sharp, uncluttered silhouettes. You prioritize garment construction, tactile fabrics, and versatile combinations over loud trends.',
    traits: ['Minimal', 'Refined', 'Tailored', 'Intentional'],
    palette: [
      { name: 'Pitch Black', hex: '#121110', note: 'Anchor base' },
      { name: 'Warm Ivory', hex: '#F7F3EB', note: 'Primary neutral' },
      { name: 'Oatmeal Taupe', hex: '#A89E93', note: 'Soft midtone' },
      { name: 'Muted Olive', hex: '#586250', note: 'Subtle accent' },
      { name: 'Espresso', hex: '#2A2421', note: 'Depth contour' }
    ],
    silhouettes: [
      { name: 'Relaxed Tailoring', desc: 'Slightly dropped shoulders with drape' },
      { name: 'Clean Lines', desc: 'Unbroken verticals without extraneous detailing' },
      { name: 'Straight Leg', desc: 'High-waisted trousers with gentle pool' },
      { name: 'Structured Minimalism', desc: 'Geometric coats and structured outerwear' }
    ],
    occasions: [
      { name: 'Work / Executive', percentage: 40 },
      { name: 'Weekend Leisure', percentage: 30 },
      { name: 'Dinner & Evening', percentage: 20 },
      { name: 'Travel & Mobility', percentage: 10 }
    ],
    essentials: [
      { name: 'Crisp Poplin Shirt', category: 'Tops', status: 'Core' },
      { name: 'High-Rise Straight Trousers', category: 'Bottoms', status: 'Core' },
      { name: 'Double-Breasted Wool Blazer', category: 'Outerwear', status: 'Core' },
      { name: 'Cashmere Crewneck Sweater', category: 'Tops', status: 'Core' },
      { name: 'Minimalist Leather Sneakers', category: 'Shoes', status: 'Core' },
      { name: 'Structured Leather Tote', category: 'Accessories', status: 'Accent' },
      { name: 'Point-Toe Leather Ankle Boots', category: 'Shoes', status: 'Accent' }
    ],
    formulas: [
      {
        id: 'f-01',
        title: 'The Architectural Workday',
        top: 'Crisp Poplin Shirt',
        bottom: 'Tailored Straight Trousers',
        layer: 'Structured Wool Blazer',
        shoes: 'Point-Toe Leather Ankle Boots',
        accessory: 'Structured Leather Tote',
        tip: 'Tuck shirt partially and let blazer lapel frame the clean neckline.'
      },
      {
        id: 'f-02',
        title: 'The Refined Weekend',
        top: 'Cashmere Crewneck',
        bottom: 'Relaxed Tailored Chino',
        layer: 'Draped Trench Coat',
        shoes: 'Minimalist Leather Sneakers',
        accessory: 'Pebbled Crossbody Bag',
        tip: 'Contrast soft knit texture with clean calfskin footwear.'
      },
      {
        id: 'f-03',
        title: 'Gallery & Evening Dinner',
        top: 'Silk Crepe Shell',
        bottom: 'Pleated Wide Trousers',
        layer: 'Sleek Overcoat',
        shoes: 'Slingback Kitten Heels',
        accessory: 'Sculptural Gold Earrings',
        tip: 'Monochromatic black-on-charcoal with a singular warm gold focal point.'
      }
    ],
    rules: [
      'Keep your base outfit palette strictly within two neutrals and introduce at most one earthy tone.',
      'Balance an oversized top with a clean straight trouser, or a relaxed wide-leg with a slim knit.',
      'Invest in tactile natural fibers: heavy silk, double-faced wool, brushed cashmere and structured linen.',
      'Let silhouette architecture speak rather than decorative logos or prints.'
    ]
  },

  'architectural-classic': {
    id: 'architectural-classic',
    name: 'Architectural Classic',
    tagline: 'Timeless tailoring reimagined with sculptural geometry.',
    description: 'You celebrate enduring sartorial codes updated with crisp, contemporary proportions. Your pieces carry heritage gravitas while feeling razor-sharp.',
    traits: ['Structured', 'Polished', 'Heritage', 'Timeless'],
    palette: [
      { name: 'Midnight Charcoal', hex: '#1A1D20', note: 'Anchor' },
      { name: 'Alabaster White', hex: '#F9F8F6', note: 'Contrast' },
      { name: 'Camel Warmth', hex: '#B89772', note: 'Classic accent' },
      { name: 'Deep Navy', hex: '#1B2A38', note: 'Depth' },
      { name: 'Soft Cream', hex: '#EBE5D8', note: 'Harmonizer' }
    ],
    silhouettes: [
      { name: 'Defined Shoulders', desc: 'Precision padded tailoring' },
      { name: 'Tapered Ankle', desc: 'Sharp crease trousers' },
      { name: 'Cinched Waist', desc: 'Belted trench and coat forms' },
      { name: 'Column Dress', desc: 'Sleek uninterrupted silhouette' }
    ],
    occasions: [
      { name: 'Business & Meetings', percentage: 45 },
      { name: 'Dinners & Galleries', percentage: 25 },
      { name: 'Editorial Events', percentage: 20 },
      { name: 'Casual Chic', percentage: 10 }
    ],
    essentials: [
      { name: 'Belted Trench Coat', category: 'Outerwear', status: 'Core' },
      { name: 'Silk Button-Down Shirt', category: 'Tops', status: 'Core' },
      { name: 'Wool Pleated Trousers', category: 'Bottoms', status: 'Core' },
      { name: 'Leather Loafers', category: 'Shoes', status: 'Core' },
      { name: 'Flap Shoulder Bag', category: 'Accessories', status: 'Accent' }
    ],
    formulas: [
      {
        id: 'f-11',
        title: 'The Tailored Power Silhouette',
        top: 'Silk Button-Down Shirt',
        bottom: 'Wool Pleated Trousers',
        layer: 'Belted Trench Coat',
        shoes: 'Leather Loafers',
        accessory: 'Flap Shoulder Bag',
        tip: 'Keep the trench belt neatly knotted at the back for open drape.'
      }
    ],
    rules: [
      'Ensure seam lines and shoulder structure are razor-precise.',
      'Use classic heritage hues (camel, navy, charcoal) to bridge formal and relaxed days.'
    ]
  },

  'relaxed-neutral': {
    id: 'relaxed-neutral',
    name: 'Relaxed Neutral',
    tagline: 'Effortless drape, organic textures & relaxed sophistication.',
    description: 'You appreciate effortless comfort that never sacrifices style. Unstructured tailoring, soft knits, and earthy neutrals create a grounded, warm presence.',
    traits: ['Relaxed', 'Organic', 'Unstructured', 'Warm'],
    palette: [
      { name: 'Soft Sand', hex: '#D6C7B2', note: 'Base tone' },
      { name: 'Raw Linen', hex: '#EBE4D5', note: 'Primary light' },
      { name: 'Warm Terracotta', hex: '#A86252', note: 'Warm accent' },
      { name: 'Earth Umber', hex: '#4A3B32', note: 'Grounded dark' },
      { name: 'Sage Green', hex: '#7C8A79', note: 'Organic touch' }
    ],
    silhouettes: [
      { name: 'Fluid Wide Leg', desc: 'Linen and rayon fluid drape' },
      { name: 'Oversized Knitwear', desc: 'Cozy volume with dropped shoulders' },
      { name: 'Soft Trench', desc: 'Unlined lightweight drape' }
    ],
    occasions: [
      { name: 'Weekend Leisure', percentage: 45 },
      { name: 'Creative Work', percentage: 30 },
      { name: 'Travel', percentage: 25 }
    ],
    essentials: [
      { name: 'Relaxed Linen Shirt', category: 'Tops', status: 'Core' },
      { name: 'Wide-Leg Linen Trousers', category: 'Bottoms', status: 'Core' },
      { name: 'Chunky Knit Cardigan', category: 'Outerwear', status: 'Core' },
      { name: 'Woven Leather Mules', category: 'Shoes', status: 'Core' },
      { name: 'Canvas & Leather Tote', category: 'Accessories', status: 'Accent' }
    ],
    formulas: [
      {
        id: 'f-21',
        title: 'The Organic Sunday',
        top: 'Relaxed Linen Shirt',
        bottom: 'Wide-Leg Linen Trousers',
        layer: 'Chunky Knit Cardigan',
        shoes: 'Woven Leather Mules',
        accessory: 'Canvas & Leather Tote',
        tip: 'Cuff sleeves loosely and leave the collar relaxed open.'
      }
    ],
    rules: [
      'Mix 3 distinct textures (e.g. linen, ribbed knit, matte leather) to add depth without loud colors.',
      'Embrace soft wrinkles and natural garment drape as an intentional design feature.'
    ]
  },

  'elevated-casual': {
    id: 'elevated-casual',
    name: 'Elevated Casual',
    tagline: 'High-low pairings with modern everyday confidence.',
    description: 'You blend tailored pieces with relaxed essentials for a high-low balance that transitions effortlessly from morning coffee to evening drinks.',
    traits: ['Versatile', 'Modern', 'Dynamic', 'Accessible'],
    palette: [
      { name: 'Charcoal Wash', hex: '#26282B', note: 'Base denim/dark' },
      { name: 'Crisp White', hex: '#FFFFFF', note: 'Contrast' },
      { name: 'Warm Taupe', hex: '#948A7E', note: 'Harmonizer' },
      { name: 'Champagne Tan', hex: '#CBB296', note: 'Warmth' },
      { name: 'Deep Olive', hex: '#4B5244', note: 'Accent' }
    ],
    silhouettes: [
      { name: 'High-Low Contrast', desc: 'Blazer over casual tees' },
      { name: 'Straight Ankle Jean', desc: 'Clean wash denim' },
      { name: 'Boxy Tee', desc: 'Substantial heavyweight cotton' }
    ],
    occasions: [
      { name: 'Everyday Casual', percentage: 40 },
      { name: 'Smart Casual Work', percentage: 30 },
      { name: 'Social & Dining', percentage: 30 }
    ],
    essentials: [
      { name: 'Heavyweight Boxy Tee', category: 'Tops', status: 'Core' },
      { name: 'Raw Straight Denim', category: 'Bottoms', status: 'Core' },
      { name: 'Relaxed Wool Blazer', category: 'Outerwear', status: 'Core' },
      { name: 'Retro Leather Sneakers', category: 'Shoes', status: 'Core' },
      { name: 'Minimal Crossbody Bag', category: 'Accessories', status: 'Accent' }
    ],
    formulas: [
      {
        id: 'f-31',
        title: 'The Smart City Uniform',
        top: 'Heavyweight Boxy Tee',
        bottom: 'Raw Straight Denim',
        layer: 'Relaxed Wool Blazer',
        shoes: 'Retro Leather Sneakers',
        accessory: 'Minimal Crossbody Bag',
        tip: 'Wear an elevated tailored blazer over a crisp t-shirt for effortless poise.'
      }
    ],
    rules: [
      'Always include at least one tailored element in an otherwise casual outfit.',
      'Ensure denim has minimal distressing and a rich, uniform color wash.'
    ]
  }
};

const RecommendationsEngine = {
  getStoredProfile: function () {
    const saved = localStorage.getItem('editform_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (STYLE_PROFILES_DATA[parsed.id]) {
          return { ...STYLE_PROFILES_DATA[parsed.id], ...parsed };
        }
      } catch (e) {
        console.error('Error parsing saved profile', e);
      }
    }
    // Default profile is modern-minimal
    return STYLE_PROFILES_DATA['modern-minimal'];
  },

  saveProfile: function (profileId, customAnswers) {
    const base = STYLE_PROFILES_DATA[profileId] || STYLE_PROFILES_DATA['modern-minimal'];
    const merged = {
      ...base,
      customAnswers: customAnswers || {},
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('editform_profile', JSON.stringify(merged));
    window.dispatchEvent(new CustomEvent('styleProfileUpdated', { detail: merged }));
    return merged;
  },

  calculateArchetype: function (answers) {
    // answers: { look, color, fit, occasion, goal }
    let score = {
      'modern-minimal': 0,
      'architectural-classic': 0,
      'relaxed-neutral': 0,
      'elevated-casual': 0
    };

    // Look scoring
    if (answers.look === 'minimal') score['modern-minimal'] += 3;
    if (answers.look === 'classic') score['architectural-classic'] += 3;
    if (answers.look === 'relaxed') score['relaxed-neutral'] += 3;
    if (answers.look === 'statement' || answers.look === 'casual') score['elevated-casual'] += 3;

    // Fit scoring
    if (answers.fit === 'tailored') score['architectural-classic'] += 2;
    if (answers.fit === 'relaxed') score['relaxed-neutral'] += 2;
    if (answers.fit === 'balanced') score['modern-minimal'] += 2;
    if (answers.fit === 'oversized') score['elevated-casual'] += 2;

    // Goal scoring
    if (answers.goal === 'capsule' || answers.goal === 'simplify') score['modern-minimal'] += 2;
    if (answers.goal === 'elevate') score['architectural-classic'] += 2;
    if (answers.goal === 'essentials') score['relaxed-neutral'] += 2;
    if (answers.goal === 'experiment') score['elevated-casual'] += 2;

    let bestArchetype = 'modern-minimal';
    let maxVal = -1;
    for (const [arch, val] of Object.entries(score)) {
      if (val > maxVal) {
        maxVal = val;
        bestArchetype = arch;
      }
    }
    return bestArchetype;
  }
};

window.STYLE_PROFILES_DATA = STYLE_PROFILES_DATA;
window.RecommendationsEngine = RecommendationsEngine;
