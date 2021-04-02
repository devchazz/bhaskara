function bhaskara(a, b, c) {
  const result = document.getElementById('result')
  const operations = document.getElementById('operations')
  const finalOperations = document.getElementById('final-operations')

  delta = b ** 2 - 4 * a * c
  
  let deltaOperations = `
  Solving: ${a}X²+${b}X+${c}=0 <br><br>
  DELTA: <br>
  delta = ${b}² - 4 * ${a} * ${c} <br>
  delta = ${b**2} - (${4*a*c}) <br>
  Delta = ${delta} <br>
  `
  operations.innerHTML = deltaOperations

  if (delta < 0) {
    console.log('Delta é negativo')
    console.log('-------------------------------------')
    result.innerHTML = 'Delta é negativo'
    finalOperations.innerHTML = 'Delta é negativo'
  } else {
    let result1 = (-b + Math.sqrt(delta, 2)) / (2 * a)
    let result2 = (-b - Math.sqrt(delta, 2)) / (2 * a)
    result.innerHTML = 'X1:' + result1.toFixed(2) + ' | X2:' + result2.toFixed(2)

    let finalResult = `
    X = ${-b} +/- (raiz de ${delta}) / 2 <br><br>
    X1: <br>
    X1: ${-b} + ${Math.sqrt(delta, 2).toFixed(2)} / 2*${a} <br>
    X1: ${(-b + Number((Math.sqrt(delta, 2)))).toFixed(2)} / ${2*a} <br>
    X1: ${result1.toFixed(2)}<br><br>
    X2: <br>
    X2: ${-b} - ${Math.sqrt(delta, 2).toFixed(2)} / 2*${a} <br>
    X2: ${-b - Math.sqrt(delta, 2).toFixed(2)} / ${2*a} <br>
    X2: ${result2.toFixed(2)}<br><br>
    X pode ser ${result1.toFixed(2)} ou ${result2.toFixed(2)} /// X=[${result1.toFixed(2)},${result2.toFixed(2)}]
    `

    finalOperations.innerHTML = finalResult
    console.log(``)
  }
}



function solve(){
  let valueA = document.getElementById("a").value
  let valueB = document.getElementById("b").value
  let valueC = document.getElementById("c").value
  valueA && valueB && valueC && bhaskara(valueA, valueB, valueC)
}

document.addEventListener('keydown', function(event) {
  if(event.keyCode == 13) {
    solve()
  }
})