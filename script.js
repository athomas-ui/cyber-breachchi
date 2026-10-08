const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function() {
    document.getElementById('xp').textContent = 100;
console.log('Mission started!');
const currentXP = 100;
if (currentXP >= 100) {
    document.getElementById('rank').textContent = 'Analyst';
}
document.getElementById('missions').textContent = 1;
document.getElementById('player-card').classList.add('hidden');
document.getElementById('mission-card').classList.remove('hidden');
});
const answerButtons =document.querySelectorAll('.answer-btn');

    answerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const chosenAnswer = button.dataset.answer;
        console.log('You Picked:', chosenAnswer);
        });
    });