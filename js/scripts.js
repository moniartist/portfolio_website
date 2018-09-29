// JavaScript Document
console.log("Explore my portfolio");

$(document).ready(function() {
  $(".mg_preview").on("click", function() {
    $(this).siblings(".mg_details").slideToggle();
    });
});