let State = {
 translatedLanguages: ['en', 'pl'],
 selectedlanguage: ['en'],
}

$(document).ready(function () {
 if (window.location.hash !== '') LanguageOnHash()
 else LanguageOnLoad()
 updateText()
 CookieConsent()
 SendVisitorToDB()
})

window.addEventListener('hashchange', () => {
 LanguageOnHash()
 updateText()
})

function LanguageOnHash() {
 let hash = window.location.hash.slice(1)
 State.translatedLanguages.includes(hash)
  ? (State.selectedlanguage = hash)
  : (State.selectedlanguage = 'en')
}

function LanguageOnLoad() {
 const detectedLanguage = navigator.language.slice(0, 2)
 State.translatedLanguages.includes(detectedLanguage)
  ? (State.selectedlanguage = detectedLanguage)
  : (State.selectedlanguage = 'en')
}

function updateText() {
 ;('use strict')
 var i18n = $.i18n()
 $.i18n().locale = State.selectedlanguage
 i18n.load('i18n/' + State.selectedlanguage + '.json', i18n.locale).done(() => {
  $('#nav-main-page').text($.i18n('nav-main-page'))
  $('#nav-about-page').text($.i18n('nav-about-page'))

  $('#cookie-title').text($.i18n('cookie-title'))
  $('#cookie-desc').text($.i18n('cookie-desc'))
  $('#cookie-button').text($.i18n('cookie-button'))
  $('#cookie-link').text($.i18n('cookie-link'))

  $('#header-main-text').text($.i18n('index-header-main-text'))
  $('#start-survey-button').text($.i18n('index-start-survey-button'))
  $('#about-paragraph-header').text($.i18n('index-about-paragraph-header'))
  $('#about-paragraph-content').text($.i18n('index-about-paragraph-content'))
  $('#counter-1').text($.i18n('index-counter-1'))
  $('#counter-2').text($.i18n('index-counter-2'))

  $('#partners').text($.i18n('index-partners'))
  $('#first-partner-title').text($.i18n('index-partner-first-title'))
  $('#first-partner-desc').text($.i18n('index-partner-first-desc'))
  $('#second-partner-title').text($.i18n('index-partner-second-title'))
  $('#second-partner-desc').text($.i18n('index-partner-second-desc'))
  $('#third-partner-title').text($.i18n('index-partner-third-title'))
  $('#third-partner-desc').text($.i18n('index-partner-third-desc'))

  $('#sponsors').text($.i18n('index-sponsors'))
  $('#first-sponsor-title').text($.i18n('index-sponsor-first-title'))
  $('#first-sponsor-desc').text($.i18n('index-sponsor-first-desc'))
  $('#second-sponsor-title').text($.i18n('index-sponsor-second-title'))
  $('#second-sponsor-desc').text($.i18n('index-sponsor-second-desc'))
  $('#third-sponsor-title').text($.i18n('index-sponsor-third-title'))
  $('#third-sponsor-desc').text($.i18n('index-sponsor-third-desc'))

  $('#social-media').text($.i18n('index-social-media'))
  $('#footer-where-to-find').text($.i18n('footer-where-to-find'))
  $('#footer-contact-button').text($.i18n('footer-contact-button'))
 })
}

function RenderVisitorsNumber(number) {
 if (number != '') {
  $('#visitorsNumber').html(number)
 }
}
function SendVisitorToDB() {
 $.ajax({
  type: 'post',
  url: './../php/POSTvisitorstodb.php',
  data: {
   get_online_visitor: 'online_visitor',
   page: 'Index.html',
  },
  success: (response) => {
   RenderVisitorsNumber(response)
  },
 })
}

function CookieConsent() {
 if (getCookie('CookieConsent') == null) {
  $('#cookie-consent-container').modal('show')
  //Modal has been shown, now set a cookie so it never comes back
  const date = new Date()
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)
  document.cookie = `CookieConsent=true; expires=${date}`
  $('#cookie-button').click(() => {
   $('#container').modal('hide')
  })
 }
}

function getCookie(name) {
 var dc = document.cookie
 var prefix = name + '='
 var begin = dc.indexOf('; ' + prefix)
 if (begin == -1) {
  begin = dc.indexOf(prefix)
  if (begin != 0) return null
 } else {
  begin += 2
  var end = document.cookie.indexOf(';', begin)
  if (end == -1) {
   end = dc.length
  }
 }
 return decodeURI(dc.substring(begin + prefix.length, end))
}
