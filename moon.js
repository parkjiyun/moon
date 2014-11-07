var img;
var img2;

function setup() 
{
   createCanvas(800,800);
   bg = loadImage("bg.jpg");
   img = loadImage("ff.jpg");
   img2 = loadImage("star.jpg");
}

function draw() 
{
   background(bg);
   noStroke();


//earth
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(27,105,109);
   image(img, 400-img.width/2 + Math.cos(timing*2*PI)*200,           // x좌표
        400-img.height/2 + Math.sin(timing*2*PI)*200, // y좌표
        100,                                  // width
        100);            

//moon
   var duration = 1000;
   var timing2 = (new Date()%duration)/duration;

   fill(255,206,0);
   image(img2, 400-img2.width/2 + Math.cos(timing*2*PI)*200+ Math.cos(timing2*2*PI)*100,           // x좌표
        400-img2.height/2 + Math.sin(timing*2*PI)*200+ Math.sin(timing2*2*PI)*100, // y좌표
        30,                                  // width
        30);   
                                      // height

    var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(190,240,8);
   ellipse(400 + Math.cos(timing*2*PI)*300+ Math.cos(timing*2*PI)*70,           // x좌표
        400 + Math.sin(timing*2*PI)*300+ Math.cos(timing*2*PI)*70, // y좌표
        60,                                  // width
        60);                                  
}
