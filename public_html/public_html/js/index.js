let visitors = 0
let visitorsJSON = {
 visitors: 1,
}

function renderVisitorsNumber(visitorNumber) {
 let pagenumber = document.getElementById('visitorsNumber')
 pagenumber.innerHTML = visitorNumber
}

function updateText(language) {
 ;('use strict')
 var i18n = $.i18n()
 $.i18n().locale = language
 i18n.load('i18n/' + language + '.json', i18n.locale).done(() => {
  $('#nav-main-page').text($.i18n('nav-main-page'))
  $('#nav-about-page').text($.i18n('nav-about-page'))
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
  $('#footer-problem-button').text($.i18n('footer-problem-button'))
 })
}

fetch('./../json/visitors.json')
 .then((response) => {
  return response.json()
 })
 .then((data) => {
  visitors = data.visitors
  renderVisitorsNumber(visitors)
  visitors = parseFloat(visitors) + 1
 })
 .then(() => {
  visitorsJSON.visitors = JSON.stringify(visitors)
 })
 .then(() => {
  $.ajax({
   url: './../php/visitors.php',
   type: 'POST',
   data: visitorsJSON,
   error: function () {
    console.log('Failed')
   },
  })
 })

function LanguageOnHashChange() {
 let hash = window.location.hash.slice(1)
 const translatedLanguages = ['en', 'pl']
 if (translatedLanguages.includes(hash)) {
  updateText(hash)
 } else {
  console.log(
   `Your language ${hash} isn't currently availble switching to english`
  )
  updateText('en')
 }
}
function LanguageOnLoad() {
 const detectedLanguage = navigator.language.slice(0, 2)
 //console.log(detectedLanguage)
 const translatedLanguages = ['en', 'pl']
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
