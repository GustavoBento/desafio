function stringInvertida(string) {
      let resultado = ''
      for(let i= string.length - 1; i >= 0; i--) {
            resultado += string[i]
      }
      return resultado
}

const stringDefinida = 'testando string'
const inverterString = stringInvertida(stringDefinida)
console.log(inverterString)