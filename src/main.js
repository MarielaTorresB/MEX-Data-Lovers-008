const allPokemon = document.getElementById("all-Pokemon");

const mostrarData = () => {
    let pokeCard =  '';
    POKEMON.pokemon.forEach(element => {
        pokeCard += 

        `<div class = "box-Pokemon">
            <div class = "img">
                <img class = "poke-img" src = "${element.img}"/>
            </div>
            <div class = "datos">
                <div class = "number">
                    <p class = "poke-Number" >${element.num}</p>
                </div>
                <div class = "name">
                    <p class = "poke-Name" >${element.name}</p>
                </div>
            </div>          
        </div>`
              
    });
 allPokemon.innerHTML = pokeCard;
};
mostrarData();