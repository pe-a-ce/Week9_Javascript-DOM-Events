
const button = document.querySelector("#btn");

const displayDate = () =>{
    document.getElementById("date").innerHTML = Date();
  console.log("clicked!");
}

button.addEventListener("dblclick", displayDate);
// dblclick is  not working, issue with it because click is working!
