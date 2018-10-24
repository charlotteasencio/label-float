$(document).ready(function(){

    $('.textinput').on('focusout', function() {
        if ($(this).find('input').val() ) {
            $(this).find('label').hide();
            $(this).addClass('pinkShit')
        } 
    })

    $('.textinput').on('focusin', function() {
        if ($(this).find('input').val()) {
            $(this).find('label').show();
            $(this).removeClass('pinkShit')
        } 
    })

});