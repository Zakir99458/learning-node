const EventEmitter = require('events');
const myEmitter = new EventEmitter();


// Creating Emitter
myEmitter.on('birthday', (name)=>{
    console.log(`Happy birthday to ${name}`);
})

myEmitter.on('birthday', () =>{
    console.log('I will send you gift....');
})

myEmitter.emit('birthday', 'Zakir')