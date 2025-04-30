let score = 0;
const scoreDisplay = document.getElementById("score");
const button = document.getElementById("clickButton");

button.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
});
