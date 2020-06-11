function CookieConsent() {
  if (getCookie('CookieConsent') == null) {
    $('#cookie-consent-container').modal('show');
    //Modal has been shown, now set a cookie so it never comes back
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `CookieConsent=true; expires=${date}`;
    $('#cookie-button').click(() => {
      $('#container').modal('hide');
    });
  }
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + '=';
  var begin = dc.indexOf('; ' + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(';', begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}
