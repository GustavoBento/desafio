const valorSP = 67836.43
const valorRJ = 36678.66
const valorMG = 29229.88
const valorES = 27165.48
const valorOutros = 19849.53
const total = valorSP + valorRJ + valorMG + valorES + valorOutros

const percentualSP = (valorSP / total * 100).toFixed(2)
console.log(`O percentual do estado de SP é ${percentualSP}%`)
const percentualRJ = (valorRJ / total * 100).toFixed(2)
console.log(`O percentual do estado de RJ é ${percentualRJ}%`)
const percentualMG = (valorMG / total * 100).toFixed(2)
console.log(`O percentual do estado de MG é ${percentualMG}%`)
const percentualES = (valorES / total * 100).toFixed(2)
console.log(`O percentual do estado de ES é ${percentualES}%`)
const percentualOutros = (valorOutros / total * 100).toFixed(2)
console.log(`O percentual do estado dos outros estados é ${percentualOutros}%`)
