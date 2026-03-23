'use strict'
 
// cria uma lista sequencial de numeros
export const criarListaNumeros = (n) => {
    let numero = Number(n)
    let listaNumeros = []
    for(let i = 1; i <= numero; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

// cria uma lista sequencial de numeros pares
export const criarListaPares = (n) => {
    let numeros = n
    let pares = []
    numeros.forEach(numero => {
        if(numero % 2 == 0)
            pares.push(numero)
    });

    return pares
}

// cria uma lista sequencial de numeros impares
export const criarListaImpares = (n) => {
    let numeros = n
    let impares = []
    numeros.forEach(numero => {
        if(numero % 2 != 0)
            impares.push(numero)
    });

    return impares
}

// cria uma lista sequencial de multiplos de cinco
export const criarListaMultiplosDeCinco = (n) => {
    let numeros = n
    let multiplosDeCinco = []
    numeros.forEach(numero => {
        let multiplo = numero * 5
        multiplosDeCinco.push(multiplo)
    });

    return multiplosDeCinco
}

// cria uma lista sequencial de potencias de dois
export const criarListaPotnciaDeDois = (n) => {
    let numeros = n
    let potenciasDeDois = []
    numeros.forEach(numero => {
        let potencia2 = numero ** 2
        potenciasDeDois.push(potencia2)
        
    });

    return potenciasDeDois
}