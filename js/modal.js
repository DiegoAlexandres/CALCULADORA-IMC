import { inputWeight } from './script.js'
import { inputHeight } from './script.js'

const btnClose = document.querySelector(".close")
btnClose.addEventListener("click", handleClickModal)

export const Modal = {

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

function handleClickModal(event){
    event.preventDefault()

    Modal.close()

    inputWeight.value = ''
    inputHeight.value = ''

}