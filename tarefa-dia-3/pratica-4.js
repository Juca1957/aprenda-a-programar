// Instalamos o prompt-sync (ver https://github.com/heapwolf/prompt-sync#readme) usando o comando "npm install --save prompt-sync" no console do Git Bash.
// Isto permite a leitura do número a ser avaliado 
// Acrescentamos ao output os divisores inteiros dos número não primos

let numero = "number"
const prompt = require("prompt-sync")();
const input = prompt("Digite um número ");
numero = input
console.log(`O número digitado é ${numero}`);

let primo = true
let i=2

    while (i <= numero - 1) {
               if (numero % i == 0) {
            primo = false
            console.log(`O número ${numero} é divisível por ${i}`)
        }
        i += 1
    } 

if (primo == true) {
    console.log(`O número ${numero} é primo`) 
}
