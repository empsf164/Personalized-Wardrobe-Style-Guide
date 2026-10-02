/**
 * EDIT / FORM — DIGITAL WARDROBE MANAGER
 * Curated garment inventory, search/filtering, add/edit/delete, and localStorage persistence
 */

const DEFAULT_WARDROBE_ITEMS = [
  {
    id: 'w-1',
    name: 'Relaxed Silk Linen Shirt',
    category: 'tops',
    color: 'Ivory',
    colorHex: '#F6F3EC',
    season: 'All Seasons',
    occasion: 'Work',
    styleTag: 'Minimal',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
    notes: 'Fluid drape with subtle mother-of-pearl buttons'
  },
  {
    id: 'w-2',
    name: 'High-Waist Tailored Trousers',
    category: 'bottoms',
    color: 'Espresso',
    colorHex: '#25201E',
    season: 'Autumn / Winter',
    occasion: 'Work',
    styleTag: 'Tailored',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    notes: 'Straight leg cut with front pleats and side tabs'
  },
  {
    id: 'w-3',
    name: 'Double-Breasted Wool Blazer',
    category: 'outerwear',
    color: 'Oatmeal',
    colorHex: '#C5B7A5',
    season: 'Autumn / Winter',
    occasion: 'Work',
    styleTag: 'Classic',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
    notes: 'Structured shoulder with peak lapels'
  },
  {
    id: 'w-4',
    name: 'Cashmere Ribbed Knit Top',
    category: 'tops',
    color: 'Taupe',
    colorHex: '#8C8075',
    season: 'Winter / Spring',
    occasion: 'Weekend',
    styleTag: 'Minimal',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    notes: 'Soft brushed pure Mongolian cashmere'
  },
  {
    id: 'w-5',
    name: 'Point-Toe Leather Ankle Boots',
    category: 'shoes',
    color: 'Black',
    colorHex: '#11100F',
    season: 'Autumn / Winter',
    occasion: 'Dinner',
    styleTag: 'Modern',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    notes: 'Italian calfskin with sculptured kitten heel'
  },
  {
    id: 'w-6',
    name: 'Structured Leather Tote',
    category: 'accessories',
    color: 'Taupe',
    colorHex: '#6F6359',
    season: 'All Seasons',
    occasion: 'Work',
    styleTag: 'Minimal',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    notes: 'Clean geometric lines with interior magnetic clasp'
  },
  {
    id: 'w-7',
    name: 'Silk Bias-Cut Midi Slip Dress',
    category: 'dresses',
    color: 'Champagne',
    colorHex: '#D8BC94',
    season: 'Summer / Spring',
    occasion: 'Dinner',
    styleTag: 'Refined',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
    notes: 'Drapes gently along natural curves'
  },
  {
    id: 'w-8',
    name: 'Classic Minimalist Leather Sneakers',
    category: 'shoes',
    color: 'Ivory',
    colorHex: '#FAF7F0',
    season: 'All Seasons',
    occasion: 'Weekend',
    styleTag: 'Casual',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
    notes: 'Low profile stitched cupsole'
  },
  {
    id: 'w-9',
    name: 'Pleated Wide-Leg Linen Trousers',
    category: 'bottoms',
    color: 'Olive',
    colorHex: '#5A6351',
    season: 'Spring / Summer',
    occasion: 'Weekend',
    styleTag: 'Relaxed',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=800&auto=format&fit=crop',
    notes: 'Deep pleats and breathable washed linen'
  },
  {
    id: 'w-10',
    name: 'Draped Trench Coat',
    category: 'outerwear',
    color: 'Taupe',
    colorHex: '#A69E96',
    season: 'Spring / Autumn',
    occasion: 'Travel',
    styleTag: 'Classic',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    notes: 'Water-resistant storm flap with horn buttons'
  },
  {
    id: 'w-11',
    name: 'Sculptural Gold Knot Earrings',
    category: 'accessories',
    color: 'Gold',
    colorHex: '#D4AF37',
    season: 'All Seasons',
    occasion: 'Dinner',
    styleTag: 'Modern',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
    notes: '18k gold-plated architectural curve'
  },
  {
    id: 'w-12',
    name: 'Minimal Crewneck T-Shirt',
    category: 'tops',
    color: 'White',
    colorHex: '#FFFFFF',
    season: 'All Seasons',
    occasion: 'Everyday',
    styleTag: 'Minimal',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    notes: 'Heavyweight organic pima cotton'
  }
];

const WardrobeManager = {
  getItems: function () {
    const saved = localStorage.getItem('editform_wardrobe');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error reading wardrobe storage', e);
      }
    }
    // Initialize with defaults if empty
    this.saveItems(DEFAULT_WARDROBE_ITEMS);
    return DEFAULT_WARDROBE_ITEMS;
  },

  saveItems: function (items) {
    localStorage.setItem('editform_wardrobe', JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('wardrobeUpdated', { detail: items }));
  },

  addItem: function (itemData) {
    const items = this.getItems();
    const newItem = {
      id: 'w-' + Date.now(),
      name: itemData.name || 'Untitled Garment',
      category: itemData.category || 'tops',
      color: itemData.color || 'Ivory',
      colorHex: itemData.colorHex || '#F4F0E8',
      season: itemData.season || 'All Seasons',
      occasion: itemData.occasion || 'Everyday',
      styleTag: itemData.styleTag || 'Minimal',
      image: itemData.image || 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop',
      notes: itemData.notes || ''
    };
    items.unshift(newItem);
    this.saveItems(items);
    return newItem;
  },

  updateItem: function (id, updatedData) {
    const items = this.getItems();
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updatedData };
      this.saveItems(items);
      return items[index];
    }
    return null;
  },

  deleteItem: function (id) {
    let items = this.getItems();
    items = items.filter(i => i.id !== id);
    this.saveItems(items);
  },

  getItemById: function (id) {
    const items = this.getItems();
    return items.find(i => i.id === id) || null;
  },

  filterItems: function ({ category, search, color, season, occasion, styleTag }) {
    let items = this.getItems();

    if (category && category !== 'all') {
      items = items.filter(i => i.category.toLowerCase() === category.toLowerCase());
    }

    if (search && search.trim() !== '') {
      const q = search.toLowerCase().trim();
      items = items.filter(i => 
        i.name.toLowerCase().includes(q) ||
        i.color.toLowerCase().includes(q) ||
        i.styleTag.toLowerCase().includes(q) ||
        (i.notes && i.notes.toLowerCase().includes(q))
      );
    }

    if (color && color !== 'all') {
      items = items.filter(i => i.color.toLowerCase() === color.toLowerCase());
    }

    if (season && season !== 'all') {
      items = items.filter(i => i.season.toLowerCase().includes(season.toLowerCase()) || i.season === 'All Seasons');
    }

    if (occasion && occasion !== 'all') {
      items = items.filter(i => i.occasion.toLowerCase() === occasion.toLowerCase());
    }

    if (styleTag && styleTag !== 'all') {
      items = items.filter(i => i.styleTag.toLowerCase() === styleTag.toLowerCase());
    }

    return items;
  }
};

window.WardrobeManager = WardrobeManager;
