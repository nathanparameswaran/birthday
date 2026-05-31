const firstDateAnswer = "Cafe Zondag";
const firstNightAnswer = "A car";
const holidayAnswer = "Uvita";

function showScreen(screenNumber) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");
    });

    document
        .getElementById("screen" + screenNumber)
        .classList.add("active");
}

function checkAnswer1() {

    const answer =
        document
        .getElementById("answer1")
        .value
        .trim()
        .toLowerCase();

    if (
        answer ===
        firstDateAnswer.toLowerCase()
    ) {

        document.body.classList.add(
            "birthday-mode"
        );

        const music =
            document.getElementById(
                "birthdayMusic"
            );

        music.play();

        showScreen(2);

    } else {

        document
            .getElementById("error1")
            .innerText =
            "Not quite ❤️ Try again.";
    }
}

function checkAnswer2() {

    const answer =
        document
        .getElementById("answer2")
        .value
        .trim()
        .toLowerCase();

    if (
        answer ===
        firstNightAnswer.toLowerCase()
    ) {

        showScreen(4);

    } else {

        document
            .getElementById("error2")
            .innerText =
            "Nope ❤️";
    }
}

function checkAnswer3() {

    const answer =
        document
        .getElementById("answer3")
        .value
        .trim()
        .toLowerCase();

    if (
        answer ===
        holidayAnswer.toLowerCase()
    ) {

        showScreen(6);

    } else {

        document
            .getElementById("error3")
            .innerText =
            "Try again ❤️";
    }
}
