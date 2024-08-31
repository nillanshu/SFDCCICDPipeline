// parsePR.js
const fs = require('fs');

// Read the PR from the file
const prBody = fs.readFileSync('./pr_body.txt', 'utf8');

// Define a regex to extract the test classes
const regex = /Apex::\[(.*?)\]::Apex/;
const match = prBody.match(regex);

let testsToRun = '';

// If a match is found, extract the test classes
if (match && match[1]) {
    testsToRun = match[1];
} else {
    // Default to running all tests if no specific tests are mentioned
    testsToRun = 'all';
}

// Write the tests to run to a file
fs.writeFileSync('./testsToRun.txt', testsToRun);