(function($){
    $(function(){

	$('.button-collapse').sideNav();
	$('.carousel').carousel();

	$('#language-dropdown-button').dropdown({
	    constrainWidth: false,
	    belowOrigin: true
	});
    }); // end of document ready
})(jQuery); // end of jQuery name space
