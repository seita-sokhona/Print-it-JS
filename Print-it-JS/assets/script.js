const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]


const images = document.querySelectorAll("[data-carousel-img]")
console.log(images);

images.forEach((img) => {
	img.addEventListener('click' ,() => {
	  const changement = img.dataset.carouselImg === 'next' ? 1 : -1;
	  const slide = img
	  .closest("[data-carousel]")
	  .querySelector("[data-slides]")

	  const activeSlide = slide.querySelector("[data-active]");
	  let newIndex = [...bannerImg.children].indexOf(activeBannerImg) + offset;
	  if (newIndex < 0) newIndex = banner-img.children.length - 1;
    if (newIndex >= banner-img.children.length) newIndex = 0;

    bannerImg.children[newIndex].dataset.active = true;
    delete activeBannerImg.dataset.active;


	})
})



// const leftArrow = document.querySelector('.arrow_left')
//  leftArrow.addEventListener('click',function(){
// 	console.log(leftArrow);


// })








// const dots = document.querySelector('.dots')
// dots.innerHTML = '<span class="dot_selected"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span> </div>"'
// console.log('dots')

// const img = slides[0]
// const imageElement = document.createElement('img')
// imageElement.src = img.image
// console.log('imageElement')

/*
let nbrSlide = 0;

function Banner() {
  const bannerImg = document.querySelector('.banner-img');
  bannerImg.src = `./assets/images/slideshow/${slides[nbrSlide].image}`;
 const tag = document.querySelector('#banner p');
tag.textContent = slides[3].tagLine
 tag.forEach(para => {
	console.log(para)
	
 });


 

}

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
  nbrSlide = (nbrSlide - 1 + slides.length) % slides.length;

 Banner();
});

arrowRight.addEventListener('click', () => {
  nbrSlide = (nbrSlide + 1) % slides.length;
  Banner();
});

*/



/* const leftArrow = document.querySelector('.arrow_left')
 leftArrow.addEventListener('click',function(){

   // sur quelle image pointe mon slider?

	const srcSlider = leftArrow.previousElementSibling.src;
	console.log(srcSlider)

	const splittedSrcSlider = srcSlider.split('/'); //[...]
     console.log(splittedSrcSlider)
	
     const actualImg = splittedSrcSlider[splittedSrcSlider.length -1];
     console.log(actualImg)

	// Quel index dans mon tableau de slides ?

	//const pos = slides.findIndex((slide) => {
	  // Est-ce que je retrouve actualImg ?
	 // return slide.image === actualImg;
     
	 });
	//console.log(pos)
 })

*/








 //leftArrow.addEventListener('click',function(){
	//let der = leftArrow.previousElementSibling.src;
	//console.log(der)
 //})
 
/*
 const arrowR = document.querySelector('.arrow_right')
 arrowR.addEventListener('click',function(){
	
   //chercher image actuelle
    
  document.querySelector('.banner-img')
	//console.log('.banner-img')
	
   //trouver l'index 1
  //for(const index in slides ) 
   //console.log(index,slides[index])
 })
	

 









//let images = 0;

//let i =0;
//let imgSlides = document.getElementsByClassName('banner-img')
//let etape = 0
//let nbrImage = imgSlides.length





//const banner = document.querySelector("#banner");
//banner.appendChild(imageElement);





/*function slideSuivant(direction) {
	console.log('slideSuivant')
    images = images + direction;
    if (images < 0)
	images = slides.length - 1;
    if (images > slides.length - 1)
        images = 0;
    document.getElementsByClassName(".arrow-left").src = slides[images];
}
slideSuivant("direction")*/






/*const images = document.createElement ("img");
images.src = article.images;

const bannerImg = document.querySelector(".banner");
bannerImg.appendChild(images);*/
