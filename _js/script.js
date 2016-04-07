window.onload = function () {
	//	Scroll Function
	document.addEventListener('scroll', shrink);
	//	Close Button
	var close = document.querySelector('.close');
	close.addEventListener('click', closed);
	//	Articles
	var articles = document.querySelector('.articles');
	articles.style.height = '0';
	//	Boxes
	var boxes = document.querySelectorAll('.box');
	var grad = document.querySelectorAll('.box .grad');
	var box_side = document.querySelector('.box .side_bar');
	//	Hero
	var hero = document.querySelector('.hero');
	//	Hero Sidebar
	var hero_side_area = document.querySelector('.hero .side_bar_area');
	var hero_side = document.querySelector('.hero .side_bar_area .side_bar');
	var hero_side_img = document.querySelector('.hero .side_bar_area .side_bar .arrow');
	//	Press function
	press();
	//	Hover function
	hover();

	//	Scroll function
	function shrink() {
		// Getting Elements
		var hero = document.querySelector('.hero');
		var logo = document.querySelector('h1');
		var close = document.querySelector('.close');
		var articles = document.querySelector('.articles');
		var arrow = document.querySelector('.arrow');
		var hero_side_area = document.querySelector('.hero .side_bar_area');

		//Testing
		console.log(window.scrollY);
		//If Statement 
		if (window.scrollY >= 9) {
			setTimeout(function () {
				articles.style.position = 'absolute';
			}, 2000);
			setTimeout(function () {
				arrow.style.transform = 'rotate(180deg)'
			}, 600);
			hero.style.height = "200px";
			hero.style.position = "fixed";
			articles.style.marginTop = "200px";
			articles.style.height = "100%";
			logo.style.opacity = '0';
			close.style.opacity = '1';
			hero_side_area.style.display = 'none';
		}
		var counter = 0;
		// Click arrow to display content
		arrow.addEventListener('click', function () {
			switch (counter) {
			case 0:
				setTimeout(function () {
					articles.style.position = 'absolute';
				}, 2000);
				setTimeout(function () {
					arrow.style.transform = 'rotate(180deg)'
				}, 600);
				hero.style.height = "200px";
				hero.style.position = "fixed";
				articles.style.marginTop = "200px";
				articles.style.height = "100%";
				logo.style.opacity = '0';
				close.style.opacity = '1';
				hero_side_area.style.display = 'none';
				counter = 1;
				break;
				// Click arrow to show hero
			case 1:
				setTimeout(function () {
					arrow.style.transform = 'rotate(0deg)';
					hero_side_area.style.display = 'block';
				}, 600);
				hero.style.height = "100%";
				hero.style.position = "absolute";
				articles.style.position = 'fixed';
				articles.style.marginTop = "0";
				logo.style.opacity = '1';
				close.style.opacity = '0';
				counter = 0;
				break;
			}
		});
	}
	//Close Function
	function closed() {
		var hero = document.querySelector('.hero');
		var logo = document.querySelector('h1');
		var close = document.querySelector('.close');
		var articles = document.querySelector('.articles');
		var arrow = document.querySelector('.arrow');
		var hero_side_area = document.querySelector('.hero .side_bar_area');
		setTimeout(function () {
			arrow.style.transform = 'rotate(0deg)';
			hero_side_area.style.display = 'block';
		}, 600);
		hero.style.height = "100%";
		hero.style.position = "absolute";
		articles.style.position = 'fixed';
		articles.style.marginTop = "0";
		logo.style.opacity = '1';
		close.style.opacity = '0';

		// When closed, goes to scroll
		document.addEventListener('scroll', shrink);
		hover();
	}

	function hover() {

		//	Hero Section Hover


		hero_side_area.addEventListener('mouseover', function () {
			hero_side.style.opacity = '1';
		});
		hero_side.addEventListener('mouseover', function () {
			hero_side.style.width = "80px";
			hero_side_img.style.opacity = '1';
		});
		hero_side_area.addEventListener('mouseout', function () {
			hero_side.style.opacity = '0';
		});
		hero_side.addEventListener('mouseout', function () {
			hero_side.style.width = "20px";
			hero_side_img.style.opacity = '0';
		});

		//	Article Section Hover

		for (var i = 0; i < boxes.length; i++) {
			boxes[i].addEventListener('mouseover', function () {
				this.style.backgroundSize = "680px 105%";
			});
			boxes[i].addEventListener('mouseout', function () {
				this.style.backgroundSize = "640px 100%";
			});
		}
		for (var j = 0; j < grad.length; j++) {
			grad[j].addEventListener('mouseover', function () {
				this.style.opacity = "0.5";
			});
			grad[j].addEventListener('mouseout', function () {
				this.style.opacity = "1";
			});
		}
	}

	function press() {
		//Key press
		document.onkeydown = function (e) {
			var a = e.keyCode;
			if (a == '38') {
				closed();
			} else if (a == '40') {
				shrink();
			}
		};
	}
}