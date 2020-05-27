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
 $.ajax({
  type: 'POST',
  contentType: "application/json; charset=utf-8",
  url:  'dbinput.php',
  data: {json: JSON.stringify(survey.data)},
  dataType: 'json'
})
  
 
}
