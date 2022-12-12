let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = 0;
let font1
let x1 =0;
let x2 =0;
let x3 =0;
let x4 =0;
let i1; 


function preload(){
  song = loadSound("assets/jbr.mp3"); 
}
function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/ag.otf");
  i1 = loadImage("assets/chi.jpeg");
  song.play(); 
  
  

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Chicago,IL,US&units=imperial&";

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
  description = weather.weather[0].description;
  
}

function draw() {
  background(i1);
  
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
         
      }
      break;
  
    case 1:
      fill("red");
      textFont(font1);
      textSize(20);
      text("What is the weather in " + weather.name + "?", 20, 30);
      textSize(15);
      text("Windspeed is " + windspeed, 20, 60);
      text("Temperature is " + temperature, 20, 80);
      text("Humidity is " + humidity, 20, 100);
      text(description, 20, 120);
      

      y = map(temperature, -10, 100, 5, height-10);
      rect(width-30, height-10, 10, -temperature);


      noStroke();
      // cloud

      push();
      translate(x, 0);

      fill(255, humidity * 4);
      //1st cloud
      ellipse(65,40,100,30);
      ellipse(10,40,100,50);
      ellipse(15,60,140,20);
      ellipse(1,55,260,30);
      pop();

      push();
      translate(x1, 0);

      fill(255, humidity * 5);
      // 2nd cloud
      ellipse(337,112,130,20);
      ellipse(442,117,130,20);
      ellipse(400,100,130,40);
      ellipse(379,118,130,20);
      pop();
      push();
      translate(x2, 0);

      fill(255, humidity * 8);
      //3rd cloud
      ellipse(50,260,270,30);
      ellipse(23,208,100,70);
      ellipse(1,232,160,60);
      ellipse(1,255,250,40);
      ellipse(90,234,80,40);
      pop();
      push();
      translate(x3, 0);

      fill(255, humidity * 7);
      //4th cloud
      ellipse(318,295,130,50);
      ellipse(262,313,80,10);
      ellipse(370,270,130,60);
      ellipse(405,313,200,10);
      ellipse(420,296,130,40);
      pop();
      push();
      translate(x4, 0);

      fill(255, humidity * 5);
      //5th cloud
      ellipse(53,395,230,40);
      ellipse(209,400,230,20);
      ellipse(90,376,150,70);
      ellipse(131,345,90,35);
      ellipse(190,375,120,55);
      pop();
      
      x = x + windspeed / 3;
      x1 = x1+windspeed / 3.1;

      x2 = x2+windspeed / 3.4;

      x3 = x3+windspeed / 2.9;

      x4 = x4+windspeed / 2.3;

      if (x > width) x = random(-2000);
      if (x1 > width) x1 = random(-2000);
      if (x2 > width) x2 = random(-2000);
      if (x3 > width) x3 = random(-2000);
      if (x4 > width) x4 = random(-2000);
  
      
    
      break;
      
  }
}

function touchStarted() {
  getAudioContext().resume();
}  

 
