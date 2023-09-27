const string = "i AM master of jaVAscRIPT";


const i = string.slice(0, 2).toUpperCase();
const am = string.slice(2, 5).toLowerCase();
const j = string.slice(15, 16).toUpperCase();
const va = string.slice(17, 19).toLowerCase();
const s = string.slice(19, 20).toUpperCase();
const ript = string.slice(21, 25).toLowerCase();

const masterOf = string.slice(5, 15);
const a = string.slice(-9, -8);
const c = string.slice(-5, -4);



console.log(i.concat(am, masterOf, j, a, va, s, c, ript));

