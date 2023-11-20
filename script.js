 "use strict";

let inputElement = document.getElementById("input-box");
let addBtn = document.querySelector(".Click");
let ulElementItems = document.querySelector(".ul-list-items");


addBtn.addEventListener("click", function () {
  let value = inputElement.value;

  let li = document.createElement('li');
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete This Item";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = value;
li.appendChild(deleteBtn);
  ulElementItems.appendChild(li);
});

// burger bar

let navigationElement = document.getElementById ("navBar");
let burgerElement = document.getElementById ("burgerBar");

burgerElement.addEventListener('click', function() {
    // navigationElement.classList.add('navActive');-damateba
    navigationElement.classList.toggle('navActive');
    
})