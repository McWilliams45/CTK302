let downtown;

 function preload() {
  downtown = loadSound("downtown.mp3");  
}


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER); 
  downtown.play() ; 
}

function draw() {
 background("black");
 fill("white");
 text ("the name of the song is downtown.", 100, 100, 400, 400 ) ; 

}

function mouseReleased() {
  if (downtown.isPlaying()) {
    downtown.pause() ; 
  } else {
    downtown.play() ; 
  }
}

function touchStarted() {
  getAudioContext().resume();
} 
