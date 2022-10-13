
var swiper = new Swiper(".slider-top-nft", {
	slidesPerView: 3,
	spaceBetween: 30,
	breakpoints: {
		1350: {
			slidesPerView: 3,
		},
		1228: {
			slidesPerView: 2.8,
		},
		1100: {
			slidesPerView: 2.5,
		},
		990: {
			slidesPerView: 2.2,
		},
		880: {
			slidesPerView: 2,
		},
		788: {
			slidesPerView: 1.8,
		},
		662: {
			slidesPerView: 1.5,
		},
		576: {
			slidesPerView: 1.3,
		},
		530: {
			slidesPerView: 1.2,
		},
		200: {
			slidesPerView: 1.1,
		},
		0: {
			slidesPerView: 1,
		},
	}
});

let menuBtn = document.querySelector('.burger-menu'),
	menu = document.querySelector('.menu-list'),
	header = document.querySelector('.header'),
	body = document.querySelector('.body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	header.classList.toggle('active');
	body.classList.toggle('lock');
})

function changeImage(source) {
	document.getElementById("changeImage").src = source;

}

$('.show__button').each(function (e) {
	$(this).on('click', function (even) {
		even.preventDefault();
		var img = $(this).attr('href');
		$('.show__img').attr('src', img);
	});

});
