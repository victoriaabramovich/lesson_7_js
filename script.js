"use strict";

let inputElement = document.getElementById('input-box');
let addBtn = document.querySelector('Click');

 let ulElementItems = document.querySelector('ul-list-items');

 addBtn.addEventListener('click',function(){
let value = inputElement.value;
let li = document.createElement('li');
li.textContent = value;

ulElementItems.appendChild('li');

 })

