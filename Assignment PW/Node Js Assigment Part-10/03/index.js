const fs = require('fs')

// Infomation About of Node.js 

const nodejsInfo = "js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."

// file path 

const filePath = './nodejs_architecture.txt'

// Write and Read information about nodejsinfo to the input.txt file 

// Written file code 
fs.writeFile(filePath, nodejsInfo, (err) => {
    if(err) {
        console.error("Error Written File" ,err)
    } else {
        console.log('Node js info Information has been successfully written in nodejs_architecture.txt');
    }
    // File Reading Start and Print to the Console
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err) {
            Console.error("Reading File Err" ,err)
        } else {
            console.log(data);
        }
    })
})
