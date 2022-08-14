let circle1;
let circle2;
let circle3;
let scale1;
let scale2;
let scale3;
let scale4;
let ph;
let conduct;
let temp;
let turbiditiy;
let c0;
let c1;
let c2;
let c3;

function setup() {
  createCanvas(950,900);
  
  ph = createSlider(75, 225);
  ph.position(500, 400);
  ph.style('width', '200px');
  ph.style("transform", "rotate(90deg)");
  
  conduct = createSlider(75, 225);
  conduct.position(575, 400);
  conduct.style('width', '200px');
  conduct.style("transform", "rotate(90deg)");
  
  temp = createSlider(75, 225);
  temp.position(650, 400);
  temp.style('width', '200px');
  temp.style ("transform", "rotate(90deg)");
  
  turbidity = createSlider(75, 225);
  turbidity.position(725, 400);
  turbidity.style('width', '200px');
  turbidity.style("transform", "rotate(90deg)");
  
}
function draw() {
  background(255);
  
  stroke (0);
  fill(130, 130, 130);
  strokeWeight(10);
  
  //trafic lights rectangle
  rect(50, 50, 400, 200, 15);
  
  //visual measurements rectangle
  rect(500, 50, 400, 200, 15);
  
  //PH indicator
  let val1 = ph.value();
  stroke (0);
  strokeWeight(1);
  fill(255, 0, 0);
  rect(575, 75, 25, 150);
  fill(255, 255, 0);
  rect(575, 120, 25, 60);
  fill(0, 255, 0);
  rect(575, 140, 25, 20);
  stroke(0, 0, 255);
  strokeWeight (5);
  scale1 = line(575, val1, 600, val1);
  
  //conductivity scale
  let val2 = conduct.value();
  stroke (0);
  strokeWeight (1);
  fill(255,0, 0);
  rect(650, 75, 25, 150);
  fill(255, 255, 0);
  rect(650, 117, 25, 98);
  fill(0, 255, 0);
  rect(650, 183, 25, 14);
  stroke (0, 0, 255);
  strokeWeight (5);
  scale2 = line(650, val2, 675, val2);
  
  //temperature scale
  let val3 = temp.value();
  strokeWeight (1);
  stroke (0);
  fill (255, 0, 0);
  rect(725, 75, 25, 150);
  fill(255, 255, 0);
  rect(725, 183, 25, 42);
  fill(0, 255, 0);
  rect(725, 197, 25, 28);
  stroke (0, 0, 255);
  strokeWeight (5);
  scale3 = line(725, val3, 750, val3);
  
  //turbidity scale
  let val4 = turbidity.value();
  strokeWeight (1);
  stroke (0);
  fill (255, 0, 0);
  rect(800, 75, 25, 150);
  fill(255, 255, 0);
  rect(800, 131, 25, 94);
  fill(0, 255, 0);
  rect(800, 178, 25, 47);
  stroke (0, 0, 255);
  strokeWeight (5);
  scale4 = line(800, val4, 825, val4);
  
  strokeWeight(2);
  stroke (0);
  
  
  let c = color (130, 130, 130);
  let c1 = color (255, 0, 0);
  let c2 = color (255, 255, 0);
  let c3 = color(0, 255, 0);

  fill (c);
  //red circle
if (val1 < 120 || val2 < 117 || val3 < 183 || val4 < 131 || val1 > 180 || val2 > 216.6){
  fill(c1);
}
  circle1 = circle(150, 150, 50);
  
  //yellow circle (yellow between 120 < val1 < 140 + 160 < val1 < 180 + 120 < val1 < 140 + 160 < val1 < 180)
fill (c);
if (val1 > 120 && val1 < 140){
  fill (c2);
}  else if (val1 > 160 && val1 < 180){
  fill (c2);
} else if (val2 > 117 && val2 < 183){
  fill (c2);
} else if (val2 > 197 && val2 < 216.6){
  fill (c2);
} else if (val3 > 183 && val3 < 197){
  fill (c2);
} else if (val4 > 131 && val4 < 178){
  fill (c2);
}
if (val1 < 120){
  fill (c);
} else if (val2 < 117){
  fill (c);
} else if (val1 > 180){
  fill (c);
} else if (val2 > 216.6){
  fill (c);
} else if (val3 < 183){
  fill (c);
} else if (val4 < 131){
  fill (c);
}
circle2 = circle(250, 150, 50);
  
  //green circle
if (val1 > 140){
  fill(c3);
}
if (val2 > 183){
  fill(c3);
}
if (val3 > 197){
  fill(c3);
}
if (val4 > 178){
  fill (c3);
}
if (val1 > 160){
  fill(c);
}
if (val2 > 197){
  fill(c);
}
if (val1 < 140){
  fill (c);
}
if (val2 < 183){
  fill (c);
}
if (val3 < 197){
  fill (c);
}
if (val4 < 178){
  fill (c);
}
  circle3 = circle(350, 150, 50);
  
  fill (0);
  textSize(25);
  text('This example here is our planned', 50, 300);
  text('UI for our Audino as part of our project.', 50, 331);
  text('Each of the sliders correspond to the', 50, 362);
  text('scales above them. If all the values', 50, 393);
  text('are in the green the left screen the right', 50, 424);
  text('light goes green. If otherwise the lights', 50, 455);
  text('go to the most extreme value possible', 50, 486);
  text('based on the data given. Try it yourself.', 50, 517);
  textSize(20);
  fill(255, 0, 0);
  text('14', 545, 90);
  text('1', 555, 220);
  fill(0, 255, 0);
  text('0', 625, 90);
  text('5', 625, 220);
  fill(0, 0, 255);
  text('50', 700, 90);
  text('0', 710, 220);
  fill(255, 255, 0);
  text('100', 760, 90);
  text('0', 780, 220);
  fill(255, 0, 0);
  text('ph', 590, 550);
  fill(0, 255, 0);
  text('Conductivity (v)', 625, 571);
  fill(0, 0, 255);
  text('Temperature (celsius)', 690, 550);
  fill(255, 255, 0);
  text('Turbidity (%)', 780, 571);
}