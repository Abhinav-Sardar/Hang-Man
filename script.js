const imageArray = ['./Images/Initial.png' , './Images/Head.png' , './Images/Body.png' , './Images/LeftHand.png' , './Images/RightHand.png' , './Images/LeftLeg.png' , './Images/RightLeg.png'] ; 

let person = {
    name:'Abhinav' , 
    age:12 , 
} 
let words = 'Apple Banana Lake Night Dumpling Scam Prize Lotus Computer Desktop Laptop Doctor Roll Cross Cream Cash Fish Trace Candy Chocolate Dimple Campaign Cookie Defence Protection Trees Beauty Scroll Shoes Fuss Trumpet Butter Ice Sauce Guitar Keyborad Bird Tiger Lion Tongue Spear Spare Cactus Mountain God Chicken zebra violin dog skin shelter food ear lungs ball bat cucumber lolipop star tractor plank log treat ' ; 
let randomWord = "" ; 
let alphabets = 'abcdefghijklmnopqrstuvwxyz' ; 
let wordsArray = words.split(' ') ; 
/**
 * DOMContentLoaded
 * 1)Assign a random word
 * 2)Create divs with underlines for each letter
 * 3)If character length is greater than 3 , random CHaracter should be marked.
 */
document.addEventListener('DOMContentLoaded' , () => {
    randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)] ; 

})





let buttonContainer = document.getElementById('buttons') ;  
for(let  i = 0 ; i<alphabets.length ; i++){
    let btn = document.createElement('button') ; 
    btn.onclick = () => {
        
    }
    btn.innerText = alphabets[i] ; 
    buttonContainer.appendChild(btn) ; 
}