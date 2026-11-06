//your JS code here. If required.

const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const sound = button.dataset.sound;

        currentAudio = new Audio(`sounds/${sound}.mp3`);

        currentAudio.play();
    });
});

stopBtn.addEventListener("click", () => {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});
