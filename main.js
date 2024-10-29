#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blueBright.bold("\n\t>>>>>>>>>>> Currency Converter <<<<<<<<<<<\n"));
//Define the list of currencies and their exchange rates
let exchange_rates = {
    "USD": 1,
    "EUR": 0.9,
    "JPY": 152,
    "CAD": 1.3,
    "AUD": 1.65,
    "INR": 84.6,
    "PKR": 277.70,
};
//Promt the user to select currencies to convert 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.cyan("Select the currency you want to convert from:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "INR", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.cyan("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.cyan("Enter the amount:"),
    }
]);
//Create variables for storing the answers
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
//Formula for conversion 
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(chalk.greenBright(`Converted_amount = ${converted_amount.toFixed(2)}`));
