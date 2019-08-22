/******************************************************/
/******************* Hamburger Menu *******************/
/******************************************************/
window.onload=function(){
	document.getElementById("hamburgerBtn").addEventListener("click", openHamburger);
	document.getElementById("hamburgerCloseBtn").addEventListener("click", closeHamburger);
}

function openHamburger(){
	document.querySelector(".hamburger").style.display = "none";
	document.querySelector(".links").style.display = "block";
	document.querySelector(".social").style.display = "block";
	document.querySelector(".hamburgerClose").style.display = "block";
}

function closeHamburger(){
	document.querySelector(".hamburger").style.display = "block";
	document.querySelector(".links").style.display = "none";
	document.querySelector(".social").style.display = "none";
	document.querySelector(".hamburgerClose").style.display = "none";
}

/******************************************************/
/****************** Catering Section ******************/
/******************************************************/
function addItem(){
	var item = document.querySelector(".item");
	var newItem = item.cloneNode(true);
	newItem.querySelector(".qty").value = "Qty";
	newItem.querySelector(".qty").style.color = "grey";
	document.querySelector(".itemSection").appendChild(newItem);
}

function reviewOrder(){
	window.location.href = "catering-review.html";
}

function editOrder(){
	window.location.href = "catering.html";
}

function submitOrder(){
	window.location.href = "catering-submit.html";
}






