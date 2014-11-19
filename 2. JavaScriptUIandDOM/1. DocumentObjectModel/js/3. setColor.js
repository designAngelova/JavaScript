//Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value
function setBodyColor(){
	var colorValue = document.getElementById('color').value;
	document.body.style.background = colorValue;
}
