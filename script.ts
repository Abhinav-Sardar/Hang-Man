let words = 'Apple Banana Lake Night Dumpling Scam Prize Lotus Computer Desktop Laptop Doctor Roll Cross Cream Cash Fish Trace Candy Chocolate Dimple Campaign Cookie Defence Protection Trees Beauty Scroll Shoes Fuss Trumpet Butter Ice Sauce Guitar Keyboard Bird Tiger Lion Tongue Spear Spare Cactus Mountain God Chicken zebra violin dog skin shelter food ear lungs ball bat cucumber lolipop star tractor plank log treat'.toUpperCase() ; 

let currentImageIndex = 0 ; 
let divs = document.getElementsByClassName('letter') ; 
let image = document.getElementById('img') ; 
const ImageArray = ['./Images/Initial.png' , './Images/Head.png' , './Images/Body.png' , './Images/RightHand.png' , './Images/LeftHand.png' , './Images/RightLeg.png' , './Images/LeftLeg.png'] ; 
const restartBtn = document.getElementById('restart') ; 
let wordArray = words.split(' ') ; 
let word = "" ; 
let splitWord:string ; 
let buttonContainer:HTMLElement|null = document.getElementById('buttons')! ; 
let divContainer:HTMLElement|null= document.getElementById('wordCont') ; 
let alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase() ; 

const setButtons:() => void = () => {
    let  i = 0 ;
    while(i < alphabets.length) {
        let button = document.createElement('button') ; 
        button.innerText = alphabets[i] ; 
        button.addEventListener('click' , () => ButtonClick(button));
        button.setAttribute('class' , 'button')
        buttonContainer.appendChild(button); 
        i++ ; 
    }
}

const setWord:() => void = () => {
    let randomWord:string = wordArray[Math.floor(Math.random()*wordArray.length)] ; 
    word = randomWord ; 
    splitWord = word ; 
    console.log(word); 
    for(let i= 0 ; i<word.length ; i++){
        let div = document.createElement('div') ; 
        div.setAttribute('class' , 'letter') ; 
        divContainer.appendChild(div) ; 
    }
}

document.addEventListener('DOMContentLoaded' , () => {
    setButtons() ; 
    setWord() ; 
}) ; 



let ButtonClick:(btton:HTMLButtonElement) => void =  (button:HTMLButtonElement) => {
    let btnText = button.innerText ; 
    if(splitWord.includes(btnText)){
        splitWord = ReplaceButtonText(splitWord , btnText) ; 
        console.log(splitWord)
    }
    else {
        currentImageIndex++ ; 
    }
    button.style.display = 'none' ;
}
function ReplaceButtonText(splittedWord:string, character:string ){
    let charArr = [] ; 
    let divUnderLineArr = [] ; 
    let newSplitWord = "" ; 
    for (let index = 0; index < splittedWord.length; index++) {
        if(splittedWord[index] === character){
            charArr.push(splittedWord[index]); 
        }
        else{
            newSplitWord += splittedWord[index] ; 
        }
    }
    for (let index = 0; index< word.length; index++) {
        if(word[index] === charArr[0]){
            
                document.getElementsByClassName('letter')[index].style.border = '0' ; 
                document.getElementsByClassName('letter')[index].innerText = charArr[0] ; 
        }
        else {
            continue ; 
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
    if(currentImageIndex === 6){
        image?.setAttribute('src' , ImageArray[6]) ; 
        alert(`You have lost the game! The word was ${word}`) ; 
        document.querySelectorAll('button').forEach(button => button.setAttribute('disabled' , 'disabled')) ; 
        clearInterval(intervalSetter)
    }
    else if(splitWord === ''){
        alert('You have guessed the word!') ;
        document.querySelectorAll('button').forEach(button => button.setAttribute('disabled' , 'disabled')) ; 
        clearInterval(intervalSetter)
    }
    else {
        image?.setAttribute('src' , ImageArray[currentImageIndex]) ; 
    }
}) ;

console.log('This game is 80% finished') ; 
setInterval(() => {
    restartBtn.onclick = SetGame ; 
}, 1000)

function SetGame () {
    document.querySelectorAll('.button').forEach(button => button.style.display = 'none') ;
    document.querySelectorAll('.letter').forEach(div => {
        div.style.display = 'none' ; 
        div.classList.remove('letter')
    }) ; 
    setButtons() ; 
    setWord()  ; 
    currentImageIndex = 0 ; 
    clearInterval(intervalSetter) ; 
    intervalSetter = setInterval(() => {
        if(currentImageIndex === 6){
            image?.setAttribute('src' , ImageArray[6]) ; 
            alert(`You have lost the game! The word was ${word}`) ; 
            document.querySelectorAll('button').forEach(button => button.setAttribute('disabled' , 'disabled')) ; 
            clearInterval(intervalSetter)
        }
        else if(splitWord === ''){
            alert('You have guessed the word!') ;
            document.querySelectorAll('button').forEach(button => button.setAttribute('disabled' , 'disabled')) ; 
            clearInterval(intervalSetter)
        }
        else {
            image?.setAttribute('src' , ImageArray[currentImageIndex]) ; 
        }
        
    }) ;; 
    divs = document.getElementsByClassName('letter'); 
}
