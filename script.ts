let words = 'Apple Banana Lake Night Dumpling Scam Prize Lotus Computer Desktop Laptop Doctor Roll Cross Cream Cash Fish Trace Candy Chocolate Dimple Campaign Cookie Defence Protection Trees Beauty Scroll Shoes Fuss Trumpet Butter Ice Sauce Guitar Keyboard Bird Tiger Lion Tongue Spear Spare Cactus Mountain God Chicken zebra violin dog skin shelter food ear lungs ball bat cucumber lolipop star tractor plank log treat'.toUpperCase() ; 

let currentImageIndex = 0 ; 

let image = document.getElementById('img') ; 
const ImageArray = ['./Images/Initial.png' , './Images/Head.png' , './Images/Body.png' , './Images/LeftHand.png' , './Images/RightHand.png' , './Images/LeftLeg.png' , './Images/RightLeg.png'] ; 

let wordArray = words.split(' ') ; 
let word = "" ; 
let splitWord = "" ;
let buttonContainer:HTMLElement|null = document.getElementById('buttons')! ; 
let divContainer:HTMLElement|null= document.getElementById('wordCont') ; 
let alphabets = "abcdefghijklmnopqrstuvwxyz".toUpperCase() ; 

const setButtons:() => void = () => {
    let  i = 0 ;
    while(i < alphabets.length) {
        let button = document.createElement('button') ; 
        button.innerText = alphabets[i] ; 
        button.addEventListener('click' , () => ButtonClick(button)) ; 
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

setInterval(() => {
    image?.setAttribute('src' , ImageArray[currentImageIndex]) ; 
}) ;

function ButtonClick(button:HTMLButtonElement) {
    let btnText = button.innerText ; 
    if(splitWord.includes(btnText)){
        console.log(true)
    }
    else {
        console.log(false)
    }

}
function ReplaceButtonText(word:string, character:string ){

}