$(document).ready(function () {
    $('#yes').click(function () {
        $('#tabby').fadeIn(500);
    });
    $('#no').click(function () {
        $('#grumpy').fadeIn(500);
    });
});
$(document).ready(function () {
    $('#change').click(function () {
    $('#change').replaceWith('<h4>Goodbye Cruel World!</h4');
    });
});