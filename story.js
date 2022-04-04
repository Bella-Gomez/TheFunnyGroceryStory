// JavaScript will be written soon.
// This is ONLY a demo.

var textFielder = document.getElementById("text");
var buttonFielder = document.getElementById("buttonContainer");
var buttons = document.createElement("button");

var mainStory = {

    start: {
        text: "Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, ",
        choices: [
            ["secondPart", "Yes choice"],
            ["choice2", "No choice option"],
            ["choice3", "Neutral Choice"]
        ]
    },

    secondPart: {
        text: "Woah, the second part is here",
        choices: [
            ["otherPart", "1 choice"],
            ["lol", "2 choice"],
            ["lol2", "3 choice"]
        ]
    }


};

var mainStoryStorage = ["start"];

function buttonMaker(textForButton) {
    buttons.innerHTML = textForButton;
    buttonFielder.appendChild(buttons);
}
buttonMaker("wowowowowoowowoowowow")

function textMaker(textToAdd) {
    textFielder.innerHTML = textToAdd
}
textMaker(mainStory.start.text)