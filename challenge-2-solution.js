let q1 = prompt('1st number ?')
let q2 = prompt('2nd number ?')

let q3 = prompt('3rd number ?')
let q4 = prompt('4th number ?')

let q5 = prompt('5th number ?')

let qArray = [parseInt(q1), parseInt(q2), parseInt(q3), parseInt(q4), parseInt(q5)];


function get_min_max(qArray) {
    let min = -999999999999999999999999999;
    let max = 99999999999999999999999999999;
    for (let i = 0; i < qArray.length; i++) {

        if (qArray[i] > max) {
            max = qArray[i];


        } else if (qArray[i] < min) {
            min = qArray[i];
        } else {
            min = qArray[i];
            max = qArray[i];
        }

    }
    console.log(min);
    console.log(max);

}


get_min_max(qArray);