navigator.getBattery().then(function(battery) {
    
	// assign value
    var level = battery.level;
	
	// convert to string
	var level = level.toString();

	// get battery element to assign width
  	var battery = document.getElementById("level");
  	var gradient = document.getElementById("gradient");
	

	if(level != 1) {
		// get value after .
		level = level.split("."); 
		level = level[level.length - 1]; 

		var n = level.length;

		if(n == 2){
			level = level.slice(0, -1);
		}

  		// document.body.classList.add("batterylevel-"+level);
		

		// assign battery 'width'
		battery.setAttribute("style", "opacity: ."+level+";");
		gradient.setAttribute("style", "width: "+level+"0vw;");

		// less than 10%
		if(level == 0){
			battery.setAttribute("style", "opacity: .1;");
			gradient.setAttribute("style", "width: 5vw;");
		}

	} else {
		document.body.classList.add("fullbattery");
	}

	console.log(level);

})

// collect all the divs
var divs = document.getElementsByClassName('highlight');

// set classes
let posX = ["top", "middle", "bottom"];
let posY = ["left", "center", "right", "left", "center", "right"];

// create shuffle function
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// reorder classes
shuffle(posX);
shuffle(posY);

// assign classes
for ( var i=0; i < divs.length; i++ ) {

    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // update top and left position
    thisDiv.classList.add(posX[i]);
    thisDiv.classList.add(posY[i]);
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}


// toggle description

document.getElementById('info-toggle').onclick = function() {
	document.getElementById('info').classList.toggle('active');
}

// lightbox gallery

var lightbox = GLightbox({
	loop: true
});