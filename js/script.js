$(document).ready(function(){  
    $(".toggler").click (function(e){
        e.preventDefault();
        $(".nav-bar").slideToggle(1500);
        $(this).toggleClass("show");
    }); 
});