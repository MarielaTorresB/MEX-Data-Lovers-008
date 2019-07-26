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
                            <p> Type: ${element.type}</p>      
                            <br>              
                            <p> Candy: ${element.candy}</p>
                            <br>         
                            <p> Weaknesses: </p>
                            <p>${element.weaknesses}</p>
                            <p> Prev. Evolution: </p>
                            <p> ${element.prev_evolution}</p>
                            <p> Next Evolution: </p>
                            <p> ${element.next_evolution} </p>
                        </div>
                   </div>
               </div>
           </div>` ;                  
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
});
console.log(numType);

let porcentageTypePokemon = [];

 numType.forEach(element => {
     porcentageTypePokemon.push(window.stadistics(element, dataPokemon));
 });


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

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(graphType);
    
    function graphType (){
        let data = google.visualization.arrayToDataTable([
            ['Tipo', '%'],
            ['Agua', 32],
            ['Fuego', 12],
            ['Planta', 14],
            ['Tierra', 14],
            ['Hielo', 5],
            ['Eléctrico', 9],
            ['Roca', 11],
            ['Volador', 19],
            ['Venenoso', 33],
            ['Insecto', 12],
            ['Psíquico', 14],
            ['Normal', 24],
            ['Volador', 8],
            ['Dragón', 3]        
        ]);
    
        const options ={
            title: 'Tipos de Pokemones',
            is3D: true,
            'width':1000,
            'height':1000,
        };
        
        let chart = new google.visualization.PieChart(document.getElementById('div-show-graph'));
        chart.draw(data,options);    
    }
};

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
