/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

// For Several Years in Color Switching between variations.
$('#CP01-200').click(function() {
	$('#CP01-800').show();
	$('#CP02-800').hide();
	$('#CP03-800').hide();
	$('#CP04-800').hide();
	$('#CP05-800').hide();
});
$('#CP02-200').click(function() {
	$('#CP02-800').show();
	$('#CP01-800').hide();
	$('#CP03-800').hide();
	$('#CP04-800').hide();
	$('#CP05-800').hide();
});
$('#CP03-200').click(function() {
	$('#CP03-800').show();
	$('#CP02-800').hide();
	$('#CP01-800').hide();
	$('#CP04-800').hide();
	$('#CP05-800').hide();
});
$('#CP04-200').click(function() {
	$('#CP04-800').show();
	$('#CP02-800').hide();
	$('#CP03-800').hide();
	$('#CP01-800').hide();
	$('#CP05-800').hide();
});
$('#CP05-200').click(function() {
	$('#CP05-800').show();
	$('#CP02-800').hide();
	$('#CP03-800').hide();
	$('#CP04-800').hide();
	$('#CP01-800').hide();
});
