var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["55dd613d-fb83-4a2d-918c-dcf3310f4222","50cea824-64cc-4775-89f0-7abc20b8af7e","a0d3a997-1ef9-4909-9a46-e9f83eb3f11d","4f0f1996-1ace-48b6-a9a5-82eabe60fcf1","3f1c8e27-c42e-47d8-9bfd-551d4a568cf1","d2b41cd9-6dd2-45eb-8352-950c3b035f10","b2119729-1a61-419e-8146-f636d6b00a9c"],"propsByKey":{"55dd613d-fb83-4a2d-918c-dcf3310f4222":{"name":"striker","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"50cea824-64cc-4775-89f0-7abc20b8af7e":{"name":"playerMallet","sourceUrl":null,"frameSize":{"x":214,"y":187},"frameCount":1,"looping":true,"frameDelay":12,"version":"m_qUh_A7udUJFBYkYzSj.oQh1U3hmE0i","loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":187},"rootRelativePath":"assets/50cea824-64cc-4775-89f0-7abc20b8af7e.png"},"a0d3a997-1ef9-4909-9a46-e9f83eb3f11d":{"name":"computerMallet","sourceUrl":null,"frameSize":{"x":296,"y":246},"frameCount":1,"looping":true,"frameDelay":12,"version":"b3N1yxtpwyCej3MgZDLbSXOHNRdWI6_2","loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":246},"rootRelativePath":"assets/a0d3a997-1ef9-4909-9a46-e9f83eb3f11d.png"},"4f0f1996-1ace-48b6-a9a5-82eabe60fcf1":{"name":"goal1","sourceUrl":null,"frameSize":{"x":453,"y":137},"frameCount":1,"looping":true,"frameDelay":12,"version":"a6ajNTYS3CwGICBNFylKAVJggPrQH_vg","loadedFromSource":true,"saved":true,"sourceSize":{"x":453,"y":137},"rootRelativePath":"assets/4f0f1996-1ace-48b6-a9a5-82eabe60fcf1.png"},"3f1c8e27-c42e-47d8-9bfd-551d4a568cf1":{"name":"goal2","sourceUrl":null,"frameSize":{"x":453,"y":137},"frameCount":1,"looping":true,"frameDelay":12,"version":"WIbqVXmAlntQpchGgxbv1bowPBhvtEvf","loadedFromSource":true,"saved":true,"sourceSize":{"x":453,"y":137},"rootRelativePath":"assets/3f1c8e27-c42e-47d8-9bfd-551d4a568cf1.png"},"d2b41cd9-6dd2-45eb-8352-950c3b035f10":{"name":"emoji","sourceUrl":"assets/api/v1/animation-library/gamelab/sVdVt.E6my3YJGj92HsRTqfsZFbNDfoW/category_emoji/emoji_33.png","frameSize":{"x":261,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"sVdVt.E6my3YJGj92HsRTqfsZFbNDfoW","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sVdVt.E6my3YJGj92HsRTqfsZFbNDfoW/category_emoji/emoji_33.png"},"b2119729-1a61-419e-8146-f636d6b00a9c":{"name":"trophy","sourceUrl":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png","frameSize":{"x":381,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"7x2COokMDKpyqrZGY9g1FYvMdliu6wtd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7x2COokMDKpyqrZGY9g1FYvMdliu6wtd/category_icons/trophy.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;
var compScore = 0;
var playerScore = 0;

//Variable that stores different game states
var gameState = "serve";

var goal1=createSprite(200,19,100,20);
goal1.setAnimation("goal1");
goal1.scale = 0.2;

var goal2=createSprite(200,381,100,20);
goal2.setAnimation("goal2");
goal2.scale = 0.2;

// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "orange";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "DeepPink";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "Blue";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "Yellow";

// creating objects and giving them colours
var striker = createSprite(200,200);
striker.setAnimation("striker");
striker.scale = 0.07;

var playerMallet = createSprite(200,52,50,10);
playerMallet.setAnimation("playerMallet");
playerMallet.scale = 0.25;

var computerMallet = createSprite(200,345,50,10);
computerMallet.setAnimation("computerMallet");
computerMallet.scale = 0.2;

//Prize and emoji for end of game
var emoji = createSprite(80, 300);
emoji.setAnimation("emoji");
emoji.scale = 0.3;
emoji.visible = false;
var trophy = createSprite(320, 300);
trophy.setAnimation("trophy");
trophy.scale = 0.2;
trophy.visible = false;

playSound("assets/category_background/repitition.mp3", false);

function draw() {
  //clear the screen and shows background
  background("ForestGreen");
  textSize(18);
  fill("black");
  text("Air Hockey Game", 10, 20);
  
  //displays the score of player and computer
  textSize(20);
  fill("DeepSkyBlue");
  text(compScore, 25, 225);
  text(playerScore, 25, 185);
 
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  
  if (gameState == "serve") 
  {
  //display text
  textSize(20);
  textFont("Times New Roman");
  fill("orange");
  text("Press Space to Strike", 120, 180);
  fill("white");
  text("Get your score go up to 5 to win against the computer by getting the striker to the goal", 50, 100, 330, 50);
  text("Keep the striker away from your goal to get a chance to win. Good Luck!", 50, 240, 330, 50);
  
  //serve the striker when space is pressed
  if (keyDown("space")) {
    serve();
    gameState="play";
  }
  }
  if (gameState == "play") {
    if (keyDown("space")) {
      serve();
    }
    //make the player paddle move with the Arrow keys
    paddleMovement();
    
    //AI for the computer paddle
    //make it move with the striker's y position
    computerMallet.x = striker.x;
    
    //increases score for player when striker touches the goal
    // on the opposite side
  if (striker.isTouching(goal1)) {
    compScore = compScore + 1;
    fill("pink" );
    textSize(40);
    text("CompScore: " + compScore, 80, 150);
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  }
  if (striker.isTouching(goal2)) {
    playerScore = playerScore + 1;
    fill("pink" );
    textSize(40);
    text("PlayerScore: " + playerScore, 80, 150);
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
  }
    if (playerScore==5 || compScore==5) {
      gameState="end";
    }
  }
  if (gameState == "end") {
      //if a player's score reaches 5, then screen shows "Game over!"
  //screen shows score, who won, and a key to play again
      playSound("assets/default.mp3", false);
      stopSound("assets/category_background/repitition.mp3");
      trophy.visible = true;
      emoji.visible = true;
  if (playerScore == 5) {
    textSize(30);
    fill("Orange");
      text("You win Game Over!", 100, 110, 300, 200);
    textSize(25);
    text("Player Wins - Score: " + playerScore, 100, 180);
    text("Press r to play again", 100, 230);
  }
  
  if (compScore == 5) {
    textSize(30);
    fill("Orange");
      text("Nice try, Game Over!", 80, 110, 300, 200);
    textSize(25);
    text("Computer Wins - Score: " + compScore, 80, 180);
    text("Press r to play again", 100, 230);
  }
  
  //Press r to restart the game
  if (keyWentDown("r")) {
    playerScore = 0;
    compScore = 0;
      trophy.visible = false;
      emoji.visible = false;
    playerMallet.x = 200;
    playerMallet.y = 52;
    computerMallet.x = 200;
    computerMallet.y = 345;
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
      //plays background music for game
      playSound("assets/category_background/repitition.mp3", false);
      gameState = "serve";
  }
  }
  
  drawSprites();
}






function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}

function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
