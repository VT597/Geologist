class Iron{
	constructor(x,y,r)
	{
	var options={
		restitution:0.9,
		density:30,
		friction:0.9
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            rect(0,0,this.r,this.r);

			pop()
	}

}