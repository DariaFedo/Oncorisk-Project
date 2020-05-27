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
   })
  })
  .then((data) => {
   console.log('Success:')
  })
  .catch((error) => {
   console.error('Error:')
  })
})

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  
  console.log('The results are:' + JSON.stringify(survey.data));
  $.ajax({
    url: './../php/dbinput.php',
    type: 'POST',
    data: {
     name: JSON.stringify(survey.data),
     
    }
  })
 }
 
 //send Ajax request to your web server.
 console.log('The results are:' + JSON.stringify(survey.data))
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
 console.log('Detected ' + detectedLanguage)
 console.log('navigator.language ' + navigator.language)
 console.log('navigator.userLanguage ' + navigator.userLanguage)

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
