const Numeros = [0];

for (let i = 0; i < 29; i++) {
    if (i % 2 === 0) {
        Numeros.push((i+1)*2);
    } else {
        Numeros.push(i+1);
    }
}

console.log(Numeros);