// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPar = document.createElement("p");
redPar.textContent = "Hey I'm red!";
redPar.style.color = "red";
container.appendChild(redPar);

const hThree = document.createElement("h3");
hThree.textContent = "I'm a blue h3!";
hThree.style.color = "blue";
container.appendChild(hThree);


const divBox = document.createElement("div");
// divBox.classList.add("divB");
divBox.style.backgroundColor = "pink";
divBox.style.borderStyle = "solid";
container.appendChild(divBox);

const hTwo = document.createElement("h2");
hTwo.textContent = "I'm in a div";
divBox.appendChild(hTwo);

const divP = document.createElement("p");
divP.textContent = "ME TOO!"
divBox.appendChild(divP);

const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
})




