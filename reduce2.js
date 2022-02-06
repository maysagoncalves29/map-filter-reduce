const lista = [
    {
        name: 'café',
        preco: 7
        

    },
    {
        name: 'biscoito',
        preco: 2
    },
    {
        name: 'sorvete',
        preco: 11
    },
]

const saldoDisponivel = 50;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));