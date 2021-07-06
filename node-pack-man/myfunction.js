const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const selamat = ({name}) => {
    console.log(`Selamat ulang tahun ${name}!`);
}

const functionOnGreeting = ({ name }) => {
    selamat(name);
}
myEventEmitter.on('greeting', functionOnGreeting);

myEventEmitter.emit('greeting',{ name:'Fiandra' });