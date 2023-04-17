const buzzwords = [
    "AI-powered Toothbrush",
    "Blockchain-based Social Network",
    "Quantum Computing Smartphone",
    "5G-Enabled Hoverboard",
    "VR Fitness Experience",
    "Augmented Reality Sunglasses",
    "Smart Home Personal Chef",
    "Cryptocurrency Trading Bot",
    "Biometric Security Suitcase",
    "Self-driving Electric Scooter"
];

const generateBtn = document.getElementById("generate-btn");
const buzzwordDisplay = document.getElementById("buzzword-display");

function generateBuzzword() {
    const randomIndex = Math.floor(Math.random() * buzzwords.length);
    return buzzwords[randomIndex];
}

generateBtn.addEventListener("click", () => {
    const newBuzzword = generateBuzzword();
    buzzwordDisplay.textContent = newBuzzword;
    buzzwordDisplay.style.paddingTop = 10 + "px";
});