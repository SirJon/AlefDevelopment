//Убираем классы Nojs
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

var productNav = document.querySelector(".product__nav");
productNav.classList.remove("product__nav--nojs");

//Открытие закрытие меню
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


//Переключение фотографий товара

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

//Инпут кол-ва товаров

var buttonMinus = document.querySelector("#button--minus");
var buttonPlus = document.querySelector("#button--plus");
var input = document.querySelector("#input");

function inputMax(){
    if (input.value == ""){
        input.value = 1;
    } else{
        if (input.value > 20){
            input.value = 20;
        } else{
            input.value < 20 ? input.value = 1 : none;
        }
    }
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


//Скрыть/показать меню при скролле

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

window.addEventListener("scroll", scrollMenu);

//Pupup корзина и избранное

var buttonBasket = document.querySelector(".product__button--add-basket");
var pupupBasket = document.querySelector("#pupup--basket");
var buttonFavorites = document.querySelector(".product__button--add-favorites");
var pupupFavorites = document.querySelector("#pupup--favorites");

var productName = document.querySelector(".product__title")
var pupupProductNameBasket = document.querySelector("#product--basket");
var pupupProductNameFavorites = document.querySelector("#product--favorites");
var pupupProductNumberBasket = document.querySelector("#product-number--basket");
var pupupProductNumberFavorites = document.querySelector("#product-number--favorites");


function hidePupupBasket(){
    pupupBasket.classList.remove("pupup--show");
}

function hidePupupFavorites(){
    pupupFavorites.classList.remove("pupup--show");
}

function pupupBasketShow(evt){
    evt.preventDefault();
    pupupFavorites.classList.remove("pupup--show");
    pupupBasket.classList.add("pupup--show");
    pupupProductNameBasket.textContent = productName.textContent;
    pupupProductNumberBasket.textContent = input.value;
    setTimeout(hidePupupBasket, 2000);
}

function pupupFavoritesShow(evt){
    evt.preventDefault();
    pupupBasket.classList.remove("pupup--show");
    pupupFavorites.classList.add("pupup--show");
    pupupProductNameFavorites.textContent = productName.textContent;
    pupupProductNumberFavorites.textContent = input.value;
    setTimeout(hidePupupFavorites, 2000);
}

buttonBasket.addEventListener("click", pupupBasketShow);
buttonFavorites.addEventListener("click", pupupFavoritesShow);

//EmailTest

var inputEmail = document.querySelector("#email");

function emailTest(){
    return(!/^\w+ ([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputEmail.value));
}

inputEmail.addEventListener("change", function(evt){
    evt.preventDefault();
    if (inputEmail.validity.typeMismatch){
        inputEmail.classList.add("form__input--invalid");
    } else {
        inputEmail.classList.remove("form__input--invalid");
    }
})