function template(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-9">
            <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Who is my team?</title>
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            ${data}
            
            <footer class="container text-center py-3">
            </footer>
        </body>
        </html>
    
    `
}

module.exports = template;
