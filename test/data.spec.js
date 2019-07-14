<<<<<<< HEAD
// require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

require('../src/data.js');
require('../src/data/pokemon/pokemon.js');

//Testeando filterData
describe("filterData",()=>{
  it("is a function",() =>{
    expect(typeof filterData).toBe("function");
  });

  it("returns `There are 3 pokemon type dragon`",()=>{
    expect(window.filterData(window.POKEMON.pokemon,"Dragon").length).toBe(3);
  });
});

//Testeando orderData Alfabético 
describe("sortData",()=>{
  it("is a function",() =>{
    expect(typeof sortData).toBe("function");
  });

  it("returns `Descending alphabetical order: Should return Abra, Aerodactyl, Alakazam, Wigglytuff Zapdos and Zubat for positions 0,1,2,148,149 and 150`",()=>{
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[0].name).toBe("Abra");
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[1].name).toBe("Aerodactyl");
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[2].name).toBe("Alakazam");
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[148].name).toBe("Wigglytuff");
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[149].name).toBe("Zapdos");
    expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[150].name).toBe("Zubat");
  });

  it("returns `Descending numerical order: Should return Mew, Mewtwo, Dragonite, Venasaur, Ivysaur and Bulbasaur for positions 0,1,2,148,149 and 150`",()=>{
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[0].name).toBe("Mew");
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[1].name).toBe("Mewtwo");
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[2].name).toBe("Dragonite");
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[148].name).toBe("Venusaur");
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[149].name).toBe("Ivysaur");
    expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[150].name).toBe("Bulbasaur");
  });
});
=======
require('../src/data.js');
require('../src/data/pokemon/pokemon.js');
//Testeando filterData
describe("filterData",()=>{
 it("is a function",() =>{
   expect(typeof filterData).toBe("function");
 });
 it("returns There are 3 pokemon type dragon",()=>{
   expect(window.filterData(window.POKEMON.pokemon,"Dragon").length).toBe(3);
 });
});
//Testeando orderData Alfabético
describe("sortData",()=>{
 it("is a function",() =>{
   expect(typeof sortData).toBe("function");
 });
 it("returns Descending alphabetical order: Should return Abra, Aerodactyl, Alakazam, Wigglytuff Zapdos and Zubat for positions 0,1,2,148,149 and 150",()=>{
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[0].name).toBe("Abra");
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[1].name).toBe("Aerodactyl");
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[2].name).toBe("Alakazam");
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[148].name).toBe("Wigglytuff");
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[149].name).toBe("Zapdos");
   expect(window.sortData(window.POKEMON.pokemon,"A-to-Z")[150].name).toBe("Zubat");
 });
 it("returns Descending numerical order: Should return Mew, Mewtwo, Dragonite, Venasaur, Ivysaur and Bulbasaur for positions 0,1,2,148,149 and 150",()=>{
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[0].name).toBe("Mew");
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[1].name).toBe("Mewtwo");
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[2].name).toBe("Dragonite");
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[148].name).toBe("Venusaur");
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[149].name).toBe("Ivysaur");
   expect(window.sortData(window.POKEMON.pokemon,"9-to-0")[150].name).toBe("Bulbasaur");
 });
});

>>>>>>> upstream/master
