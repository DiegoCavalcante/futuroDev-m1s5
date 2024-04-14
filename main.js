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
    let result 
    if(!isNaN(Number(inputProduto)) ){        
        result = buscarCodProduto(inputProduto)
        if(result){
            precoProduto.innerHTML = `O valor do produto é ${result.preco}`
        }else{
            precoProduto.innerHTML = 'Produto não encontrado'
        }
        
    }
    
})

function buscarCodProduto(cod){
    let result = [ ]
    result = produtos.filter((element) => {            
        return cod == element.codProduto
    })
    return result.length > 0 ? result[0] : null
}