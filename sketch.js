var canvas, sidebar, body;
var img, bodyImg;




function preload() {
  img = loadImage("navFlow.png");
  bodyImg = loadImage("test.jpg")
}

function setup() {

//preload?
  canvas = createCanvas(displayWidth*0.8, displayHeight*0.8);
  //background(120, 190, 255);  // fill(180, 200, 40);

  canvas.background(255, 120, 190);
  //canvas.fill(255, 120, 190);
  //canvas.position(300, 50);


  img = createImg("navFlow.png");
  img.position(width/10, height/10);
  img.size(width/7, height*0.8);

  body = createGraphics(3*(width/5), height*0.8);
  //body.position(  2*(width/10) + width/5 , height/10);
  body.background(180, 180, 180);
  image(body,   2*(width/10) + width/5 , height/10);
  image(bodyImg, 2*(width/10) + width/5 , height/10)
}

function draw() {
  // noStroke();
  // strokeWeight(6);
  // stroke(180, 100, 240);
  // for (var i = 0; i < width; i += 15) {
  //   line(i, 0, i, height);
  // }
}
