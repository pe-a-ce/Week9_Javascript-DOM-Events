// 1. what we want to be listening out for
// 2. need to define what we want to happen [functions - reusable chunks of code]
// 3. link the two together - when user clicks on button, we want to have this function called


// CHANGING BOX COLOUR
const button = document.querySelector("#btn");
const box = document.querySelector("#box");

// EVENT HANDLER
const handleButtonClick = () => {
    //any parameters? what then happens
    box.style.backgroundColor = "green";
}

//call the function on the element(button)
//pass through when action happens, and callback
//callback - function to be called within a function
button.addEventListener("click", handleButtonClick);


// DISPLAYING USER MESSAGE
const input = document.querySelector("#user-input");
const message = document.querySelector("#user-message");

input.addEventListener("input", () => {
  
    //event.target.value will record everything that was typed
    // console.log(event.target.value);
    message.innerText = event.target.value
    // will display everything that was typed on the screen
});

//ADDING FROM FORM

const list = document.querySelector("ul")
const form = document.querySelector("new-student-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-student"].value;
    console.log(event);
    list.appendChild(newListItem)
});