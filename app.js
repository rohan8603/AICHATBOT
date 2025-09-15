// Advisory translations for point 2 & 3
const translations = {
  en: [
    "AI Chat Support is available in multiple languages.",
    "Real-Time Market & Scheme Integration: Direct access to live crop prices, subsidies, and government scheme info.",
    "Personalized & Timely Advisory: Recommendations based on weather, soil, and crop conditions."
  ],
  hi: [
    "एआई चैट समर्थन कई भाषाओं में उपलब्ध है।",
    "रीयल-टाइम बाजार और योजना एकीकरण: फसल के दाम, सब्सिडी और सरकारी योजनाओं की जानकारी।",
    "व्यक्तिगत और समय पर सलाह: मौसम, मिट्टी और फसल की स्थिति के आधार पर सुझाव।"
  ]
};

let currentLang = "en";

// Change language
document.getElementById("languageSelect").addEventListener("change", function() {
  currentLang = this.value;
});

// Show advisory for point 2 and 3
function showMessage(point) {
  alert(translations[currentLang][point - 1]);
}

// Chat functions
function openChat() {
  document.getElementById("chatWindow").classList.remove("chat-hidden");
}

function closeChat() {
  document.getElementById("chatWindow").classList.add("chat-hidden");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");

  if (input.value.trim() === "") return;

  // User message
  let userMsg = document.createElement("p");
  userMsg.classList.add("user");
  userMsg.innerText = input.value;
  chatBody.appendChild(userMsg);

  // Bot reply (demo)
  let botMsg = document.createElement("p");
  botMsg.classList.add("bot");
  botMsg.innerText = "🤖 Farming Assistant: Thank you for your question. (Demo reply)";
  chatBody.appendChild(botMsg);

  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
  input.value = "";
}
