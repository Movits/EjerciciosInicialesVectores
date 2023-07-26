const contenedorDiv = document.querySelector("div");
const Palabras = [];

for (let i = 0; i < 5; i++) {
    Palabras.push("hola " + (i+1));

    contenedorDiv.innerHTML += `
        <p>${Palabras[i]}</p>
    `;
}
