'use strict'

// cria uma lista sequencial de numeros de 1 a 10
export const criarListaNumeros = () => {
    let listaNumeros = []
    for(let i = 1; i <= 10; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

// cria uma lista sequencial somando +1
export const criarListaAdicao = (n) => {
    let numero = Number(n)
    let listaAdicao = []
    for(let i = 1; i <= 10; i++){
            let soma = i + numero
            listaAdicao.push(soma)
    }

    return listaAdicao
}

// cria uma lista sequencial subtraindo -1
export const criarListaSubtracao = (n) => {
    let numero = Number(n)
    let listaSubtracao = []
    for(let i = 1; i <= 10; i++){
        let subtracao = numero - i
        listaSubtracao.push(subtracao)
    }

    return listaSubtracao
}

// cria uma lista sequencial multiplicando de 1 a 10
export const criarListaMultiplicacao = (n) => {
    let numero = Number(n)
    let listaMultiplicacao = []
    for(let i = 1; i <= 10; i++){
        let multiplicacao = i * numero
        listaMultiplicacao.push(multiplicacao)
    }

    return listaMultiplicacao
}

// cria uma lista sequencial divdindo de 1 a 10
export const criarListaDivisao = (n) => {
    let numero = Number(n)
    let listaDivsao = []
    for(let i = 1; i <= 10; i++){
        let divisao = numero / i
        listaDivsao.push(divisao)
    }

    return listaDivsao
}