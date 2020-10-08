// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    ##Project Description:
    ${data.description}
    ##Table of Contents(optional):
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *
    ###[Tests](#tests)
    *
    ###[Questions](#quesitons)
    *  
    ###[Credits]
  `;
  }
  
  module.exports = generateMarkdown;
  