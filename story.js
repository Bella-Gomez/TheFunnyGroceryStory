// JavaScript will be written soon.
// This is ONLY a demo.
window.onload = function() {
    var textFielder = document.getElementById("text");
    var buttonFielder = document.getElementById("buttonContainer");
    var youLose = document.getElementById("theEnd")
    var mainStoryStorage = ["start"];
    
    var mainStory = {
    
        start: {
            text: "Welcome to the party. What do you do?",
            choices: [["goParty", "Go to the party"], ["dontParty", "Don't go"], ["yesTime", "Yes time"]]
        },
    
        goParty: {
            text: "You went to the party",
            choices: [
                ["Woo1", "Woah hey 1"],
            ],
        },
    
        dontParty: {
            text: "You didn't go to the party",
            choices: [
                ["ye1", "hey 1"],
            ],
        },
    
        yesTime: {
            text: "Just Yes",
            choices: [
                ["otherPart", "WOOOOOOO"],
            ]
        },
    
        otherPart: {
            text: "Encountered End",
            choices: [
                [false, ""]
            ]
        }
    };
    
    
    function buttonMaker(textForButton, chosen) {
        let buttons = document.createElement("button");
        buttons.innerHTML = textForButton;
        buttonFielder.appendChild(buttons);
    
        buttons.addEventListener("click", function() {mainStoryStorage.push(chosen); mainStoryMaker(); });
    
        if(textForButton == "") {
            console.log("Encountered an Ending")
            buttons.style.display = "none"
        }
    }
    
    
    function textMaker(textToAdd) {
        textFielder.innerHTML = textToAdd;
    }
    
    function mainStoryMaker() { 
        textFielder.innerHTML = "";
        buttonFielder.innerHTML = "";
    
        for(let i of mainStoryStorage) {
          textMaker(mainStory[i].text);
          console.log(i);
        }
    
        for (let choiceParts of mainStory[mainStoryStorage[mainStoryStorage.length - 1]].choices) {
          buttonMaker(choiceParts[1], choiceParts[0]);
          console.log(choiceParts);
    
          if(choiceParts[0] == false ) {
            console.log("Cya");
            youLose.style.display = ""
            }
        }
    
    }
    mainStoryMaker();
    
    youLose.addEventListener("click", function(){location.reload(); });
    youLose.style.display = "none"
    
    }
    