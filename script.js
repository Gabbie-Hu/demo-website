let toggleButton = document.querySelector("#toggle-theme");
let body = document.querySelector("body");

function toggleTheme() {
    body.classList.toggle("dark-mode");
}

toggleButton.addEventListener("click", toggleTheme);

console.log("Running dailyWelcome function!");


function dailyWelcome() {
    let today = new Date().getDay();
    let welcomeDiv = document.querySelector("#welcome-message");
    let message = "";

    switch(today) {
        case 0:
            message = "Happy Sunday! Take time to relax and recharge. ☀️";
        break;
        case 1:
            message = "Welcome to a brand new week! You've got this! 💪";
        break;
        case 2:
            message = "Happy Tuesday! Keep going strong! 🌺";
        break;
        case 3:
            message = "Midweek vibes! You're halfway there. ✨";
        break;
        case 4:
            message = "It's Thursday! A little more to the weekend! 🎉";
        break;
        case 5:
            message = "Happy Friday! Time to celebrate your hard work! 🍰";
        break;
        case 6:
            message = "It's Saturday! Enjoy your free time! 🎈";
        break;
        default:
            message = "Welcome!";
    }
    welcomeDiv.textContent = message;
}

window.addEventListener("load", dailyWelcome);