const fs = require('fs')
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Would you like to add screenshots (Must format for markdown and path to screenshot)',
        name: 'screenshot',
    },
    {
        type: 'list',
        message: 'Choose License.?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'Contributions',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter email.',
        name: 'email',
    },
    {
    type: 'input',
    message: 'Enter Github.',
    name: 'github',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'questions',
    },
];

function writeToFile(file, data) {
    fs.writeFileSync(path.join(process.cwd(), file), data)
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({ ...answers }))
    })
}

init();