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

}

function touchStarted() {
  getAudioContext().resume();
} 
