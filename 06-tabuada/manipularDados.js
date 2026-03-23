'use strict'

import {criarListaNumeros, criarListaAdicao, criarListaDivisao, criarListaMultiplicacao, criarListaSubtracao} from './listasNumericas.js'

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

    let listaNumeros = criarListaNumeros()
    let listaAdicao = criarListaAdicao(numero.value)
    let listaSubtracao = criarListaSubtracao(numero.value)
    let listaMultiplicacao = criarListaMultiplicacao(numero.value)
    let listaDivisao = criarListaDivisao(numero.value)

    escreverTabela(container, listaNumeros, listaAdicao, listaSubtracao, listaMultiplicacao, listaDivisao)
    limparConteudo(numero)
    numero.focus()
}

// escreve a tabela html
const escreverTabela = (container, listaNumeros, listaAdicao, listaSubtracao, listaMultiplicacao, listaDivisao) => {
    container.textContent = ''

    for(let i = 0; i < listaNumeros.length; i++){
        let tr = document.createElement('tr')
        let tdNumero = document.createElement('td')
        let tdSoma = document.createElement('td')
        let tdSubtracao = document.createElement('td')
        let tdMultiplicacao = document.createElement('td')
        let tdDivisao = document.createElement('td')

        tdNumero.textContent = listaNumeros[i]
        tdSoma.textContent = listaAdicao[i]
        tdSubtracao.textContent = listaSubtracao[i]
        tdMultiplicacao.textContent = listaMultiplicacao[i]
        tdDivisao.textContent = listaDivisao[i].toFixed(2)

        tr.replaceChildren(tdNumero, tdSoma, tdSubtracao, tdMultiplicacao, tdDivisao)

        container.appendChild(tr)
    }
}

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')

button.addEventListener('click', manipularDados)