// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "Apache-2.0") {
    return '[![Github license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } 
  return "";
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === "Apache-2.0") {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  }
  return "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return 'This project is licensed under the MIT License.';
  } else if (license === "Apache-2.0") {
    return 'This project is licensed under the Apache 2.0 License.';
  }
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  -[Description](#Description)
  -[Requirements](#Requirements)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Demo](#demo)
  -[License](#license)

  ## Requirements
  ${data.requirements}

  ## Installations
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Demo
  ${data.demo}

  ## License
  ${data.license}

  ## Questions
  If you have any questions, please contact me at 
  `;
}

// Example usage
const readmeContent = generateMarkdown({
  title: 'Read Me Generator',
  description: 'A ReadMe generator serves as a vital tool for developers, project managers, and content creators looking to simplify the documentation process for their projects.',
  github: 'Daniellewoessner',
  email: 'daniellewoessner7792@gmail.com',
  installation: '',
  usage: 'The intended use is to help creators make a professional read me generator without spending extra time doing it.',
  contributing: 'Daniellewoessner',
  license: 'MIT',
});

export default generateMarkdown;
