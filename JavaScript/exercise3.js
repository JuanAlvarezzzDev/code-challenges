// Write a JavaScript program to rotate the string 'w3resource' in the right direction with cycle for and method split, reverse and join. 
// This is done by periodically 
// removing one letter from the string end and attaching it to the front. 
let word= 'w3resource';
let lastLetter = ""

for(i= word.length-1 ; i>=0; i--){
    lastLetter += word[i];
}

console.log("Method with for:" + lastLetter);

//other method with js

let SplitText = word.split('');
console.log("Method with split: " + SplitText)

let ReverseText = word.split('').reverse();
console.log("Method with reverse: " + ReverseText);

let JoinText = word.split('').reverse().join('');
console.log("Method with join: " + JoinText);

