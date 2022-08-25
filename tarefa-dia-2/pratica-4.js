let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let precoA = produtoA.valor
let precoB = produtoB.valor
let precoC = produtoC.valor
console.log(produtoA)
console.log(produtoB)
console.log(produtoC)

if (produtoA.internacional) { 
    precoA = precoA * 1.2
}
else {precoA = precoA * 1.12}
console.log(`O preço de ${produtoA.nome} é R$ ${precoA}`)

if (produtoB.internacional) { 
    precoB = precoB * 1.2
}
else {precoA = precoA * 1.12}
console.log(`O preço de ${produtoB.nome} é R$ ${precoB}`)

if (produtoC.internacional) { 
    precoA = precoA * 1.2
}
else {precoC = precoC * 1.12}
console.log(`O preço de ${produtoC.nome} é R$ ${precoC}`)