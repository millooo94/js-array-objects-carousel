const eleStart = document.querySelector('.start')
const eleInvert = document.querySelector('.invert')
const eleSlider = document.querySelector('.slider');
const eleThumb = document.querySelector('.thumbnail');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');

const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];


for (let i = 0; i < arrImages.length; i++) {



	const eleSlideImg = document.createElement('div');
	eleSlideImg.style.backgroundImage = `url('img/${arrImages[i].image}')`;
	eleSlideImg.classList.add('slider-img');
	if (i === 0) {
		eleSlideImg.classList.add('active');
	}
	eleSlider.append(eleSlideImg);

	const eleThumbContainer = document.createElement('div')
	eleThumbContainer.classList.add('thumbnail-img-container')
	eleThumb.append(eleThumbContainer)
	const eleThumbImg = document.createElement('img');
	eleThumbImg.src =`img/${arrImages[i].image}`;
	eleThumbImg.classList.add('thumbnail-img');
	const eleBlock = document.createElement('div')
    eleBlock.classList.add('block')
    eleSlideImg.append(eleBlock)
	const eleTitle = document.createElement('h2')
	eleTitle.innerHTML = arrImages[i].title
	eleBlock.append(eleTitle)
	const eleText = document.createElement('p')
	eleText.innerHTML = arrImages[i].text
	eleBlock.append(eleText)
	if (i === 0) {
		eleThumbImg.classList.add('light');
	} else {
		eleThumbImg.classList.add('dark');
	}
	eleThumbContainer.append(eleThumbImg);
}


const listEleImg = document.querySelectorAll('.slider-img');
const listThumbs = document.querySelectorAll('.thumbnail-img');

let activeIndex = 0;

function downSliding() {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('light');

	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('light');
}


eleBtnDown.addEventListener('click', downSliding);

function upSliding() {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('light');

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('light');
}

eleBtnUp.addEventListener('click', upSliding);


let isPaused = true

let autoSlide


eleStart.addEventListener('click', function(){

	if (isPaused == true) {

		autoSlide = setInterval (downSliding, 1500)
		eleBtnUp.removeEventListener("click", upSliding)
		eleBtnDown.removeEventListener("click", downSliding)
		eleStart.innerHTML = 'STOP'
		 isPaused = false

	} else {
		eleBtnUp.addEventListener("click", upSliding)
		eleBtnDown.addEventListener("click", downSliding)
		eleStart.innerHTML = 'START'
		isPaused = clearInterval(autoSlide)
		isPaused = true
	}

})

let isDown = true


eleInvert.addEventListener('click', function(){

	if(isDown == true && isPaused === false) {
		clearInterval(autoSlide)
		autoSlide = setInterval (upSliding, 1500)
		isDown = false
	} else if (isDown == false && isPaused === false) {
		clearInterval(autoSlide)
		autoSlide = setInterval (downSliding, 1500)
		isDown = true
	}
})

