const actions = [
    { user: "A", action: "login" },
    { user: "B", action: "logout" },
    { user: "C", action: "login" }
];
let loginCount = 0;
for (let i = 0; i < actions.length; i++) {
    if (actions[i].action === "login") {
        loginCount++;
    }
}
console.log("Login Count:", loginCount);