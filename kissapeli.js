let taustakuva;
let kissakuva;
let kissa;

let taustan_korkeus = 400;
let taustan_leveys = 800;
let lautan_Y = taustan_korkeus - 50;
let laudan_korkeus = 20
let laudan_leveys = 50

function preload() {
  taustakuva = loadImage('https://igno.cc/opetus/kuvat/tausta.png');
  kissakuva = loadImage('https://igno.cc/opetus/kuvat/cat.png');
}
function setup() {
   kissa = new Kissa();
  var canvas = createCanvas(taustan_leveys, taustan_korkeus);
angleMode(DEGREES)
}

function draw() {
  image(taustakuva, 0, 0, taustan_leveys, taustan_korkeus);

  luo_lautta()
  kissa.liikuta();
}

function luo_lautta() {
  fill('red')
  if (mouseX > taustan_leveys) {
    rect(taustan_leveys -20, lautan_Y, laudan_leveys, laudan_korkeus, 30, 30, 10, 10)
 } else {
    rect(mouseX, lautan_Y, laudan_leveys, laudan_korkeus, 30, 30, 10, 10)
 }
}

class Kissa {
  constructor() {
    this.x = 30
    this.y = 200
    this.korkeus = 50
    this.leveys = 50
    this.xNopeus = 2;
    this.yNopeus = -2;
    this.kulma=0
  }
  liikuta() {


   this.x += this.xNopeus;
   this.yNopeus += 0.05
   this.y += this.yNopeus

   if (this.y + this.korkeus > lautan_Y) {
      if (this.x > mouseX && this.x < mouseX + laudan_leveys) {
        this.yNopeus = -abs(this.yNopeus);
      }
    }

    this.kulma += 1;

    push();
    translate(this.x, this.y);
    rotate(this.kulma);
    imageMode(CENTER);
    image(kissakuva, 0, 0, this.leveys, this.korkeus)
    pop();
  }
}
