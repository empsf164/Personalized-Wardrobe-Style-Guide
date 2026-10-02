/**
 * EDIT / FORM — INTERACTIVE OUTFIT BUILDER & PLANNER
 * Dynamic visual slot assembly, shuffle generator, preset looks & localStorage saving
 */

const PRESET_OUTFITS = [
  {
    id: 'outfit-101',
    title: 'Look 01: The Structured Minimalist',
    style: 'Modern Minimal',
    occasion: 'Work',
    topId: 'w-1',
    bottomId: 'w-2',
    layerId: 'w-3',
    shoesId: 'w-5',
    accessoryId: 'w-6',
    items: ['Relaxed Silk Linen Shirt', 'High-Waist Tailored Trousers', 'Double-Breasted Wool Blazer', 'Point-Toe Leather Ankle Boots'],
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'
    ],
    notes: 'An intentional monochromatic base framed with an architectural oatmeal blazer.'
  },
  {
    id: 'outfit-102',
    title: 'Look 02: Relaxed Weekend Tailoring',
    style: 'Relaxed Neutral',
    occasion: 'Weekend',
    topId: 'w-4',
    bottomId: 'w-9',
    layerId: 'w-10',
    shoesId: 'w-8',
    accessoryId: 'w-6',
    items: ['Cashmere Ribbed Knit Top', 'Pleated Wide-Leg Linen Trousers', 'Draped Trench Coat', 'Minimalist Leather Sneakers'],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'
    ],
    notes: 'Tactile cashmere meets washed olive linen for effortless Sunday refinement.'
  },
  {
    id: 'outfit-103',
    title: 'Look 03: Evening Silk Drape',
    style: 'Modern Minimal',
    occasion: 'Dinner',
    topId: 'w-7',
    bottomId: 'w-7',
    layerId: 'w-3',
    shoesId: 'w-5',
    accessoryId: 'w-11',
    items: ['Silk Bias-Cut Midi Slip Dress', 'Double-Breasted Wool Blazer', 'Point-Toe Leather Ankle Boots', 'Sculptural Gold Knot Earrings'],
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop'
    ],
    notes: 'Sensual champagne silk grounded with masculine wool proportions.'
  },
  {
    id: 'outfit-104',
    title: 'Look 04: The Editorial City Transit',
    style: 'Elevated Casual',
    occasion: 'Travel',
    topId: 'w-12',
    bottomId: 'w-2',
    layerId: 'w-10',
    shoesId: 'w-8',
    accessoryId: 'w-6',
    items: ['Minimal Crewneck T-Shirt', 'High-Waist Tailored Trousers', 'Draped Trench Coat', 'Minimalist Leather Sneakers'],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop'
    ],
    notes: 'Comfortable yet sharp for flights, trains and urban navigation.'
  }
];

