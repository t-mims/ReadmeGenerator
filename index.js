const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {   //repeat for all needed README elements
            //title,description,tableOfcontents,installation,usage,license,contributing,tests,questions
            type: "input",
            name: "title",
            message: "What's the name of your project or application?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of your work."
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "What are the contents of this document?"
        },
        {
            type: "input",
            name: "installation",
            message: "What needs to be installed for functionality?"
        },
        {
            type: "input",
            name: "usage",
            message: "What are the terms of usage?"
        },
        {
            type: "list",
            name: "license",
            message:"What's the licensing of this application/program or product?",
            choices:[1,2,3,4,5]
        },
        {
            type:"input",
            name:"contributors",
            message:"Who are ,if any, other contributors?"
        },
        {
            type: "input",
            name:"tests",
            message:"Any tests?"
        },
        {
            type: "input",
            name:"questions",
            message:"Lastly, are there any questions you would like to address?"
        }]);

        //take info from prompt and write new txt file "readme.md"

};
// function to write README file
var fs= require("fs")
function writeToFile(fileName, data) {
    fsWrite

}

// function to initialize program
function init() {
    promptUser();
}

// function call to initialize program
init();
