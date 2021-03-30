
let test_array = [1, 4, 3, 5, 6];

function square(test_array) {
    let sqrtArray = [];
    for (let i = 0; i < test_array.length; i++) {
        console.log(Math.sqrt(test_array[i]));
        // console.log(4 ** (1 / 2)); ////////// I can use this also ^_^
        sqrtArray.push(Math.sqrt(test_array[i]))

    }
    return sqrtArray;
}


console.log(square(test_array));

