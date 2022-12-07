let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let f1; 
let i1; 
function preload(){
  fontRegular = loadFont('assets/font.ttf'); 
}
  
function setup() {
  i1 = loadImage("assets/weather.jpeg") ;
  createCanvas(700, 700);
  f1 = loadFont("assets/font.ttf") ;
  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Wilmington,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=3c67c32b92437300a2e58176d12dea08" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity; 

}

function draw() { 
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      
      let bg  = 0;
      
     // if (temperature < 50){
     //   temp = map (temperature, 0, 50, 0, 255 ); 
     //   background(0, 0 ,bg);
      
 // } else {
 //   bg = map(temperature, 50, 100, 0, 255);
 //   background(bg, 0, 0); 
 // }
      background(i1);  
      fill("black"); 
      textFont(f1, 20);
      text("What is the weather in ", 20,20); 
      text( weather.name + "?", 20, 30);
      text("windspeed is ",20,50); 
      text(windspeed, 20, 70);
      text("temperature is " + temperature, 20, 90);
      text("humidity is " + humidity, 20, 110);
      

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
