// DOM Manipulation
function changeText() {
    let input = document.getElementById("userInput").value;
    let title = document.getElementById("title");

    if (input === "") {
        title.innerText = "Please enter your name!";
    } else {
        title.innerText = "Hello " + input + " 😊";
    }
}

// BOM - Alert
function showAlert() {
    alert("This is a BOM Alert 🚀");
}

// BOM - Open new website
function openWebsite() {
    window.open("https://www.google.com", "_blank");
}