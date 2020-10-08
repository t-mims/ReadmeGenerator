const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown= require("./generatemarkdown");

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
             type: "confirm",
             name: "tableOfContents",
             message: "Would you like to include a table of contents?"
         },
         {
             type: "input",
             name: "installation",
             message: "What needs to be installed for functionality?"
         },
         {
             type: "input",
             name: "usage",
             message: "What is this used for and how?"
         },
         {
             type: "list",
             name: "license",
             message:"What's the licensing of this application/program or product?",
             choices:["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0","MIT","Apache License 2.0","Boost Software License 1.0","The Unlicense"]
         },
         {
             type:"input",
             name:"contributors",
             message:"If others developers can contribute, how can they?"
         },
         {
             type: "input",
             name:"tests",
             message:"What tests exist for this project and how are they ran?"
         },
         {
             type: "input",
             name:"questions",
             message:"Lastly, are there any questions you would like to address?"
        }]);


};
 //function to write README file
function writeToFile(fileName,data) {
    fs.Write(fileName,data, function(err,data){
        if (err) {
            throw err;
          }
        console.log(data)

    })

}

 //function to initialize program
function init() {
    const answers= promptUser();
    const marked= generateMarkdown(answers);
    writeToFile("README.md", marked)
}
    
    

 //function call to initialize program
init();
