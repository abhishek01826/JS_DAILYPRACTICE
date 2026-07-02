let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length; // Handles k > array length

let rotated = arr.slice(-k).concat(arr.slice(0, -k));

console.log(rotated);
