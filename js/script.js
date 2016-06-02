document.addEventListener("DOMContentLoaded", function(event){
	var button = document.querySelector('.button'),
		parts = document.querySelectorAll('.parts');

	function setAnimate(el, time){
		setTimeout (function(){
			el.classList.add('animate')
		}, time);
	};
	button.addEventListener('click', function(){
		for (var i = 0; i < parts.length; i++) {
			setAnimate(parts[i], i*250)
		};
		this.classList.add('flip');
	});
});

