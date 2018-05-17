var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");


console.log(css);
console.log(color1);
console.log(color2);

function changeBG () {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomize() {
	
	var letters = "0123456789abcdef";
	var col1 = "#";
	for (var i = 0; i<6; i++) {
		col1 += letters[Math.floor(Math.random() * 16)];
	}
	var col2 = "#";
	for (var i = 0; i<6; i++) {
		col2 += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = col1;
	color2.value = col2;

	changeBG();
}

changeBG();
color1.addEventListener("input", changeBG);
color2.addEventListener("input", changeBG);
btn.addEventListener("click", randomize)