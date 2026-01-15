// Open and Close Chatbot
function openChatbot() {
    document.getElementById("chatbotWindow").style.display = "flex";
}

function closeChatbot() {
    document.getElementById("chatbotWindow").style.display = "none";
}

// List of Questions and Answers
const qaList = [
    { question: "hello", answer: "Hi! Welcome to the Placement Portal 😊" },
    { question: "hi", answer: "Hi! Welcome to the Placement Portal 😊" },
    { question: "how are you", answer: "I'm just a bot, but I'm doing great! How about you?" },
    { question: "companies", answer: "You can see the list of companies visiting our campus in the Companies section above." },
    { question: "tcs", answer: "TCS is visiting our campus soon! Check the Companies section for dates." },
    { question: "infosys", answer: "Infosys will also visit soon. Visit the Companies section for more info." },
    { question: "help", answer: "You can ask about companies, placements, or just say hello!" }
];

// Function to get Bot Response
function getResponse() {
    const input = document.getElementById("userInput");
    const output = document.getElementById("chatOutput");
    const userText = input.value.trim();

    if (userText === "") return;

    // Display user message
    output.innerHTML += `<p><b>You:</b> ${userText}</p>`;

    // Find the answer
    let found = false;
    for (let i = 0; i < qaList.length; i++) {
        if (userText.toLowerCase().includes(qaList[i].question)) {
            output.innerHTML += `<p><b>Bot:</b> ${qaList[i].answer}</p>`;
            found = true;
            break;
        }
    }

    // Default response
    if (!found) {
        output.innerHTML += `<p><b>Bot:</b> Sorry, I don't understand that. Try asking about companies or placements.</p>`;
    }

    // Clear input and scroll
    input.value = "";
    output.scrollTop = output.scrollHeight;
}
