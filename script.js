/**
 * Vibrant Flower Shop - Interactive behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initQuantitySelector();
  initSignupModal();
});

function initSignupModal() {
  const modal = document.getElementById('signup-modal');
  const signupBtn = document.querySelector('.js-signup-btn');
  const closeTriggers = document.querySelectorAll('.js-modal-close');
  const form = modal?.querySelector('.modal__form');

  if (!modal || !signupBtn) return;

  const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusables() {
    return Array.from(modal.querySelectorAll(focusableSelector)).filter((el) => {
      return el.offsetParent !== null && !el.hasAttribute('aria-hidden');
    });
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusables = getFocusables();
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  let previousActiveElement = null;

  function openModal() {
    previousActiveElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modal.querySelector('#signup-email');
    if (firstInput) {
      firstInput.focus();
    }
    modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modal.removeEventListener('keydown', trapFocus);
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  signupBtn.addEventListener('click', openModal);

  closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', closeModal);
  });

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = validateSignupForm(form);
    if (isValid) closeModal();
  });

  // Validate email on blur
  const emailInput = form?.querySelector('#signup-email');
  const passwordInput = form?.querySelector('#signup-password');
  emailInput?.addEventListener('blur', () => validateEmailField(emailInput));
  emailInput?.addEventListener('input', () => clearFieldError(emailInput));
  passwordInput?.addEventListener('input', () => clearFieldError(passwordInput));
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setFieldError(input, message) {
  const field = input.closest('.modal__field');
  const errorEl = field?.querySelector('.modal__error-message');
  if (field && errorEl) {
    field.classList.add('modal__field--error');
    errorEl.textContent = message;
  }
}

function clearFieldError(input) {
  const field = input.closest('.modal__field');
  const errorEl = field?.querySelector('.modal__error-message');
  if (field && errorEl) {
    field.classList.remove('modal__field--error');
    errorEl.textContent = '';
  }
}

function validateEmailField(input) {
  const value = input.value.trim();
  if (value && !isValidEmail(value)) {
    setFieldError(input, 'Please enter a valid email address');
    return false;
  }
  clearFieldError(input);
  return true;
}

function validateSignupForm(form) {
  const emailInput = form.querySelector('#signup-email');
  const passwordInput = form.querySelector('#signup-password');
  let valid = true;

  clearFieldError(emailInput);
  clearFieldError(passwordInput);

  if (!emailInput.value.trim()) {
    setFieldError(emailInput, 'This is an error message');
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setFieldError(emailInput, 'Please enter a valid email address');
    valid = false;
  }

  if (!passwordInput.value) {
    setFieldError(passwordInput, 'This is an error message');
    valid = false;
  }

  return valid;
}

function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const thumbnails = document.querySelectorAll('.carousel__thumb');
  const mainImage = document.querySelector('.carousel__image');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  const nextBtn = document.querySelector('.carousel__btn--next');
  const liveEl = document.querySelector('.carousel__live');

  const images = [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&h=700&fit=crop'
  ];

  const total = images.length;
  let currentIndex = 0;

  function setActiveImage(index) {
    currentIndex = (index + images.length) % images.length;
    if (mainImage) {
      mainImage.src = images[currentIndex];
      mainImage.alt = `Rainbow Galaxy bouquet - vibrant red roses, purple chrysanthemums and eucalyptus in ribbed vase. Image ${currentIndex + 1} of ${total}.`;
    }
    thumbnails.forEach((thumb, i) => {
      const isActive = i === currentIndex;
      thumb.classList.toggle('carousel__thumb--active', isActive);
      thumb.setAttribute('aria-selected', isActive);
    });
    if (liveEl) {
      liveEl.textContent = `Image ${currentIndex + 1} of ${total}`;
    }
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => setActiveImage(index));
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => setActiveImage(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => setActiveImage(currentIndex + 1));
  }

  if (carousel) {
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveImage(currentIndex - 1);
        thumbnails[currentIndex]?.focus();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveImage(currentIndex + 1);
        thumbnails[currentIndex]?.focus();
      }
    });
  }

  if (liveEl) {
    liveEl.textContent = `Image 1 of ${total}`;
  }
}

function initQuantitySelector() {
  const input = document.querySelector('.quantity-selector__input');
  const decreaseBtn = document.querySelector('.quantity-selector__btn:first-of-type');
  const increaseBtn = document.querySelector('.quantity-selector__btn:last-of-type');

  if (!input || !decreaseBtn || !increaseBtn) return;

  function updateQuantity(delta) {
    let value = parseInt(input.value, 10) || 1;
    value = Math.max(1, Math.min(99, value + delta));
    input.value = value;
  }

  decreaseBtn.addEventListener('click', () => updateQuantity(-1));
  increaseBtn.addEventListener('click', () => updateQuantity(1));

  input.addEventListener('change', () => {
    let value = parseInt(input.value, 10);
    if (isNaN(value) || value < 1) input.value = 1;
    else if (value > 99) input.value = 99;
  });
}
