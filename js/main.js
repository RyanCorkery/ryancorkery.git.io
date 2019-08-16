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



window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.querySelector(".navUpper").style.height = "40px";
	}
	else{
		document.querySelector(".navUpper").style.height = "80px";
	}

	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
		document.querySelector("nav img").src = "img/logo.png";
		document.querySelector("nav img").style.height = "30px";
	}
	else{
		document.querySelector("nav img").src = "img/logo-text.png";
		document.querySelector("nav img").style.height = "70px";
	}
}