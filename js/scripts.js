// JavaScript Document
console.log("Explore my portfolio");

$(document).ready(function() {
	"use strict";
  $(".mg-preview").on("click", function() {
    $(this).siblings(".mg-details").slideToggle();
    });
});