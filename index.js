const inquirer = require("inquirer")
const fs= require("fs")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer
        .prompt([
            //repeat for all needed README elements
            //title,description,tableOfcontents,installation,usage,license,contributing,tests,questions
            type: "input",
            name: "something",
            message: "Give me something"
        ])
        
        //take info from prompt and write new txt file "readme.md"

}
