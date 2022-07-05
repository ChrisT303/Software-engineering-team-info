const questions = [
  {
    type: 'confirm',
    name: 'isEmpNeeded',
    message: 'Would you like to fill a position?'
  },
  {
    type:'list',
    name: 'role',
    message: 'Which position would you like fill?',
    choices: ['Manager', 'Engineer', 'Intern'],
    when: ({ isEmpNeeded }) => isEmpNeeded
  },
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    when: ({ isEmpNeeded }) => isEmpNeeded
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the employee's ID?",
    when: ({ isEmpNeeded }) => isEmpNeeded
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?",
    when: ({ isEmpNeeded }) => isEmpNeeded
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub username?",
    when: ({ role }) => role == 'Engineer'
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school does the intern attend?',
    when: ({ role }) => role == 'Intern'
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number?',
    when: ({ role }) => role == 'Manager'
  }  
];

export default questions;