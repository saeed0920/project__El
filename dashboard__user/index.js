"use strict";

const selectElement = function (nameElement) {
  return document.querySelector(nameElement);
};

const selectElementAll = function (nameElement) {
  return document.querySelectorAll(nameElement);
};

//
const items = {
  selector1: selectElement(".selector-1"),
  selector2: selectElement(".selector-2"),
  selector3: selectElement(".selector-3"),
  main1: selectElement(".main-1"),
  main2: selectElement(".main-2"),
  main3: selectElement(".main-3"),
};
const span = {
  sp1: selectElement(".sp-1"),
  sp2: selectElement(".sp-2"),
  cr1: selectElement(".span-cr-1"),
  cr2: selectElement(".span-cr-2"),
  cr3: selectElement(".span-cr-3"),
};
const stat = selectElement(".navbar__box-text__h2");
const turn = selectElement(".turn");
const branch = selectElement(".branch");
const done = selectElement(".done");

const btnHome = selectElement(".btn-home");
const btnNextPage1 = selectElement(".btn-next-page-1");
// fucntion
const removeClass = function (nameElement, nameClass) {
  nameElement.classList.remove(nameClass);
};
const addClass = function (nameElement, nameClass) {
  nameElement.classList.add(nameClass);
};
const toggleClass = function (nameElement, nameClass) {
  nameElement.classList.toggle(nameClass);
};

//setup file
const setup = function (x) {
  const sum = x;
  for (const x of sum) {
    addClass(items[`main${x}`], "hide");
  }
};
stat.textContent = items.selector1.textContent;
setup([1, 3]); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! change

const arr = new Set([1, 2, 3]);
for (let i = 1; i <= 3; i++) {
  items[`selector${i}`].addEventListener("click", function () {
    arr.delete(i);
    stat.textContent = items[`selector${i}`].textContent;
    removeClass(items[`main${i}`], "hide");
    removeClass(span.sp1, "width-100");
    removeClass(span.cr2, "background-green");
    for (const x of arr) {
      addClass(items[`main${x}`], "hide");
    }
    if (i === 2) {
      removeClass(turn, "hide");
      addClass(branch, "hide");
      addClass(done, "hide");
    }
    arr.add(i);
  });
}
addClass(turn, "hide"); //!!!!!!!!!
addClass(done, "hide"); //!!!!!!!!!

addClass(span.cr1, "background-green");

btnNextPage1.addEventListener("click", function () {
  // Go to the next section on main-2
  addClass(span.sp1, "width-100");
  addClass(span.cr2, "background-green");
  addClass(turn, "hide");
  removeClass(branch, "hide");
});
