var diametro;
diametro = 50;
//variables globales: viven fuera de la funcion
//variables locales: viven dentro de la funcion ej funcion draw
//las funciones tambien se DECLARAN 

function nombreFuncion(){
  
}

function setup() {
  createCanvas(400, 300);
  background(204, 10, 20);
}

//draw se ejecuta despues de setup, 60 por segundo
function draw() {
  ///x,y,width,height. Las medidas son en pixeles.
  // codigo corre de arriba a abajo, igual que css, por lo que se definen las variables antes, de las formas.
  //camelCase
  //variable local es mas seguro, porque es mas facil ubicar el error y ademas se ejecuta hasta que termina la funcion
  var anchoBorde = 3;
  anchoBorde = 3;
  
  background(204, 10, 20);
  style1();
  //mouseX,mouseY es que sigue al mouse
  ellipse(100, 100, diametro, 70);
}

//declaracion de funcion de estilo de elipse
function style1(){
  strokeWeight(1);
  stroke(2,43,4);
  fill(35,90,35);
}

function style2(){
  strokeWeight(1);
  stroke(2,43,4);
  fill(35,90,35);
}

