// JavaScript will be written soon.
// This is ONLY a demo.


var textFielder = document.getElementById("text");
var buttonFielder = document.getElementById("buttonContainer");
var buttons = document.createElement("button");
var mainStoryStorage = ["start"];

var mainStory = {

    start: {
        text: "Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, Sample text, ",
        choices: [
            ["secondPart", "Yes choice"],
            ["choice2", "No choice option"],
            ["choice3", "Neutral Choice"]
        ]
    },

    choice3: {
        text: "You picked choice #3!",
        choices: [
            [],
            [],
            []
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


function buttonMaker(textForButton, option) {
    buttons.innerHTML = textForButton;
    buttonFielder.appendChild(buttons);

    buttons.addEventListener("click", function() {
        mainStoryStorage.push(option); 
        mainStoryMaker();})
}


function textMaker(textToAdd) {
    textFielder.innerHTML = textToAdd;
}

function mainStoryMaker(text) { 
    let storageDisplay = mainStoryStorage[mainStoryStorage.length - 1];
    textFielder.innerHTML = "";
    buttonFielder.innerHTML = "";

    for(let sus of mainStoryStorage) {
      textMaker(mainStory[sus].text)
    }   
    for (let sus of mainStory[storageDisplay].choices) {
      buttonMaker(sus[1],sus[0]);
    }
}

mainStoryMaker(mainStory.start.text)
