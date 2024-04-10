modelStatus = " "

function preload() {
    house = loadImage("secondimage.jpeg"); 
}
function setup() {
    canvas = createCanvas(600, 500); 
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object"; 
}

function modelLoaded() {
    console.log("Model Loaded"); 
    modelStatus = "true"; 
    objectDetector.detect(house, gotResults); 
}

function gotResults(error, results) {
    if(error) {
        console.error(error); 
    }
    if(results) {
        console.log(results); 
    }
}

function draw() {
    image(house, 0, 0, 600, 500); 
}

function back() {
    window.location = "index.html"; 
}