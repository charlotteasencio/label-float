$(document).ready(function(){
   $(".text-input input").change(function(){
       if( $("this").val() != "") {
           $("this").addClass("filled")
       } else {
           $("this").removeClass('filled')
       }
   })
});