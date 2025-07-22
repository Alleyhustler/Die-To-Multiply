const images = ['/pictures/black_bjd.png', '/pictures/white_bjd.png'];

const rand = Math.floor(Math.random()*images.length);
const src = images[rand];

console.log(rand, src);

const img = document.createElement('IMG');
img.src = src;

img.style.position = "fixed";
img.style.right = "0px";
img.style.bottom = "-5px";
img.style.zIndex = "-1x";

document.body.appendChild(img); 

