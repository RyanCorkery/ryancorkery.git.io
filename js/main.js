window.onload=function(){
	document.querySelector(".hamburger").addEventListener("click", hamburgerOpen);
	document.querySelector(".hamburgerClose").addEventListener("click", hamburgerClose);
}

function hamburgerOpen(){
	// document.querySelector(".hamburger").style.display="none";
	document.querySelector(".navRight").style.display="flex";
	// document.querySelector(".links").style.display="block";
}

function hamburgerClose(){
	// document.querySelector(".hamburger").style.display="flex";
	document.querySelector(".navRight").style.display="none";
	// document.querySelector(".links").style.display="none";
}