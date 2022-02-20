const inquirer = require('inquirer');
const fs = require('fs');

// link to HTML page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// team array
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
    Add employees
    =============
    `);

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Who would you like to add to your team?',
                choices: ['Add an engineer', 'Add an intern', 'Finish buliding my team']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name of your team?",
                when: (input) => input.role !== 'Finish buliding my team',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name!");
                        return false;
                    }
                },
            },
            {                
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?",
                when: (input) => input.role !== 'Finish buliding my team',
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
                when: (input) => input.role !== 'Finish buliding my team',
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
                when: (input) => input.role === 'Add an engineer',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === 'Add an intern',
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
    .then (employeeInput => {
        let {name, id, email, role, github, school} = employeeInput;
        let employee;

        if (role === 'Add an engineer') {
            employee = new Engineer(name, id, email, github);
            
            console.log(employee);
            
            return addEmployee();

        } else if (role === 'Add an intern') {
            employee = new Intern(name, id, email, school)

            console.log(employee)

            return addEmployee();

        } else if (role === 'Finish buliding my team') {
            console.log('You finished answering profile questions for your team!');
        }
        
        teamMember.push(employee);
        console.log(teamMember);
    })
};

// // Create a function to initialize app and write HTML file
// function init() {
//     addManager()
//         // .then(addEmployee)

// };

const writeFile = data => {
    // const pageHTML = generatePage(data)
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile complete!')
        }
    })
};

// Function call to initialize app
addManager()
    .then(addEmployee)
    .then(teamMember => {
        return generateHTML(teamMember);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });