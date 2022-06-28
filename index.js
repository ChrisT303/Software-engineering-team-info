import inquirer from 'inquirer';
import questions from './questions.js';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';

const positions = {Managers:[],Engineers:[],Interns:[]};

inquirer.prompt(questions).then();
