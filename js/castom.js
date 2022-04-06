"use strict";

let showText = document.getElementById('ShowTxt');

let button = document.querySelectorAll("button");

let storetxt = "";

let clickVlu = 0;
function BtnClickUpp() {
	clickVlu = clickVlu + 1;
	
	if (clickVlu == 1) {
		clickVlu = 1;
		for(let i = 0; i < button.length; i++) {
			button[i].style.textTransform = "uppercase";
		}
	}
	if (clickVlu == 2) {
		clickVlu = 0;
		for(let i = 0; i < button.length; i++) {
			button[i].style.textTransform = "lowercase";
		}
	}
}


function btn(vlu) {

	if (clickVlu == 1) {
		let addUpp = vlu.toUpperCase();
		storetxt += addUpp;
	}
	if (clickVlu == 2 || clickVlu == 0) {
		let addLowe = vlu.toLowerCase();
		storetxt += addLowe;
	}

	showText.innerText = storetxt;
}


function BtnClickBack(vlu) {
	let lengthCount = storetxt.length - 1;
	let newText = storetxt.slice(0,lengthCount);
	storetxt = newText;
	showText.innerText = storetxt;
}


let numberOn = document.getElementById("NumberOn");
let numberDiv = document.getElementById("numberDiv");
let clikVlu = 0;
numberOn.addEventListener("click", function() {
	clikVlu = clikVlu + 1;
	if (clikVlu == 1) {
		clikVlu = 1;
		numberDiv.style.visibility =  "visible";
	} else if (clikVlu == 2) {
		clikVlu = 0;
		numberDiv.style.visibility =  "hidden";
	}
})

