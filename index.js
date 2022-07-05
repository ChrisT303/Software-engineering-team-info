import inquirer from 'inquirer';
import questions from './questions.js';
import Manager from './lib/Manager.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';

const positions = { Managers: [], Engineers: [], Interns: [] };

const init = () => {
    inquirer.prompt(questions).then((data) => {
        if(!data.isEmpNeeded) return console.log(positions);

        if (data.role == 'Manager') positions.Managers.push(new Manager(data.name, data.id, data.email, data.officeNumber));

        if (data.role == 'Engineer') positions.Engineers.push(new Engineer(data.name, data.id, data.email, data.github));
   
        if (data.role == 'Intern') positions.Interns.push(new Intern(data.name, data.id, data.email, data.school));

        init();
    });
};

init();