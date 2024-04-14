let produtos = []

let produto = {
    codProduto: 1,
    nome: 'Arroz',
    preco: 5.99
}

produtos.push(produto)

const consultar  = document.getElementById('search')
let precoProduto = document.getElementById('preco-produto')

consultar.addEventListener('click', () => {
    //pesquisar o produto    
    const inputProduto = document.getElementById('product').value    
    let result = [ ]
    if(inputProduto){
        console.log(typeof Number(inputProduto))
        result = produtos.filter((element) => {            
            return Number(inputProduto) == element.codProduto
        })
    }
    precoProduto.innerHTML = `O valor do produto é ${result[0].preco}`
})