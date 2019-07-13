const allPokemon = document.getElementById("all-Pokemon");  //Esta es la sección donde se van a pintar las tarjetas
let type = document.getElementById("type"); //Esta es la lista deplegable con los tipos de pokémon
let order = document.getElementById("order"); // Lista despeglable para ordenar los pokemones
const dataPokemon = window.POKEMON.pokemon; //Data

let pokearray = [];
let pokearrayOrganized = [];

const inicio = document.getElementById("section-one");
const introduction = document.getElementById("home-page");
const pokedex = document.getElementById("pokedex");
const pokeGraph = document.getElementById("graph");
const pokemones = document.getElementById("section-pokemon");
const sectionGraph = document.getElementById("show-graph");

const mostrarData = (data) => {
    let str =  '';
    data.forEach(element => {
        str += 
           `<div class="box-Pokemon">
               <div class= "flip-card-inner">
                   <div class = "flip-card-front">
                       <div>
                           <p class="poke-Number">${element.id}</p>
                       </div>
                       <div>
                           <img class="poke-img" src="${element.img}"/>
                       </div>
                       <div>
                           <p>${element.name}</p>
                       </div>
                   </div>
                   <div class= "flip-card-back">
                        <div class= "datos">
                            <p> Type: </p>
                            <p>${element.type}</p>
                            <p> Candy: </p>
                            <p>${element.candy}</p>
                            <p> Weaknesses: </p>
                            <p>${element.weaknesses}</p>
                            <p> Prev. Evolution: </p>
                            <p> ${element.prev_evolution}</p>
                            <p> Next Evolution: </p>
                            <p> ${element.next_evolution} </p>
                        </div>
                   </div>
               </div>
           </div>`  ;                      
    });
allPokemon.innerHTML = str;
};
mostrarData(dataPokemon);

//Función "showType"
const showType = event => {
const condition = event.target.value; //Guardando el tipo de Pokémon que elige el usuario
pokearray = window.filterData(dataPokemon,condition); //Se guarda como nuevo arreglo, el resultado de la función filterData
mostrarData(pokearray);
};

//Funcion "orderPokemon"
const orderPokemon = event => {
    if (pokearray.length == "0"){
        pokearray= dataPokemon;
    }
    const criterion = event.target.value; //Guardando el orden que elige el usuario
    pokearrayOrganized = window.sortData(pokearray,criterion); //Se guarda como nuevo arreglo, el resultado de la función filterData
    mostrarData(pokearrayOrganized);
};


//estadisticas
const typeP = ["Water", "Fire", "Grass", "Ground", "Ice", "Electric", "Rock", "Flying", "Poison", "Bug", "Psychic", "Normal", "Fighting", "Dragon"];
let numType = [];
typeP.forEach(element =>{
   numType.push((window.filterData(dataPokemon,element).length));
})
console.log(numType);

let porcentageTypePokemon = [];

numType.forEach(element => {
   porcentageTypePokemon.push(Math.round((element/dataPokemon.length)*100) + '%')
})
console.log(porcentageTypePokemon)

//grafica
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(graphType);

function graphType (){
   let data = google.visualization.arrayToDataTable([
       ['Tipo', '%'],
       ['Agua', 21],
       ['Fuego', 8],
       ['Planta', 9],
       ['Tierra', 9],
       ['Hielo', 3],
       ['Eléctrico', 6],
       ['Roca', 7],
       ['Volador', 13],
       ['Venenoso', 22],
       ['Insecto', 8],
       ['Psíquico', 9],
       ['Normal', 16],
       ['Volador', 5],
       ['Dragón', 2]
   ]);

   const options ={
       title: 'Tipos de Pokemones',
       is3D: true,
   };

   let chart = new google.visualization.PieChart(document.getElementById('div-show-graph'));
   chart.draw(data,options);
}

const show = () =>{
    pokemones.classList.remove("hidden");
    inicio.classList.add("hidden");
    sectionGraph.classList.add("hidden");
 };
 
 const showHome = () =>{
    inicio.classList.remove("hidden");
    pokemones.classList.add("hidden");
    sectionGraph.classList.add("hidden");
 };
 
 const showGraph = () =>{
    sectionGraph.classList.remove("hidden");
    pokemones.classList.add("hidden");
    inicio.classList.add("hidden");
 }

type.addEventListener("change", showType); //La lista desplegable responderá a un cambio y ejecuta la función "showtype"
order.addEventListener("change",orderPokemon);
pokedex.addEventListener("click",show);
introduction.addEventListener("click", showHome);
pokeGraph.addEventListener("click", showGraph);
 
//  let prevolution=document.getElementById("prevolution"); //Borrar si no es posible mostrar evoluciones
 
//  If ([element].prev_evolution[0] == "undefined"){
//      prevolution.innerHTML="NONE";
// } else {
//      prevolution.innerHTML= [element].prev_evolution[0].name:
//   };
//  If([element].prev_evolution[0] == "undefined") {
//     evolution.innerHTML="NONE";
// } else {
//     evolution.innerHTML= [element].prev_evolution[0].name:
//  };