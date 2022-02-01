

function alert(message = 'Warning', status = 'w', timeout = 6000) {
  // loading('stop');
  const now_t=Date.now();
  if (status[0].toString().toLowerCase() == 's') {
    status = 'customAlert_success';
  } else if (status[0].toString().toLowerCase() == 'e') {
    status = 'customAlert_err';
  } else {
    status = 'customAlert';
  }
  $('.alertBox').remove();
  let a = `<div id="${now_t}" class="${status} alertBox alert"><span class="closebtn" onclick="$(this).parent().remove();$('.darkDiv_alert_t').remove()">
      &times;</span><strong>${message}</strong></div>`;

  $(a).appendTo("body");
  // $('body').append("<div class='darkDiv_alert_t'></div>");
  setTimeout(function () {
    $('#' + now_t).remove();
  }, 5000)

}

