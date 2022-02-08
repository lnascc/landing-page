const cancelButton = document.querySelector('.button.cancel')
const register = document.querySelector('.register')
const modalWrapper = document.querySelector('.modal-wrapper')

cancelButton.addEventListener('click', close)
register.addEventListener('click', open)

function open() {
  modalWrapper.classList.add('active')
}

function close() {
  modalWrapper.classList.remove('active')
}