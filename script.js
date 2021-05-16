"use strict";
let words = 'Apple Banana Lake Night Dumpling Scam Prize Lotus Computer Desktop Laptop Doctor Roll Cross Cream Cash Fish Trace Candy Chocolate Dimple Campaign Cookie Defence Protection Trees Beauty Scroll Shoes Fuss Trumpet Butter Ice Sauce Guitar Keyboard Bird Tiger Lion Tongue Spear Spare Cactus Mountain God Chicken zebra violin dog skin shelter food ear lungs ball bat cucumber lolipop star tractor plank log treat'.toUpperCase();
let currentImageIndex = 0;
let divs = document.getElementsByClassName('letter');
let image = document.getElementById('img');
const ImageArray = ['./Images/Initial.png', './Images/Head.png', './Images/Body.png', './Images/RightHand.png', './Images/LeftHand.png', './Images/RightLeg.png', './Images/LeftLeg.png'];
let wordArray = words.split(' ');
let word = "";
let splitWord;
let buttonContainer = document.getElementById('buttons');
let divContainer = document.getElementById('wordCont');
let alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const setButtons = () => {
    let i = 0;
    while (i < alphabets.length) {
        let button = document.createElement('button');
        button.innerText = alphabets[i];
        button.addEventListener('click', () => ButtonClick(button));
        buttonContainer.appendChild(button);
        i++;
    }
};
const setWord = () => {
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    word = randomWord;
    splitWord = word;
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'letter');
        divContainer.appendChild(div);
    }
};
document.addEventListener('DOMContentLoaded', () => {
    setButtons();
    setWord();
});
let ButtonClick = (button) => {
    let btnText = button.innerText;
    if (splitWord.includes(btnText)) {
        splitWord = ReplaceButtonText(splitWord, btnText);
        console.log(splitWord);
    }
    else {
        currentImageIndex++;
    }
    button.style.display = 'none';
};
function ReplaceButtonText(splittedWord, character) {
    let charArr = [];
    let divUnderLineArr = [];
    let newSplitWord = "";
    for (let index = 0; index < splittedWord.length; index++) {
        if (splittedWord[index] === character) {
            charArr.push(splittedWord[index]);
        }
        else {
            newSplitWord += splittedWord[index];
        }
    }
    for (let index = 0; index < word.length; index++) {
        if (word[index] === charArr[0]) {
            divs[index].innerText = charArr[0];
        }
        else {
            continue;
        }
    }
    return newSplitWord;
    // At this point , we have :- 
    /**
     * charArr = ['C' , 'C' , 'C'] ;
     *  splitWord = newSplitWord ;
     * CoCOCO
     * if(currentWord === word[index]){
     * DIVS[i].innetText = currentArr[index] ;
     * }
     *
     */
}
let intervalSetter = setInterval(() => {
    if (currentImageIndex === 6) {
        image === null || image === void 0 ? void 0 : image.setAttribute('src', ImageArray[6]);
        alert('You have lost the game!');
        document.querySelectorAll('button').forEach(button => button.setAttribute('disabled', 'disabled'));
        clearInterval(intervalSetter);
    }
    else if (splitWord === '') {
        alert('You have guessed the word!');
        clearInterval(intervalSetter);
    }
    else {
        image === null || image === void 0 ? void 0 : image.setAttribute('src', ImageArray[currentImageIndex]);
    }
});
