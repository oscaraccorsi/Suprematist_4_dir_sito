let baseURLSound = 'https://oscaraccorsi.github.io/mp3_files/';
let soundList = ['ac.mp3',
                 'ti.mp3',
                 'tic.mp3',
                 'ticahh.mp3',
                 'ticMin.mp3',
                 'glitch01.mp3',
                 'electro.mp3',
                 'grat.mp3',
                 'nsy.mp3'];
let soundChoice;

let h;
let direction = [giuSu, suGiu, sxDx, dxSx];
let choice;

let baseURLImage = "https://oscaraccorsi.github.io/LoFi/";
let logo;

let img;
let palette = [];
let pictureList = ['processor01.png', 
                   'processor02.png', 
                   'processor03.png', 
                   'processor04.png', 
                   'processor05.png',  
                   'processor06.png', 
                   'processor07.png',
                   'processor08.png',
                   'processor09.png', 
                   'processor10.png',
                   'processor11.png',
                   'processor12.png', 
                   'processor13.png',
                   'processor14.png',
                   'processor15.png',
                   'processor16.png',
                   'processor17.png',
                   'processor18.png',
                   'processor19.png',
                   'processor20.png',
                   'processor21.png',
                   'processor22.png',
                   'processor23.png',
                   'processor24.png',
                   'processor25.png',
                   'processor26.png'];

let xLimitSx, xLimitDx, yLimitUp, yLimitDown;
let xMomLimitDx, xMomLimitSx, yMomLimitUp, yMomLimitDown;

let x, xx;
let y, yy;


let Inc = 1;

let fr = [16, 22, 38, 60];

let divArray = [4, 6, 8, 10];
let divisoreX; 
let divisoreY;
let timeArray = [60, 90, 120, 150, 180];
let timeSet;



//---------------------------------------------------------preload
function preload() {
  h = round(random(25));
  img = loadImage(baseURLImage + pictureList[h]);
  logo = loadImage(baseURLImage + "good one white.png");

  let periodSound = round(random(0, 8));
  soundChoice = loadSound(baseURLSound + soundList[periodSound]);

  divisoreX = random(divArray);
  divisoreY = divisoreX+2;
  timeSet = random(timeArray);
   
}

//-----------------------------------------------------------SETUP
function setup() {
  let canvas =  createCanvas(windowWidth, windowHeight);
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  strokeWeight(1);
  choice = random(direction);
  
  //setInterval(mousePressed, 1000*timeSet);
  setInterval(reloadPage, 1000*(timeSet+0.1));
  
  
  console.log(pictureList[h], h, timeSet); 

//------------------------------------------------palette
  
  img.loadPixels();
  
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    let alpha = round(random(100, 200));
    let c = color(r, g, b, alpha);
    palette.push(c);
  }
  //---------------------------------------rev
  reverb = new p5.Reverb();
  reverb.process(soundChoice, 6, 0, false);
  soundChoice.play();
  soundChoice.setVolume();

//-----------------------------------------coordinate 
  xLimitSx = width/divisoreX;
  xLimitDx = width-width/divisoreX;
  yLimitUp = height/divisoreY;
  yLimitDown = height-height/divisoreY;
  
  y = round(random(yLimitUp, yLimitDown));
  yy = round(random(yLimitUp, yLimitDown));
  
  x = round(random(xLimitSx, xLimitDx));
  xx = round(random(xLimitSx, xLimitDx));
  
  xMomLimitDx = round(random(x, xLimitDx));
  xMomLimitSx = round(random(x, xLimitSx));
  yMomLimitUp = round(random(y, yLimitUp));
  yMomLimitDown = round(random(y, yLimitDown));
  
  stroke(random(palette));
}
//--------------------------------------------------windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//---------------------------------------------------------DRAW 
function draw() {
  choice();
}

//-----------------------------------------dxSx
function dxSx() {
  line(x, y, x, yy);
  x -= Inc;
  if (x < xMomLimitSx) {
    x = round(random(xLimitSx, xLimitDx));
    y = round(random(yLimitUp, yLimitDown));
    yy = round(random(yLimitUp, yLimitDown));
    
    xMomLimitSx = round(random(x, xLimitSx));
    stroke(random(palette));
    
    choice = random(direction);  
  }
  
  if (x >= (xLimitDx)-10) {
    reloadPage(); 
  }
}
//-----------------------------------------sxDx
function sxDx() {
  line(x, y, x, yy);
  x += Inc;
  if (x > xMomLimitDx) {
    x = round(random(xLimitSx, xLimitDx));
    y = round(random(yLimitUp, yLimitDown));
    yy = round(random(yLimitUp, yLimitDown));
    
    xMomLimitDx = round(random(x, xLimitDx));
    stroke(random(palette));
    
    choice = random(direction);  
  }
  
  if (x <= (xLimitSx)+10) {
    reloadPage(); 
  }
}

//-----------------------------------------suGiu
function suGiu() {
  line(x, y, xx, y);
  y += Inc;
  
  if (y > yMomLimitDown) {
    y = round(random(yLimitUp, yLimitDown));
    x = round(random(xLimitSx, xLimitDx));
    xx = round(random(xLimitSx, xLimitDx));
    
    yMomLimitDown = round(random(y, yLimitDown));
    stroke(random(palette));
    
    choice = random(direction);
  }
  
  if (y <= (yLimitUp)+10) {
    reloadPage(); 
  }
}

//-----------------------------------------giuSu
function giuSu() {
  line(x, y, xx, y);
  y -= Inc;
  if (y < yMomLimitUp) {
    y = round(random(yLimitUp, yLimitDown));
    x = round(random(xLimitSx, xLimitDx));
    xx = round(random(xLimitSx, xLimitDx));
    
    yMomLimitUp = round(random(y, yLimitUp));
    stroke(random(palette));
    
    choice = random(direction);
  }
  
  if (y >= (yLimitDown)-10) {
    reloadPage(); 
  }
}

//----------------------------------reLoad
function reloadPage() {
  window.location.reload();
}

function mousePressed() {
  imageMode(CENTER);
  let xLogo = width - 40;
  logo.resize(40, 0);  
  image(logo, xLogo, height - 40);
  tint(200);
  imageMode(CORNER);
  save();
  clear();
}

function keyPressed() {
  if (keyCode === 32 ) {
    reloadPage();   
  }
}
