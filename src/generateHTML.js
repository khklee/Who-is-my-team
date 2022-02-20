// create manager section
const generateManager = function (manager) {
    return`
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4><i class="bi bi-briefcase-fill"></i> Manager</h4>
                </div>
                
                <div class="card-body">
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="card-text">Email: ${manager.email}</p>
                    <p class="card-text"> Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    `
}

// create engineer section
const generateEngineer = function (engineer) {
    return`
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4><i class="bi bi-person-badge"></i> Engineer</h4>
                </div>
                
                <div class="card-body">
                    <p class="card-text">ID: ${engineer.id}</p>
                    <p class="card-text">Email: ${engineer.email}</p>
                    <p class="card-text">Github ID: ${engineer.github}</p>
                </div>
            </div>
        </div>
`
}

// create intern section 
const generateIntern = function (intern) {
    return`
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4><i class="bi bi-mortarboard"></i> Intern</h4>
                </div>
                
                <div class="card-body">
                    <p class="card-text">ID: ${intern.id}</h5>
                    <p class="card-text">Email: ${intern.email}</p>
                    <p class="card-text">School: ${intern.school}</p>
                </div>
            </div>
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

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header class="navbar">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Who is My Team?</span>                
                </div>
            </header>

            <main>
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        ${employeeSection}
                    </div>
                </div>


            </main>
        </body>
        </html>
    
    `
};

module.exports = generateHTML;
