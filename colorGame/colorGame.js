var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
resetButton.addEventListener("click", reset);

function init(){
	//mode button event listeners
	setUpModeButtons();
	//Set up squares
	setUpSquares();
	//reset
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; ++i){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; ++i){
		//Change each color to m atch given color
		squares[i].style.backgroundColor = color;
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; ++i){
		//Add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent  = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; ++i){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//Pick a red, green, and blue from 0 to 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	//change colors of squares
	for(var i = 0; i < squares.length; ++i){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
}