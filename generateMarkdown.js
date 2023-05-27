
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'None'){
return `![${license} license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue)`;
} 
return ''
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
  return `- [License](#license)`
    } 
    return ''
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    
    This application was licensed under ${license} license.`
      } 
      return ''
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}\n
  ${data.screenshot}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  If you would like to reach me email me at ${data.email} and check out my github ${data.github}.

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;