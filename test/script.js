/**
 * shows loading bar on top and spinner
 * @param {string} status 
 * @returns 
 */
function loading(status = '') {
    const newStatus = status.toString().toLowerCase();
    if (newStatus.length > 0) {
        endProgressBar();
        return;
    }

    var id_progessBar;
    startProgressBar_upTo90();



    function startProgressBar_upTo90() {
        $('.progressBar_').remove();
        $('.spinner_progess').remove();
        $('body').append('<div class="progressBar_"></div>');
        $('body').append('<div class="spinner_progess"></div>');
        const elem = $('.progressBar_');
        let width = 10;
        var id_progessBar = setInterval(frame, 20);

        function frame() {
            if (width >= 90) {
                clearInterval(id_progessBar);
            } else {
                width++;
                elem.css('width', width + '%');
            }
        }
    }

    function endProgressBar() {
        const elem = $('.progressBar_');
        var id_progessBar = setInterval(frame, 20);
        let width = 90;

        function frame() {
            if (width >= 100) {
                clearInterval(id_progessBar);
                $('.progressBar_').remove();
                $('.spinner_progess').remove();
            } else {
                width++;
                elem.css('width', width + '%');
            }
        }
    }
}


function alert(message = 'Warning', status = 'w', timeout = 6000) {
    // loading('stop');
    if (status[0].toString().toLowerCase() == 's') {
        status = 'customAlert_success';
    } else if (status[0].toString().toLowerCase() == 'e') {
        status = 'customAlert_err';
    } else {
        status = 'customAlert';
    }
    $('.alertBox').remove();
    let a = `<div class="${status} alertBox alert"><span class="closebtn" onclick="$(this).parent().remove();$('.darkDiv_alert_t').remove()">
      &times;</span><strong>${message}</strong></div>`;

    $(a).hide().appendTo("body").fadeIn(1000);
    $('body').append("<div class='darkDiv_alert_t'></div>");
    if (timeout && timeout > 0) {
        $('.' + status).delay(timeout).fadeOut(500);
        $('.darkDiv_alert_t').delay(timeout).fadeOut(500);
    }
}