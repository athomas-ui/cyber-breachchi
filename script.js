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
    console.log('Mission started!');
    playerCard.classList.add('hidden');
    document.getElementById('mission-card').classList.remove('hidden');
});
const correctAnswer = 'B';
const answerButtons =document.querySelectorAll('.answer-btn');
function updateRank(xp) {
    if (xp >= 100) {
        document.getElementById('rank').textContent = 'Analyst';
    } else {
        document.getElementById('rank').textContent = 'Rookie';
    }
}
    answerButtons.forEach(function(button) {
   button.addEventListener('click', function() {
    const chosenAnswer = button.dataset.answer;
    if (chosenAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct answer! Great catch!';
        const xpSpan = document.getElementById('xp');
        const currentXP = parseInt(xpSpan.textContent);
        const newXP = currentXP + 50;
        xpSpan.textContent = newXP;
        updateRank(newXP);
    } else {
        document.getElementById('feedback').textContent = 'Incorrect answer. Please try again.';
    }
    console.log('You Picked:', chosenAnswer);
    const missionsSpan = document.getElementById('missions');
    const currentMissions = parseInt(missionsSpan.textContent);
    missionsSpan.textContent = currentMissions + 1;

    answerButtons.forEach(function(btn) {
        btn.disabled = true;});
    });});