const btnSubmit = document.querySelector("#btn-submit")
const form = document.querySelector(".content-item");

btnSubmit.addEventListener("click", () =>{


    
    form.classList.add("hide")
    document.querySelector(".form__thank").removeAttribute("hidden")
    document.querySelector(".form").style.height = "200px"
})