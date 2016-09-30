
var database;
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


	var pointRef = firebase.database().ref('points');
	pointRef.on('child_added', function(data) {
	  	var aPoint = data.val();
		ellipse(aPoint.x, aPoint.y, 10, 10);
	});



}

function draw() {
	if (mouseIsPressed) {
		fill(255);
		var aPoint = {}
		aPoint.x = mouseX;
		aPoint.y = mouseY;

		database.ref("points").push(aPoint);
		ellipse(mouseX, mouseY, 10, 10);
	
	}

	if (keyCode == ESCAPE) {
		var pointRef = database.ref('points')
		pointRef.remove();
		window.location = window.location.href;	
	}	

}


