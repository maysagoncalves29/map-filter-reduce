function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [18, 5];

console.log(somaNumeros(arr));
