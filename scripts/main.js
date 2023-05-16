
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/logo.jpeg") {
        myImage.setAttribute("src", "images/logo2.png");
    } else {
        myImage.setAttribute("src", "images/logo.jpeg");
    }
};


let myButton = document.querySelector("button");
let myHead = document.querySelector("h1");
myButton.onclick = () => {
    setUserName();
};
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHead.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHead.textContent = `Mozilla is cool, ${storedName}`;
}



