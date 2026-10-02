/**
 * EDIT / FORM — PRIMARY APPLICATION LOGIC
 * Navigation, mobile drawer, modals, toast system & micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Header Sticky & Scroll Effect
  // --------------------------------------------------------------------------
  const header = document.querySelector('.header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation & Accessibility
  // --------------------------------------------------------------------------
  const hamburger = document.querySelector('.hamburger');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileCloseBtn = document.querySelector('#mobile-close-btn');

  function openMobileNav() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('is-open');
      mobileBackdrop.classList.add('is-open');
      if (hamburger) hamburger.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMobileNav() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('is-open');
      mobileBackdrop.classList.remove('is-open');
      if (hamburger) hamburger.classList.remove('is-active');
      document.body.style.overflow = '';
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileNav);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  // Nested dropdowns in mobile menu
  const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
  mobileDropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const submenu = btn.nextElementSibling;
      if (submenu && submenu.classList.contains('mobile-submenu')) {
        submenu.classList.toggle('is-open');
        const icon = btn.querySelector('svg');
        if (icon) {
          icon.style.transform = submenu.classList.contains('is-open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    });
  });

  // ESC key closes drawer & modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileNav();
      document.querySelectorAll('.modal-backdrop.is-open').forEach(modal => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  });

  // --------------------------------------------------------------------------
  // 3. Highlight Active Navigation Link
  // --------------------------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --------------------------------------------------------------------------
  // 4. Modal Management System
  // --------------------------------------------------------------------------
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const firstInput = modal.querySelector('input, button, select');
      if (firstInput) firstInput.focus();
    }
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  // Close modals on backdrop click or close button
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  });

  // --------------------------------------------------------------------------
  // 5. Toast Notification System
  // --------------------------------------------------------------------------
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  window.showToast = function (message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      iconSvg = `
        <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A6351" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    } else if (type === 'warning' || type === 'error') {
      iconSvg = `
        <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#991B1B" stroke-width="2">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div style="flex-grow: 1;">${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Trigger reveal
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.6s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, 3600);
  };

  // --------------------------------------------------------------------------
  // 6. Copy Color Hex Helper
  // --------------------------------------------------------------------------
  window.copyToClipboard = function (text, label = 'Hex code') {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        window.showToast(`${label} ${text} copied to clipboard!`, 'success');
      }).catch(() => {
        window.showToast(`Selected: ${text}`, 'info');
      });
    } else {
      window.showToast(`Selected: ${text}`, 'info');
    }
  };

  // --------------------------------------------------------------------------
  // 7. General Interactive Form Handler
  // --------------------------------------------------------------------------
  document.querySelectorAll('form[data-ajax="mock"]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const actionName = form.getAttribute('data-success-msg') || 'Information submitted successfully';
      window.showToast(actionName, 'success');
      form.reset();
    });
  });
});
