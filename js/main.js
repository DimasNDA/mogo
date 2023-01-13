$(document).ready(function(){
    $('.toogle-mobile-menu').click(function(event) {
		$('.top-menu').toggleClass('active');
	});

    $('.service-item-title').click(function(){
        $('.service-item-service').removeClass('active');
        $(this).closest('.service-item-service').addClass('active')
    });

    $('.basic-slider').slick({
        dots:true,
    })
})