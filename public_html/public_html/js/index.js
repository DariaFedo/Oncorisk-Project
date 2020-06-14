$(document).ready(function () {
  if (window.location.hash !== '') LanguageOnHash();
  else LanguageOnLoad();
  updateText();
  CookieConsent();
  FetchVisitorsNumberFromDB();
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

      $('#header-main-text').text($.i18n('index-header-main-text'));
      $('#start-survey-button').text($.i18n('index-start-survey-button'));
      $('#about-paragraph-header').text($.i18n('index-about-paragraph-header'));
      $('#about-paragraph-content').text(
        $.i18n('index-about-paragraph-content')
      );
      $('#counter-1').text($.i18n('index-counter-1'));
      $('#counter-2').text($.i18n('index-counter-2'));

      $('#partners').text($.i18n('index-partners'));
      $('#first-partner-title').text($.i18n('index-partner-first-title'));
      $('#first-partner-desc').text($.i18n('index-partner-first-desc'));
      $('#second-partner-title').text($.i18n('index-partner-second-title'));
      $('#second-partner-desc').text($.i18n('index-partner-second-desc'));
      $('#third-partner-title').text($.i18n('index-partner-third-title'));
      $('#third-partner-desc').text($.i18n('index-partner-third-desc'));

      $('#sponsors').text($.i18n('index-sponsors'));
      $('#first-sponsor-title').text($.i18n('index-sponsor-first-title'));
      $('#first-sponsor-desc').text($.i18n('index-sponsor-first-desc'));
      $('#second-sponsor-title').text($.i18n('index-sponsor-second-title'));
      $('#second-sponsor-desc').text($.i18n('index-sponsor-second-desc'));
      $('#third-sponsor-title').text($.i18n('index-sponsor-third-title'));
      $('#third-sponsor-desc').text($.i18n('index-sponsor-third-desc'));

      $('#social-media').text($.i18n('footer-social-media'));
      $('#footer-where-to-find').text($.i18n('footer-where-to-find'));
      $('#footer-contact-button').text($.i18n('footer-contact-button'));
    });
}

function RenderVisitorsNumber(number) {
  if (number != '') {
    $('#visitorsNumber').html(number);
  }
}

function FetchVisitorsNumberFromDB() {
  $.get(`./../php/GETvisitorsnumber.php`, (data) => {})
    .done((data) => {
      RenderVisitorsNumber(data);
    })
    .done(() => {
      console.log(`Fetching visitors number from db : success`);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log('Fetching visitors number from db failed');
    });
}
