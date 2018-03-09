$( document ).ready(function() {
    $("#aboutlink").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 600);
    });
    $("#contactlink").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 600);
    });
    $("#gallerylink").click(function() {
        location.href = 'gallery.html';
    });

    $("#homelink").click(function() {
        location.href = 'index.html';
    });

    $("#dishalink").click(function() {
        location.href = 'disha.html';
    });

    $("#applylink").click(function() {
        location.href = 'https://goo.gl/forms/VXamYu81X2IfORCK2';
    });
});