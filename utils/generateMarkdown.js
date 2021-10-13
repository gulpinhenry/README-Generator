
let hm = new Map();
hm.set("Apache 2.0", ["https://img.shields.io/badge/License-Apache%202.0-blue.svg", ["https://opensource.org/licenses/Apache-2.0"]]);
hm.set("MIT", ["https://img.shields.io/badge/License-MIT-yellow.svg", "https://opensource.org/licenses/Apache-2.0"]);
hm.set("GNU GPL v3", ["https://img.shields.io/badge/License-GPLv3-blue.svg", "https://www.gnu.org/licenses/gpl-3.0"]);
hm.set("MPL 2.0", ["https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"])
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = hm.get(license);
  return "(" + badge[0] + ")";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = hm.get(license);
  return "(" + link[0] + ")";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.length == 0)
    return "";
  return "[![License]"+ renderLicenseBadge(license) + "]" + renderLicenseLink(license) + "\n";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // backslashn works, use tab for code
  return `# ${data.title}

` + renderLicenseSection(data.license) + `
---

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out by creating an issue.
`;
}

module.exports = {generateMarkdown};
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions