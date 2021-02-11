function setup() {
  createCanvas(200, 200);
  background(0);
  fill(255);
  textAlign(CENTER);
  text("Klikkaile taidetta", 100, 100);
}

let klikattu = 0;

function mouseClicked() {
  klikattu++;
}

function draw() {

  if(klikattu > 0) {
    pixelDensity(1);
    loadPixels();

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let a = (x + y * width) * 4;

        let mustavalkoinen = random(255);
        pixels[a] = mustavalkoinen;
        pixels[a + 1] = mustavalkoinen;
        pixels[a + 2] = mustavalkoinen;
        pixels[a + 3] = random(255);

        if (klikattu > 1) {
          var etaisyys = dist(x, y, mouseX, mouseY);

          if (etaisyys < 80) {
            pixels[a] = random(255);
            pixels[a + 1] = random(255);
            pixels[a + 2] = random(255);
            pixels[a + 3] = 255;
          }
        }
        if (klikattu > 2) {
          if (x < mouseX + 20 && x > mouseX - 20) {
            if (y < mouseY + 20 && y > mouseY - 20) {
              pixels[a] = random(255);
              pixels[a + 1] = 0;
              pixels[a + 2] = 0;
              pixels[a + 3] = random(255);
            }
          }
        }
        if (klikattu > 3) {
          if (x > mouseX + 20 && x < mouseX + 40) {
            if (y < mouseY + 20 && y > mouseY - 20) {
              pixels[a] = random(0);
              pixels[a + 1] = random(255);
              pixels[a + 2] = random(0);
              pixels[a + 3] = random(255);
            }
          }
        }
        if (klikattu > 4) {
          if (x > mouseX - 40 && x < mouseX - 20) {
            if (y < mouseY + 20 && y > mouseY - 20) {
              pixels[a] = random(0);
              pixels[a + 1] = random(0);
              pixels[a + 2] = random(255);
              pixels[a + 3] = random(255);
            }
          }
        }
      }
    }
    updatePixels();
  }
}
