import { Modal } from './modal.js'

export const inputWeight = document.querySelector("#weight")
export const inputHeight = document.querySelector("#height")
const btnCalculate = document.querySelector(".btn-calculate")

btnCalculate.addEventListener("click", handleClick)

function handleClick(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError) {
        console.log('Mostrar alerta de erro')
        return;
    }


    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function notNumber(value){
    return isNaN(value) || value == ""
}