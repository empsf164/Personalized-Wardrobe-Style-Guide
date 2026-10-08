/**
 * EDIT / FORM — INTERACTIVE STYLE QUIZ ENGINE
 * Multi-step visual discovery quiz with real-time profile synthesis and animated states
 */

const QUIZ_QUESTIONS = [
  {
    id: 'look',
    step: 1,
    title: 'Which look feels most like you?',
    subtitle: 'Select the visual aesthetic that naturally draws your attention.',
    options: [
      {
        value: 'minimal',
        label: 'Modern Minimal',
        desc: 'Clean lines, monochrome neutrals, uncluttered silhouettes.',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
      },
      {
        value: 'classic',
        label: 'Architectural Classic',
        desc: 'Sharp tailoring, structured outerwear, timeless heritage codes.',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop'
      },
      {
        value: 'relaxed',
        label: 'Relaxed Neutral',
        desc: 'Fluid linens, soft knits, organic drape and earthy undertones.',
        image: 'assets/images/quiz/archetype-relaxed.jpg'
      },
      {
        value: 'statement',
        label: 'Elevated Casual',
        desc: 'High-low pairings, structured blazers over denim, dynamic accents.',
        image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=600&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'color',
    step: 2,
    title: 'Which color palette do you wear most effortlessly?',
    subtitle: 'Your primary foundation tones determine outfit harmony.',
    options: [
      {
        value: 'monochrome',
        label: 'Monochrome Neutrals',
        desc: 'Pitch black, warm ivory, charcoal, and slate gray.',
        image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=600&auto=format&fit=crop'
      },
      {
        value: 'earth-warm',
        label: 'Warm Earth & Taupe',
        desc: 'Oatmeal, sand, rich espresso, caramel, and soft cream.',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop'
      },
      {
        value: 'stone-olive',
        label: 'Stone & Muted Olive',
        desc: 'Sage, deep olive, chalk white, and warm granite.',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop'
      },
      {
        value: 'sartorial-navy',
        label: 'Classic Navy & Camel',
        desc: 'Midnight navy, camel tan, crisp alabaster, and cognac.',
        image: 'assets/images/quiz/palette-navy-camel.jpg'
      }
    ]
  },
  {
    id: 'fit',
    step: 3,
    title: 'How do you prefer your garments to fit and drape?',
    subtitle: 'The relationship between garment geometry and movement.',
    options: [
      {
        value: 'balanced',
        label: 'Balanced & Clean',
        desc: 'Skims the body neatly without constriction; streamlined lines.',
        image: 'assets/images/quiz/fit-balanced.jpg'
      },
      {
        value: 'tailored',
        label: 'Tailored & Structured',
        desc: 'Crisp shoulders, defined waist, pressed creases and precision seams.',
        image: 'assets/images/quiz/fit-tailored.jpg'
      },
      {
        value: 'relaxed',
        label: 'Relaxed & Fluid',
        desc: 'Dropped shoulders, wide legs, comfortable ease and tactile soft volume.',
        image: 'assets/images/quiz/fit-relaxed.jpg'
      },
      {
        value: 'oversized',
        label: 'Architectural Volume',
        desc: 'Deliberate boxy proportions, cocoon coats and sculptural shapes.',
        image: 'assets/images/quiz/fit-oversized.jpg'
      }
    ]
  },
  {
    id: 'occasion',
    step: 4,
    title: 'Where do you dress for most frequently?',
    subtitle: 'Your lifestyle determines which wardrobe categories anchor your closet.',
    options: [
      {
        value: 'work',
        label: 'Executive & Creative Work',
        desc: 'Meetings, studio days, professional engagements and leadership.',
        image: 'assets/images/quiz/occ-work.jpg'
      },
      {
        value: 'casual',
        label: 'Everyday & Weekend',
        desc: 'Coffee runs, casual social gatherings, relaxed city exploration.',
        image: 'assets/images/inspiration/look-linen-sunday.jpg'
      },
      {
        value: 'dinner',
        label: 'Evening Dining & Culture',
        desc: 'Curated dinners, gallery openings, theater and intimate events.',
        image: 'assets/images/inspiration/look-midnight-silk.jpg'
      },
      {
        value: 'travel',
        label: 'Transit & Versatile Travel',
        desc: 'Packable capsule pieces, wrinkle-resistant fabrics and mobility.',
        image: 'assets/images/quiz/occ-travel.jpg'
      }
    ]
  },
  {
    id: 'goal',
    step: 5,
    title: 'What is your primary wardrobe goal right now?',
    subtitle: 'We refine your styling guide to support your exact aspiration.',
    options: [
      {
        value: 'capsule',
        label: 'Build a Curated Capsule',
        desc: 'Trim closet clutter down to versatile, high-utility essentials.',
        image: 'assets/images/quiz/goal-capsule.jpg'
      },
      {
        value: 'elevate',
        label: 'Elevate Daily Polish',
        desc: 'Make everyday outfits feel intentionally composed and refined.',
        image: 'assets/images/inspiration/look-city-layering.jpg'
      },
      {
        value: 'simplify',
        label: 'Reduce Decision Fatigue',
        desc: 'Establish go-to outfit formulas that look incredible in seconds.',
        image: 'assets/images/inspiration/look-cashmere-knit.jpg'
      },
      {
        value: 'essentials',
        label: 'Maximize Pieces I Own',
        desc: 'Unlock fresh combinations from existing clothes before buying more.',
        image: 'assets/images/outfits/outfit-workday.jpg'
      }
    ]
  }
];

class StyleQuizController {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentStep = 0;
    this.answers = {};
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.renderStep();
  }

  renderStep() {
    if (this.currentStep >= QUIZ_QUESTIONS.length) {
      this.renderResults();
      return;
    }

    const q = QUIZ_QUESTIONS[this.currentStep];
    const progressPercent = Math.round(((this.currentStep + 1) / QUIZ_QUESTIONS.length) * 100);
    const selectedVal = this.answers[q.id] || null;

    let optionsHtml = '';
    q.options.forEach(opt => {
      const isSelected = selectedVal === opt.value;
      optionsHtml += `
        <div class="quiz-option-card ${isSelected ? 'selected' : ''}" 
             data-value="${opt.value}" 
             tabindex="0" 
             role="button" 
             aria-pressed="${isSelected}"
             aria-label="${opt.label}">
          <div class="selected-check">✓</div>
          <img class="option-img" src="${opt.image}" alt="${opt.label}" loading="lazy" />
          <div class="option-content">
            <h4 class="option-label">${opt.label}</h4>
            <p class="option-desc">${opt.desc}</p>
          </div>
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="quiz-header">
        <div>
          <span class="eyebrow">Personal Style Setup</span>
          <span class="quiz-progress-text">Step 0${q.step} / 0${QUIZ_QUESTIONS.length}</span>
        </div>
        <span class="font-mono text-muted" style="font-size: 0.85rem;">${progressPercent}% Complete</span>
      </div>

      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <h2 class="quiz-question-title">${q.title}</h2>
      <p class="quiz-question-subtitle">${q.subtitle}</p>

      <div class="quiz-options-grid">
        ${optionsHtml}
      </div>

      <div class="quiz-footer">
        <button class="btn btn-secondary" id="quiz-back-btn" ${this.currentStep === 0 ? 'disabled style="opacity:0.4; pointer-events:none;"' : ''}>
          ← Previous
        </button>
        <button class="btn btn-primary" id="quiz-next-btn" ${!selectedVal ? 'disabled style="opacity:0.6;"' : ''}>
          ${this.currentStep === QUIZ_QUESTIONS.length - 1 ? 'Synthesize My Style Profile →' : 'Next Step →'}
        </button>
      </div>
    `;

    this.bindEvents(q.id);
  }

  bindEvents(questionId) {
    const cards = this.container.querySelectorAll('.quiz-option-card');
    const nextBtn = this.container.querySelector('#quiz-next-btn');
    const backBtn = this.container.querySelector('#quiz-back-btn');

    cards.forEach(card => {
      const selectCard = () => {
        cards.forEach(c => {
          c.classList.remove('selected');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('selected');
        card.setAttribute('aria-pressed', 'true');
        const val = card.getAttribute('data-value');
        this.answers[questionId] = val;
        if (nextBtn) {
          nextBtn.disabled = false;
          nextBtn.style.opacity = '1';
        }
      };

      card.addEventListener('click', selectCard);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCard();
        }
      });
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (!this.answers[questionId]) {
          if (window.showToast) window.showToast('Please select an option to continue', 'info');
          return;
        }
        this.currentStep++;
        this.renderStep();
        window.scrollTo({ top: this.container.offsetTop - 100, behavior: 'smooth' });
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.renderStep();
        }
      });
    }
  }

  renderResults() {
    const archetypeId = window.RecommendationsEngine 
      ? window.RecommendationsEngine.calculateArchetype(this.answers)
      : 'modern-minimal';

    const profile = window.RecommendationsEngine 
      ? window.RecommendationsEngine.saveProfile(archetypeId, this.answers)
      : window.STYLE_PROFILES_DATA['modern-minimal'];

    let paletteSwatches = '';
    profile.palette.forEach(c => {
      paletteSwatches += `
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.5rem;">
          <span style="width:24px; height:24px; border-radius:50%; background-color:${c.hex}; border:1px solid rgba(0,0,0,0.1); display:inline-block;"></span>
          <span style="font-size:0.85rem; font-weight:500;">${c.name}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">(${c.note})</span>
        </div>
      `;
    });

    let silList = '';
    profile.silhouettes.forEach(s => {
      silList += `
        <div style="margin-bottom:0.6rem;">
          <strong style="font-size:0.9rem; display:block;">${s.name}</strong>
          <span style="font-size:0.8rem; color:var(--text-muted);">${s.desc}</span>
        </div>
      `;
    });

    let essentialsList = '';
    profile.essentials.slice(0, 4).forEach(e => {
      essentialsList += `
        <div style="margin-bottom:0.5rem; font-size:0.85rem; display:flex; align-items:center; gap:0.4rem;">
          <span style="color:var(--accent-gold);">✦</span>
          <strong>${e.name}</strong>
          <span style="color:var(--text-muted); font-size:0.75rem;">· ${e.category}</span>
        </div>
      `;
    });

    this.container.innerHTML = `
      <div class="quiz-result-card">
        <span class="eyebrow">Your Style Profile Generated</span>
        <h2 class="quiz-result-identity">${profile.name}</h2>
        <p class="text-lead" style="max-width: 680px; margin: 0 auto 1.5rem;">${profile.tagline}</p>
        <p style="max-width: 640px; margin: 0 auto 2rem; color: var(--text-secondary);">${profile.description}</p>

        <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
          ${profile.traits.map(t => `<span class="badge badge-gold">${t}</span>`).join('')}
        </div>

        <div class="quiz-result-grid">
          <div>
            <h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
              Preferred Color Palette
            </h4>
            ${paletteSwatches}
          </div>

          <div>
            <h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
              Key Silhouettes
            </h4>
            ${silList}
          </div>

          <div>
            <h4 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
              Wardrobe Essentials
            </h4>
            ${essentialsList}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="style-profile.html" class="btn btn-primary btn-lg">View Full Style Profile →</a>
          <a href="wardrobe.html" class="btn btn-secondary btn-lg">Build My Wardrobe</a>
          <a href="style-guide.html" class="btn btn-accent btn-lg">View Style Guide</a>
        </div>
      </div>
    `;

    if (window.showToast) {
      window.showToast(`Style identity synthesized: ${profile.name}!`, 'success');
    }
  }
}

window.StyleQuizController = StyleQuizController;
