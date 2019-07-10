// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

//window.example = example;

let  filterData = (data, condition) => {
let filtered = data.filter(element =>  element.type.indexOf(condition) > -1);
return filtered;
};
window.filterData= filterData;

let sortData = (pokearray, criterion) => {

    if (criterion === "A-to-Z"){
       organized= pokearray.sort((a,b) => a.name.localeCompare(b.name));
    }
    if (criterion === "Z-to-A"){
       organized= pokearray.sort((a,b) => b.name.localeCompare(a.name));
    }
    if (criterion === "0-to-9"){
       organized=pokearray.sort((a,b)=>{return(a.id-b.id)});
    }
    if (criterion ==="9-to-0"){
       organized=pokearray.sort((a,b)=>{return(b.id-a.id)});
    }
    return organized
};
    
window.sortData= sortData;