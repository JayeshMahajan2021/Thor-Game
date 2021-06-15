class Enemy1 extends BaseClass {
    constructor(x,y){
      super(x,y,500,300);
      this.image = loadImage("Thanos.png");
     this.sound= loadSound("Moan.mp3");
      this.remove = true;
    }
  
    display(){
      if(this.body.speed < 15 ){
       super.display();
      }
      else{
        World.remove(world, this.body);
        if(this.remove == true) {
          score = score + 50;
          this.remove = false;
          this.sound.play();
        }
   
       }
       }
  
    }
