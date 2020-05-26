console.log('Here i am')

Survey.StylesManager.applyTheme('bootstrap')

$(document).ready(function () {
 fetch('./../json/survey.json')
  .then((response) => {
   return response.json()
  })
  .then((data) => {
   var survey = new Survey.Model(data)
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
 