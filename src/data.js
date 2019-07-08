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




