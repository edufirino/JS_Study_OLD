/* global document */

/* alterando o conteudo do elemento h1
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Be Kind';
*/

// alternando a imagem ao clicar
//The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.
var dogImage = document.querySelector('img');

dogImage.onclick = function () {
    //Strict mode makes it easier to write "secure" JavaScript.
    //Strict mode changes previously accepted "bad syntax" into real errors.
    'use strict';
    var myImages = dogImage.getAttribute('src');
    if (myImages === 'images/puppy.jpg') {
        dogImage.setAttribute('src', 'images/dog.jpg');
    }
    else {
        dogImage.setAttribute('src', 'images/puppy.jpg');
    }
};

// Personalized welcome message code
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    'use strict';
    var myName = window.prompt('Please enter your name.');
    //HTML web storage; better than cookies.
    localStorage.setItem('name',myName);
    //document.querySelector("#demo").innerHTML = "Hello World!"; another way to change the text of a html element is this;
    myHeading.textContent = 'Have a nice day, '+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent='Have a nice day, '+storedName;
}
//accessing the onClick event of the button through the variable nameButton :)
nameButton.onclick=function(){
    'use strict';
    setUserName();
};