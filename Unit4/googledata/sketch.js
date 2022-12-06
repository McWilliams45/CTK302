var bubbles = [];
let url = "";
let i1; 


function setup() {
  i1 = loadImage("assets/tv.webp") ;

  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
   let key = "15hfvWlX_T-UwXKGzIfv4hDrCylFHxnkK_iVj8j8TMFk"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite movie?"],
        data[i]["What do you think is the worst movie of all time?"],
        data[i]["Which do you prefer?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background(i1);
   

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  } 
} 


// my Bubble class
class Bubble {
  constructor(favorite, worst, perfer) {
    // only the order of these parameters matters!
    this.favorite = favorite;
    this.worst = worst;
    this.perfer = perfer;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.favorite + "\n" + this.worst + "\n" + this.perfer,
      this.pos.x,
      this.pos.y
    );
  
  this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    
  }
  
  
}
