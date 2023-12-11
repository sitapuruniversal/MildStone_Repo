const fs =require('fs')

// information abou Node js architecture. 

const nodejsArchitectureInfo = "Node. js offers a Single-Threaded  Loop architecture to manage concurrent requests without creating multiple threads and using fewer threads to utilize fewer resources. That's why developers prefer Node. js architecture to take the advantages Node."

// file path 
const filePath = "./nodejs_architecture.txt"

// written file in nodejs_architecture.txt 
fs.writeFile(filePath, nodejsArchitectureInfo, (err)=> {
    if(err){
        console.error("Error Written File " , err)
    } else {
        console.log("Node.js architecture information has been written to the nodejs_architecture.txt");
    }
})