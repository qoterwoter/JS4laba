let array = [0, -11, 11, 1, 12, 2, 0.1, 1.1, 22, 3, 100];

function arraySort(arr) {
    let reverseSorted = arr.sort(function(a, b) { return b - a });
    console.log(reverseSorted)
}
arraySort(array)