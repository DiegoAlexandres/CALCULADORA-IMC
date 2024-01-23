import { Modal } from './modal.js'
import { AlertError } from'./alerta-error.js'
import { IMC, notNumber} from './utils.js'

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
        AlertError.open()
        return;
    }

    AlertError.close()


    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

