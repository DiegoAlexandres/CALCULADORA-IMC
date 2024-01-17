const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const btnCalculate = document.querySelector(".btn-calculate")
const btnClose = document.querySelector(".close")

btnCalculate.addEventListener("click", handleClick)
btnClose.addEventListener("click", handleClickModal)

const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".close"),

    open(){
        Modal.wrapper.classList.add("open")
    },

    close(){
        Modal.wrapper.classList.remove("open") 
    }
}

function handleClick(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function handleClickModal(event){
    event.preventDefault()

    Modal.close()

    inputWeight.value = ''
    inputHeight.value = ''

}