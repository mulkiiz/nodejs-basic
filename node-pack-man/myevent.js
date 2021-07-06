const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const selamat = ({name}) => {
    console.log(`Selamat ulang tahun ${name}!`);
}

myEventEmitter.on('greeting', selamat);

myEventEmitter.emit('greeting',{name:'Fahira'});