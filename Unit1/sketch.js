let x
let y 
function setup() {
  createCanvas(400, 400);
  x = 0
  y = 0
}

function draw() {
  if (mouseIsPressed) {  
    fill("red");
    x = x + 1
    
   
  
  } else {
  background(220);
    text ("This is Bob. Bob is a nice and caring man. His friends and family all call him the sweetest person ever. As he was growing up however, people started to discover soemhting...unique about him. bob can get function his head differently than others. His face turns a different color and he detach his head. He was given the nickname Airhead in school. When he became old enough, he landed a job as the Airheads macot and shot commericals for it. Soon later, he was offered roles in movies and shows for his ability. Bob became successful over a floating head. Go Bob.", 20,100)
  ellipse(x+ 200, y+ 250, 50, 50) ;
  line(200, 275, 200, 350);
  line(200, 350, 180, 400) ;
  line(200, 350, 220, 400) ;
   line(150, 250, 200, 300) ;
   line(250, 250, 200, 300) ;
  
}
} 


