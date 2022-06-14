"use strict";

const selectElement = function (nameElement) {
  return document.querySelector(nameElement);
};

const selectElementAll = function (nameElement) {
  return document.querySelectorAll(nameElement);
};

//
const btn = {
  btn1: selectElement(".btn-1"),
  btn2: selectElement(".btn-2"),
  btn3: selectElement(".btn-3"),
};

const form = selectElement(".main-1");
const text = selectElement(".text-header");
//
const removeClass = function (nameElement, nameClass) {
  nameElement.classList.remove(nameClass);
};
const addClass = function (nameElement, nameClass) {
  nameElement.classList.add(nameClass);
};
const toggleClass = function (nameElement, nameClass) {
  nameElement.classList.toggle(nameClass);
};

//
const arr = new Set([1, 2, 3]);
text.textContent = "داشبورد";
const setup = function () {
  for (const x of arr) {
    removeClass(form, `box-${x}`);
  }
};

setup();

for (let i = 1; i < 4; i++) {
  btn["btn" + i].addEventListener("click", function () {
    addClass(form, `box-${i}`);
    arr.delete(i);
    setup();
    arr.add(i);
  });
}
