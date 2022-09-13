function setup1() {
   	// Code Version number display 
	codeVersion = createElement('h5', 'v'+codeVersion);
	codeVersion.position(lm, 480+tm);

   	// Set the text size
    	textSize(100);

	// Save SVG button
	saveButton = createButton("Save SVG");
	saveButton.position(lm, 135+tm);
	saveButton.size(100,30);
	saveButton.style('font-size', '12px');
	saveButton.style('color', 'black');
	saveButton.mousePressed(saveArt);
	
	// run the code again button
	rerunButton = createButton("Run Again");
	rerunButton.position(130, 135+tm);
	rerunButton.size(100, 30);
	rerunButton.style('font-size', '12px');
	rerunButton.style('color', 'black');
	rerunButton.mousePressed(reRun);

	// file name input box
	fName = createInput('');
	fName.position(lm, 100+tm);
	fName.changed(saveArt);

	// submit button
	button1 = createButton('submit');
	button1.position(fName.x + (fName.width + 5), 100+tm);
	button1.mousePressed(saveArt);

	// show filename title for the input box
	fgreeting = createElement('h4', 'Filename to save');
	fgreeting.position(lm, 80+tm);
	
 	// check box 7 misc
	check7 = createCheckbox('Draw', false);
	check7.position(75, 460+tm);
	check7.style('font-family', 'sans-serif');

	// This block creates several arrays to manage the sliders and check boxes.
	menuItems = table.getArray();
  	for (let i = 0; i < menuItems.length; i++) {
    	sliders[i] = createSlider(menuItems[i][1], menuItems[i][2], menuItems[i][3], menuItems[i][4]);
	sliders[i].size(215, 10);
	sliders[i].position(20,i*40+200+tm);
	check[i] = createCheckbox('reset', false);
	check[i].position(175,i*40+177+tm);
	check[i].style('font-family', 'sans-serif');
	greeting[i] = createElement('h4', menuItems[i][0]);
	greeting[i].position(20, i*40+179+tm);
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

// function if reset checked then load default value from array
function checkBox1() {	
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

function getSlides() {
    for (let s = 0; s < 7; s++) {
    		sv[s] = (sliders[s].value());
	}
}

 