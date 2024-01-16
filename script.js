const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const btnCalculate = document.querySelector(".btn-calculate")
const modalWrapper = document.querySelector(".modal-wrapper")
const btnModal = document.querySelector(".close")

btnCalculate.addEventListener("click", handleClick)
btnModal.addEventListener("click", handleClickModal)

// form.onsubmit = handleClick() 

function handleClick(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    let IMC = weight / height**2

    console.log(IMC)
    
}

function handleClickModal(event){
    event.preventDefault()

    modalWrapper.classList.toggle("open") 
}