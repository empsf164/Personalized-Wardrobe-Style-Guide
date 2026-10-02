# EDIT / FORM — Personalized Wardrobe & Style Guide Web Application

> **Your Wardrobe. Your Style. Refined.**

**EDIT / FORM** is a luxury, production-grade personalized styling and wardrobe refinement web application. Designed around the aesthetic intersection of **Luxury Personal Styling + Modern Digital Wardrobe App + Editorial Fashion Magazine**, it replaces chaotic ecommerce trends with an intentional, wardrobe-first approach to daily dressing.

---

## ✦ Core Features & Experience Architecture

1. **Interactive Personal Style Quiz (`style-quiz.html`)**
   - 5 visual selection steps (Aesthetic Looks, Color Palettes, Fit & Silhouette, Occasions, Wardrobe Goals).
   - Real-time synthesis into style archetypes (*Modern Minimal*, *Architectural Classic*, *Relaxed Neutral*, *Elevated Casual*).
   - Instant local storage synchronization.

2. **Personal Style Profile (`style-profile.html`)**
   - Central visual identity displaying active archetype, style traits, and proportion metrics.
   - Interactive harmonized color palette with one-click HEX clipboard copying.
   - Recommended silhouette guidelines and occasion percentage split bars.
   - Interactive style goals checklist with local persistence.
   - "Refine My Profile" modal for direct archetype switching.

3. **Digital Wardrobe Manager (`wardrobe.html`)**
   - Curated inventory of garments across Tops, Bottoms, Dresses, Outerwear, Shoes, and Accessories.
   - Instant search by title, color, style tags, and styling notes.
   - Multi-attribute filtering (Category, Color Family, Occasion, Style Tag).
   - Interactive "+ Add New Item" modal with photo presets and custom tag inputs.
   - Delete/edit actions and quick "Use in Outfit" trigger.

4. **Visual Outfit Builder & Ideas Repository (`outfits.html`)**
   - Live visual composition canvas with dedicated slots for Top, Bottom, Shoes, Accessory, and Outerwear.
   - Slot picker drawer allowing users to pull items directly from their wardrobe.
   - Intelligent "Harmonized Shuffle" randomizer respecting color balance.
   - "Save Look" functionality with custom titles and occasion tags.
   - Filterable Outfit Ideas library (Work, Weekend, Dinner, Travel).

5. **Personalized Style Guide Dossier (`style-guide.html`)**
   - Curated personal styling dossier containing active color swatches, silhouette cuts, and core essentials checklist.
   - 4 signature outfit formula recipes with visual breakdowns.
   - Personalized styling rules (proportions, texture mixing, color anchoring).
   - Dedicated print stylesheet (`@media print`) and PDF save action.

6. **Editorial Lookbook Inspiration (`inspiration.html`)**
   - Large-format editorial lookbook filterable by aesthetic and occasion.
   - Direct "Use This Look" action mapping reference items into the outfit builder.

7. **Brand & Support Suite (`about.html`, `contact.html`, `login.html`, `signup.html`, `forgot-password.html`, `404.html`, `coming-soon.html`)**
   - Wardrobe-first philosophy, personal styling methodology, and sustainable thinking.
   - Split-screen editorial authentication pages.
   - Toast notification feedback system and accessible mobile navigation drawer.

---

## ✦ Design System & Color Palette

### Light Mode
- **Warm Ivory / Alabaster Base:** `#FBF9F5` / `#F6F3EC`
- **Espresso Charcoal Text:** `#1C1917`
- **Soft Champagne Accent:** `#C5A880`
- **Muted Olive Accent:** `#5A6351`
- **Oatmeal / Warm Taupe:** `#8C8075` / `#A89E93`

### Dark Mode
- **Deep Espresso Charcoal Base:** `#11100F`
- **Rich Dark Surface:** `#181715` / `#22201D`
- **Warm Ivory Text:** `#F7F4EE`
- **Illuminated Champagne Accent:** `#D8BC94`
- **Muted Olive:** `#7B8770`

### Typography
- **Editorial Headlines:** `DM Serif Display`
- **Primary Interface & Body:** `Manrope`
- **Accents & Metadata:** `Space Grotesk`

---

## ✦ File Structure

```text
/
├── index.html                  # Editorial Hero, How It Works, Quiz Preview, Wardrobe Showcase
├── style-profile.html          # Style Identity, Palette Swatches, Silhouettes, Goals
├── style-quiz.html             # Multi-step Interactive Visual Style Quiz
├── wardrobe.html               # Digital Wardrobe Inventory, Search, Filters, Add Modal
├── outfits.html                # Interactive Outfit Builder Canvas & Ideas Library
├── style-guide.html            # Personalized Style Dossier & Print Export
├── inspiration.html            # Editorial Inspiration Lookbook with Outfit Preloads
├── about.html                  # Philosophy, Wardrobe-first Styling Approach
├── contact.html                # Stylist Inquiry Form & Office Information
├── login.html                  # Split-Screen Editorial Login
├── signup.html                 # Split-Screen Editorial Registration
├── forgot-password.html        # Password Recovery Experience
├── 404.html                    # Editorial 404 Error Page
├── coming-soon.html            # VIP 1-on-1 Stylist Consultations Waitlist
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core Layout, Components, Typography, Modals, Toasts
│   │   ├── theme.css           # Light & Dark Mode Tokens, Palette Variables
│   │   └── responsive.css      # Viewport Breakpoints (320px up to 1920px+)
│   │
│   └── js/
│       ├── theme.js            # Theme Toggle, OS Preference Listener & LocalStorage
│       ├── recommendations.js  # Style Archetype Data & Profile Calculation Logic
│       ├── style-quiz.js       # 5-Step Quiz Engine & Result Generator
│       ├── wardrobe.js         # Digital Wardrobe CRUD & Filter Engine
│       ├── outfit-builder.js   # Live Slot Builder Canvas & Shuffle Generator
│       └── main.js             # Global Navigation, Drawer, Modals, Toasts, Clipboard
│
└── README.md                   # Application Documentation
```

---

## ✦ Quality Assurance & Browser Testing

- **Strict Product Boundaries**: No generic ecommerce, no shopping cart, no checkout, no generic dashboard, no admin panel.
- **Responsive Viewport Support**: Thoroughly optimized from 320px mobile screens through 2560px ultra-wide displays.
- **Theme Persistence**: Light and Dark mode states persist across all page visits via `localStorage`.
- **Keyboard Navigation & Accessibility**: Semantic elements, focus outlines, ARIA roles, and ESC key handlers for modals and drawers.
- **Export & Print Ready**: `style-guide.html` features a dedicated print stylesheet for clean physical printing or PDF generation.

---

© 2026 EDIT / FORM. All rights reserved.
