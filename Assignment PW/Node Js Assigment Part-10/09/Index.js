const EventEmitter = require('events')

// create an instance of event Emitter 

const myEmitter = new EventEmitter()

myEmitter.setMaxListeners(10)

for (let i =0; i < 10; i++){
    myEmitter.on('update' , ()=>{
        console.log(`Listner  ${i+1} for 'update event triggered`)

    })
}
myEmitter.emit('update')