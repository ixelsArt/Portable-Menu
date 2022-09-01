// portable Menu - p5.js by https://ixelsart.com aka Sean Sherstone

// Start of Javascript Code
// ************************

// declare variables

let codeVersion = 1.7; // code version

let fName; // file name
let lm = 15; // left margin for menu items
let sv = [];
let check7, check = []; // check box 7 and check box array
let sliders = []; // sliders array
let fgreeting, greeting = []; // first greeting and greeting array
let cb7 = 0; // check box 7 value

// this block now loads the slider names and values from a .css file
function preload() {
  // table is comma separated value "CSV"
  // and has specifiying header for column labels
  table = loadTable('mdata.csv', 'csv', 'header');
}

function setup() {
    // codeVersion 
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
	fName.changed(saveArt2);

	// submit button
	button = createButton('submit');
	button.position(fName.x + (fName.width + 5), 100);
	button.mousePressed(saveArt3);

	// show filename title for the input box
	fgreeting = createElement('h4', 'Filename to save');
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

// This function allows the enter or tab key to trigger the saving of the currently typed file name
function saveArt2() {
	save(fName.value() + '.svg');
}

// This function is a third way to trigger the saving of the typed file name
function saveArt3() {
	save(fName.value() + '.svg');
}

// This function refreshes the html page re running the code.
function reRun() {
	window.location.reload();
}

// this section is for the p5js code that draws the design on the canvas

// Function to draw something
function drawSomething () {
	rect(width/2, height/2 ,300,300);
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
	drawSomething();  
}
// end of p5js code
