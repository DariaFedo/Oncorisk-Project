let State = {
 translatedLanguages: ['en', 'pl'],
 selectedlanguage: ['en'],
}

$(document).ready(function () {
 if (window.location.hash !== '') LanguageOnHash()
 else LanguageOnLoad()
 updateText()
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

  $('#social-media').text($.i18n('index-social-media'))
  $('#footer-where-to-find').text($.i18n('footer-where-to-find'))
  $('#footer-contact-button').text($.i18n('footer-contact-button'))
 })
}
