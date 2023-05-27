
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
  
`;
}

module.exports = generateMarkdown;