function bhaskara(a, b, c) {
  const result = document.getElementById('result')
  const deltaOperations = document.getElementById('deltaOperations')
  const XOperation = document.getElementById('x-operation')
  const X1Operations = document.getElementById('x1-operations')
  const X2Operations = document.getElementById('x2-operations')
  const X1X2Results = document.getElementById('x1-x2-results')


  delta = b ** 2 - 4 * a * c
  
  let resultDeltaOperations = `
  Solving: (${a}X²) + (${b}X) + (${c}) = 0 <br><br>
  DELTA: <br>
  delta = ${b}² - 4 * ${a} * ${c} <br>
  delta = ${b**2} - (${4*a*c}) <br>
  Delta = ${delta} <br>
  `
  deltaOperations.innerHTML = resultDeltaOperations

  if (delta < 0) {
    result.innerHTML = 'Delta resulted in a negative value.'
    XOperation.innerHTML = ''
    X1Operations.innerHTML = ''
    X2Operations.innerHTML = ''
    X1X2Results.innerHTML = 'Delta é negativo'
  } else {
    let result1 = (-b + Math.sqrt(delta, 2)) / (2 * a)
    let result2 = (-b - Math.sqrt(delta, 2)) / (2 * a)
    result.innerHTML = 'X1 = ' + result1.toFixed(2) + ' | X2 = ' + result2.toFixed(2)

    let Xresult = `<br>X = ${-b} +/- &radic;(${delta}) / 2 <br><br>`

    let X1Result = `
      X1: <br>
      X1: ${-b} + ${Math.sqrt(delta, 2).toFixed(2)} / 2*${a} <br>
      X1: ${(-b + Number((Math.sqrt(delta, 2)))).toFixed(2)} / ${2*a} <br>
      X1: ${result1.toFixed(2)}<br><br>
    `
    let X2result = `
      X2: <br>
      X2: ${-b} - ${Math.sqrt(delta, 2).toFixed(2)} / 2*${a} <br>
      X2: ${(-b - Number((Math.sqrt(delta, 2)))).toFixed(2)} / ${2*a} <br>
      X2: ${result2.toFixed(2)}<br><br>
    `

    let finalResult = `X can be ${result1.toFixed(2)} or ${result2.toFixed(2)} /// X = [ ${result1.toFixed(2)}, ${result2.toFixed(2)} ]`

    XOperation.innerHTML = Xresult
    X1Operations.innerHTML = X1Result
    X2Operations.innerHTML = X2result

    X1X2Results.innerHTML = finalResult
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
