//Menu Hamburger
const checkBox = document.querySelector("#checkbox-menu");
const navBar = document.querySelector("#navBar");
//Carrosel
const carousel = document.querySelector('.carousel');
const cardsContainer = carousel.querySelector('.container-card-2');
const cards = cardsContainer.querySelectorAll('.card-2');
const leftButton = carousel.querySelector('.carousel-prev');
const rightButton = carousel.querySelector('.carousel-next');


checkBox.addEventListener("change", function(){

  if(this.checked){
    navBar.classList.add('nav-mobilie')
  }
  else{
    navBar.classList.remove('nav-mobilie')
  }
})

let currentIndex = 0;
const numVisibleCards = () => {
  const viewportWidth = window.innerWidth
  if (viewportWidth > 999 ){
    return 4
  }
  if (viewportWidth <= 999 && viewportWidth > 768){
    return 3
  }
  if (viewportWidth <= 768 && viewportWidth > 420){
    return 2
  }
  if (viewportWidth <= 420){
    return 1
  }
} ;



leftButton.addEventListener('click', () => {
  console.log("Previous")
  if (currentIndex > 0) {
    currentIndex--;
    cardsContainer.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth)}px)`;
  }
});

rightButton.addEventListener('click', () => {
  console.log("Next")
  if (currentIndex < cards.length - numVisibleCards()) {
    currentIndex++;
    cardsContainer.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 25)}px)`;
  }
});

