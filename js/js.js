var userNav = document.querySelector(".header__nav");
userNav.classList.remove("user-nav--nojs");

var mainNav = document.querySelector(".main-nav--nojs");
mainNav.classList.remove("main-nav--nojs");

var toggleButton = document.querySelector(".user-nav__button");
var toogleFlag = false;

var header = document.querySelector(".header");
header.classList.remove("header--nojs");

var main = document.querySelector(".page__main");
main.classList.remove("page__main--nojs");

function closeOpen(){
    if (toogleFlag){
        userNav.classList.remove("user-nav--closed");
        userNav.classList.add("user-nav--opened");
        mainNav.classList.remove("main-nav--closed");
        console.log("Тру");
    } else{
        userNav.classList.add("user-nav--closed");
        userNav.classList.remove("user-nav--opened");
        mainNav.classList.add("main-nav--closed");
        console.log("Фолс");
    }
}

function close(){
    if (toogleFlag){
        userNav.classList.add("user-nav--closed");
        userNav.classList.remove("user-nav--opened");
        mainNav.classList.add("main-nav--closed");
        console.log("Тру");
    }
}

function toggle(evt){
    evt.preventDefault();
    toogleFlag = !toogleFlag;
    closeOpen();
}

toggleButton.addEventListener("click", toggle);

var productNav = document.querySelector(".product__nav");
productNav.classList.remove("product__nav--nojs");

var productBig = document.querySelector(".product__img--big-picture");
var productSmall = document.querySelectorAll(".product__img--small-picture");
productSmallFlag = true;

function removeAll(){
    for (let j=0; j<productSmall.length; j++){
        productSmall[j].classList.remove("product__img--activ");
    }
}

function addPicture(i){
    productSmall[i].classList.add("product__img--activ");
    productBig.src = "img/picture" + (i+1) + ".jpeg";
}

for(let i=0; i<productSmall.length; i++){
    productSmall[i].addEventListener("click", function(){
        removeAll();
        addPicture(i);
    })
}

var buttonMinus = document.querySelector("#button--minus");
var buttonPlus = document.querySelector("#button--plus");
var input = document.querySelector("#input");

function inputMax(){
    input.value > 20 ? input.value = 20 : none;
    disabled();
}

input.addEventListener("change", inputMax);



buttonMinus.disabled = true;
function disabled(){
    input.value < 2 ? buttonMinus.disabled = true : buttonMinus.disabled = false;
    input.value > 19 ? buttonPlus.disabled = true : buttonPlus.disabled = false;
}

function inputMinus(){
    input.value = parseInt(input.value) - 1;
    disabled();
}

function inputPlus(){
    input.value = parseInt(input.value) + 1;
    disabled();
}

buttonMinus.addEventListener("click", inputMinus);
buttonPlus.addEventListener("click", inputPlus);


var scrollPrev = 0;

function scrollMenu(){    
    var scrolled = window.pageYOffset;
    if (scrolled > 100 && scrolled > scrollPrev) {
		header.classList.add("out");
        close()
	} else {
		header.classList.remove("out");
	}
	scrollPrev = scrolled;
}

window.addEventListener("scroll", scrollMenu)