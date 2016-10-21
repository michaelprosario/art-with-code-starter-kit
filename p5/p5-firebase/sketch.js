
var database;
var colorOptions;
var date = new Date();

function setup() {
	createCanvas(800, 600);

	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyD2WY0OPbYz36dZdfAOBwUNq0NLkA6yXrU",
	authDomain: "rdraw1-ff8ff.firebaseapp.com",
	databaseURL: "https://rdraw1-ff8ff.firebaseio.com",
	storageBucket: "",
	};
	firebase.initializeApp(config);
	database = firebase.database();


	//make a list of colors
        colorOptions = new Array();
	colorOptions[0] = "#faa916"
	colorOptions[1] = "#6d676e"
	colorOptions[2] = "#1b1b1e"
	colorOptions[3] = "#96031a"


	

	//pull points from firebase and draw them...
	var pointRef = firebase.database().ref('points');
	pointRef.on('child_added', function(data) {
	  	var aPoint = data.val();
		fill(aPoint.color);
		ellipse(aPoint.x, aPoint.y, 10, 10);
	});



}

function draw() {
	if (mouseIsPressed) {
		var minutes = date.getMinutes();
		var i = minutes % 4;
		console.log(i);
		
		var aPoint = {}
		aPoint.x = mouseX;
		aPoint.y = mouseY;
		aPoint.color = colorOptions[i];

		database.ref("points").push(aPoint);

		fill(aPoint.color);		
		ellipse(mouseX, mouseY, 10, 10);
	
	}


	if (keyCode == ESCAPE) {
		var pointRef = database.ref('points')
		pointRef.remove();
		window.location = window.location.href;	
	}	



}


