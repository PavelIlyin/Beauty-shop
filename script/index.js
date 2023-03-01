'use strict'

let menuBox = document.querySelector('.menu-box');
let menuBtn = document.querySelector('.menu__btn')
let menu = document.querySelector('.nav-block');
let header = document.querySelector('.header')

menuBox.addEventListener('click', function () {
    menuBox.classList.toggle('active');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    header.classList.toggle('active');
})