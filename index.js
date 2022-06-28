const { prompt } = require('inquirer');
const questions = require('./questions');
const html = require('./generateHTML');
// prompts questions
prompt(questions).then(markDown);

const employees = [];