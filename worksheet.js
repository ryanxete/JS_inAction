let dayOfWeek = "Monday";
console.log(dayOfWeek)
dayOfWeek = "Friday"
console.log(`I can’t wait for ${dayOfWeek}`)

// let animal = prompt('who is?')
// let color = prompt('what is?')
// console.log(`i not sen ${animal} ${color}`)

// in oon aan 
let timeOfDay = 9900;
let dunno;
if (timeOfDay < 1200) {
    dunno = 'in'
}
else if (1200 < timeOfDay && timeOfDay < 1700) {
    dunno = 'oon'
}
else if (timeOfDay > 1700){
    dunno = 'aan'
}
console.log(dunno)

let random = Math.floor(Math.random(10)*10)
// if (random <= 2) {
//     console.log(random)
//     console.log('yea')
// }
// if (2 < random && random < 8) {
//     console.log(random)

//     console.log('no')
// }
// if (random >= 8) {
//     console.log(random)

//     console.log('ok')
// }
// for (let i = 0; i < 10 ; i++) {
//    if (i % 2 == 0) console.log("hello")
//    else console.log('bye')
// }

// let isInstructorAwesome = true
// while (isInstructorAwesome == true) {
//     console.log('yesa')
//     break
// }

 function printMovieName(){
    let vari = 'my life';
    console.log(vari)
 }
// printMovieName()

let func = ()=>{
    let d = prompt('what is')
    console.log(d)}
// func()

let magicNumber = Math.random(0,100);
let guess = 0;
while (magicNumber != guess) {
    guess = prompt('choose');
    if (guess < magicNumber) {
        alert(magicNumber)
        alert('too low')}
    else if (guess > magicNumber){
        alert(magicNumber)
        alert('too high')}
    else if( guess == magicNumber){
        alert(magicNumber)
        alert('congrats')}
    }

