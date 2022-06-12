/*
3rd way to link js to the html

document.addEventListener("DOMContentLoaded", () => {
  */  
const list = document.querySelector("ul");

const newListItem = document.createElement("li");
// create new list element 
// the createElement() method allows us to create a new element, 
// store it in a variable, and manipulate it's attributes and content
newListItem.innerText = "I've been added by the JS file!";
// accessing the innerText property and added text to the new list element
list.appendChild(newListItem)
// append our new list item to the list
// add them as children to the ul element using appendChild()
