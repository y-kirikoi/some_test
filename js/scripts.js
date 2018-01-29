$ (document).ready(function() {

	$('.full_slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2500,
		prevArrow: "<img class='full_slider-prev full_slider-arrows' src='./images/arrow_left_white.png'>",
		nextArrow: "<img class='full_slider-next full_slider-arrows' src='./images/arrow_right_white.png'>",
		dotsClass: 'full_slider-dots'
	});

	$('.mini_slider-container').slick({
		mobileFirst: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "<img class='mini_slider-prev mini_slider-arrows' src='./images/arrow_left.png'>",
		nextArrow: "<img class='mini_slider-next mini_slider-arrows' src='./images/arrow_right.png'>",
		responsive: [
			{
			breakpoint: 768,
			settings: {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: "<img class='mini_slider-prev mini_slider-arrows' src='./images/arrow_left.png'>",
				nextArrow: "<img class='mini_slider-next mini_slider-arrows' src='./images/arrow_right.png'>"
			}
		}
	]
	});
	$('.full_slider-arrows').removeAttr('style');
	$('.mini_slider-arrows').removeAttr('style');
	$('.slick-slide').removeAttr('style');
});