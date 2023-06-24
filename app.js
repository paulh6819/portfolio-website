
let graphicDesignElement = document.getElementById("graphic-design");

if (graphicDesignElement){

document.getElementById("graphic-design").addEventListener('click', function(){
  window.location.href = "graphic-design.html "
} );} else {
  console.log("there is no graphic design clickable poster here")
}

document.addEventListener('DOMContentLoaded', (event) =>{
  const hamburger = document.querySelector('.hamburger');
 
  
  const menu = document.querySelector('.menu');
 
  hamburger.addEventListener('click',function (){
    menu.classList.toggle('open');

   

  });
  });

  
  
let viewPortWidth = window.innerWidth = window.innerWidth;

let translateXValue = 50;
let rotateValue = ".3turn"

if (viewPortWidth > 500 ){

  translateXValue = 300;
  rotateValue = "2turn";
}
/*
anime({
    targets: 'div',
    translateX: translateXValue,
    rotate: rotateValue,
    
    duration: 800,
    
    backgroundColor: '#FFF',
    opacity: '.7',
    easing: 'easeInOutQuad'
  });
*/


setTimeout( () => {


  anime({
    targets: '.function-based-values-demo .el',
    translateX: function(el) {
      return el.getAttribute('data-x');
    },
    translateY: function(el, i) {
      return 45 + (-80 * i);
    },
 
    rotate: function() { return 55; },
    borderRadius: function() { 
      return ['50%', anime.random(3, 70) + '%']; 
    },
    scale: function() {
      return anime.random(1.5, 2.5); // The scale will be a random number between 0.5 and 2
    },
    duration: function() { return anime.random(1000,5000); },
    delay: function() { return anime.random(1,300); },
   
    
    
  });
}, 1500);




anime({
  targets: '.staggering-axis-grid-demo .l',
  translateX: anime.stagger(10, {grid: [14, 10], from: 'center', axis: 'x'}),
  translateY: anime.stagger(10, {grid: [14, 10], from: 'center', axis: 'y'}),
  rotateZ: anime.stagger([0, 90], {grid: [14, 10], from: 'center', axis: 'x'}),
  delay: anime.stagger(200, {grid: [14,10], from: 'center'}),
  easing: 'easeInOutQuad'
});

const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-15, 15),
  translateY: () => anime.random(-15,15),
  delay: anime.stagger(8, {from: 'last'})
})

.add({
  targets: '.stagger-visualizer div',
  opacity: [.5, 0],  // Animate opacity from 1 to 0
  easing: 'easeInOutQuad',  // Use the 'easeInOutQuad' easing function
  duration: 200
})

staggersAnimation.play();
/*

setTimeout(function() {
  document.querySelector('.stagger-visualizer').style.zIndex = '-1';
}, 5000);

*/





