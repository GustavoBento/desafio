function verificarFibonnaci(numero) {
      let a = 0
      let b = 1

      while (b < numero) {
            let alternar = b
            b = a + b
            a = alternar
      }
      if(b === numero) {
            return true
      } else {
            return false
      }
}

const numeroTeste = 21

if(verificarFibonnaci(numeroTeste)) {
      console.log(`O número ${numeroTeste} faz parte da sequecência de fibonacci`)
} else {
      console.log(`O número ${numeroTeste} não faz parte da sequência de Fibonacci`)
}