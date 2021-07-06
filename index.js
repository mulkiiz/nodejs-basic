const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environtment = process.env.NODE_ENV;

for(let i=0; i<=10000; i++){
    //proses looping ini akan membuat memory naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environtment}`);
console.log(`Penggunaan memori naik dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);