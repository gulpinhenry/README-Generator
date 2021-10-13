// TODO: Include packages needed for this application
const fs = require('fs');
const gen = require('./utils/generateMarkdown');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // the generate markdown i think
    let output = gen.generateMarkdown(data);
    fs.writeFile(fileName,output,(err)=>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    //use the prompt thing?
    inquirer.prompt([
        {
            type: "input",
            message: "What is your project called?",
            name: "title"
        },
        {
            type: "list", 
            message:"What license is your project covered under?",
            choices: ["Apache 2.0", "GNU GPL v3", "MIT","MPL 2.0"],
            name: "license"
        },
        {
            type: "input", 
            message:"Please enter a description of your project:",
            name: "description"
        },
        {
            type: "input", 
            message:"Please enter installation instructions for your project:",
            name: "installation"
        },
        {
            type: "input", 
            message:"Please enter usage instructions for your project:",
            name: "usage"
        },
        {
            type: "input", 
            message:"Please enter contributors for your project:",
            name: "contributing"
        },
        {
            type: "input", 
            message:"Please enter tests for your project:",
            name: "tests"
        },


    ])
    .then((response)=> {
        writeToFile("./output/README.md", response)
    });
}

// Function call to initialize app
init();
