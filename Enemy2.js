class Enemy2 extends BaseClass {
    constructor(x,y){
      super(x,y,200,300);
      this.image = loadImage("Ultron.png");
      this.sound= loadSound("Kill.mp3");
      this.remove = true;
    }
  
    display() {
      if(this.body.speed < 10 ){
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