const button = document.querySelector("#onebtn");

const displayDate = () =>{
    document.getElementById("date").innerHTML = Date();
    }

button.addEventListener("click", displayDate);

   