const toggleButton = document.querySelectorAll(".show-modal");
const content = document.getElementById("content");
const closeButton = document.querySelector(".close-modal");
const hidden = document.querySelector(".overlay")
toggleButton.forEach(element => {
    element.addEventListener("click", function () {
        // if (content.style.display === "none") {
            content.style.display = "block"; // Show the content
            hidden.classList.remove("hidden")
        // } else {
            // content.style.display = "none"; // Hide the content
        // }
    });
});

document.addEventListener("keydown", function (event){
    if(event.key === "Escape" || event.key === "Esc"){
        content.style.display = "none"; // Hide the content
        hidden.classList.add("hidden")
    }
});

closeButton.onclick =  () => {
    content.style.display = "none"; // Hide the content
    hidden.classList.add("hidden")
}

hidden.onclick = () => {
    content.style.display = "none";
    hidden.classList.add("hidden")
}

