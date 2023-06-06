const bottone = document.getElementById("b");
const ul = document.getElementById("list");
const bottone2 = document.getElementById("b2");
const form = document.getElementById("form")


bottone.addEventListener("click", () => {
    ul.insertBefore(ul.lastElementChild, ul.firstElementChild)
})

bottone2.addEventListener("click", () => {
    ul.insertAdjacentElement("beforeend", ul.firstElementChild)
})

let input = document.getElementById("input");
// let ajouter = document.getElementById("bajouter")

ajouter.addEventListener("click", () => {
    if (input.value.lenght > 0) {
        let el = `<li>${input.value}<li>`
        ul.innerHTML += el;
        input.value = "";
    }
})

// form.addEventListener("submit", () => {

// })