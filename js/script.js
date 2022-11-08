const eleStart = document.querySelector('.start')
const eleInvert = document.querySelector('.invert')

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

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

for (let i = 0; i < arrImages.length; i++) {

	const eleImg = document.createElement('img');
	eleImg.src = `img/${arrImages[i].image}`;
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	const eleThumb = document.createElement('img');
	eleThumb.src =`img/${arrImages[i].image}`;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img');
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;
document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
document.body.style.backgroundSize = 'cover';


eleBtnRight.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}


	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
});

eleBtnLeft.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
});


function autoLeft(){
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
}


function autoRight() {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
}


let isPaused = true

eleStart.addEventListener('click', function(){

	if (isPaused == true) {

		auto1 = setInterval (autoRight, 3000)
		 isPaused = false

	} else {
		
		isPaused = clearInterval(auto1)
		isPaused = true
	}

})

let isLeft = false

eleInvert.addEventListener('click', function(){

	if(isLeft == false && isPaused == false) {
		clearInterval(auto1)
		auto2 = setInterval (autoLeft, 3000)
		isLeft = true
	} else {
		clearInterval(auto2)
		setInterval (autoRight, 3000)
		isLeft = false
	}
})






