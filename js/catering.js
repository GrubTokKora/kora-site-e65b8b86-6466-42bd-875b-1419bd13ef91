(function () {
  var events = ['Corporate', 'Birthday', 'Graduation', 'Weddings', 'Party'];

  function renderForm() {
    var eventOptions = '<option value="">...</option>' + events.map(function (e) {
      return '<option value="' + e + '">' + e + '</option>';
    }).join('');

    return (
      '<form id="catering-form" class="reserve-form" data-form-type="catering" novalidate>' +
        '<div class="form-row-2">' +
          '<div class="field">' +
            '<label class="field__label" for="contact-name">Full name</label>' +
            '<input class="field__input" id="contact-name" name="name" placeholder="Full Name" required>' +
          '</div>' +
          '<div class="field">' +
            '<label class="field__label" for="catering-phone">Phone</label>' +
            '<input class="field__input" id="catering-phone" name="phone" type="tel" placeholder="Phone">' +
          '</div>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="contact-email">E-mail</label>' +
          '<input class="field__input" id="contact-email" name="email" type="email" placeholder="E-mail" required>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="catering-size">Catering size</label>' +
          '<input class="field__input" id="catering-size" name="cateringSize" placeholder="Catering Size">' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="date-time">Date &amp; time</label>' +
          '<input class="field__input" id="date-time" name="dateTime" type="datetime-local">' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="event">Events</label>' +
          '<select class="field__input field__select" id="event" name="event">' + eventOptions + '</select>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="contact-message">Message</label>' +
          '<textarea class="field__textarea" id="contact-message" name="message" rows="4" placeholder="Tell us about your event" required></textarea>' +
        '</div>' +
        '<div class="g-recaptcha" data-sitekey=""></div>' +
        '<p class="form-status" hidden role="status" aria-live="polite"></p>' +
        '<button type="submit" class="btn btn-ink btn-lg btn-full btn-stamp">Submit</button>' +
      '</form>'
    );
  }

  function initCateringPage() {
    var contentEl = document.getElementById('catering-content');
    if (!contentEl) return;
    contentEl.innerHTML = renderForm();
    if (window.KORA_initForm) window.KORA_initForm(document.getElementById('catering-form'));
    if (window.NH44_bindStampButtons) window.NH44_bindStampButtons(contentEl);
  }

  document.addEventListener('DOMContentLoaded', initCateringPage);
})();
