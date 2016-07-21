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
noFill();
x1 = 85, x2 = 10, x3 = 90, x4 = 15;
y1 = 20, y2 = 10, y3 = 90, y4 = 80;
bezier(x1, y1, x2, y2, x3, y3, x4, y4);
fill(255);
steps = 10;
for (i = 0; i <= steps; i++) {
  t = i / steps;
  x = bezierPoint(x1, x2, x3, x4, t);
  y = bezierPoint(y1, y2, y3, y4, t);
  ellipse(x, y, 5, 5);
}
  style1();
  lineas();
}


function lineas() {
  background(204);
  var t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  beginShape();
  curveVertex(10, 26);
  curveVertex(10, 26);
  curveVertex(83, 24);
  curveVertex(83, 61);
  curveVertex(25, 65);
  curveVertex(25, 65);
  endShape();
}
//declaracion de funcion de estilo de elipse
function style1(){
  strokeWeight(1);
  stroke(2,43,4);
  fill(35,90,35);
}

function style2(){
  strokeWeight(1);
  stroke(2,23,8);
  fill(35,90,35);
}




