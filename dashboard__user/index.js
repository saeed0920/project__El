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

const btnHome = selectElementAll(".btn-home");
const btnNextPage1 = selectElement(".btn-next-page-1");
const btnNextPage2 = selectElement(".btn-next-page-2");
const btnBack1 = selectElement(".btn-back-page-1");
const btnBack2 = selectElement(".btn-back-page-2");
const btnDone = selectElement(".btn-done");
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

//setup fil
const setup = function (x) {
  const sum = x;
  for (const x of sum) {
    addClass(items[`main${x}`], "hide");
  }
};
stat.textContent = items.selector1.textContent;
setup([2, 3]);

for (const x of btnHome) {
  x.addEventListener("click", function () {
    stat.textContent = items.selector1.textContent;
    setup([2, 3]);
    removeClass(items.main1, "hide");
  });
}

const arr = new Set([1, 2, 3]);
for (let i = 1; i <= 3; i++) {
  items[`selector${i}`].addEventListener("click", function () {
    arr.delete(i);

    stat.textContent = items[`selector${i}`].textContent;
    removeClass(items[`main${i}`], "hide");
    removeClass(span.sp1, "width-100");
    removeClass(span.cr2, "background-green");
    removeClass(span.sp2, "width-100");
    removeClass(span.cr3, "background-green");
    addClass(items[`selector${i}`], "active-selector");
    for (const x of arr) {
      addClass(items[`main${x}`], "hide");
      removeClass(items[`selector${x}`], "active-selector");
    }
    if (i === 2) {
      removeClass(turn, "hide");
      addClass(branch, "hide");
      addClass(done, "hide");
    }
    arr.add(i);
  });
}
addClass(turn, "hide"); //!!!!!!!!!   del
addClass(branch, "hide"); //!!!!!!!!! del

addClass(span.cr1, "background-green");

btnNextPage1.addEventListener("click", function () {
  // Go to the next section on main-2
  addClass(span.sp1, "width-100");
  addClass(span.cr2, "background-green");
  addClass(turn, "hide");
  removeClass(branch, "hide");
});

btnNextPage2.addEventListener("click", function () {
  addClass(span.sp2, "width-100");
  addClass(span.cr3, "background-green");
  addClass(branch, "hide");
  removeClass(done, "hide");
});

btnBack1.addEventListener("click", function () {
  removeClass(span.sp1, "width-100");
  removeClass(span.cr2, "background-green");
  removeClass(turn, "hide");
  addClass(branch, "hide");
});
btnBack2.addEventListener("click", function () {
  removeClass(span.sp2, "width-100");
  removeClass(span.cr3, "background-green");
  removeClass(branch, "hide");
  addClass(done, "hide");
});

btnDone.addEventListener("click", function () {
  setup([1, 2]);
  removeClass(items.main3, "hide");
});
