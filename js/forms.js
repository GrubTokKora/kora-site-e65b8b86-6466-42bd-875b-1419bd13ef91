(function () {
  var config = window.KORA_SITE_CONFIG || {};
  var apiBaseUrl = (config.apiBaseUrl || 'https://kora-agent.grubtok.com').replace(/\/+$/, '');
  var businessId = config.businessId || 'e65b8b86-6466-42bd-875b-1419bd13ef91';
  var recaptchaSiteKey = (config.recaptchaSiteKey || '').trim();
  var recaptchaLoadPromise = null;

  function setStatus(form, text, isError) {
    var statusEl = form.querySelector('.form-status');
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.hidden = !text;
    statusEl.classList.toggle('form-status--error', !!isError);
    statusEl.classList.toggle('form-status--success', !isError && !!text);
  }

  function setSubmittingState(form, isSubmitting) {
    var submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    if (isSubmitting) {
      submitBtn.dataset.originalText = submitBtn.textContent || 'Submit';
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    } else {
      submitBtn.textContent = submitBtn.dataset.originalText || 'Submit';
      submitBtn.disabled = false;
    }
  }

  function loadRecaptchaScript() {
    if (typeof grecaptcha !== 'undefined') return Promise.resolve();
    if (recaptchaLoadPromise) return recaptchaLoadPromise;
    recaptchaLoadPromise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      script.onload = function () { resolve(); };
      script.onerror = function () { reject(new Error('Failed to load reCAPTCHA')); };
      document.head.appendChild(script);
    });
    return recaptchaLoadPromise;
  }

  function ensureRecaptchaReady(form) {
    var recaptchaEl = form.querySelector('.g-recaptcha');
    if (!recaptchaEl) return Promise.resolve(true);
    if (!recaptchaSiteKey) return Promise.resolve(false);
    recaptchaEl.setAttribute('data-sitekey', recaptchaSiteKey);
    return loadRecaptchaScript().then(function () {
      return typeof grecaptcha !== 'undefined';
    }).catch(function () {
      return false;
    });
  }

  function getRecaptchaToken(form) {
    if (!recaptchaSiteKey || typeof grecaptcha === 'undefined') return '';
    if (!form.querySelector('.g-recaptcha')) return '';
    return grecaptcha.getResponse() || '';
  }

  function collectFormData(form) {
    var formData = new FormData(form);
    var result = {};
    formData.forEach(function (value, key) {
      if (key === 'g-recaptcha-response') return;
      result[key] = typeof value === 'string' ? value.trim() : value;
    });
    return result;
  }

  function validateForm(form, formType, data) {
    if (formType === 'catering') {
      if (!data.name || !data.email || !data.message) {
        setStatus(form, 'Please fill in your name, email, and message.', true);
        return false;
      }
      return true;
    }
    if (!data.name || !data.email || !data.message) {
      setStatus(form, 'Please fill in your name, email, and message.', true);
      return false;
    }
    return true;
  }

  function submitPublicForm(form) {
    var formType = form.dataset.formType || 'contact';
    var payloadData = collectFormData(form);
    var submitterEmail = payloadData.email || null;

    if (!validateForm(form, formType, payloadData)) return Promise.resolve();

    if (!recaptchaSiteKey) {
      setStatus(form, 'Our contact form is temporarily unavailable. Please call or email us directly.', true);
      return Promise.resolve();
    }

    return ensureRecaptchaReady(form).then(function (recaptchaReady) {
      if (!recaptchaReady) {
        setStatus(form, 'Security check loading—please try again.', true);
        return;
      }

      var captchaToken = getRecaptchaToken(form);
      if (!captchaToken) {
        setStatus(form, 'Please complete the reCAPTCHA.', true);
        return;
      }

      var payload = {
        business_id: businessId,
        form_type: formType,
        form_data: payloadData,
        submitter_email: submitterEmail,
        captcha_token: captchaToken,
      };

      setSubmittingState(form, true);
      setStatus(form, 'Sending...', false);

      return fetch(apiBaseUrl + '/api/v1/public/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).then(function (response) {
        if (!response.ok) throw new Error('Form submission failed');
        form.reset();
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        setStatus(form, 'Thank you! Your message has been received. We will be in touch shortly.', false);
      }).catch(function () {
        setStatus(form, 'Something went wrong. Please try again or call us directly.', true);
      }).finally(function () {
        setSubmittingState(form, false);
      });
    });
  }

  function initForm(form) {
    if (!form || form.dataset.koraFormBound === 'true') return;
    form.dataset.koraFormBound = 'true';

    var recaptchaEl = form.querySelector('.g-recaptcha');
    if (recaptchaEl && recaptchaSiteKey) {
      recaptchaEl.setAttribute('data-sitekey', recaptchaSiteKey);
    }

    if (!recaptchaSiteKey) {
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      setStatus(form, 'Our contact form is temporarily unavailable. Please call or email us directly.', true);
    } else {
      form.addEventListener('focusin', function warmRecaptcha() {
        if (recaptchaEl) ensureRecaptchaReady(form).catch(function () {});
      }, { once: true });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitPublicForm(form);
    });
  }

  window.KORA_initForm = initForm;

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-form-type]').forEach(initForm);
  });
})();
