const divContenedorTitulos = document.querySelector("#contenedor-titulos");
const titulosNum = [1,2,3,4,5,6];

for (let i = 0; i < titulosNum.length; i++) {
    divContenedorTitulos.innerHTML+=`
        <h${titulosNum[i]}>Hola</h${titulosNum[i]}>
    `;
    
}