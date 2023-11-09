// let animal={
//     eat:true
// };
// const rabbit={
//     jump:true
// };
// console.log(rabbit);
// rabbit._proto_=animal;
// console.log(rabbit);

//******************************************************************* */
let hein={race:'asian'}
let heinChild={};
//heinChild._proto_=hein;
console.log(heinChild.race);
heinChild._proto_=hein;
console.log(heinChild.race);