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
            message: "what is your project called?",
            name: "title"
        }
    ])
    .then((response)=> {
        writeToFile("./output/README.md", response)
    });
}

// Function call to initialize app
init();
