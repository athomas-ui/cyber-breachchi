const characterSelection = document.getElementById('character-selection');
const characterOptions = document.querySelectorAll('.character-option');
const continueButton = document.getElementById('continue-btn');
const playerCard = document.getElementById('player-card');
const characterName = document.getElementById('character-name');
const selectableCharacters = {
    andrew: 'Andrew',
    werdna: 'Werdna'
};
const savedCharacter = localStorage.getItem('selectedCharacter');
let selectedCharacter = Object.hasOwn(selectableCharacters, savedCharacter)
    ? savedCharacter
    : null;

function updateCharacterSelection() {
    characterOptions.forEach(function(button) {
        const isSelected = button.dataset.character === selectedCharacter;
        button.setAttribute('aria-pressed', String(isSelected));
    });
    continueButton.disabled = selectedCharacter === null;
}

characterOptions.forEach(function(button) {
    button.addEventListener('click', function() {
        selectedCharacter = button.dataset.character;
        updateCharacterSelection();
    });
});

continueButton.addEventListener('click', function() {
    if (selectedCharacter === null) {
        return;
    }

    localStorage.setItem('selectedCharacter', selectedCharacter);
    document.body.dataset.selectedCharacter = selectedCharacter;
    characterName.textContent = selectableCharacters[selectedCharacter];
    characterSelection.classList.add('hidden');
    playerCard.classList.remove('hidden');
});

updateCharacterSelection();

const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function() {
    document.getElementById('xp').textContent = 100;
console.log('Mission started!');
const currentXP = 100;
if (currentXP >= 100) {
    document.getElementById('rank').textContent = 'Analyst';
}
document.getElementById('missions').textContent = 1;
playerCard.classList.add('hidden');
document.getElementById('mission-card').classList.remove('hidden');
});
const correctAnswer = 'B';
const answerButtons =document.querySelectorAll('.answer-btn');

    answerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const chosenAnswer = button.dataset.answer;
         if (chosenAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = 'Correct answer! Great catch!';
        } else {
            document.getElementById('feedback').textContent = 'Incorrect answer. Please try again.';
        }console.log('You Picked:', chosenAnswer);
        });
    });