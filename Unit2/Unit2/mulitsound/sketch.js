let state = -1;
let s1, s2, s3;
function preload(){
  s1 =loadSound("assets/dreams.mp3");
  s2 = loadSound("assets/inspire.mp3");
  s2 = loadSound("assets/league.mp3");
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case -1:
      text("please click to begin",100,100);
      break; 

      case 0:
      
   if (!s1.isPlaying()) {
s1.play();    
      } 
      text("0", 100, 100);
      break;

    case 1:
      if (!s2.isPlaying()) {
        s2.play(); }  
      text("1", 100, 100);
      break;

    case 2:
      if (!s3.isPlaying()) {
        s3.play(); }  

      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state> 2) state = 0;

}
