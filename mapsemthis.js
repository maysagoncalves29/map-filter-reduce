function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2
    } );
}

const nums = [2, 4, 6, 8, 9];

console.log(mapSemThis(nums));