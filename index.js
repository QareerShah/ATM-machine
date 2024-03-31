#! /usr/bin/env node
import inquirer from "inquirer";
//Initialize user balance and pin code
let myBalance = 8000;
let myPin = 1212;
// print welcome message 
console.log("\n\twelcome to Qareer - ATM Machine\n\t");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct , Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw Amount", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "Cash",
                message: "please select how much money you want?",
                type: "list",
                choices: ["1000", "2000", "4000", "7000"],
            }
        ]);
        if (fastCash.Cash === "1000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "2000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "4000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        if (fastCash.Cash === "7000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance your current balance is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
    }
}
else {
    console.log("Incorrect pin code! please try again");
}
