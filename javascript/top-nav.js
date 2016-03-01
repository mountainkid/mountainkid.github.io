/*
CSSGrid is a Responsive CSS Grid designed to work on web and mobile devices. (www.cssgrid.co)
Please don't steal. Support this grid and buy a license from: http://codecanyon.net/item/responsive-html5-css-grid/4928861
*/

//First wrap your code in a document ready function.
$(document).ready(function() {
    
	// After .navclosed is clicked, change .navclosed to navclicked + change .wrapper to wrapper-push
	$(".navclosed").click(function () {
		$(this).toggleClass("navclicked");
		$(".wrapper").toggleClass("wrapper-push");
		return false;
	});

	// Sticky Header, makes header stick to top when page reaches top
	var fixedHeader = $(".sticky"),
		fixedHeaderTop = fixedHeader.removeClass('stuck').offset().top,
		fixedH = (function stickit(){
			if( $(window).scrollTop() > fixedHeaderTop )
				fixedHeader.addClass('stuck');
			else
				fixedHeader.removeClass('stuck');
			return stickit;
		})();
	$(window).scroll(fixedH);

});