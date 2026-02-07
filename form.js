document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('order-form');
  const steps = document.querySelectorAll('.form__step');
  const stepperItems = document.querySelectorAll('.stepper__item');
  let currentStep = 1;

  // Navigation buttons
  document.querySelectorAll('.js-next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        goToStep(parseInt(btn.dataset.next, 10));
      }
    });
  });

  document.querySelectorAll('.js-prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(parseInt(btn.dataset.prev, 10));
    });
  });

  // Clear errors on input
  form.addEventListener('input', (e) => {
    const field = e.target.closest('.form__field');
    if (field && field.classList.contains('form__field--error')) {
      clearFieldError(field);
    }
  });

  form.addEventListener('change', (e) => {
    const field = e.target.closest('.form__field');
    if (field && field.classList.contains('form__field--error')) {
      clearFieldError(field);
    }
  });

  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      alert('Order placed successfully! Thank you for your purchase.');
      form.reset();
      goToStep(1);
    }
  });

  function goToStep(step) {
    // Hide all steps
    steps.forEach(s => s.classList.remove('form__step--active'));
    stepperItems.forEach(item => {
      item.classList.remove('stepper__item--active');
      item.removeAttribute('aria-current');
    });

    // Mark completed steps
    stepperItems.forEach((item, i) => {
      if (i + 1 < step) {
        item.classList.add('stepper__item--completed');
      } else {
        item.classList.remove('stepper__item--completed');
      }
    });

    // Show target step
    const targetStep = document.getElementById(`step-${step}`);
    targetStep.classList.add('form__step--active');
    stepperItems[step - 1].classList.add('stepper__item--active');
    stepperItems[step - 1].setAttribute('aria-current', 'step');

    currentStep = step;

    // Populate summary on step 3
    if (step === 3) {
      populateSummary();
    }

    // Scroll to top of form
    document.querySelector('.form-page__header').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validateStep(step) {
    let isValid = true;
    let firstError = null;

    if (step === 1) {
      isValid = validateRequired('full-name', 'Full name is required') && isValid;
      isValid = validateEmail('email') && isValid;
      isValid = validateRequired('phone', 'Phone number is required') && isValid;
      isValid = validateRequired('address', 'Delivery address is required') && isValid;

      if (!isValid) {
        firstError = document.querySelector('#step-1 .form__field--error');
      }
    }

    if (step === 2) {
      isValid = validateSelect('bouquet-type', 'Please select a bouquet') && isValid;
      isValid = validateRadio('delivery-time', 'Please select a delivery time') && isValid;

      if (!isValid) {
        firstError = document.querySelector('#step-2 .form__field--error');
      }
    }

    if (step === 3) {
      const termsCheckbox = form.querySelector('input[name="terms"]');
      const termsField = termsCheckbox.closest('.form__field') || termsCheckbox.closest('.form__checkbox').parentElement;
      const termsError = document.getElementById('terms-error');

      if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms';
        isValid = false;
        firstError = termsCheckbox;
      } else {
        termsError.textContent = '';
      }
    }

    if (firstError) {
      const focusTarget = firstError.querySelector('input, textarea, select') || firstError;
      focusTarget.focus();
    }

    return isValid;
  }

  function validateRequired(id, message) {
    const input = document.getElementById(id);
    const field = input.closest('.form__field');
    const errorEl = document.getElementById(`${id}-error`);

    if (!input.value.trim()) {
      field.classList.add('form__field--error');
      errorEl.textContent = message;
      return false;
    }

    clearFieldError(field);
    return true;
  }

  function validateEmail(id) {
    const input = document.getElementById(id);
    const field = input.closest('.form__field');
    const errorEl = document.getElementById(`${id}-error`);

    if (!input.value.trim()) {
      field.classList.add('form__field--error');
      errorEl.textContent = 'Email address is required';
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      field.classList.add('form__field--error');
      errorEl.textContent = 'Please enter a valid email address';
      return false;
    }

    clearFieldError(field);
    return true;
  }

  function validateSelect(id, message) {
    const select = document.getElementById(id);
    const field = select.closest('.form__field');
    const errorEl = document.getElementById(`${id}-error`);

    if (!select.value) {
      field.classList.add('form__field--error');
      errorEl.textContent = message;
      return false;
    }

    clearFieldError(field);
    return true;
  }

  function validateRadio(name, message) {
    const radios = form.querySelectorAll(`input[name="${name}"]`);
    const field = radios[0].closest('.form__field');
    const errorEl = document.getElementById(`${name.replace('-time', '')}-error`);
    const checked = form.querySelector(`input[name="${name}"]:checked`);

    if (!checked) {
      field.classList.add('form__field--error');
      errorEl.textContent = message;
      return false;
    }

    clearFieldError(field);
    return true;
  }

  function clearFieldError(field) {
    field.classList.remove('form__field--error');
    const errorEl = field.querySelector('.form__error');
    if (errorEl) {
      errorEl.textContent = '';
    }
  }

  function populateSummary() {
    const summary = document.getElementById('order-summary');
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const bouquetSelect = document.getElementById('bouquet-type');
    const bouquet = bouquetSelect.options[bouquetSelect.selectedIndex]?.text || '—';
    const delivery = form.querySelector('input[name="delivery-time"]:checked');
    const deliveryLabel = delivery ? delivery.parentElement.textContent.trim() : '—';
    const extras = Array.from(form.querySelectorAll('input[name="extras"]:checked'))
      .map(cb => cb.parentElement.textContent.trim());
    const giftMessage = document.getElementById('gift-message').value;

    summary.innerHTML = `
      <div class="form__summary-section">
        <h3 class="form__summary-title">Your Details</h3>
        <div class="form__summary-row">
          <span class="form__summary-label">Name</span>
          <span class="form__summary-value">${escapeHtml(name)}</span>
        </div>
        <div class="form__summary-row">
          <span class="form__summary-label">Email</span>
          <span class="form__summary-value">${escapeHtml(email)}</span>
        </div>
        <div class="form__summary-row">
          <span class="form__summary-label">Phone</span>
          <span class="form__summary-value">${escapeHtml(phone)}</span>
        </div>
        <div class="form__summary-row">
          <span class="form__summary-label">Address</span>
          <span class="form__summary-value">${escapeHtml(address)}</span>
        </div>
      </div>
      <div class="form__summary-section">
        <h3 class="form__summary-title">Order</h3>
        <div class="form__summary-row">
          <span class="form__summary-label">Bouquet</span>
          <span class="form__summary-value">${escapeHtml(bouquet)}</span>
        </div>
        <div class="form__summary-row">
          <span class="form__summary-label">Delivery</span>
          <span class="form__summary-value">${escapeHtml(deliveryLabel)}</span>
        </div>
        ${extras.length > 0 ? `
        <div class="form__summary-row">
          <span class="form__summary-label">Extras</span>
          <span class="form__summary-value">${extras.map(e => escapeHtml(e)).join('<br>')}</span>
        </div>` : ''}
        ${giftMessage ? `
        <div class="form__summary-row">
          <span class="form__summary-label">Gift message</span>
          <span class="form__summary-value">${escapeHtml(giftMessage)}</span>
        </div>` : ''}
      </div>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
