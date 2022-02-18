const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// ask questions about the manager's profile
const addManager = (managerInput) => {
    // If there's no 'teamMember' array property, create one
    if (!managerInput) {
        managerInput = [];
    }
    console.log(`
    =============
    Add a Manager
    =============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of your team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        },
    ]);
    
}

// Create a function to initialize app
function init() {
    addManager()
};

// Function call to initialize app
init();
