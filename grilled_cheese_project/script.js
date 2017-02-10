$(function() {
	var $slides = $(".slide"); 
	var currentSlide = 0; 
	var stayTime = 3; 
	var slideTime = 1.3;

	TweenLite.set($slides.filter(":gt(0)"), {autoAlpha: 0}); // this translates to tweenLite, select all slides except the first one and set their opacity to zero and visibilty to "hidden"
	TweenLite.delayedCall(stayTime, nextSlide);

	function nextSlide() {
		TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha: 0});
		currentSlide = ++currentSlide % $slides.length;
		TweenLite.to( $slides.eq(currentSlide), slideTime, {autoAlpha: 1});
		TweenLite.delayedCall(stayTime, nextSlide);
	}


});
