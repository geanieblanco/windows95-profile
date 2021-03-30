const showMessageButton = document.querySelector('.js-show-message');
const sendMessageButton = document.querySelector('.js-send-message');
const messageContainer = document.querySelector('.js-message-container');
const detailsContainer = document.querySelector('.js-details-container');

let name;
let email;
let message;

const toggleMessageContainers = (e) => {
    e.preventDefault()
    messageContainer.classList.remove('hidden');
    detailsContainer.classList.add('hidden');
}

const showMessage = (e) => {
    e.preventDefault(e)
}


function handleShowMessageClick() {
    showMessageButton.addEventListener('click', toggleMessageContainers)
}

function handleSendMessageClick() {
    sendMessageButton.addEventListener('click', showMessage)
}

function setupHandlers() {
    handleShowMessageClick()
    // handleSendMessageClick()
    // document.querySelector('form').addEventListener('submit', sendMessage);
}

setupHandlers()