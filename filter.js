function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}
// para impar !==

const meuArray = [1, 15, 18, 50, 60, 2];


console.log(filtraPares(meuArray));