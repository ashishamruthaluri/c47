var cat,catImage
var dog,dogImage
var water,waterImage
var milk,milkImage
var mouse,mouseImage
var gameState = "start"
var score = 0
var bg1,bg2,bg3,bg1Image,bg2Image,bg3Image
var ground
var foodGroup
var obstacleGroup

function preload(){
  catImage = loadImage("cat.png")
  dogImage = loadImage("dog.png")
  waterImage = loadImage("water.png")
  mouseImage = loadImage("mouse.png")
  milkImage = loadImage("milk.png")
  bg1Image = loadImage("bg1.jpg")
  bg2Image = loadImage("bg2.jpg")
  bg3Image = loadImage("bg3.webp")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite (width/2,height/2,50,50)
  bg2 = createSprite (width/2,height/2,50,50)
  bg3 = createSprite(width/2,height/2,50,50)
  cat = createSprite(50, 850, 50, 50);
  cat.debug = false
  cat.setCollider("rectangle",0,0,70,70)
  cat.addImage(catImage)
  cat.scale = 0.6
  bg1.addImage(bg1Image)
  bg2.addImage(bg2Image)
  bg3.addImage(bg3Image)
  bg1.scale = 3
  bg2.scale = 11
  bg3.scale = 1
  cat.visible = false
  bg1.visible = false
  bg2.visible = false
  bg3.visible = false

  if (gameState == "start"){
    bg2.visible = true
    button = createButton("PLAY") 
    button.position (width/2,height/2)
    button.size (100,50)
    button.mousePressed(()=>{
      button.hide()
    gameState = "PLAY"
    
    //text("Life of a cat",width/2 +20 ,220)
    
    })
  }
 
}

    function draw() {
      
    bg2.visible = true
    if (gameState == "PLAY"){
      bg1.visible = true
    bg2.visible = false
    bg3.visible = false

   
    
     bg1.velocityX = -3
    if(bg1.x < 800){
      bg1.x = width/2}

      
    cat.visible = true
    
    if (cat.isTouching(obstacleGroup)){
      cat.destroy()
      gameState = "end"

    }
    if (cat.isTouching(foodGroup)){
      foodGroup.destroy()
      gameState = "end"

    }
    controls()
    obstacles()
    food()
    
   
    
  }
  if (gameState == "end"){
    bg3.visible = true
    bg1.visible = false
    bg2.visible = false
    cat.destroy()
    mouse.destroy()
    dog.destroy()
    water.destroy()
    milk.destroy()
    
    
  
  } 

  
  drawSprites();
  
  if(gameState = "start"){
    fill("black")
    text("Life of a cat",width/2 +10,220)
    if (gameState = "PLAY"){
      fill("black")
      text("Score:0,50,50")


    }
    
    
  }
}

  
  
  
  

function controls(){
 if (keyDown(LEFT_ARROW)){
cat.x -= 5
 }
 if (keyDown(RIGHT_ARROW)){
  cat.x += 5
   }
   if (keyDown(DOWN_ARROW)){
    cat.y += 5
     }
     if (keyDown(UP_ARROW)){
      cat.y -= 5
       }

}
function obstacles(){
if (frameCount%500===0){
  water = createSprite(900, 800, 50, 50);
  dog = createSprite(600, 900, 50, 50);
  dog.addImage(dogImage)
  water.addImage(waterImage)
  dog.velocityX = -3
  water.velocityX = -3
  dog.scale = 0.4
  water.scale = 0.2
  dog.visible = true
  water.visible = true
  dog.debug = false
  dog.setCollider("rectangle",0,0,70,70) 
  water.debug = false
  water.setCollider("rectangle",0,0,70,70)
  dog.lifetime=1300
  water.lifetime=1300
  obstacleGroup.add(dog)
  obstacleGroup.add(water)


}
}
function food(){
if (frameCount%600===0){
  milk = createSprite(1050, 950, 50, 50);
  mouse = createSprite(1500, 800, 50, 50);
  mouse.debug = false
  mouse.setCollider("rectangle",0,0,70,70) 
  milk.debug = false
  milk.setCollider("rectangle",0,0,70,70)
  milk.addImage(milkImage)
  mouse.addImage(mouseImage)
  mouse.scale = 0.2
  milk.scale = 0.4
  mouse.visible = true
  milk.visible = true
  mouse.velocityX = -3
  milk.velocityX = -3
  milk.lifetime=1300
  mouse.lifetime=1300
  foodGroup.add(milk)
  foodGroup.add(mouse)
}
}

  