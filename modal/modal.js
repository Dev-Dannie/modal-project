const modalContainer = document.getElementById('modal-container')
const openModal = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')

openModal.addEventListener('click', () => {
    modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})