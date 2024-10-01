import "@babel/polyfill";
import './index.html';
import './index.scss'

function readM() {
    var linebr = document.getElementById("linebr");
    var extrabr = document.getElementById("extrabr");
    var more = document.getElementById("more");
    var extramore = document.getElementById("extramore");
    var btn = document.querySelector(".readMore__btn");

    if (window.innerWidth <= 767) {
        if (more.style.display === "none" || more.style.display === "") {
            linebr.style.display = "block";
            btn.innerHTML = "Скрыть";
            btn.classList.add("rotate");
            more.style.display = "inline";
        } else {
            linebr.style.display = "none";
            btn.innerHTML = "Читать далее";
            btn.classList.remove("rotate");
            more.style.display = "none";
        }
    } else if (window.innerWidth <= 1119) {
        if (more.style.display === "-webkit-box" || more.style.display === "") {
            linebr.style.display = "block";
            btn.innerHTML = "Скрыть";
            btn.classList.add("rotate");
            more.style.display = "block";
        } else {
            linebr.style.display = "block";
            btn.innerHTML = "Читать далее";
            btn.classList.remove("rotate");
            more.style.display = "-webkit-box";
        }
    } else {
        if (extramore.style.display === "none" || extramore.style.display === "") {
            extrabr.style.display = "block";
            btn.innerHTML = "Скрыть";
            btn.classList.add("rotate");
            extramore.style.display = "inline";
        } else {
            extrabr.style.display = "none";
            btn.innerHTML = "Читать далее";
            btn.classList.remove("rotate");
            extramore.style.display = "none";
        }
    }
}

document.querySelectorAll(".readMore__btn").forEach(function (button) {
    button.addEventListener("click", readM);
});

let swiper;

function initSwiper() {
    if (window.innerWidth <= 767 && !swiper) {
        swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',

                renderBullet: function (index, className) {
                    return '<span class="' + className + '" style="margin: 0 6px;"></span>';
                },
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            allowTouchMove: true,
        });
    }
    else if (window.innerWidth > 767 && swiper) {
        swiper.allowTouchMove = false;
    }
}
window.addEventListener('resize', initSwiper);
initSwiper();

function showAll() {
    var allElements = document.querySelectorAll(".all");
    var hiddenElements = document.querySelectorAll(".hidden");
    var btn = document.getElementById("btn");

    if (window.innerWidth <= 1119) {
        allElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "grid";
                btn.textContent = "Скрыть";
                btn.classList.add("rotate");
            } else {
                element.style.display = "none";
                btn.innerHTML = "Показать всe";
                btn.classList.remove("rotate");
            }
        });
    } else {
        hiddenElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "grid";
                btn.textContent = "Скрыть";
                btn.classList.add("rotate");

            } else {
                element.style.display = "none";
                btn.innerHTML = "Показать всe";
                btn.classList.remove("rotate");
            }
        });
    }
}
document.getElementById("btn").addEventListener("click", showAll);

function displayAll() {
    var fullElements = document.querySelectorAll(".full");
    var concealedElements = document.querySelectorAll(".concealed");
    var button = document.getElementById("button");

    if (window.innerWidth <= 1119) {
        fullElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "flex";
                button.textContent = "Скрыть";
                button.classList.add("rotate");
            } else {
                element.style.display = "none";
                button.innerHTML = "Показать всe";
                button.classList.remove("rotate");
            }
        });
    } else {
        concealedElements.forEach(function (element) {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "flex";
                button.textContent = "Скрыть";
                button.classList.add("rotate");

            } else {
                element.style.display = "none";
                button.innerHTML = "Показать всe";
                button.classList.remove("rotate");
            }
        });
    }
}
document.getElementById("button").addEventListener("click", displayAll);

document.getElementById("burger").onclick = function () {
    document.getElementById("menu").classList.add("showmenu");
    document.getElementById("menu").classList.remove("hidemenu");
    document.getElementById("mask").style.display = "flex";
    document.getElementById("mask").classList.add("opacity");
}

document.getElementById("close").onclick = function () {
    document.getElementById("menu").classList.remove("showmenu");
    document.getElementById("menu").classList.add("hidemenu");
    document.getElementById("mask").style.display = "none";
    document.getElementById("mask").classList.remove("opacity");
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.modal__inputPhone').forEach(function (element) {
        element.value = 'Телефон';
    });
    document.querySelectorAll('.modal__inputName').forEach(function (element) {
        element.value = 'Имя';
    });
    document.querySelectorAll('.modal__inputEmail').forEach(function (element) {
        element.value = 'Электронная почта';
    });
    document.querySelectorAll('.modal__message').forEach(function (element) {
        element.value = 'Сообщение';
    });

    function clearInput() {
        document.querySelectorAll('.modal__inputPhone').forEach(function (element) {
            element.value = '';
        });
    }

    function clearName() {
        document.querySelectorAll('.modal__inputName').forEach(function (element) {
            element.value = '';
        });
    }

    function clearEmail() {
        document.querySelectorAll('.modal__inputEmail').forEach(function (element) {
            element.value = '';
        });
    }

    function clearMessage() {
        document.querySelectorAll('.modal__message').forEach(function (element) {
            element.value = '';
        });
    }

    window.clearInput = clearInput;
    window.clearName = clearName;
    window.clearEmail = clearEmail;
    window.clearMessage = clearMessage;
});

document.querySelectorAll(".call").forEach(element => {
    element.onclick = function () {
        document.getElementById("modalCall").classList.add("showmodal");
        document.getElementById("modalCall").classList.remove("hidemodal");
        document.getElementById("mask").style.display = "flex";
        document.getElementById("mask").classList.add("opacity");
    };
});

document.getElementById("closeCall").onclick = function () {
    document.getElementById("modalCall").classList.add("hidemodal");
    document.getElementById("modalCall").classList.remove("showmodal");
    document.getElementById("mask").style.display = "none";
    document.getElementById("mask").classList.remove("opacity");
}

document.querySelectorAll(".feedback").forEach(element => {
    element.onclick = function () {
        document.getElementById("modalFeedback").classList.add("showmodal");
        document.getElementById("modalFeedback").classList.remove("hidemodal");
        document.getElementById("mask").style.display = "flex";
        document.getElementById("mask").classList.add("opacity");
    };
});

document.getElementById("closeFeedback").onclick = function () {
    document.getElementById("modalFeedback").classList.add("hidemodal");
    document.getElementById("modalFeedback").classList.remove("showmodal");
    document.getElementById("mask").style.display = "none";
    document.getElementById("mask").classList.remove("opacity");
}