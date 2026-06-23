(function () {
  var positions = ['Server', 'Host', 'Bartender', 'Kitchen staff', 'Dishwasher', 'Manager', 'Other'];

  function renderForm() {
    var positionOptions = '<option value="">...</option>' + positions.map(function (position) {
      return '<option value="' + position + '">' + position + '</option>';
    }).join('');

    return (
      '<form id="hiring-form" class="reserve-form" data-form-type="hiring" novalidate>' +
        '<div class="form-row-2">' +
          '<div class="field">' +
            '<label class="field__label" for="hiring-name">Full name</label>' +
            '<input class="field__input" id="hiring-name" name="name" placeholder="Full Name" required>' +
          '</div>' +
          '<div class="field">' +
            '<label class="field__label" for="hiring-phone">Phone</label>' +
            '<input class="field__input" id="hiring-phone" name="phone" type="tel" placeholder="Phone">' +
          '</div>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="hiring-email">E-mail</label>' +
          '<input class="field__input" id="hiring-email" name="email" type="email" placeholder="E-mail" required>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="hiring-position">Position</label>' +
          '<select class="field__input field__select" id="hiring-position" name="position">' + positionOptions + '</select>' +
        '</div>' +
        '<div class="form-row-2">' +
          '<div class="field">' +
            '<label class="field__label" for="hiring-availability">Availability</label>' +
            '<input class="field__input" id="hiring-availability" name="availability" placeholder="Weekdays, weekends, evenings">' +
          '</div>' +
          '<div class="field">' +
            '<label class="field__label" for="hiring-start-date">Start date</label>' +
            '<input class="field__input" id="hiring-start-date" name="startDate" type="date">' +
          '</div>' +
        '</div>' +
        '<div class="field">' +
          '<label class="field__label" for="hiring-experience">Experience</label>' +
          '<textarea class="field__textarea" id="hiring-experience" name="message" rows="4" placeholder="Tell us about your experience and the role you are interested in" required></textarea>' +
        '</div>' +
        '<div class="g-recaptcha" data-sitekey=""></div>' +
        '<p class="form-status" hidden role="status" aria-live="polite"></p>' +
        '<button type="submit" class="btn btn-ink btn-lg btn-full btn-stamp">Submit</button>' +
      '</form>'
    );
  }

  function initHiringPage() {
    var contentEl = document.getElementById('hiring-content');
    if (!contentEl) return;
    contentEl.innerHTML = renderForm();
    if (window.KORA_initForm) window.KORA_initForm(document.getElementById('hiring-form'));
    if (window.NH44_bindStampButtons) window.NH44_bindStampButtons(contentEl);
  }

  document.addEventListener('DOMContentLoaded', initHiringPage);
})();
