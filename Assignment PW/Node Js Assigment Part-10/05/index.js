const fs = require('fs')

// information about node js
const nodejsInfo = "js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."
const nodeJsAppendData = "\n Node.js uses the Single Threaded Event Loop architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it."

// file path 
const filePath = './nodejs_architecture.txt'

// Written file 
fs.writeFile(filePath , nodejsInfo, (err) => {
    if(err) {
        console.error("Error in Written file ",err)
    } else {
        console.log('Node js info Information has been successfully written in nodejs_architecture.txt');
    }
// Reading File
    fs.readFile(filePath,'utf-8',(err,data) => {
        if(err) {
            console.error("Reading File Error" , err)
        } else {
            console.log("File Data :  ",data);
        }
// Append Data in File nodejs_architecture.txt
    fs.appendFile(filePath,nodeJsAppendData,(err) => {
        if(err) {
            console.error('Error Appending to the File', err)
        } else {
            console.log(nodeJsAppendData);
        }
// Deleted File 
    // fs.unlink(filePath, (err) => {
    //     if(err) {
    //         console.error("File Delete Error", err)
    //     } else {
    //         console.log('File Deleted Successfully');
    //     }
    // })
    })
    })
})