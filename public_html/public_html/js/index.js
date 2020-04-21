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
  $('#sponsors').text($.i18n('index-sponsors'))
  $('#social-media').text($.i18n('index-social-media'))
  $('#footer-problem-button').text($.i18n('footer-problem-button'))
 })
}
// Enable debug
$.i18n.debug = true

window.addEventListener('hashchange', () => {
 updateText(window.location.hash.slice(1))
})

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
    // console.log('Failed')
   },
  })
 })
 .then(() => {
  updateText('pl')
 })
