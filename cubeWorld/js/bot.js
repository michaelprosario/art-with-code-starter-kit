var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var BLOCK_SIZE = 10;


function Bot()
{
    this.Direction = NORTH;
    this.X = 0;
    this.Y = 0;
    this.Z = 0;
    
    this.placeBlockAt = function(blockX, blockY, blockZ){
        placeCube(blockX*BLOCK_SIZE,blockY*BLOCK_SIZE,blockZ*BLOCK_SIZE);
    }
    
    this.placeBlock = function()
    {
        placeCube(this.X*BLOCK_SIZE,this.Y*BLOCK_SIZE,this.Z*BLOCK_SIZE);
    }
    
    this.moveUp = function(intCount){
        this.Y = this.Y + intCount;
    }
    
    this.moveDown = function(intCount){
        this.Y = this.Y - intCount;
    }
    
    this.turnLeft = function()
    {
        this.Direction -= 1;
        if(this.Direction<0){
            this.Direction = WEST;
        }
        
    }
    
    this.turnRight = function()
    {
        this.Direction += 1;
        if(this.Direction>3){
            this.Direction = NORTH;
        }
    }
    
    this.moveForward = function(intCount){
        if(this.Direction == NORTH){
            this.Z += intCount;
            
        }else if(this.Direction == SOUTH){
            this.Z -= intCount;
            
        }else if(this.Direction == WEST){
            this.X -= intCount;
            
        }else if(this.Direction == EAST){
            this.X += intCount;
            
        }
        
    }
    
}

function demo1()
{
        var bot = new Bot();

    for(j=0; j<20; j++)
    {
        for(i=0; i<10; i++)
        {
            bot.placeBlock();
            bot.moveForward(1);
        }
        bot.turnLeft();    
    
        for(i=0; i<10; i++)
        {
            bot.placeBlock();
            bot.moveForward(1);
        }
        bot.turnLeft();    
    
        for(i=0; i<10; i++)
        {
            bot.placeBlock();
            bot.moveForward(1);
        }
        bot.turnLeft();    
        for(i=0; i<10; i++)
        {
            bot.placeBlock();
            bot.moveForward(1);
        }
        bot.turnLeft();    
        bot.moveUp(2);
    
    }
    
    
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function demo2()
{
    
    var bot = new Bot();


    for(var i=0; i<100; i++){
        
        var k = getRandomInt(0,4);
        
        if(k==0){
            bot.moveForward(1);
        }
        if(k==1){
            bot.turnLeft();
            bot.moveForward(1);
        }
        if(k==2){
            bot.turnRight();
            bot.moveForward(1);
        }
        if(k==3){
            bot.moveUp(1);
            bot.moveForward(1);
        }
        
        bot.placeBlock();
    }
        
}   

