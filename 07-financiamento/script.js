'use strict'
const btnSimular = document.getElementById('btn-simular')

// manipula os dados
const manipularDados = () => {
    const container = document.getElementById('container')
    const valorTot = document.getElementById('input-valor-tot')
    const taxaJuros = document.getElementById('input-taxa-juros')
    const numParcelas = document.getElementById('input-num-parcelas')

    if (!isValid(valorTot.value, taxaJuros.value, numParcelas.value)
        || valorTot.value <= 0 || taxaJuros.value <= 0 || numParcelas.value <= 0)
    {
        alert('ERRO! Por favor, digite um valor válido.')
        valorTot.focus()
        return
    }

    let parcela = calcularParcela(numParcelas.value, valorTot.value)
    let tabela = criarTabela(numParcelas.value, valorTot.value, taxaJuros.value, parcela)
    
    escreverTabela(container, tabela)
    limparConteudo(valorTot, taxaJuros, numParcelas)
    valorTot.focus()
}

// cria uma lista com as linhas da tabela
const criarTabela = (quant, valorTot, taxa, parcela) => {
    let quantidade = Number(quant)
    let valorTotal = Number(valorTot)
    let taxaJuros = Number(taxa)
    let valorParcela = Number(parcela)
    let tabela = []
    for(let i = 1; i <= quantidade; i++){
        let saldoDev = valorTotal - (valorParcela * i)
        let jurosMes = calcularJurosMes(saldoDev, taxaJuros)
        tabela.push(
            {
                "mes": i,
                "valor_parcela": valorParcela,
                "juros_mes":jurosMes,
                "total_mes": valorParcela + jurosMes,
                "saldo_devedor": saldoDev
            }
        )
    }

    return tabela
}

// escreve uma tabela no html
const escreverTabela = (container, tabela) => {
    container.textContent = ''

    tabela.forEach(linha => {
        let tr = document.createElement('tr')
        let tdMes = document.createElement('td')
        let tdParcela = document.createElement('td')
        let tdJurosMes = document.createElement('td')
        let tdTotMes = document.createElement('td')
        let tdSaldoDev = document.createElement('td')

        tdMes.textContent = linha.mes
        tdParcela.textContent = `R\$${linha.valor_parcela.toFixed(2)}`
        tdJurosMes.textContent = `R\$${linha.juros_mes.toFixed(2)}`
        tdTotMes.textContent = `R\$${linha.total_mes.toFixed(2)}`
        tdSaldoDev.textContent = `R\$${linha.saldo_devedor.toFixed(2)}`

        tdParcela.classList.add('col-parcela')
        tdJurosMes.classList.add('col-juros')
        tdTotMes.classList.add('col-total')
        tdSaldoDev.classList.add('col-saldo')

        tr.replaceChildren(tdMes, tdParcela, tdJurosMes, tdTotMes, tdSaldoDev)
        container.appendChild(tr)
    })
}

// calcula o valor da parcela
const calcularParcela = (parcelas, valorTot) => (Number(valorTot) / Number(parcelas)) 

// calcula o juros do mês
const calcularJurosMes = (saldoDev, taxaJuros) => saldoDev * (taxaJuros / 100)

// verifica se um dado é valido
const isValid = (...d) => d.every(dado => !isNaN(dado) && dado.trim() != '' && dado != undefined && dado != null)

// limpa o conteudo de um campo
const limparConteudo = (...d) =>d.forEach(dado => dado.value = '')

// adiciona um Event Listener no botão
btnSimular.addEventListener('click', manipularDados)