// function changeText() {
//     let input = document.getElementById("userInput").value;
//     let title = document.getElementById("title");

//     if (input === "") {
//         title.innerText = "Please enter your name!";
//     } else {
//         title.innerText = "Hello " + input + " 😊";
//     }
// }

// function showAlert() {
//     alert("This is a BOM Alert 🚀");
// }

// function openWebsite() {
//     window.open("https://www.google.com", "_blank");
// }
// Body styling (CSS bhi JS se hi)
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// HERO SECTION
const hero = document.createElement("div");
hero.style.height = "100vh";
hero.style.backgroundImage =
  "url('https://assets.nflxext.com/ffe/siteui/vlv3/9c3e6a-bg.jpg')";
hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.display = "flex";
hero.style.flexDirection = "column";

// NAVBAR
const nav = document.createElement("div");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.padding = "20px";

// Logo
const logo = document.createElement("h1");
logo.innerText = "NETFLIX";
logo.style.color = "red";

// Sign In Button
const btn = document.createElement("button");
btn.innerText = "Sign In";
btn.style.background = "red";
btn.style.color = "white";
btn.style.border = "none";
btn.style.padding = "10px 20px";
btn.style.cursor = "pointer";

nav.appendChild(logo);
nav.appendChild(btn);

// CENTER CONTENT
const center = document.createElement("div");
center.style.flex = "1";
center.style.display = "flex";
center.style.flexDirection = "column";
center.style.justifyContent = "center";
center.style.alignItems = "center";
center.style.textAlign = "center";

// Heading
const title = document.createElement("h1");
title.innerText = "Unlimited movies, TV shows and more";

// Subtitle
const sub = document.createElement("p");
sub.innerText = "Watch anywhere. Cancel anytime.";

// Input + Button container
const inputBox = document.createElement("div");

// Email input
const input = document.createElement("input");
input.placeholder = "Email address";
input.style.padding = "10px";
input.style.width = "250px";

// Get Started Button
const startBtn = document.createElement("button");
startBtn.innerText = "Get Started >";
startBtn.style.padding = "10px";
startBtn.style.background = "red";
startBtn.style.color = "white";
startBtn.style.border = "none";
startBtn.style.cursor = "pointer";

inputBox.appendChild(input);
inputBox.appendChild(startBtn);

// Append all
center.appendChild(title);
center.appendChild(sub);
center.appendChild(inputBox);

hero.appendChild(nav);
hero.appendChild(center);

document.body.appendChild(hero);