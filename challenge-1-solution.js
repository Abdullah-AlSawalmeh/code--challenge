
let test_array = [1, 4, 3, 5, 6];

function square(test_array) {
    for (let i = 0; i < test_array.length; i++) {
        console.log(Math.sqrt(test_array[i]));
    }
}


square(test_array);