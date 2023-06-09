//funcionamento do Modal
const openModalButton = document.querySelector("#openModalButton");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//inputs modal entrada de dados
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")
const inputCheckbox = document.querySelector("#check-read")
const addButton = document.querySelector("#btn-add")

const allCards = document.querySelector("#allCards")
const btnRead  = document.querySelector("#btn-read")
const btnRemove = document.querySelector("#btn-remove")

function toggleModal(){
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
  
};

function addBook(){
    const title = inputTitle.value
    const author = inputAuthor.value
    const pages = inputPages.value
    const checkbox = inputCheckbox.checked

    creacteCard(title, author, pages, checkbox);

     limpaInputs()
}

function limpaInputs(){
    inputTitle.value = ""
    inputAuthor.value = ""
    inputPages.value = ""
    inputCheckbox.checked = false
}

function creacteCard(title, author, pages, checkbox){
    const div = document.createElement("div")
    const div2 = document.createElement("div")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")
    const buttonRead = document.createElement("button")
    const buttonRemove = document.createElement("button")
   

    div.classList.add("card")
    div2.classList.add("card-infos")
    p1.classList.add("card-p")
    p2.classList.add("card-p")
    p3.classList.add("card-p")
    buttonRead.classList.add("btn-card")
    buttonRemove.classList.add("btn-card")
    buttonRemove.classList.add("remove")
    p1.innerText = '"'+title+'"'
    p2.innerText = author
    p3.innerText = pages + " páginas"
    buttonRemove.innerText = 'Remover'
    buttonRead.setAttribute('id', "btn-read")
    buttonRemove.setAttribute('id', "btn-remove")

    if(checkbox){
        buttonRead.innerText = 'Lido'
        buttonRead.classList.add("color-green")
    } else {
        buttonRead.innerText = 'Não lido'
        buttonRead.classList.add("color-red")
    }

    div2.appendChild(p1)
    div2.appendChild(p2)
    div2.appendChild(p3)

    div.appendChild(div2)
    div.appendChild(buttonRead)
    div.appendChild(buttonRemove)
    div.setAttribute('id', "card")

    

    allCards.appendChild(div)
}

function readOrNot(el){

}

document.addEventListener('click', e => {
    const el = e.target

    if (el.parentNode == openModalButton || el == addButton || el == fade) {
        toggleModal()
    }

    if (el == addButton) {
        addBook()
    }

    if (el.classList.contains("btn-card")) {
        if (el.classList.contains("color-red")) {
            el.innerText = 'Lido'
            el.classList.remove("color-red")
            el.classList.add("color-green")
        } else if (el.classList.contains("color-green")) {
            el.innerText = 'Não lido'
            el.classList.remove("color-green")
            el.classList.add("color-red")
        }
    }

    if(el.classList.contains("remove")){
        console.log("tEste")
        el.parentNode.remove()
    }
})
