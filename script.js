let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let center_button = document.getElementById('centerButton');
let center_text = document.getElementById('centerText');
let header = document.querySelector('header');

window.addEventListener('scroll',function(){
   let value = this.window.scrollY;
   stars.style.left = (value*0.25) + 'px';
   moon.style.top = (value*1.05) + 'px';
   mountains_behind.style.top = (value*0.5) + 'px';
   header.style.top = (value*0.5) + 'px';
   mountains_front.style.top = (value*0) + 'px';
   center_text.style.marginRight = (value*4) + 'px';
   center_text.style.marginTop = (value*1.5) + 'px';
   center_button.style.marginTop = (value*1.5) + 'px';
})