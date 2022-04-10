const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var rotator1, rotator2, rotator3, rotator4, rotator5, rotator6;
var block1, block2, block3, block4, block5;
var plane1, plan2, plane3, plane4;

var angle1=60;
var angle2=60;
var angle3=60;
var angle4=60;
var angle5=60;
var angle6=60;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane1 = Bodies.rectangle(650,580,1450,15,plane_options);
    World.add(world,plane1);
    plane2 = Bodies.rectangle(650,5,1450,15,plane_options);
    World.add(world,plane2);
    block1=Bodies.rectangle(200,400,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(400,400,150,20,plane_options);
    World.add(world,block2);
    block3=Bodies.rectangle(600,400,150,20,plane_options);
    World.add(world,block3);
    block4=Bodies.rectangle(800,400,150,20,plane_options);
    World.add(world,block4);
    block5=Bodies.rectangle(1000,400,150,20,plane_options);
    World.add(world,block5);
    //created multiple of particle bodies 
    var particle_options = {
      restitution:0.99,
      friction:0.1
    }

    particle1 = Bodies.circle(300,10,10,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(300,10,10,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(300,10,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(300,10,10,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(300,10,10,particle_options);
    World.add(world,particle5);
    particle6 = Bodies.circle(900,10,10,particle_options);
    World.add(world,particle6);
    particle7 = Bodies.circle(900,10,10,particle_options);
    World.add(world,particle7);
    particle8 = Bodies.circle(900,10,10,particle_options);
    World.add(world,particle8);
    particle9 = Bodies.circle(900,10,10,particle_options);
    World.add(world,particle9);
    particle10 =Bodies.circle(900,10,10,particle_options);
    World.add(world,particle10);

    var rotator_options={
      // isStatic=true
      // isStatic true
      // isStatic:false
       isStatic:true
    };

    // rotator1 = rectangle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

    // rotator1 = Bodies.rectangle();
    // World.add(world,rotator1);

    // rotator1 = Bodies.circle(250,200,150,20,rotator_options);
    // World.add(world,rotator1);

     rotator1 = Bodies.rectangle(300,200,150,20,rotator_options);
     World.add(world,rotator1);

    rotator2 = Bodies.rectangle(300,200,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(300,200,150,20,rotator_options);
    World.add(world,rotator3);
      
    rotator4 = Bodies.rectangle(900,200,150,20,rotator_options);
    World.add(world,rotator4);

   rotator5 = Bodies.rectangle(900,200,150,20,rotator_options);
   World.add(world,rotator5);

   rotator6 = Bodies.rectangle(900,200,150,20,rotator_options);
   World.add(world,rotator6);

    //styling the bodies here
    fill("black");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}




function draw(){
    background("grey");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane1.position.x,plane1.position.y,1450,20);
  rect(plane2.position.x,plane2.position.y,1450,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(block3.position.x,block1.position.y,150,20);
  rect(block4.position.x,block1.position.y,150,20);
  rect(block5.position.x,block2.position.y,150,20);
  
  //created shape for all the paticles
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  ellipse(particle6.position.x,particle1.position.y,10);
  ellipse(particle7.position.x,particle2.position.y,10);
  ellipse(particle8.position.x,particle3.position.y,10);
  ellipse(particle9.position.x,particle4.position.y,10);
  ellipse(particle10.position.x,particle5.position.y,10);

  //created shape for all the rotators
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.504;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.497;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.500;
 
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator4.position.x,rotator4.position.y);
  rotate(angle4);
  rect(0,0,150,20);
  pop();
  angle4 +=0.504;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator5.position.x,rotator5.position.y);
  rotate(angle5);
  rect(0,0,150,20);
  pop();
  angle5 +=0.497;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator6.position.x,rotator6.position.y);
  rotate(angle6);
  rect(0,0,150,20);
  pop();
  angle6 +=0.500;
}
