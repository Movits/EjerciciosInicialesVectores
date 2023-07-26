const divContenedorTitulos = document.querySelector("#contenedor-titulos");
const titulosNum = [1,2,3,4,5,6];
const titulosContenido = [
    "Contenido 1",
    "Contenido 2",
    "Contenido 3",
    "Contenido 4",
    "Contenido 5",
    "Contenido 6",
];

for (let i = 0; i < titulosNum.length; i++) {
    divContenedorTitulos.innerHTML+=`
        <h${titulosNum[i]}>${titulosContenido[i]}</h${titulosNum[i]}>
    `;
    
}