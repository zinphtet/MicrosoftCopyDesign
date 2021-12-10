const subNav = document.querySelector('.sub_nav');
const allMicrosoft = document.querySelector('.all_microsoft');
const allMicrosoftActive = document.querySelector('.all_micro_active');
const nav = document.querySelector('nav');
const hide = document.querySelectorAll('li[hide]');
const navTwo = document.querySelector('.nav_ul_2');
const More = document.querySelector('.more');
let navOne = document.querySelector('.nav_ul_1');

const imgDiv = document.querySelector('.imgDiv');
const navThrree = document.querySelector('.nav_3');
const search = document.querySelector('.nav_0 li img');
const bar = document.querySelector('.fas');
const input = document.querySelector('.nav_link input');
////
const navHegiht = nav.getBoundingClientRect();
console.log(navHegiht.height);
/////
allMicrosoft.addEventListener('click', function () {
	this.classList.toggle('all_micro_active');
	subNav.classList.toggle('sub_nav_show');
	allMicrosoftActive.style.top = `${navHegiht}px`;
});
document.addEventListener('click', (e) => {
	if (!e.target.closest('.all_microsoft')) {
		allMicrosoft.classList.remove('all_micro_active');
		subNav.classList.remove('sub_nav_show');
	}
});

let state = 0;
function init(myNode, myMore) {
	if (window.innerWidth < 1000) {
		myMore.style.display = 'inline-block';
		[...myNode].forEach((item) => {
			item.remove();
		});
		navTwo.style.flex = '4';
		state = 1;
	} else if (state == 1 && window.innerWidth > 1100) {
		navOne.innerHTML = '';
		navOne.innerHTML = `<li class="nav_link"><a href="#">Microsoft 365</a></li>
			<li class="nav_link"><a href="#">Office</a></li>
			<li class="nav_link"><a href="#">Windows</a></li>
			<li class="nav_link surface"><a href="#">Surface</a></li>
			`;

		navOne.innerHTML += `<li class="nav_link link_show" hide="3"><a href="#">Xbox</a></li>`;
		navOne.innerHTML += `<li class="nav_link link_show" hide="2"><a href="#">Deals</a></li>`;
		navOne.innerHTML += `<li class="nav_link link_show" hide="1"><a href="#">Support</a></li>`;
		navOne.innerHTML += `<li class="nav_link more">
		<a href="#">More </a><i class="arrow down">
		</i>
		<ul class="dropdown">
							<li class="nav_link" hide="3"><a href="#">Xbox</a></li>
							<li class="nav_link" hide="2"><a href="#">Deals</a></li>
							<li class="nav_link" hide="1"><a href="#">Support</a></li>
						</ul>
	</li>`;
		navTwo.style.flex = '3';
	}
}
init(hide, More);
function navThr() {
	window.innerWidth >= 860 && (navThrree.style.display = 'none');
	window.innerWidth < 860 && (navThrree.style.display = 'flex');
}
window.onresize = function () {
	subNav.classList.remove('sub_nav_show');
	navThr();
	init(hide, More);

	const myHide = document.querySelectorAll('.link_show');
	let more = document.querySelector('.more');
	let dropdown = document.querySelector('.dropdown');
	init(myHide, more);
};

search.addEventListener('click', () => {
	imgDiv.style.display = 'none';
	navThrree.style.display = 'none';
	bar.className = 'fas fa-arrow-alt-circle-left';
	input.style.display = 'inline-block';
	search.style.display = 'none';
});
const arrow = document.querySelector('.fa-arrow-alt-circle-left');
bar.addEventListener('click', () => {
	imgDiv.style.display = 'inline-block';
	navThrree.style.display = 'flex';
	bar.className = 'fas fa-bars';
	input.style.display = 'none';
	search.style.display = 'inline-block';
});
navThr();

var swiper = new Swiper('.mySwiper', {
	loop: true,
	spaceBetween: 10,

	breakpoints: {
		
		520: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1020: {
			slidesPerView: 6,
		},
	},
});
