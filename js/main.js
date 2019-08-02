window.onload=function(){
	document.querySelector(".hamburger").addEventListener("click", hamburgerOpen);
	document.querySelector(".hamburgerClose").addEventListener("click", hamburgerClose);
}

function hamburgerOpen(){
	document.querySelector(".navRight").style.display="flex";
}

function hamburgerClose(){
	document.querySelector(".navRight").style.display="none";
}