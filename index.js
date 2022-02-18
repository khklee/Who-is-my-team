const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMember = [];

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
                    console.log("Please enter the manager's employee ID!");
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
                    console.log("Please enter the manager's email address!");
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
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        },
    ])

    .then((managerInput) => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
        
        teamMember.push(manager);
        console.log(teamMember);
    });
};

// ask questions about the team employee's profile
const addEmployee = (employeeInput) => {
    // If there's no 'teamMember' array property, create one
    if (!employeeInput) {
        employeeInput = [];
    }
    console.log(`
    =============
    Add Employees
    =============
    `);

    inquirer
        .prompt({
            type: 'list',
            name: 'action',
            message: 'Who would you like to add to your team?',
            choices: ['Add an engineer', 'Add an Intern', 'Finish buliding my team']
        })
        .then(({ action }) => {
            if (action === 'Add an engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Who is the engineer of your team?',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        }, 
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is the engineer's employee ID?",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's employee ID!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is the engineer's email address?",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's email address!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "What is the engineer's Github ID?",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's Github ID!");
                                    return false;
                                }
                            }
                        }
                    ])
                    .then ((employeeInput) => {
                        const {name, id, email, github} = employeeInput;
                        const engineer = new Engineer(name, id, email, github);
                        console.log(engineer);

                        teamMember.push(engineer);
                        console.log(teamMember);

                        addEmployee();
                    });
            } else if (action === 'Add an Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Who is the intern of your team?',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        }, 
                        {
                            type: 'input',
                            name: 'id',
                            message: "What is the intern's employee ID?",
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's employee ID!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: "What is the intern's email address?",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's email address!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the school name!");
                                    return false;
                                }
                            }
                        }
                    ])
                    .then ((employeeInput) => {
                        const {name, id, email, school} = employeeInput;
                        const intern = new Intern(name, id, email, school);
                        console.log(intern);

                        teamMember.push(intern);
                        console.log(teamMember);

                        addEmployee();
                    });
            } else {
                console.log();
            }
            
        })
};

// Create a function to initialize app
function init() {
    addManager()
        .then(addEmployee);
};

// Function call to initialize app
init();
