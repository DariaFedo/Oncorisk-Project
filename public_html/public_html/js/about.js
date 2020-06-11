$(document).ready(function () {
  if (window.location.hash !== '') LanguageOnHash();
  else LanguageOnLoad();
  updateText();
  CookieConsent();
});

function updateText(language) {
  ('use strict');
  var i18n = $.i18n();
  $.i18n().locale = State.selectedlanguage;
  i18n
    .load('i18n/' + State.selectedlanguage + '.json', i18n.locale)
    .done(() => {
      $('#nav-main-page').text($.i18n('nav-main-page'));
      $('#nav-about-page').text($.i18n('nav-about-page'));
      $('#nav-languages').text($.i18n('nav-languages'));

      $('#cookie-title').text($.i18n('cookie-title'));
      $('#cookie-desc').text($.i18n('cookie-desc'));
      $('#cookie-button').text($.i18n('cookie-button'));
      $('#cookie-link').text($.i18n('cookie-link'));

      $('#about-project-par-header').text($.i18n('about-project-par-header'));
      $('#about-project-part1').text($.i18n('about-project-part1'));
      $('#about-project-part2').text($.i18n('about-project-part2'));
      $('#about-project-part3').text($.i18n('about-project-part3'));
      $('#about-list-item1').text($.i18n('about-list-item1'));
      $('#about-list-item2').text($.i18n('about-list-item2'));
      $('#about-list-item3').text($.i18n('about-list-item3'));
      $('#about-list-item4').text($.i18n('about-list-item4'));
      $('#more-info-header').text($.i18n('about-more-info-header'));
      $('#about-more-info-text').text($.i18n('about-more-info-text'));

      $('#social-media').text($.i18n('footer-social-media'));
      $('#footer-where-to-find').text($.i18n('footer-where-to-find'));
      $('#footer-contact-button').text($.i18n('footer-contact-button'));
    });
}
