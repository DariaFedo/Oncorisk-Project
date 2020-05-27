const translatedLanguages = ['en', 'pl']

function updateText(language) {
 ;('use strict')
 var i18n = $.i18n()
 $.i18n().locale = language
 i18n.load('i18n/' + language + '.json', i18n.locale).done(() => {
  $('#nav-main-page').text($.i18n('nav-main-page'))
  $('#nav-about-page').text($.i18n('nav-about-page'))
  $('#message').text($.i18n('404-page-message'))
  $('#footer-problem-button').text($.i18n('footer-problem-button'))
  $('#footer-where-to-find').text($.i18n('footer-where-to-find'))
 })
}

function LanguageOnHashChange() {
 let hash = window.location.hash.slice(1)
 if (translatedLanguages.includes(hash)) {
  updateText(hash)
 } else {
  console.log(
   `Your language ${hash} isn't currently availble switching to english`
  )
  updateText('en')
 }
}

const LanguageOnLoad = () => {
 const detectedLanguage = navigator.language.slice(0, 2)
 //console.log('Detected ' + detectedLanguage)
 //console.log('navigator.language ' + navigator.language)
 //console.log('navigator.userLanguage ' + navigator.userLanguage)

 if (translatedLanguages.includes(detectedLanguage)) {
  updateText(detectedLanguage)
 } else {
  console.log(
   `Your language ${detectedLanguage} isn't currently availble switching to english`
  )
  updateText('en')
 }
}

window.addEventListener('hashchange', () => {
 LanguageOnHashChange()
})

document.onload = LanguageOnLoad()

console.log('Hello')
