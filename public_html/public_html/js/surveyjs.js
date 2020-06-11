State.Facts = [];
State.Survey = {};
State.SurveyName = 'MelanomaSurvey';
State.Prompts = {};

$(document).ready(function () {
  if (window.location.hash !== '') LanguageOnHash();
  else LanguageOnLoad();
  CookieConsent();
  FetchFactsFromFile(() => {
    RenderFactOnPage();
  });
  FetchSurveyFromDB(() => {});
  FetchPromptsFromFile(() => {
    updateText();
  });
});

function FetchSurveyFromDB(_callback) {
  Survey.StylesManager.applyTheme('bootstrap');

  $.getJSON(
    `./../php/GETsurveyfromdb.php`,
    { survey_name: State.SurveyName },
    'json'
  )
    .done((data, status) => {
      State.Survey = new Survey.Model(data.json);
      $('#surveyContainer').Survey({
        locale: State.selectedlanguage,
        model: State.Survey,
        onComplete: sendDataToServer,
        onCurrentPageChanging: RenderFactOnPage,
        onCurrentPageChanged: ScrollToTop,
      });
    })
    .done((data) => {
      _callback();
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.log('Fetching survey failed');
    });
}

function FetchFactsFromFile(_callback) {
  const url = `./../csv/${State.SurveyName}Facts.txt`;
  $.get(url, (data, status) => {
    console.log('Fetching facts status: ' + status);
  }).done((data) => {
    State.Facts = processData(data);
    _callback();
  });
}

function FetchPromptsFromFile(_callback) {
  const url = `./../json/${State.SurveyName}Prompts.json`;
  $.get(url, (data, status) => {
    console.log(`Fetching prompts for answers: ${status}`);
    State.Prompts = data;
  }).fail(() => {
    console.log(`Fetching prompts for answers Failed`);
  });
  _callback();
}

function processData(allText) {
  var arr = allText.split('\n');
  var jsonObj = [];
  var headers = arr[0].split(';');
  for (var i = 1; i < arr.length; i++) {
    var data = arr[i].split(';');
    var obj = {};
    for (var j = 0; j < data.length; j++) {
      obj[headers[j].trim()] = data[j].trim();
    }
    jsonObj.push(obj);
  }
  return jsonObj;
}

function RenderFactOnPage() {
  let randomFactNumber =
    Math.floor(Math.random() * (+State.Facts.length - +0)) + +0;

  let lang = State.selectedlanguage;

  let propname = 'Fact_desc_' + lang;
  if (State.Facts[randomFactNumber].hasOwnProperty(propname)) {
  } else {
    propname = 'Fact_desc_default';
  }
  let description = State.Facts[randomFactNumber][propname];
  $('#survey-fact-desc').html(description);
}

function ScrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
}

function sendDataToServer() {
  console.log(State.Survey.data);
  $.post('./php/POSTresultstodb.php', {
    surveyresults: JSON.stringify(State.Survey.data),
  })
    .done(function () {
      console.log('Sending survey to server "Success"');
      RenderResultsToPage();
    })
    .fail(function () {
      console.log('Sending survey to server "Error"');
    });
}

function RenderResultsToPage() {
  let questions = State.Survey.getAllQuestions(true, true);
  let htmlText = '';

  for (const property in State.Survey.data) {
    htmlText += `<div class="response">`;
    questions.forEach((question) => {
      if (question.name == [property]) {
        htmlText += `<p class="font-weight-bold">${question.title}</p>
    <p class="mx-3">${State.Survey.data[property]}</p>`;
      }
    });
    State.Prompts.hasOwnProperty(property)
      ? (htmlText += `<p class="text-danger">${
          State.Prompts[property][State.Survey.data[property]][
            State.selectedlanguage
          ]
        }</p>`)
      : '';
    htmlText += `</div>`;
  }

  $('#surveyContainer').append(htmlText);
}

function getSurveyfromServer() {
  $.get('./php/GETsurveyfromdb.php', function (data, status) {
    console.log('Data: ' + data + '\nStatus: ' + status);
  });
}

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

      $('#survey-fact-header').text($.i18n('survey-fact-header'));
      $('#survey-credits').text($.i18n('survey-credits'));
      $('#survey-credits-link').text($.i18n('survey-credits-link'));

      $('#social-media').text($.i18n('footer-social-media'));
      $('#footer-where-to-find').text($.i18n('footer-where-to-find'));
      $('#footer-contact-button').text($.i18n('footer-contact-button'));
    });
  State.Survey.locale = State.selectedlanguage;
  State.Survey.render();
  RenderFactOnPage();
}
