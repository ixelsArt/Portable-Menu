// p5.js Javascript code
let codeVersion = "2.1"; // code version

let lm = 15; // left margin for menu items
let tm = 20; // top margin offset
let cb7 = 0; // check box 7 value
let sv = []; // slider value
let check = []; // check box 7 and check box array
let sliders = []; // sliders array
let greeting = []; // first greeting and greeting array
let check7; // global Check box 7
let fName; // Global File Name
let menuShow = false;
let menuHide;
let saveButton;
let rerunButton;
let button1;
let fgreeting; // first greetin
let nos = 0; //number of sliders
let mbh; // menu background height

// this block loads the slider names and values from a .csv file
function preload() {
  // table is comma separated value "CSV"
  // and has specifiying header for column labels
  table = loadTable('mdata.csv', 'csv', 'header');
}


//*****************************************//


function setup() {
  createCanvas(1000, 1000, SVG); // create SVG Canvas
    strokeCap(ROUND);
    strokeWeight(1);
	stroke(0);
	background(255);
	noFill();
	angleMode(DEGREES);
	rectMode(CENTER);
	
    setup1(); // run code from setup function
    
	// check box menuHide 
	menuHide = createCheckbox('Hide menu', true);
	menuHide.position(115, 5);
	menuHide.style('font-family', 'sans-serif');


//*****************************************//



//*****************************************//
}

// Main code goes in the makeIt function
function makeIt() {  
//*****************************************//

rect(500,500,300);
//*****************************************//
}
function draw() {
if (menuHide.checked()) {
		menuShow = true;
    	}
		else {
		    menuShow = false;
    	}


if (menuShow === true) {
    document.getElementById("MenuBackground").style.display = "none";
    document.getElementById("Menu").style.display = "none";
    fName.hide();
    check7.hide();
    codeVersion.hide();
    saveButton.hide();
    rerunButton.hide();
    button1.hide();
    fgreeting.hide();

    for (i=0; i < nos; i++) {
    sliders[i].hide();
    check[i].hide();
    greeting[i].hide();
    }

}

if (menuShow === false) {
checkBox1();
getSlides();
mbh = "height:"+(430-(40*(7-nos)))+"px";
document.getElementById("MenuBackground").style.display = "inline";
document.getElementById("MenuBackground").setAttribute("style",mbh);
document.getElementById("Menu").style.display = "inline";
    fName.show();
    check7.show();
    codeVersion.show();
    saveButton.show();
    rerunButton.show();
    button1.show();
    fgreeting.show();

    for (i=0; i < nos; i++) {
    sliders[i].show();
    check[i].show();
    greeting[i].show();
        
    }
    
}
makeIt();

}
