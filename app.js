const name = "Favorite Shows to Binge Watch";

const tvshow = "Modern Family, Leverage, Two Broke Girls, Big Bang Theory, Superstore"
function toUpper(text) {
   const upperCased = text.toUpperCase();
    console.log(upperCased)
}

toUpper(name);
toUpper(tvshow);
const age = 45;

if (age < 34) {
  console.log("Welcome to my page!");  
} else if(age > 40){
  console.log("Have you found what you were searching for?");
}
else {
  console.log("What do you see?");
}

console.log(`It's almost Valentine's Day`);
const name2 = "Chiefs";
const name3 = "49ers";
console.log(`The ${name2} beat the ${name3} in the SuperBowl`);
const names = ['Max','Caroline','Cam','Mitch','Hailey','Alex','Parker','Sheldon','Amy'];

for (list of names) {
  console.log(list);
}
let loading = 0;

while(loading < 100){
  console.log('Website is still loading');

  loading++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector('.changeColor');

text.style.color = "blue";


changeColor.addEventListener('click', function(){
  text.classList.toggle('change');
})