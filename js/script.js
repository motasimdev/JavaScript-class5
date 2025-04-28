let x = 70
let y = 30
x = y

console.log(x);

let age = 50

if (age >= 30 && age <= 40) {
    console.log("young man");
    
}
console.log("not match");

let boyosh = 30

boyosh >= 40 ? console.log("tumi bura") : console.log("tumi young");


let z = "amar nam - motasim"

console.log(z.toUpperCase(""));

console.log(z.split(" ")[3]);


let heading = document.querySelector("h1")
let heading2 = document.querySelector(".a")

console.log(heading);
console.log(heading2.innerHTML);

let heading3 = document.querySelectorAll("h3")
console.log(heading3);


let div = document.querySelector(".main")
let button = document.querySelector("button")
let box = document.querySelector(".box")

button.addEventListener("click", function () {
    heading.style.color= "teal"
    heading.style.backgroundColor= "#9EFCFF"
    heading.style.textAlign= "center"
    heading.style.textTransform= "upperCase"
    heading.style.borderBottom= "2px solid teal"
    div.style.backgroundColor= "green"
    box.style.backgroundColor= "red"
    box.style.display= "block"
})






