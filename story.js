window.onload = function() {
    var textFielder = document.getElementById("text");
    var buttonFielder = document.getElementById("buttonContainer");
    var youLose = document.getElementById("theEnd");
    var youWin = document.getElementById("youWonText");
    var mainStoryStorage = ["start"];
    
    var mainStory = {
    
        start: {
            text: "It's a late spring night, you’re walking home after doing some grocery shopping, you stick closely to the street lights not wanting to step into the darkness… You look down and grin at your grocery bags, happy at the thought of a full kitchen. Though you’re still surprised there was a grocery store still open this late, however shady it and its customers were. But hey who are you to complain? They had your favorite snack and you're the one shopping so late. What did you expect? You observe your surroundings as you walk and see an █████ ahead standing and staring at the street light, you freeze. Dangerous creatures those things are, you need to avoid it the best you can. What do you do?",
            choices: [
                ["lovecraftStart", "Avoid the █████ & find another way home"], 
                ["literallyLeave", "You just leave"], 
                ["mafiaStart", "Take short cut home"]
            ]
        },
    
        lovecraftStart: {
            text: "It seemed distracted enough so you moved over to the other side of the sidewalk and basically hugged the building as you walked. While avoiding the █████ you see a broken down, but still functioning, phone booth ahead of you. ‘Maybe I could call someone’ you think. You start to walk towards it but as you go to walk a bus appears across the street. Huh.. Has that bus always been there?? The bus seems to be waiting and you have some left over money, maybe you should hop on.",
            choices: [
                ["Woo1", "Woah hey 1"],
            ],
        },
    // Start of the Mafia/Gangsterism Story Line
        mafiaStart: {
            text: "You take a shortcut through an allyway & see two figures doing something sus",
            choices: [
                ["literallyLeave", "You just leave (Part 2)"],
                ["investigate", "Investigate"]
            ],
        },
    
        investigate: {
            text: "You get spotted by both the figures. They both appear to be fighting eachother. One starts running at you.",
            choices: [
                ["runToTheLocalPolice", "Run to local police station"],
                ["attac", "Attack bac"]
            ]
        },

        attac: {
            text: "The guy is running towards you, and is preparing to punch you. What do you do?",
            choices: [
                ["bonkEm", "Grab a random object and BONK'EM"],
                ["justDodge", "Dodge"],
                ["tryToGuard", "You try to guard "]
            ]
        },

        justDodge: {
            text: "You successfully dodge and proceed to punch the guy... The guy is knocked down. However, he quickly recovers, and then proceeds to charge at you again. What do you do?",
            choices: [
                ["secondDodge", "Dodge(Part 2)"],
                ["gun", "G U N"],
                ["decoyMoment", "Decoy"]
            ]
        },

        gun: {
            text: "you throw the G U N . you dont shoot w/ it u just throw it. The figure was not expecting that...",
            choices: [
                ["bonkEm", "Continue"],
            ]
        },

        decoyMoment: {
            text: "You throw out a decoy. The decoy was an item from your grocery bag. The decoy confuses the enemy. -1 grocery item. Why did you do that? That was your favorite type of milk?! No! your groceries! What do you now? ",
            choices: [
                ["bonkEm", "Continue"],
            ]
        },

        bonkEm: {
            text: "The figure gets knocked out by the object. He got bonked very hard.(End of battle) While you were epicly battling the aggresive figure, the other one was watching. You stand to face the figure as they are walking towards you. As they are walking towards you, you notice they look like a mafia boss. You now think to yourself, \"Is that. Al Capone???\". After somewhat indenitfying who the figure is, they walk up to you and say, \"Thanks for saving me back there. That was.. one of my unsatisfied colleagues...\". How do you respond?",
            choices: [
                ["runToTheLocalPolice", "Run Away"],
                ["umWhoAreYou", "\"Um.. Your welcome, but who are you?\""]
            ]
        },

        umWhoAreYou: {
            text: "The figure responds, and says, \"That is none of your concern... However, for an individual like yourself, you have a good amount of fighting skill and grit.\" You stand there unsure of what to do or say. The figure continues to speak, and says, \"Regarding these skills of yours, I would like you to join my organization.. Do you accept?\" At this moment you have no idea what to do. You were just getting groceries, and now, here you are, trying to join some sort of mafia. What do you do",
            choices: [
                ["shadowRealm", "\"No, I'm out of here, I was just trying to get grocieries.\" (You decline)"],
                ["whatIfNoAccept", "\"What if I don't want to join your organization?\""],
                ["joinAlcapone", "\"Sure.. I'll join your organization.\" (You accept)"]
            ]
        },

        whatIfNoAccept: {
            text: "\"You shouldn't ask such questions, however, I insist you join my organization.\" The figure says. \"You won't like the consequences afterwards.\"",
            choices: [
                ["shadowRealm", "\"I don't want to join this organization, I got other things to do.\" "],
                ["joinAlcapone", "\"Sure.. I'll join your organization.\" (You accept)"]
            ]
        },

        joinAlcapone: {
            text: "\"Excellent, I am happy that you accepted my offer\" The figure states. \"So.. what is going to happen now?\" you ask. The figure then says, \"I am glad you asked, but we can't discuss such things at the moment. We have speak in a more private area, it is dangerous being out here, you know\". You respond with, \"Okay.. and where is this private area located at\". The figure replies, \"I'll show you how we will get there\". Out of nowhere a cool black car appears in front of the way you entered the alley way from. The figure proceeds to enter the cool car, and signals you to get in. What do you do?",
            choices: [
                ["goInsideOfCar", "Get in the car"]
            ]
        },

        goInsideOfCar: {
            text: "You enter the car, as you are going to the secret area, you start talking to the anonymous figure. You have a nice chat. Eventually you get to the secret location. You both proceed to step out of the cool car. You now find yourself standing in front of a medium sized building. However, you and the figure head into the alley to the right side of the building. In the alley way there is a secret door that you both enter through. You are now inside of the secret organization base. As you enter, you get questionable and stern looks from people in the room. You and the figure are now walking to an office, you see a sign on the wall near the office. The sign reads, \"Level 70 Boss\". You and the figure proceed to enter the office, the figure asks you to take a seat, as you do so they take a seat as well. The figure says, \"Welcome, to my organization my friend. So, what do you think?\" How do you respond?",
            choices: [
                ["looksPrettyCool", "\"Looks pretty cool.\""]
            ]
        },

        looksPrettyCool: {
            text: "The figure replies, \"Thanks, however I don't think we have formally introduced each other... The name is Al Capone, I am the Level 70 Boss around here. And what is your name?\". You proceed to give Al Capone your name. \"It is nice to meet you (your name), now, let's talk. I like you, y'know, you got grit, you're honest, and you seem trustworthy. Now, I would welcome you with open arms into my organization. However, I need you to do a job for me, I need you to bring back one of my packages. If you do so, I will welcome you with open hands into my organization\". What do you do?",
            choices: [
                ["alcaponeMission", "\"Sure ill go.\""],
                ["isThereReally", "\"Is there something else I can do?\""]
            ]
        },

        isThereReally: {
            text: "\"No. You are not in my organization yet. Unfortunately you can't do anything else\". Al Capone says.",
            choices: [
                ["alcaponeMission", "\"Ok, I will do it\""]
            ]
        },

        alcaponeMission: {
            text: "\"Excellent. About this package.. It is located near our secret base. However, it is with one of my clients. This client usually drops off these packages next to a parked car behind our secret area near a store. I want you to go and collect the package and bring it back here.\" How will you get the package?",
            choices: [
                ["walkToAlcaponeObjective", "Walk to the destination"],
                ["alcaponeCoolCarForEnd", "Use the cool car"],
                ["alcaponeTrick", "Ask Al Capone to do a cool trick"]
            ]
        },

        alcaponeTrick: {
            text: "You tell Al Capone to do a cool trick to get you to the location. You instantly teleport to the location. And you start walking.",
            choices: [
                ["walkToAlcaponeObjectiveContinued", "Continue"],
            ]
        },

        walkToAlcaponeObjective: {
            text: "You proceed to walk to the destination. As you are exiting through the back of the alleyway, something comes up in your mind. \"Why am I joining an organization run by a famous mafia boss. I was just trying to get groceries and now I am joining a mafia? I should probably tell the police about this.\" What do you do?",
            choices: [
                ["policeStartRoute", "Go to the police"],
                ["walkToAlcaponeObjectiveContinued", "Keep walking to the location"]
            ]
        },

        // Police Story Line Start

        policeStartRoute: {
            text: "You exit from the back of the alleyway and find the local police station. Eventually you found the police station. You enter the station and head towards the front desk. At the front desk, you explain what had happened to you and what your current situation is. The police try to make word of what you said, but they couldn't quite get what had happened to you. After a while of constant talking someone walked out from the back of the room and said, \"Hey! What is going on here!\". You are startled by this figure's yell, however you stand firm, awaiting to speak to this figure. The figure proceeds to walk up to you near the front desk where you were talking to the police. The figure walks up, and speaks towards the officers confronting you, \"What is going on here gentlemen?\". The officers reply saying, \"We are having a chat with this concerned individual, it appears as though he has been taken by Al Capone the mafia boss, but has managed to escape him.\" The figure then says towards you, \"Well then, do you mind if I have a talk with you? The name is agent Eliot Ness. I am the head of a law organization dedicated to stopping crime during this time.\" You reply saying, \"Nice to meet you, Eliot Ness\". Eliot Ness says, \"Nice to meet you too, now this situation of yours is VERY dire to talk about. Follow me.\" ",
            choices: [
                ["goFollowEliotNess", "Follow Eliot Ness"],
                ["performCoolTrickToDie", "Perform a cool trick"]
            ]
        },

        goFollowEliotNess: {
            text: "You follow Eliot Ness, and he leads to the back of the police station. You both are walking into an office. You both sit down, you explain to Eliot Ness what happened to you. After explaining everything, Eliot Ness replies and says, \"Alright, so from what I understand, you were walking home with groceries, got caught up in a fight with one of Al Capone's clients, and afterwards almost joined the mafia while trying to get a package... Wow, what a story, well it is good that you came to us quick, we are the right people to take care of the job\". You proceed to say, \"Yeah, things were getting very shady back there, leaving and heading over here was the best option\". Eliot Ness begins to say, \"Well, I am glad you came to us, because you are going to help us take down Al Capone. If you provide us with the information on where Al Capone's mafia is, you can join our agency. What do you think?\"",
            choices: [
                ["helpEliotNessBringAlcaponeDown", "\"Sure, I'll help you bring Al Capone down\""],
                ["youAreNotSureWithEliotNess", "\"I'm not sure about this\""]
            ]
        },

        youAreNotSureWithEliotNess: {
            text: "\"I assure you that it will not be bad, besides, you are working with law enforcement after all\" ",
            choices: [
                ["helpEliotNessBringAlcaponeDown", "\"Alright, ill help\""],
                ["dontWorkWithEliotNess", "\"No, I was just getting groceries.\""]
            ]
        },

        helpEliotNessBringAlcaponeDown: {
            text: "\"Great, so first off can you tell me where Al Capone's mafia organization is at?\" Eliot Ness said. You give Eliot Ness the location of Al Capone's mafia organization. Eliot Ness says, \"Excellent, so since you said you have been inside of the base, can you explain to me what you saw?\". You reply, and state that you saw people of the organization and weapons inside. \"Alright, no problem, I appreciate your cooperation, it has been very helpful. Now then, on the topic at hand, since you provided us with information on Al Capone I would like to welcome you into our agency. In this agency you will help us stop crime, investigate, and perform law enforcement duties\". How do you respond? ",
            choices: [
                ["awesomeYouWorkWithEliotNessNow", "\"Awesome, I am glad to be working with you\""],
                ["youWantToBeSomethingElseOtherThanAgent", "\"Nice, however can I be something else other than an agent\""]
            ]
        },

        youWantToBeSomethingElseOtherThanAgent: {
            text: "\"I mean you could be an officer, but you won't be able to go on super secret missions and such. Joing this agency is a much more better option because we are meant to be stopping crime and bringing down big mafia bosses. So what is your choice?\" Eliot Ness says. ",
            choices: [
                ["awesomeYouWorkWithEliotNessNow", "Become an agent"],
                ["youHaveBecomeAnOfficerEnding", "Become an officer"]
            ]
        },

        awesomeYouWorkWithEliotNessNow: {
            text: "You happily agree and you join the agency, later during that day Al Capone realizes that you have abandoned his mission, and orders a Lvl 25 hitman to target you. You are being hunted now, however, you don't know that... Eventually, you get trained in the agency and become a professional crime agent. Some time later you meet with Eliot Ness to discuss the situation with Al Capone. Eliot Ness says, \"Well then I think you are ready for the first mission on attempting to take down Al Capone. So, are you ready for this?\" How do you respond?",
            choices: [
                ["youAreReadyToTakeDownAlcaponeWithEliot", "\"Yes, I am ready\""],
                ["YOLOOOOO", "YOLO"]
            ]
        },

        youAreReadyToTakeDownAlcaponeWithEliot: {
            text: "You and Eliot Ness go out to the police station parking lot and get in a cool police car. You take the wheel. Throughout the time of your training, Eliot Ness sent out agents to stop Al Capone from gaining money and weapons to level up. This is it, it is now or never, you and the police will raid Al Capone's mafia base and take down his organization. Now you and Eliot Ness drive out of the parking lot over to the Al Capone's base, however, on the way the car gets shot at by a level 25 hitman, the car begins to smoke a little bit from the front. What do you do? ",
            choices: [
                ["keepDrivingTheCoolPoliceCar", "Keep driving"],
                ["useTheCoolPoliceCarForCover", "Get out of the car, use it for cover"]
            ]
        },

        // Police Story Line End
        walkToAlcaponeObjectiveContinued: {
            text: "You keep walking, eventually, you get to the location where the package is at. You see the package, it is a grey box, with some lettering on it. The package sits beside the street near a randomly parked car. People around you don't seem to care too much for it. What do you do?",
            choices: [
                ["walkToTheBox", "Walk to the box"],
                ["grabBoxForSelf", "Grab the box for yourself"]
            ]
        },

        walkToTheBox: {
            text: "You proceed to grab the box, you don't have anywhere else to put the box at. You now start walking back towards the alleyway you came from and head to the secret base. You arrive at the secret base and enter. You walk through the secret base and towards Al Capone's office. Between you and the office door, you enter the office and find Al Capone waiting for you. \"Ah, welcome back\" Al Capone said, \"I see you have brought back my package, well done\". You hand the box over to Al Capone and he opens it. The box contains a bunch of money. Al Capone levels up to level 85. \"Now, since you brought this package back, I welcome you with open hands into my organization\" Al Capone says.",
            choices: [
                ["sayVeryNiceToAlcapone", "Very nice"],
            ]
        },

        sayVeryNiceToAlcapone: {
            text: "\"Here is a reward for doing this job\". Al Capone says. Al Capone gives you money and a gun, you level up. You are happy. Afterwards, Al Capone sent you on another missions with other mafia members and you started to rank up. This kept happening weekly, and then monthly, and soon, you have ranked up to around level 70. You develop good relations with Al Capone and become trusted by him. However, there came a day where a raid was going to happen. You are walking inside of the mafia base, and Al Capone calls you to his office for a discussion.",
            choices: [
                ["goToAlcaponesOffice", "Go to his office"],
            ]
        },

        goToAlcaponesOffice: {
            text: "You walk into Al Capone's office and sit down. Al Capone states, \"Look, you have been doing good these past couple of months, but it is time for a showdown with one of my rivals. His name is Don Corleone and he has a little organization that is in fact very powerful. I want you to prepare now, because soon we are going to be raided\". You and Al Capone talk some more about the raid, after some talking Al Capone orders you to mobilize everyone. You do so, and everyone in the building gets their weapons and exit the base. Shortly after, Don Corleone's mafia organization arrive. After some talking between the two organizations the fighting happens, cars, crooks, and other mafia members line the roads and streets shooting at eachother. This gun fight is big, you participate by defeating a couple of crooks and other enemy mafia members. The battle was escalating fruther, you see an opportunity. The cool car. It has been sitting in the open untouched. What do you do?",
            choices: [
                ["runAndUseAlCaponeCoolCar", "Run to the cool car and use it"],
                ["coolCarExplosionAlcapone", "Use the cool car as cover"]
            ]
        },

        runAndUseAlCaponeCoolCar: {
            text: "You go to the cool car and you enter it. The cool car started itself up, and proceed to drive into Don Corleone's mafia, exploding, defeating most of his members. Don Corleone is now at a disadvantage. After more amounts of fighting Don Corleone's mafia, he eventually loses and he is defeated by Al Capone. Don Corleone had some money and weapons on him, you decide to pick up the money and weapons, doing so, instantly got you to level 100. You are now a higher level than Al Capone. Al Capone sees this and says, \"Woah, nice work, now can you give the loot to me?\". How do you respond?",
            choices: [
                ["giveAlcaponeLoot", "\"Alright, I will\""],
                ["dontGiveAlCaponeLoot", "\"No, I won't\""]
            ]
        },

// Don Corleone Route Story Line Start
        grabBoxForSelf: {
            text: "You grab the box and go to an alley way nearby and open it. The box contains money, a lot of it. You level up getting the money. However, you save some of the money for later. Time passes during the day and you decide not to return back to Al Capone, while waking around, you see a little business. You stop and read the sign above, it reads \"Corleone\". Being curious, you walk inside, the inside looks like some sort of waiting lounge. You spot a man, the man is wearing an owl mask. The man sees you, and says,\"Ah, I see you want to become a part of my little organization\". How do you respond.",
            choices: [
                ["goHomeWithMoneyEnding", "\"No, I am fine\""],
                ["joinDonCorleone", "\"Yeah, I will join\""]
            ]
        },

        joinDonCorleone: {
            text: "\"Come upstairs, we will discuss this\". The man says. You walk up stairs with the man, in this second floor there are potted plants, along with a desk in the middle by the back of a cobblestone wall. The man sits down, and you proceed to take a seat. The man begins to say, \"Allow me to introduce myself, my name is Don Corleone, I own this small organization. Now tell me, why do you want to join my little organization that I am doing?\" How do you respond?",
            choices: [
                ["niceBuildingDonCorleone", "You got a nice building"],
                ["wastedDonCorleonesTime", "I dont know"]
            ]
        },

        niceBuildingDonCorleone: {
            text: "\"A nice building huh, you know, I like you, you are honest with that. You see, I want you to do something for me, I want you to protect one of my clients, he is running a medic business next to this building. I don't think you are armed, but I will provide you with something to defend him with.\" Don Corleone says. \"If you manage to do the job l will welcome you with open hands into my organization\". Don Corleone gives you a gun, and you walk out of the building. What do you do?",
            choices: [
                ["defendMedic", "Go to the medic"],
                ["becomelvl100MafiaBossDonCorleoneEnding", "Don't go, and start something"]
            ]
        },

        defendMedic: {
            text: "You walk to the medic business and provide the medic with protection. It was successful and you returned back to Don Corleone. Don Corleone commends you, and says, \"Well done, I thank you for providing my client with some protection. He really needs it. Thank you again. Now, I welcome you with open hands into my organization, welcome.\" You say, \"Awesome, I like the way business goes on here\". From that day, you develop very good relations with Don Corleone overtime, and become one of his important and close clients by doing missions. Some couple months later and the organization grew by a lot. One day, you met with Don Corleone upstairs and discussed. Don Corlone says, \"We have a big organization now, my Corleone business has grown. I am happy, However we have an enemy to face. I have a rival and his name is Al Capone. He is a mafia boss and we are going to take him down. I have something that you can do, you can get our mafia members ready to go, or we can more members before the time comes.\" What do you do?",
            choices: [
                ["donCorleoneMafiaEnding", "Get more members"],
                ["getTheDonCorleoneMembersReady", "Ready the members"]
            ]
        },
        // Don Corleone Story Line Ending

        // All of the endings
        
        keepDrivingTheCoolPoliceCar: {
            text: "You keep driving, in desperation on making it to the raid. Some of the civillian cars are moving out of the way for you. You drive fast, while doing so, Eliot Ness is shooting his pistol from the window of the car, in hopes to suppress the hitman. It worked, and you now are in the clear to go to the base. After some time you arrive at the base and a lot of police and agents are here to raid it. This will be a big fight. Everyone, including you and Eliot Ness prepare for the raid. After some time, you enter the base and defeat everyone except Al Capone. After some negotiating Al Capone was arrested. You brought down the biggest Mafia Boss. Now you level up to 100, congratulations, you live your life as a high ranking agent.",
            choices: [
                [true, ""],
            ]
        },

        useTheCoolPoliceCarForCover: {
            text: "Things just got intense, you and Eliot Ness get out of the car fast and use it as a shield. The hitman is still trying to shoot you. Being under small amounts of fire by the hitman, you and Eliot Ness draw out your pistols and try to shoot at the Hitman. You are both firing at the Hitman, people are running away from the dangerous gun fight. The gun fight only bought time as there were level 10 crooks that came out from the building that the Hitman was on top of. The crooks shoot at the car, blowing it up. You both are defeated.",
            choices: [
                [false, ""],
            ]
        },

        YOLOOO: {
            text: "You Only Live Once, you are way too ready for this mission. The mission begins on trying to bring down Al Capone. You go to the police station parking lot, you get to your cool police car. You turn on the car and drive 70km to a building, you go through the building and go to Al Capone's secret base for a raid. You are waiting at the secret base for other police forces to arrive, eventually they get to the area and start the raid a little bit after. You are now currently raiding Al Capone's base, however due to you being so ready you die by a lvl 25 hitman, the one Al Capone sent after you. How embarrassing you really died from a LEVEL 25 HITMAN???, you were so ready and you failed? How sad.",
            choices: [
                [false, ""],
            ]
        },

        youHaveBecomeAnOfficerEnding: {
            text: "You become an officer instead of an agent. You spend six months training to be a police officer, eventually, you get hired and now you have a cool job. During this time period, crime rates are dangerously high, you partake in police raids, dangerous shootouts and situations, and go on cool car chases. It was fun to you, however Al Capone hasn't been stopped. At one point during your police career, you have a situation to respond to, so you get in your cool police car, you are confident and brave. You proceed to use your cool police car and drive to the scene of the situation. You arrive, however mild dread washes over you as you recognize the area, it is Al Capone's secret organization. This is bad, however, you are ready to bring Al Capone down, you and the police along with the agents go inside of Al Capone's base. You are successful in taking out the weak level 10 - 30 crooks, buff guys, assassains, and hitman. You get to Al Capone, however, he is no longer level 70, he is level 100, the highest level possible. Oh no, this is very bad, you try to attack Al Capone, along with the other police officers and agents, it is useless. Al Capone has grown too powerful for being a level 100 mafia boss. The massive raid had failed, Al Capone had defeated everyone.",
            choices: [
                [false, ""],
            ]
        },

        dontWorkWithEliotNess: {
            text: "You walk out of the office and proceed to say, \"Yahoo!\". You start to backwards long jump, constantly gaining speed. You have acquired so much speed, you clip out of the police station and go back home. That's it, you finally made it back home, just what you wanted.",
            choices: [
                [false, ""],
            ]
        },

        performCoolTrickToDie: {
            text: "When you peform the cool trick, you get flung backwards through the wall of the police station. Afterwards, you die. The end. That is literally it, you perished by doing a backflip, nice. +1000 style points.",
            choices: [
                [false, ""],
            ]
        },

        giveAlcaponeLoot: {
            text: "You give the loot to Al Capone and he takes it. However, Al Capone did not like how you took the loot from him, so he proceeds to kill you. Al Capone becomes a level 100 Boss, and he begins to expand his mafia, becoming the best Mafia Boss ever. You failed.",
            choices: [
                [false, ""],
            ]
        },

        dontGiveAlCaponeLoot: {
            text: "You don't give the loot to Al Capone, you still are levl 100, now you are more powerful than Al Capone. Al Capone threatens you to give the items to him or else, but you say, \"I won't be giving the loot to you, because a new boss is here\". \"What! No, you can't overthrow me!\" Al Capone says. \"I'm sorry, that's how mafia works, take him away boys\". Since you are level 100, the mafia members see you as the new leader. The mafia members take Al Capone away and convert him to a level 1 gangster. Congratulations you overtook Al Capone's mafia, you are the new mafia boss in charge.",
            choices: [
                [true, ""],
            ]
        },

        coolCarExplosionAlcapone: {
            text: "You use the  cool car as cover, for a while it took several hits that made it bow up. You were caught in the explosion as you tried to run away. You were defeated",
            choices: [
                [false, ""],
            ]
        },

        donCorleoneMafiaEnding: {
            text: "You agree to get more members. So, you garb money and go out to recruit level 1 and 10 crooks into the Corleone business. It was successful, because of how desperate the crooks were to get a job and level up. After leveling the crooks up Don Corleone was ready to attack Al Capone. The members were mobilized and they all headed towards Al Capone's base. The mafia members of both Al Capone and Don Corleone lined the streets and roads. A little bit after the attack began, it was rough. Both side lot mafia members, but Al Capone was losing more, eventually he gets overwhelmed and surrenders, afterwards he his defeated by Don Corleone and Don Corleone levels up to level 100 Mafia Boss. The victory was great, Don Corleone still kept you appointed as one of his close clients and the Co-owner of the Corleone business. Congratulations you won.",
            choices: [
                [true, ""],
            ]
        },

        getTheDonCorleoneMembersReady: {
            text: "You ready the mafia members, immediately, they all get in cool cars and you all are ready to battle. Al Capone's mafia members lined the streets and roads along with Don Corleone's mafia members. Shortly afterward, the battle began, and it went by for a while. Both sides were losing members pretty quickly, but eventually Don Corleone's mafia was overwhelmed by Al Capone's mafia members. Afterwards you and Don Corleone surrender, however Al Capone recognizes that you betrayed him, then, you and Don Corleone are defeated. You lost the battle, you should have gotten more members to beat the other mafia.",
            choices: [
                [false, ""],
            ]
        },

        becomelvl100MafiaBossDonCorleoneEnding: {
            text: "You abandon the mission, and you start your own mafia organization. It was small, but eventually you got it going good. With the money from that box, you have persuaded people to join your mafia out of their desperation to find a good job. You have betrayed two mafia organizations to get to this point. Nonetheless, you still amassed a lot of power, as eventually, you become a level 100 Boss, the highest mafia ranking. At that point you are unstoppable, and you begin to take over all the mafia businesses, including Al Capone's mafia and Don Corleone's mafia. You have became such a powerful mafia member that you now have tanks in your arsenal. All from a box containing money. Congratulations, you are the most powerful level 100 Mafia Boss.",
            choices: [
                [false, ""],
            ]
        },
        
        wastedDonCorleonesTime: {
            text: "Don Corleone says, \"Hm, you are not sure, then why did you come here? Just to waste our time, but why?\". Yeah, why did you waste Don Corleone's time, come on, he is such a cool mafia boss.",
            choices: [
                [false, ""],
            ]
        },

        goHomeWithMoneyEnding: {
            text: "No words, you walk out of the building with the money acquired from the box and head home. Nice, you can now live a good life with this amount of money acquired.",
            choices: [
                [true, ""],
            ]
        },

        alcaponeCoolCarForEnd: {
            text: "You proceed to go and use the cool car. You are unsure of how it works. You try to turn on the cool car, but the car starts up by itself. You are spooked by this occurance, the cool car proceeds to drive forward. Unsure of where the cool car will take you, you sit back and watch. Eventually, the car comes to a stop in some open grassy area, no one appears to be in this area other than you and the cool car. You did not intend on leaving the mission from Al Capone, however, you enjoy this.",
            choices: [
                [true, ""],
            ]
        },

        shadowRealm: {
            text: "You decline the figure's request. The figure sends you to the Shadow Realm, the figure is revealed to be Al Capone the lvl. 70 mafia boss. With you getting sent to the Shadow Realm, Al Capone takes your groceries as well. ",
            choices: [
                [false, ""],
            ]
        },

        secondDodge: {
            text: "You try to dodge again, but the enemy predicted your move. You get knocked down. The enemy defeated you.",
            choices: [
                [false, ""],
            ]
        },

        tryToGuard: {
            text: "Your guard gets broken somehow you noclip out of reality.",
            choices: [
                [false, ""]
            ]
        },

        runToTheLocalPolice: {
            text: "You run as fast you can from alley way. Then, you go to the police station. You explain to the police what happened... and then they killed you cuz you knew to much :)",
            choices: [
                [false, ""]
            ]
        },
    
        literallyLeave: {
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
    
        buttons.addEventListener("click", function() 
        {mainStoryStorage.push(chosen); mainStoryMaker(); });
    
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
            youLose.style.display = "";
            }

        if(choiceParts[0] == true ) {
                console.log("Nice you won");
                youWin.style.display = "";
            }
        }
    
    }
    mainStoryMaker();
    
    youLose.addEventListener("click", function(){location.reload(); });
    youLose.style.display = "none";
    youWin.style.display = "none";
    }
    