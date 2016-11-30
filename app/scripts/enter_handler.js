$(document).keypress(function (e) {
  if (e.which == 13) {
    $('form input[type=submit]').click();
    return false;
  }
});