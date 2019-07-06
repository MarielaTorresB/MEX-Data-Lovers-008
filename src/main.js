const allPokemon = document.getElementById("all-Pokemon");

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

        // `<div class = "box-Pokemon">
        //     <div class = "img">
        //         <img class = "poke-img" src = "${element.img}"/>
        //     </div>
        //     <div class = "datos">
        //         <div class = "number">
        //             <p class = "poke-Number" >${element.id}</p>
        //         </div>
        //         <div class = "name">
        //             <p class = "poke-Name" >${element.name}</p>
        //         </div>
        //     </div>          
        // </div>`
              
    });
 allPokemon.innerHTML = pokeCard;
};
mostrarData();

