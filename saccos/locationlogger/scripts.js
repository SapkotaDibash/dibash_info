const LOCATION_VAR = "LOCATION_MEM_DETAIL";
const USER_VAR = "USER_NAME_MEM_DETAIL";
var loc = { longitude: null, latitude: null };
// var data = localStorage.getItem(LOCATION_VAR);

// localStorage.setItem(LOCATION_VAR, []);




const savedUSERNAME = window.localStorage.getItem(USER_VAR);

if (savedUSERNAME == null) {
  $('.disableOnStart').focus();
  $('#USER_INPUT_ONE').on('input', function () {
    window.localStorage.setItem(USER_VAR, $(this).val());
  });
} else {
  $('.disableOnStart').prop('disabled', "disabled");
  $("#USER_INPUT_ONE").val(window.localStorage.getItem(USER_VAR))
}

if (window.localStorage.getItem(LOCATION_VAR) == null) {
  window.localStorage.setItem(LOCATION_VAR, JSON.stringify([]));
}

function updateLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    $('.locationContainer').empty().append("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  $('.locationContainer').empty().append("<br><br>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
  loc.latitude = position.coords.latitude;
  loc.longitude = position.coords.longitude;
}
updateLocation();