const OutfitBuilder = {
  currentSlots: {
    top: null,
    bottom: null,
    shoes: null,
    accessory: null,
    layer: null
  },

  getSavedOutfits: function () {
    const saved = localStorage.getItem('editform_saved_outfits');
    let list = PRESET_OUTFITS;
    if (saved) {
      try {
        list = JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved outfits', e);
      }
    }
    return list.map(outfit => ({
      ...outfit,
      items: (outfit.items || []).filter(it => it !== 'Structured Leather Tote')
    }));
  },

  saveOutfitsList: function (list) {
    localStorage.setItem('editform_saved_outfits', JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('outfitsUpdated', { detail: list }));
  },

  setSlotItem: function (slotName, item) {
    this.currentSlots[slotName] = item;
    this.renderCanvas();
  },

  clearSlot: function (slotName) {
    this.currentSlots[slotName] = null;
    this.renderCanvas();
  },

  clearAllSlots: function () {
    this.currentSlots = {
      top: null,
      bottom: null,
      shoes: null,
      accessory: null,
      layer: null
    };
    this.renderCanvas();
  },

  shuffleOutfit: function () {
    const wardrobe = window.WardrobeManager ? window.WardrobeManager.getItems() : [];
    if (!wardrobe || wardrobe.length === 0) return;

    const tops = wardrobe.filter(i => i.category === 'tops');
    const bottoms = wardrobe.filter(i => i.category === 'bottoms');
    const shoes = wardrobe.filter(i => i.category === 'shoes');
    const accessories = wardrobe.filter(i => i.category === 'accessories');
    const outerwear = wardrobe.filter(i => i.category === 'outerwear');

    if (tops.length) this.currentSlots.top = tops[Math.floor(Math.random() * tops.length)];
    if (bottoms.length) this.currentSlots.bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    if (shoes.length) this.currentSlots.shoes = shoes[Math.floor(Math.random() * shoes.length)];
    if (accessories.length) this.currentSlots.accessory = accessories[Math.floor(Math.random() * accessories.length)];
    if (outerwear.length) this.currentSlots.layer = outerwear[Math.floor(Math.random() * outerwear.length)];

    this.renderCanvas();
    if (window.showToast) {
      window.showToast('Outfit randomized with harmonized proportions', 'info');
    }
  },

  saveCurrentOutfit: function (name, occasion) {
    const filledItems = Object.values(this.currentSlots).filter(Boolean);
    if (filledItems.length < 2) {
      if (window.showToast) window.showToast('Select at least 2 items to save an outfit formula', 'warning');
      return null;
    }

    const savedList = this.getSavedOutfits();
    const newOutfit = {
      id: 'outfit-' + Date.now(),
      title: name || `Look ${savedList.length + 1}: Custom Curation`,
      style: 'Personal Curation',
      occasion: occasion || 'Everyday',
      topId: this.currentSlots.top ? this.currentSlots.top.id : null,
      bottomId: this.currentSlots.bottom ? this.currentSlots.bottom.id : null,
      layerId: this.currentSlots.layer ? this.currentSlots.layer.id : null,
      shoesId: this.currentSlots.shoes ? this.currentSlots.shoes.id : null,
      accessoryId: this.currentSlots.accessory ? this.currentSlots.accessory.id : null,
      items: filledItems.map(i => i.name),
      images: filledItems.map(i => i.image),
      notes: 'Custom curated outfit formula saved to your personal style archive.'
    };

    savedList.unshift(newOutfit);
    this.saveOutfitsList(savedList);
    return newOutfit;
  },

  deleteSavedOutfit: function (id) {
    let savedList = this.getSavedOutfits();
    savedList = savedList.filter(o => o.id !== id);
    this.saveOutfitsList(savedList);
  },

  renderCanvas: function () {
    const slots = ['top', 'bottom', 'shoes', 'accessory'];
    slots.forEach(slotKey => {
      const slotEl = document.getElementById(`slot-${slotKey}`);
      if (!slotEl) return;

      const item = this.currentSlots[slotKey];
      if (item) {
        slotEl.className = 'outfit-slot filled';
        slotEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="slot-overlay">
            <span class="slot-label">${slotKey} · ${item.color}</span>
            <strong style="font-size: 0.95rem;">${item.name}</strong>
            <button class="btn btn-sm btn-ghost" style="color: #fff; padding: 0.2rem 0; text-decoration: underline;" onclick="OutfitBuilder.clearSlot('${slotKey}')">Remove</button>
          </div>
        `;
      } else {
        slotEl.className = 'outfit-slot';
        slotEl.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <span class="slot-label">Select ${slotKey}</span>
        `;
      }
    });

    // Optional layer slot if exists in DOM
    const layerEl = document.getElementById('slot-layer');
    if (layerEl) {
      const item = this.currentSlots.layer;
      if (item) {
        layerEl.className = 'outfit-slot filled';
        layerEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="slot-overlay">
            <span class="slot-label">Outerwear · ${item.color}</span>
            <strong style="font-size: 0.95rem;">${item.name}</strong>
            <button class="btn btn-sm btn-ghost" style="color: #fff; padding: 0.2rem 0;" onclick="OutfitBuilder.clearSlot('layer')">Remove</button>
          </div>
        `;
      } else {
        layerEl.className = 'outfit-slot';
        layerEl.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          <span class="slot-label">Select Outerwear (Optional)</span>
        `;
      }
    }
  }
};

window.OutfitBuilder = OutfitBuilder;
window.PRESET_OUTFITS = PRESET_OUTFITS;
