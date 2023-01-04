let add = function(array) {
    let solution = 0;
    for (let i = 0; i < array.length; i++) {
        solution += array[i];
    };
    return solution;
};

let subtract = function(array) {
    let solution = array[0];
    for (let i = 1; i < array.length; i++) {
        solution -= array[i];
    };
    return solution;
};

console.log(subtract([5, 7]));