// create manager section
const generateManager = function (manager) {
    return`
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <i class="bi bi-briefcase-fill"></i><h4>${manager.role}</h4>
                    </div>
                    
                    <div class="card-body">
                        <h5 class="card-title">${manager.id}</h5>
                        <p class="card-text">Email:${manager.email}</p>
                        <p class="card-text"> Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

// create engineer section
const generateEngineer = function (engineer) {
    return`
    <div>
        <h3>${engineer.name}</h3>
    </div>
    <div>
        <p>${engineer.id}</p>
        <p>${engineer.email}</p>
        <p>${engineer.github}</p>
    </div>


`
}

// create intern section 
const generateIntern = function (intern) {
    return`
    <div>
        <h3>${intern.name}</h3>
    </div>
    <div>
        <p>${intern.id}</p>
        <p>${intern.email}</p>
        <p>${intern.school}</p>
    </div>


`
} 

// pass array to the page
generateHTML = (data) => {
    // array for sections
    pageArry = [];

    // destructure data from each roles 
   for (let i = 0; i < data.length; i++) {
       const employee = data[i];
       const role = employee.getRole();

        // call manager function
        if (role === 'Manager') {
            const mangerSection = generateManager(employee);

            pageArry.push(mangerSection);

        }
         // call manager function
        if (role === 'Engineer') {
            const engineerSection = generateEngineer(employee);

            pageArry.push(engineerSection);

 
        }
        // call manager function
        if (role === 'Intern') {
            const internSection = generateIntern(employee);

            pageArry.push(internSection);


        }
    }

    // joining strings
    const employeeSection = pageArry.join('')

    // return to generate the page
    const generateTeam = generatePage(employeeSection);
    return generateTeam;
}

// genertae HTML page
const generatePage = function (employeeSection) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-9">
            <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Who is my team?</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header>
                    <h2>Who is My Team?</h2>
            <header>

            <main>
                    ${employeeSection}


            </main>
        </body>
        </html>
    
    `
};

module.exports = generateHTML;
