import inquirer from "inquirer";
const calculation = await inquirer.prompt([
    {
        type: "number",
        name: "fristvalue",
        message: "Enter first number",
    },
    {
        type: "number",
        name: "secoundvalue",
        message: "Enter secound value",
    },
    {
        type: "list",
        name: "Selectopreators",
        choices: ["+", "-", "*", "/", "%"],
    },
]);
if (calculation.Selectopreators == "+") {
    console.log("the sum of two numbers is", calculation.fristvalue + calculation.secoundvalue);
}
else if (calculation.Selectopreators == "-") {
    console.log("the subtraction of two numbers is", calculation.fristvalue - calculation.secoundvalue);
}
else if (calculation.Selectopreators == "*") {
    console.log("the multiplication of two numbers is", calculation.fristvalue * calculation.secoundvalue);
}
else if (calculation.Selectopreators == "*") {
    console.log("the multiplication of two numbers is", calculation.fristvalue * calculation.secoundvalue);
}
else if (calculation.Selectopreators == "/") {
    console.log("the division of two numbers is", calculation.fristvalue / calculation.secoundvalue);
}
else if (calculation.Selectopreators == "%") {
    console.log("the division of two numbers is", calculation.fristvalue % calculation.secoundvalue);
}
else {
    console.log("you have select an invalid opreator");
}
