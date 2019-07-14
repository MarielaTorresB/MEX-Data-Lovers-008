let  filterData = (data, condition) => {
   let filtered;
<<<<<<< HEAD
if (condition == "allP") {
   filtered = data;
} else {
   filtered = data.filter(element =>  element.type.indexOf(condition) > -1);
}
return filtered;
};
window.filterData= filterData;

let sortData = (data, sortOrder) => {
=======
 if (condition == "allP") {
   filtered = data;
 } else {
   filtered = data.filter(element =>  element.type.indexOf(condition) > -1);
 }
 return filtered;
 };
 window.filterData= filterData;

let sortData = (data, sortOrder) => {   
>>>>>>> upstream/master
   let organized;
    if (sortOrder === "A-to-Z"){
       organized= data.sort((a,b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === "Z-to-A"){
       organized= data.sort((a,b) => b.name.localeCompare(a.name));
    }
    if (sortOrder === "0-to-9"){
<<<<<<< HEAD
       organized=data.sort((a,b)=>{
          return(a.id-b.id);
         });
    }
    if (sortOrder ==="9-to-0"){
       organized=data.sort((a,b)=>{
          return(b.id-a.id);
=======
       organized = data.sort((a,b) => {
          return(a.id - b.id);
         });
    }
    if (sortOrder ==="9-to-0"){
       organized = data.sort((a,b) => {
          return(b.id - a.id);
>>>>>>> upstream/master
         });
    }
    return organized;
};
    
window.sortData= sortData;
