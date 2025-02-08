const factDisplay = document.getElementById('fact-display');
const generateFactButton = document.getElementById('generate-fact');

const funFacts = [
    "A shrimp's heart is in its head.",
    "It is physically impossible for pigs to look up into the sky.",
    "The 'sixth sick sheik's sixth sheep's sick' is believed to be the toughest tongue twister in the English language.",
    // Add more fun facts here...
];

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factDisplay.textContent = funFacts[randomIndex];
}

generateFactButton.addEventListener('click', displayRandomFact);
