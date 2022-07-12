import fs, { writeFile } from 'fs';

let output = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Builder</title>     
</head>
<body>
    
    <nav>
        <h1>Team Builder</h1>
    </nav>
    <main>
`;

const htmlGen = ({Managers,Engineers,Interns}) => {
    if(Managers.length) {
        output += '<div class="row managers">'

        Managers.forEach(mgr => {
            output += `
                <div class="card">
                    <div class="card-header">
                        <h3>${mgr.getName()}</h3>
                        <h4>Manager</h4>
                    </div>
                    <p> ID: ${mgr.getId()}</p>
                    <p>Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a></p>
                    <p> Office number: ${mgr.getOfficeNumber()}</p>
                </div>
            `
        });

        output += `</div><h1>Mangers</h1><hr>`
    };



    if(Engineers.length) {
        output += `<div class="row engineers">`

        Engineers.forEach(egn => {
            output += `
                <div class="card">
                <div class="card-header">
                    <h3>${egn.getName()}</h3>
                    <h4>Engineer</h4>
                </div>
                <p> ID: ${egn.getId()}</p>
                <p>Email: <a href="${egn.getEmail()}">${egn.getEmail()}</a></p>
                <p>Github: <a href="https://github.com/${egn.getGithub()}">${egn.getGithub()}</a> </p>
            </div> 
        </div>
            `
        });

        output += `<h1>Engineers</h1><hr>`
    }

    if(Interns.length){
        output += `<div class="row interns">`

        Interns.forEach(int => {
            output += `
            <div class="card">
            <div class="card-header">
                <h3>${int.getName()}</h3>
                <h4>Interns</h4>
            </div>
            <p> ID: ${int.getId()}</p>
            <p>Email: <a href="${int.getEmail()}">${int.getEmail()}</a></p>
            <p>School: ${int.getSchool()}</p>
        </div>
    </div>
            `
        });

        output += `<h1>Interns</h1><hr>`
    };

    output += `</main></body></html>`;

    writeFile('./dist/Team-Builder.html', output, ()=>console.log('Created HTML file...'));
};

export default htmlGen;


