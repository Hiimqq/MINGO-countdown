const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Set Date Input Minimum with Today's Date and No Specific Time
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

let countdownTitle = '';
let countdownDate = '';

// Takes Values From Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);