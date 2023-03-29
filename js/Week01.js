let navLink = document.getElementById("henry");
        navLink.href = "https://www.youtube.com/watch?v=2MCFwDhoqqc";
        navLink.textContent = "It's yo boi Henry back at it again"

let toggle = false;
let button = document.getElementById("surprise")
button.addEventListener("click", () => {
        if (toggle == false){
                document.body.style.backgroundColor = "green"
                toggle = true;
        }
        else {
                document.body.style.backgroundColor = "azure"
                toggle = false;
        }
})