function extractContent(value){
	 alert(" Does not work with Mozilla!!! \n\n   Use Chrome!!!");

    var body = document.body;

    body.innerHTML = inputString;

    var result = body.innerText.replace(/\s/g, '');

    body.innerHTML = '<h1>Open console!!!</h1>';

    return result;
}

console.log(extractContent('<p>Hello</p><a href="http://w3c.org">W3C</a>'));

//jsConsole.write(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));
