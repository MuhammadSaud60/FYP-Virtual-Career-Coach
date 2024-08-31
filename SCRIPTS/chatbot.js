
const chatIcon = document.querySelector('#chatIcon');
const chatbot = document.querySelector('.chatbot');
chatIcon.addEventListener('click', ()=>{
    chatbot.classList.toggle('active')
})


const responses = {
    'hi': "Hi, how can I assist you today?",
    'how are you': "I'm fine, how are you?",
    'who are you': "I am a chatbot here to help VCC users with any problems they might have.",
    "what is vcc": "VCC is a virtual career coach that provides career paths to its users.",
    "how to join vcc": "To join VCC, click on the register button on the right side of the header and create an account. It's free of cost.",
    "thank you": "You're welcome!",
    "bye": "have a nice day",
    "default": "Sorry, I don't understand your question.",
}


const userMsg = document.querySelector('#userMsg');
const msgBox = document.querySelector('#msgBox');

const sendbtn = document.querySelector('.sendbtn')

function sendMessage(){
    let userText = userMsg.value.trim().toLowerCase();
    // userText = userText.replace(/[^a-z0-9\s]/gi, '');

    if(userText){
        displayMessage("user", userText);
        userMsg.value = "";
    
        const botText = responses[userText] || responses["default"];

        setTimeout(() =>{
            displayMessage("bot", botText);
        },700)
    }

}


function displayMessage(sender, message){
    const messageElem = document.createElement('div');
    messageElem.classList.add(sender);
    messageElem.classList.add('messageStyle')
    messageElem.textContent = message;
    msgBox.appendChild(messageElem);
    msgBox.scrollTop = msgBox.scrollHeight;
}


sendbtn.addEventListener('click', sendMessage)


userMsg.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        sendMessage()
    }
})