let arr = [3,4,5,3,4,8,9,5,3,7,11];

const idx = arr.findLastIndex( ele =>{
    if(ele % 2 == 0) return true;
    else return false;
});

console.log(idx);

let str = ["blackhole","boomerang Nebula","neutron star","pillars of creation"];

const idx2 = str.findLastIndex( str => str.length > 15);

console.log(idx2);