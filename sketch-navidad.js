let img;
let offset = 0;
let easing = 0.05;

function setup() {
  createCanvas(800, 800);
  img = loadImage('https://i.ibb.co/CmB7gnB/arbol.png'); // Cargar una imagen al programa
}

function draw() {
  image(img, 0, 0); // Mostrar al máximo de opacidad
  let dx = mouseX - img.width / 2 - offset;
  offset += dx * easing;
  tint(255, 127); // Mostrar a media opacidad
  image(img, offset, 0);
}
