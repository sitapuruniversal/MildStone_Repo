const os = require('os')

// Get OS name 

const osName = os.platform()

console.log('Operating System : ',osName);

// Out Put          Operating System  win32


// Get OS Version 

const osVersion = os.release()
console.log('Relase Version : ',osVersion);



/* Output 

Operating System :  win32
Relase Version : 6.3.9600
*/
