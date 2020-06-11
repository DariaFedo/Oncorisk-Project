$(document).ready(function () {
  if (window.location.hash !== '') LanguageOnHash();
  else LanguageOnLoad();
  updateText();
  CookieConsent();
});

function updateText() {
  ('use strict');
  var i18n = $.i18n();
  $.i18n().locale = State.selectedlanguage;
  i18n
    .load('i18n/' + State.selectedlanguage + '.json', i18n.locale)
    .done(() => {
      $('#nav-main-page').text($.i18n('nav-main-page'));
      $('#nav-about-page').text($.i18n('nav-about-page'));

      $('#cookie-title').text($.i18n('cookie-title'));
      $('#cookie-desc').text($.i18n('cookie-desc'));
      $('#cookie-button').text($.i18n('cookie-button'));
      $('#cookie-link').text($.i18n('cookie-link'));

      $('#contact-email-header').text($.i18n('contact-email-header'));
      $('#contact-email-desc').text($.i18n('contact-email-desc'));
      $('#contact-send-button').text($.i18n('contact-send-button'));

      $('#social-media').text($.i18n('footer-social-media'));
      $('#footer-where-to-find').text($.i18n('footer-where-to-find'));
      $('#footer-contact-button').text($.i18n('footer-contact-button'));
    });
}

$(function () {
  $('#contactForm input,#contactForm textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var email = $('input#email').val();
      var message = $('textarea#message').val();
      $this = $('#contact-send-button');
      $this.prop('disabled', true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: './../php/contact_me.php',
        type: 'POST',
        data: {
          email: email,
          message: message,
        },
        cache: false,
        success: function () {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success')
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append('</button>');
          $('#success > .alert-success').append(
            '<strong>Your message has been sent. </strong>'
          );
          $('#success > .alert-success').append('</div>');
          //clear all fields
          $('#contactForm').trigger('reset');
        },
        error: function () {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger')
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append('</button>');
          $('#success > .alert-danger').append(
            $('<strong>').text(
              'Sorry ' +
                firstName +
                ', it seems that my mail server is not responding. Please try again later!'
            )
          );
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger('reset');
        },
        complete: function () {
          setTimeout(function () {
            $this.prop('disabled', false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(':visible');
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
