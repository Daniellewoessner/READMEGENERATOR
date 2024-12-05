//  Include packages needed for this application
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


// Create an array of questions for user input

inquirer
.prompt([
{
    type: "input",
    name: "title",
    message: "Please name your Project?",
 },


 {
    type: "input",
    name: "description",
    message:"Please describe the purpose and motivation of project.",

 },
 {
    type:"input",
    name:"creator",
    message:"Provide your Git Username, First and Last name",
 },
{
    type:"input",
    name:"email",
    message:"Indicate an email address relvant to your project",
},
{
    type:"input",
    name:"requirements",
    message:"What are the necessary requirements",
},
 {
    type:"input",
    name:"Installation",
    message:"What are the steps for installation for your project.",
 },

 {
    type:"input",
    name:"usage",
    message:"What is the intended use for this project.",
 },
{
    type:"input",
    name:"contributing",
    message:"Please specify the names of all contributors (github Usernames)",
},
{
    type:"input",
    name:"licence",
    message:"Select an appropriate license for your project",
    

},
{
    type:"input",
    name:"refrences",
    message:"Provide a list of refrences or sources used",
}
]).then((answers) => {
   const markdownContent = generateMarkdown(answers);
   writeToFile('./DEMO/README.md', markdownContent); 
   console.log('Creating README.md file...'); // Updated variable name
})
.catch((error) => {
   if (error.isTtyError) {
     // Prompt couldn't be rendered in the current environment
   } else {
     // Something else went wrong
   }
});

//writing read me file
function writeToFile(README,data) {
    fs.writeFileSync(path.join(process.cwd(), README), data, (err) =>
        err ? console.error(err) : console.log('README file created!')
    );
}


// Initialize read me file

function init(README, data) {
    console.log("README file is being created....");
    writeToFile('README.md', generateMarkdown({data}));
}

// Function call to initialize app
init();



