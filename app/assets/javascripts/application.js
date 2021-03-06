// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

// $(document).ready(function(){
// 	var fullPageImage = '<div class="full-page-image"></div>';
// 	$("body").prepend(fullPageImage);
// 	setTimeout(function(){
// 	$(".full-page-image").fadeOut(800);}, 2000);

// });

$(document).ready(function(){
	cycleBackgrounds();
	$(".alert-success" ).delay(2000).fadeOut(1000);

});

function cycleBackgrounds() {
    var index = 0;

    $imageEls = $('.toggle-image'); // Get the images to be cycled.

    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        // Show the next image.
        $imageEls.eq(index).addClass('show');
        // Hide the previous image.
        $imageEls.eq(index - 1).removeClass('show');

    }, 3000);
};
