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
  console.log("What is your favorite show?");
}
else {
  console.log("Can you guess my favorite show?");
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
const character = ['Max','Caroline','Cam','Mitch','Hailey','Alex','Parker','Sheldon','Amy'];

console.log(character[4]);

const user ={
animal: "White Tiger",
car: "Range Rover",
text: "I have enjoyed working on this project!",

sayAnimal: function() {
  console.log(this.animal);
}
};

console.log(user.text);
user.sayAnimal();