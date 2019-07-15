let  filterData = (data, condition) => {
   let filtered;
 if (condition == "allP") {
   filtered = data;
 } else {
   filtered = data.filter(element =>  element.type.indexOf(condition) > -1);
 }
 return filtered;
 };
 window.filterData= filterData;

let sortData = (data, sortOrder) => {   
   let organized;
    if (sortOrder === "A-to-Z"){
       organized= data.sort((a,b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === "Z-to-A"){
       organized= data.sort((a,b) => b.name.localeCompare(a.name));
    }
    if (sortOrder === "0-to-9"){
       organized = data.sort((a,b) => {
          return(a.id - b.id);
         });
    }
    if (sortOrder ==="9-to-0"){
       organized = data.sort((a,b) => {
          return(b.id - a.id);
         });
    }
    return organized;
};
         
window.sortData= sortData;

let stadistics = (element, data) =>{
      let porcentage;
      porcentage = Math.round((element/data.length)*100);
      return porcentage;
};
window.stadistics = stadistics;