
function sinStairs()
{
	var b = new Bot();

	var k=0;
	for(i=0; i<1000;i++)
	{
		b.drawBox(20,3,20);
		b.forward(10);
		b.moveUp(Math.sin(k)*8);

		k = k + 0.1;
		b.turn(2);
	}

}

function cosinArt()
{
	var b = new Bot();
	b.moveUp(50);
	b.saveLocation("start");
	var size=3;

	for(j=0; j<50; j++)
	{
		b.moveRight(j*size);

		var k=0;
		for(i=0; i<50; i++)
		{
			b.drawBox(size,size,size);
			b.forward(size);
			k = (i+j)*0.2;
			b.moveUp(Math.cos(k)*5);
		}

		b.moveToLocation("start");

	}

}

function demo1()
{
	var b = new Bot();
	var size=5;

	for(var k=0; k<25; k++)
	{
		for(var j=0; j<4; j++)
		{

			for(var i=0; i<30; i++)
			{	
				b.drawBox(size,size,size);
				b.forward(size);
			}

			b.turn(93);

		}

		b.moveUp(size);

	}

}

function makeCity()
{
	var size=80;
	var b = new Bot();
	var spacingFactor = 1.25;

	b.saveLocation("start");
	for(var p=0; p<10; p++)
	{

		for(var j=0; j<10; j++)
		{
			var red = Math.round(Math.random()*255);
			var green = Math.round(Math.random()*255);
			var blue = Math.round(Math.random()*255);
			b.drawColor = rgb(red,green,blue);
			
			var k = Math.random() * 200;
			b.drawBox(size,k,size);
			b.forward(size*spacingFactor);

		}

		b.moveToLocation("start");
		b.moveRight(spacingFactor*p*size);
	}
		
}



function room()
{
	var b = new Bot();


	for(var i=0; i<4; i++)
	{
	b.drawBox(1,50,50);
	b.moveRight(25);
	b.forward(25);
	b.turn(-90);
	}
}	


function functionTest(){ 
 var bot = new Bot(); 
 var angle, i, x, y, z;

/**
 * Describe this function...
 */
function drawStuff() {
  for (x = 1; x <= 720; x += 5) {
    bot.drawColor = 'slategray';
    bot.moveUp((5 * Math.sin(x / 180 * Math.PI)));
    bot.forward(5);
    bot.drawBox(10,1,5);
    bot.turn(3);
  }
}


bot.saveLocation('start');
for (i = 1; i <= 100; i += 5) {
  bot.moveToLocation('start');
  bot.forward((20 * i));
  drawStuff();
}


 }; 
 


function main(){ 
	var bot = new Bot(); 
	bot.drawBox(1,1,1);
	bot.moveUp(10);
	bot.drawCylinder(10,3);
	bot.moveUp(10);
	bot.drawSphere(10);
	bot.forward(1);
	bot.turn(45);
	bot.moveLeft(1);
	bot.moveRight(1);
	bot.saveLocation('foo');
	bot.moveToLocation('foo');

 }; 
 
