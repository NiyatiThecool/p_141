img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  world_start = loadSound("world_start.wav");
  setSprites();
  MarioAnimation();
  
}
function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');

    instializeInSetup(mario); 

    video = createCapture(VIDEO);
    video.size(800,400);
    video.parent('game_console');
}

function draw() {
  game()
 }

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

noseX = "";
noseY = "";
GameStatus = "";

function startGame()
{
  GameStatus = "start";
  document.getElementById("status").innerHTML = "Game is loading";
}

function game(){
  console.log("noseX = " + noseX+" ,noseY = "+ noseY);
}

