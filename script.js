const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function() {
    document.getElementById('xp').textContent = 100;
console.log('Mission started!');
const currentXP = 100;
if (currentXP >= 100) {
    document.getElementById('rank').textContent = 'Analyst';
}
document.getElementById('missions').textContent = 1;
});