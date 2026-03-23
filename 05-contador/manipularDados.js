'use strict'
import {criarListaNumeros, criarListaPares, criarListaImpares, criarListaMultiplosDeCinco, criarListaPotnciaDeDois} from './listasNumericas.js'

const button = document.getElementById('button')

// responsavel por manipular os dados
const manipularDados = () => {
    const numero = document.getElementById('input-numero')
    const container = document.getElementById('container')

    if (!isValid(numero.value) || numero.value <= 0){
        alert('ERRO! Por favor, digite um valor válido.')
        numero.focus()
        return
    }

    let listaNumeros = criarListaNumeros(numero.value)
    let listaPares = criarListaPares(listaNumeros)
    let listaImpares = criarListaImpares(listaNumeros)
    let listaMultiplosDeCinco = criarListaMultiplosDeCinco(listaNumeros)
    let listaPotenciaDeDois = criarListaPotnciaDeDois(listaNumeros)

    escreverTabela(container, listaNumeros, listaPares, listaImpares, listaMultiplosDeCinco, listaPotenciaDeDois)
    limparConteudo(numero)
    numero.focus()
}

// escreve na tabela html
const escreverTabela = (container, listaNumeros, listaPares, listaImpares, listaMultiplosDeCinco, listaPotenciaDeDois) => {
    container.textContent = ''

    for(let i = 0; i < listaNumeros.length; i++){
        let tr = document.createElement('tr')
        let tdNumero = document.createElement('td')
        let tdPar = document.createElement('td')
        let tdImpar = document.createElement('td')
        let tdMultiploCinco = document.createElement('td')
        let tdPotenciaDois = document.createElement('td')

        tdNumero.textContent = listaNumeros[i]
        tdPar.textContent = listaPares[i]
        tdImpar.textContent = listaImpares[i]
        tdMultiploCinco.textContent = listaMultiplosDeCinco[i]
        tdPotenciaDois.textContent = listaPotenciaDeDois[i]

        tr.appendChild(tdNumero)
        tr.appendChild(tdPar)
        tr.appendChild(tdImpar)
        tr.appendChild(tdMultiploCinco)
        tr.appendChild(tdPotenciaDois)
        container.appendChild(tr)
    }
}


// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')


button.addEventListener('click', manipularDados)