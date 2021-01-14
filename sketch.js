var b1, inp, heading;
var gs = 0;
var plc = 0;

var db;

function setup() {
  createCanvas(windowWidth, windowHeight-30);

  b1 = createButton("Submit");
  b1.position(910, 570);

  inp = createInput();
  inp.position(850, 530);

  heading = createElement("h1");
  heading.html("Car Racing Game");
  heading.position(815, 60);

  b1.mousePressed(button);

  db = firebase.database();
  db.ref("gamestate").on("value", function(data) {
    gs = data.val();
  })

  db.ref("plCount").on("value", function(data) {
    plc = data.val();
  })

  console.log("working");
}

function draw() {
  background(255,255,255);  
  drawSprites();
  stroke("black");
  text(mouseX + ", " + mouseY, mouseX, mouseY);
}

function button() {
  plc++;
  db.ref("/").update({plCount : plc});
  console.log("working");
}