$(document).ready(function(){

    $('.textinput').on('focusout', function() {
        if ($(this).find('input').val() ) {
            $(this).find('label').hide();
            $(this).addClass('pinkShit')
        } else {
            $(this).find('label').show();
        }
    })

    $('.textinput').on('click', function() {
        if ($(this).find('input').val()) {
            $(this).find('label').show();
            $(this).removeClass('pinkShit')
        } 
    })

});