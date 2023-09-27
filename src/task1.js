let numberOfApples = 29; 
let numberOfChildren  = 9; 
let wholeApples; 
let leftApples;

wholeApples = Math.floor(numberOfApples / numberOfChildren)
console.log("Every child can have " + wholeApples + " apples.");

leftApples = numberOfApples % numberOfChildren;
console.log(leftApples + " apples are left after distribution.");


/*let wholeApples; 
let leftApples;

wholeApples = Math.floor(numberOfApples / numberOfChildren)
console.log("Every child can have " + wholeApples + " apples.");

leftApples = numberOfApples - (numberOfChildren*wholeApples);
console.log(leftApples + " apples are left after distribution.");*/