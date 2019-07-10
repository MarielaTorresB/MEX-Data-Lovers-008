const allPokemon = document.getElementById("all-Pokemon");  //Esta es la sección donde se van a pintar las tarjetas
let type=document.getElementById("type"); //Esta es la lista deplegable con los tipos de pokémon
let order=document.getElementById("order"); //Esta es la lista desplegable con las opciones para ordenar
const data=POKEMON.pokemon; //Data
let pokearray=[];
let pokearrayorganized;
let filtered;

const mostrarData = () => {
    let pokeCard =  '';
    POKEMON.pokemon.forEach(element => {
        pokeCard += 

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
                            <p>${element.prev_evolution}</p>
                            <p> Next Evolution: </p>
                            <p>${element.next_evolution}</p>
                        </div>
                   </div>
               </div>
           </div>`     
              
    });
 allPokemon.innerHTML = pokeCard;
};
mostrarData();

//Función "showType"

showType = event => {
const condition = event.target.value; //Guardando el tipo de Pokémon que elige el usuario
console.log(condition);
pokearray = window.filterData(data,condition); //Se guarda como nuevo arreglo, el resultado de la función filterData
console.log(pokearray);
let pokeCard =  ''; // "pokeCard" es una una variable vacía 
allPokemon.innerHTML = pokearray.forEach(element => { //Para cada elemento del nuevo arreglo se van a crear las tarjetas animadas
    pokeCard +=              

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
                        <p>${element.prev_evolution}</p>
                        <p> Next Evolution: </p>
                        <p>${element.next_evolution}</p>
                    </div>
               </div>
           </div>
       </div>`     
});
allPokemon.innerHTML = pokeCard; //Se pintan las tarjetas en la sección "all-pokemon"
};

//Función "orderPokémon"

 orderPokemon = event => {
const criterion = event.target.value; //Guardando el orden que elige el usuario
console.log(criterion);     
console.log(pokearray);
pokearrayorganized = window.sortData(pokearray,criterion); //Se guarda como nuevo arreglo, el resultado de la función filterData
console.log(pokearrayorganized);
//     let pokeCard =  ''; // "pokeCard" es una una variable vacía 
//     allPokemon.innerHTML = pokearray.forEach(element => { //Para cada elemento del nuevo arreglo se van a crear las tarjetas animadas
//         pokeCard +=              
    
//            `<div class="box-Pokemon">
//                <div class= "flip-card-inner">
//                    <div class = "flip-card-front">
//                        <div>
//                            <p class="poke-Number">${element.id}</p>
//                        </div>
//                        <div>
//                            <img class="poke-img" src="${element.img}"/>
//                        </div>
//                        <div>
//                            <p>${element.name}</p>
//                        </div> 
//                    </div>
//                    <div class= "flip-card-back">
//                         <div class= "datos">
//                             <p> Type: </p>
//                             <p>${element.type}</p>
//                             <p> Candy: </p>
//                             <p>${element.candy}</p>
//                             <p> Weaknesses: </p>
//                             <p>${element.weaknesses}</p>
//                             <p> Prev. Evolution: </p>
//                             <p>${element.prev_evolution}</p>
//                             <p> Next Evolution: </p>
//                             <p>${element.next_evolution}</p>
//                         </div>
//                    </div>
//                </div>
//            </div>`     
//     });
//     allPokemon.innerHTML = pokeCard; //Se pintan las tarjetas en la sección "all-pokemon"
     };


type.addEventListener("change", showType); //La lista desplegable responderá a un cambio y ejecuta la función "showtype"
order.addEventListener("change", orderPokemon);//La lista desplegable de ordenar responderá a un cambio y ejecuta la funcuón "orderPokemon"


