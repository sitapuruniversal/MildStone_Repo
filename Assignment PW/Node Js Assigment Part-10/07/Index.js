const http = require('http')
const message = " I am Happy to Learn Full Stack Web Deveploment From PW SKill !!!!"
// localhost:8000
// 127.0.0.1:8000
http.createServer( (req,res) => {
    // console.log("Welcome");
    res.end("I am Happy to Learn Full Stack Web Deveploment From PW SKill !!!!")
}).listen(8000)