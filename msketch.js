// portable Menu - p5.js by https://ixelsart.com aka Sean Sherstone

// Start of Javascript Code
// ************************

// declare variables

let codeVersion = 1.8; // code version

let lm = 15; // left margin for menu items
let cb7 = 0; // check box 7 value
let sv = []; // slider value
let check = []; // check box 7 and check box array
let sliders = []; // sliders array
let greeting = []; // first greeting and greeting array
let check7; // global Check box 7
let fName; // Global File Name

// this block loads the slider names and values from a .csv file
function preload() {
  // table is comma separated value "CSV"
  // and has specifiying header for column labels
  table = loadTable('mdata.csv', 'csv', 'header');
}

function setup() {
    	// Code Version number display 
	codeVersion = createElement('h5', 'v'+codeVersion);
	codeVersion.position(lm, 480);

	createCanvas(windowWidth, windowHeight, SVG); // Create SVG Canvas
	strokeCap(ROUND);
	strokeWeight(1);
	stroke(0);
	background(255);
	noFill();
	angleMode(DEGREES);
	rectMode(CENTER);

   	// Set the text size
    	textSize(100);

	// Save SVG button
	let saveButton = createButton("Save SVG");
	saveButton.position(lm, 135);
	saveButton.size(100,30);
	saveButton.style('font-size', '12px');
	saveButton.style('color', 'black');
	saveButton.mousePressed(saveArt);
	
	// run the code again button
	let rerunButton = createButton("Run Again");
	rerunButton.position(130, 135);
	rerunButton.size(100, 30);
	rerunButton.style('font-size', '12px');
	rerunButton.style('color', 'black');
	rerunButton.mousePressed(reRun);

	// file name input box
	fName = createInput('');
	fName.position(lm, 100);
	fName.changed(saveArt);

	// submit button
	let button1 = createButton('submit');
	button1.position(fName.x + (fName.width + 5), 100);
	button1.mousePressed(saveArt);

	// show filename title for the input box
	let fgreeting = createElement('h4', 'Filename to save');
	fgreeting.position(lm, 80);
	
    	// check box 7 misc
	check7 = createCheckbox('Do something', false);
	check7.position(75, 460);
	check7.style('font-family', 'sans-serif');

	// This block creates several arrays to manage the sliders and check boxes.
	menuItems = table.getArray();
  	for (let i = 0; i < menuItems.length; i++) {
    	sliders[i] = createSlider(menuItems[i][1], menuItems[i][2], menuItems[i][3], menuItems[i][4]);
	sliders[i].size(215, 10);
	sliders[i].position(20,i*40+200);
	check[i] = createCheckbox('reset', false);
	check[i].position(175,i*40+177);
	check[i].style('font-family', 'sans-serif');
	greeting[i] = createElement('h4', menuItems[i][0]);
	greeting[i].position(20, i*40+179);
	}
 	// Set the default values for the sliders
 	for (let i = 0; i < menuItems.length; i++) { 
       		sliders[i].value(menuItems[i][3]);
    	}  
	}
  	
// This function will save the canvas as an SVG with the file name that is tyed into the input box
function saveArt() {
	save(fName.value() + '.svg');
}

// This function refreshes the html page re-running the code.
function reRun() {
	window.location.reload();
}

// this section is for the p5.js code that draws the design on the canvas

// Function to draw something
function drawSomething () {
	push();
	translate(width/2, height/2);
	rotate(sv[2]*3.6);

	rect(0+sv[3]-sv[4], 0+sv[5]-sv[6], sv[0]+sv[1],sv[0]+sv[1]);

	pop();

	
}

// function if reset checked then load default value from array
function checkBox() {	
	for (let ck = 0; ck < 7; ck++) {
	    if (check[ck].checked()) {
	        sliders[ck].value(menuItems[ck][3]);
	        check[ck].checked(false);
	    }
	}
    	if (check7.checked()) {
		cb7 = 1;
    	}
		else {
		    cb7 = 0;
    	} 
}

// Main draw block
// ***************

function draw() {

	background('white');

	for (let s = 0; s < 7; s++) {
    		sv[s] = (sliders[s].value());
    		print(sv[s]);
	}
	checkBox();
	if (cb7 == 1){	
	fill(128);
	}
	else {
	noFill();
	}
 	
	drawSomething();  
}
// end of p5js code
