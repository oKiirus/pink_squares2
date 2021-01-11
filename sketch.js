function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 400, 50, 10)

  fixed1 = createSprite(300, 200, 50, 20);
  moving1 = createSprite(400, 400, 10, 20)
}

function draw() {
  background("lightblue"); 
  
  if(collideF(fixed, moving) ){

    fixed.shapeColor = "pink"
    moving.shapeColor = "pink"
  }

  else {
    fixed.shapeColor = "grey"
    moving.shapeColor = "grey"
  }

  if(collideF(fixed1, moving1) ){

    fixed1.visible = 0
    moving1.visible = 0
  }

  else {
    fixed1.visible = 1
    moving1.visible = 1
  }

  moving.x = mouseX
  moving.y = mouseY

  moving1.x = mouseX
  moving1.y = mouseY - 50
  

  drawSprites();
}

