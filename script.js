const btnCalculate = document.querySelector(".btn-calculate")
const modalWrapper = document.querySelector(".modal-wrapper")
const btnModal = document.querySelector(".close")

btnCalculate.addEventListener("click", handleClick)
btnModal.addEventListener("click", handleClick)

function handleClick(event){
    event.preventDefault()

    modalWrapper.classList.toggle("open")
}