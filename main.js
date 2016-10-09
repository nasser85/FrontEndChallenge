$(document).ready(function() {
	var navPos = $('nav').position().top;
	
	$('nav').removeClass('navbar-fixed-bottom');
	
	$('nav').offset({top: navPos})
	
	$('#next-page').height(navPos+100);

	$(document).on('scroll', function() {
		console.log($(document).scrollTop());
		if ($(document).scrollTop() >= navPos) {
			$('nav').addClass('navbar-fixed-top');
			$('nav').css({top: '0px'});
		}
	})

	$(document).resize(function() {
		$("#next-page").css("marginBottom") = "0px";
	})

	$('span').click(function() {
		$('body').animate({scrollTop: navPos + 'px'});
	})
	
});