const shareButton = document.querySelector('.share__button')
const shareWrapper = document.querySelector('.share__wrapper')

function toggleModal() {
shareWrapper.classList.toggle('active')
}

function closeModal() {
shareWrapper.classList.remove('active')
}

shareButton.addEventListener('click', toggleModal)

document.addEventListener('click', (e) => {
  if (!shareWrapper.contains(e.target)) {
    closeModal()
  }
})