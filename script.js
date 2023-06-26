"use strict";

const dropdownBtn0 = document.querySelector(".dropdown-btn0");
const dropdownBtn1 = document.querySelector(".dropdown-btn1");
const dropdown0 = document.querySelector(".dropdown0");
const dropdown1 = document.querySelector(".dropdown1");

dropdownBtn0.addEventListener("click", function () {
  dropdown0.classList.toggle("hidden");
});

dropdownBtn1.addEventListener("click", function () {
  dropdown1.classList.toggle("hidden");
});
