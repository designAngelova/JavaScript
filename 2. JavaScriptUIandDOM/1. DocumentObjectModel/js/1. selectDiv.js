// Write a script that selects all the div nodes that are directly inside other div elements
// Create a function using querySelectorAll()
// Create a function using getElementsByTagName()

function viaGetElement(){
var divs = document.getElementsByTagName('div');
var result = [];
    for (var i = 0; i < divs.length; i++) {
       	return console.log(divs[i].innerHTML);
    }
    
}

function viaQuerySelector(){
	var divs = document.querySelectorAll('div');
	  for (var i = 0; i < divs.length; i++) {
       	return console.log(divs[i].innerHTML);
    }
	
}

viaQuerySelector();