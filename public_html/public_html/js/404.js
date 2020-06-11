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

      $('#message').text($.i18n('404-page-message'));

      $('#social-media').text($.i18n('footer-social-media'));
      $('#footer-where-to-find').text($.i18n('footer-where-to-find'));
      $('#footer-contact-button').text($.i18n('footer-contact-button'));
    });
}
