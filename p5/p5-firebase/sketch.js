
var database;
var colorOptions;

function setup() {
	createCanvas(1024, 768);

	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyD2WY0OPbYz36dZdfAOBwUNq0NLkA6yXrU",
	authDomain: "rdraw1-ff8ff.firebaseapp.com",
	databaseURL: "https://rdraw1-ff8ff.firebaseio.com",
	storageBucket: "",
	};
	firebase.initializeApp(config);
	database = firebase.database();

	//make a list of colors in an array....
        colorOptions = new Array();
	colorOptions[0] = "#faa916"
	colorOptions[1] = "#6d676e"
	colorOptions[2] = "#1b1b1e"
	colorOptions[3] = "#96031a"

	//pull points from firebase and draw them...
	var pointRef = firebase.database().ref('points');
	pointRef.on('child_added', function(data) {

		// So... a new point has been added. Get the data.
	  	var aPoint = data.val();

		//set the color based on point
		fill(aPoint.color);

		//draw the point
		ellipse(aPoint.x, aPoint.y, 10, 10);
	});



}

function draw() {
	if (mouseIsPressed) {		
		//get current time
		var date = new Date();
		var m = date.getMinutes();

		//select a color option based on the minutes
		var i = m % 4;
		
		// make a point capturing location(x,y) and color
		var aPoint = {}
		aPoint.x = mouseX;
		aPoint.y = mouseY;
		aPoint.color = colorOptions[i];

		//add point to firebase ...
		database.ref("points").push(aPoint);	
	}


}


function clearCanvas()
{
	var pointRef = database.ref('points')
	pointRef.remove();

}


