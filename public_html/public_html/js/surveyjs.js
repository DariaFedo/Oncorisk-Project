const translatedLanguages = ['en', 'pl']

Survey.StylesManager.applyTheme('bootstrap')

$(document).ready(function () {
 fetch('./../json/melanomaSurvey.json')
  .then((response) => {
   return response.json()
  })
  .then((data) => {
   var survey = new Survey.Model(data)
   survey.locale = OnlyDetectLanguage()
   $('#surveyContainer').Survey({
    model: survey,
    onComplete: sendDataToServer,
    onCurrentPageChanged: SurveyPageChanged,
   })
  })
  .then((data) => {
   console.log('Success:')
   getSurveyfromServer()
  })
  .catch((error) => {
   console.error('Error:')
  })
})

const SurveyPageChanged = (survey) => {
 console.log(survey.visiblePages)
}

function sendDataToServer(survey) {
 console.log('The results are:' + JSON.stringify(survey.data))
 //send Ajax request to your web server.
 $.ajax({
  url: './php/POSTresultstodb.php',
  type: 'POST',
  data: {
   surveyresults: JSON.stringify(survey.data),
  },
 })
}

function getSurveyfromServer() {
 console.log('Wchodze')
 $.get('./php/GETsurveyfromdb.php', function (data, status) {
  console.log('Data: ' + data + '\nStatus: ' + status)
 })
}

function updateText(language) {
 ;('use strict')
 var i18n = $.i18n()
 $.i18n().locale = language
 i18n.load('i18n/' + language + '.json', i18n.locale).done(() => {
  $('#nav-main-page').text($.i18n('nav-main-page'))
  $('#nav-about-page').text($.i18n('nav-about-page'))
  $('#survey-credits').text($.i18n('survey-credits'))
  $('#survey-credits-link').text($.i18n('survey-credits-link'))
  $('#footer-problem-button').text($.i18n('footer-problem-button'))
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

const OnlyDetectLanguage = () => {
 const detectedLanguage = navigator.language.slice(0, 2)
 if (translatedLanguages.includes(detectedLanguage)) {
  return detectedLanguage
 }
 return ''
}

window.addEventListener('hashchange', () => {
 LanguageOnHashChange()
})

document.onload = LanguageOnLoad()
