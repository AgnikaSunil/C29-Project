class Block7 {
    constructor(x, y) {
      var options = {
          'restitution':0.02,
          'friction':0.1,
          'density':0.7
      }
      this.body = Bodies.rectangle(x, y,100,60, options);
      this.width = 105;
      this.height = 80;
      this.image = loadImage("Images/white.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  };