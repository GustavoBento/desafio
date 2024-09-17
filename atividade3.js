const container = document.querySelector('.container')

const faturamento = []
fetch("./json/dados.json")
.then(res => res.json())
.then(dados => {
      const valoresDiarios = dados.map(item => item.valor)
      const valoresPositivos = valoresDiarios.filter(valor => valor > 0)

      const menorValor = Math.min(...valoresPositivos)
      container.innerHTML += `O menor valor é ${menorValor} <br>`

      const maiorValor = Math.max(...valoresPositivos)
      container.innerHTML += `O maior valor é ${maiorValor} <br>`

      const somaValores = valoresPositivos.reduce((acc, valor) => acc + valor, 0)

      const media = somaValores / valoresPositivos.length
      container.innerHTML += `A média dos valores é ${media.toFixed(2)} <br>`

      const faturamentoSuperior = valoresPositivos.filter(valor => valor > media)
      container.innerHTML += `Valores de faturamento diário que foi superior à média mensal ${faturamentoSuperior}`
})
.catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
