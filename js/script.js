
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
			slidesPerView: 1.12,
		},
		0: {
			slidesPerView: 1,
		},
	}
});

var swiper = new Swiper(".slider-collection", {
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
			spaceBetween: 30,
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
			spaceBetween: 24,
		},
	}
});


const windowInnerWidth = window.innerWidth;
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

var header2 = $('.header'),
  scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 50 && scrolled < scrollPrev) {
    header2.addClass('fixed');
  } else {
    header2.removeClass('fixed');
  }
  scrollPrev = scrolled;
});


$('.collection-picture-section__button').each(function (e) {
	$(this).on('click', function (even) {
		even.preventDefault();
		var img = $(this).attr('href');
		$('.collection-picture-section__img').attr('src', img);
		$(this).classList.toggle('red'); 
	});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

const buttons = [...document.querySelectorAll('.btn')];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.btn.active').classList.remove('active');
    button.classList.add('active');
  })
})