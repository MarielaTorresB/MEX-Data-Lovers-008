const allPokemon = document.getElementById("all-Pokemon");

const mostrarData = () => {
    let pokeCard =  '';
    POKEMON.pokemon.forEach(element => {
        pokeCard += 

        `<div class = "box-Pokemon">
            <div class = "img-P">
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

/*const data = POKEMON.pokemon;
let typePokemon = data.forEach(item => {
    item.type.forEach((tipos) => {
    console.log(tipos)
    })
})*/




let heightPokemon = data.filter ((element) => {
    return(element.weight)
})
console.log(heightPokemon)


/*const typePokemon = POKEMON.pokemon.forEach(element => {
    element.type.forEach((item) => {
        console.log(item)
    })
})*/

