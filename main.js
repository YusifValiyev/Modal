// Select the elements

const showModal = document.querySelector('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')

// Initialization
init()

function init() {
    ActiveModal()
    PassiveModal()
}
// Show Modal

function ActiveModal() {
    showModal.addEventListener('click', () => {
        ShowModal();
        ShowOverlay();
    })
}

function ShowModal() {
    modal.classList.remove('hidden')
}

function ShowOverlay() {
    overlay.classList.remove('hidden')
}

// Close Modal
function PassiveModal() {
    closeModal.addEventListener('click', () => {
        CloseModal()
        CloseOverlay()
    })
}

function CloseModal() {
    modal.classList.add('hidden')
}

function CloseOverlay() {
    overlay.classList.add('hidden')
}

// Close Modal with ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        CloseModal()
        CloseOverlay()
    }
})


