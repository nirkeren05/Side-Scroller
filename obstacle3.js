//trying to make a new Object Oriented Change by making another obstacle

class obstacle3 {
  constructor(){
    this.pos = createVector(random(width), random(height-10));
    this.vel = createVector(-0.25, 0);
    this.acc = createVector(0,0);
    this.val=3;
  }
  
  show(){
    fill(110, 50, 50);
    ellipse(this.pos.x,this.pos.y, 25,25)
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
}
