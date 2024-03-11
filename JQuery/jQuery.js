$(document).ready(function (){
   $(".hamburger").click(function(){
        $(".ham-menu").toggleClass("d-block")
   });
   $(".p-1").click(function(){
        $(".pp1").slideToggle("fast")
    });
   $(".p-2").click(function(){
        $(".pp2").slideToggle("fast")
    });
   $(".p-3").click(function(){
        $(".pp3").slideToggle("fast")
    });
})