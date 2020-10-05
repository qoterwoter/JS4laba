let a_arr = [0, 0, [1, 2],
    [1, [2, [3]]]
];
let b_arr = CloneArray(a_arr);
console.log(b_arr)

function CloneArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(CloneArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}