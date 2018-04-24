jQuery(document).ready(function ($) {
	    $('#ph').mask('+7 (000) 000-00-00');
	//close modal window
	$('.js-close-modal, .overlay').click(function () {
		$('.popup, .popup2, .overlay').css({
			'opacity': '0'
			, 'visibility': 'hidden'
		});
		$(':input', '.js-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('selected');
	});
	//open modal window
	$('.js-open-modal').click(function (e) {
		e.preventDefault();
		$('.popup, .overlay').css({
			'opacity': '1'
			, 'visibility': 'visible'
		});
	});
	$(".js-form").submit(function () {
		var str = $(this).serialize();
		$.ajax({
			type: "POST"
			, url: "contact.php"
			, data: str
			, success: function (msg) {
				if (msg == 'ok') {
					$('.popup2, .overlay').css('opacity', '1');
					$('.popup2, .overlay').css('visibility', 'visible');
					$('.popup').css({
						'opacity': '0'
						, 'visibility': 'hidden'
					});
					$(':input', '.js-form').not(':button, :submit, :reset, :hidden').val('').removeAttr('selected');
				}
			}
		});
		return false;
	});
	

	//menu animation
	function scrollPageToId(id) {
		var to = $('#' + id).offset().top - 50;
		$('html, body').animate({
			scrollTop: to
		}, 500);
	}
	$(window).on('scroll', function () {
		var b = $(window).scrollTop();
		if (b > 60) {
			$('.js-header').addClass('js-scroll-menu');
		}
		else {
			$('.js-header').removeClass('js-scroll-menu');
		}
	});
});