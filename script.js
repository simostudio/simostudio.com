/* ---------Email JS-------- */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Initialize EmailJS with your User ID
    emailjs.init('zXpyt23SUfzDWPxVD');

    // Send the email
    emailjs.sendForm('service_i19l4yf', 'template_3xggk9h', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        });
});





/* ---------OpenAI JS-------- */

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage(userMessage, 'user');

    // Make an API call to ChatGPT
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Replace with your actual API key
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: userMessage,
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        const assistantResponse = data.choices[0].message.content;
        appendMessage(assistantResponse, 'assistant');
    })
    .catch(error => console.error('Error:', error));

    userInput.value = '';
}

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.innerHTML = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage(userMessage, 'user');

    // Call your backend or directly interact with the OpenAI API here to get a response for userMessage
    // Then, append the response to the chat container
    // Note: You'll need to handle API calls and responses in a secure and controlled manner

    // Example response (replace this with actual API call):
    const response = "This is a response from ChatGPT.";

    appendMessage(response, 'assistant');

    userInput.value = '';
}

// Example of calling sendMessage when Enter key is pressed
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});




/* ---------Log/Sign Up JS-------- */

document.getElementById('signUp').addEventListener('click', function() {
    document.getElementById('container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', function() {
    document.getElementById('container').classList.remove('right-panel-active');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    // Perform signup logic here (e.g., send data to a server)
    // This is where you'd typically make an AJAX request

    alert('Signed up successfully!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Perform login logic here (e.g., send data to a server)
    // This is where you'd typically make an AJAX request

    alert('Logged in successfully!');


    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var email = this.querySelector('input[type="email"]').value;
        var password = this.querySelector('input[type="password"]').value;
    
        // Add your login logic here
        console.log('Login with:', email, password);
    });
    
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var email = this.querySelector('input[type="email"]').value;
        var password = this.querySelector('input[type="password"]').value;
    
        // Add your signup logic here
        console.log('Signup with:', email, password);
    });
    
});







function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatlogs = document.getElementById("chatlogs");

    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = userInput;
    chatlogs.appendChild(userMessage);

    // Send user message to Python backend for processing
    // You can use AJAX or fetch API to send the message to your backend

    // For simplicity, let's assume the backend responds with a fixed message
    var aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";
    aiMessage.innerHTML = "This is a sample response from the AI.";
    chatlogs.appendChild(aiMessage);

    document.getElementById("userInput").value = "";
}
