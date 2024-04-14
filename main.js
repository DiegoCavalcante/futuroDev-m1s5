let produtos = []
let carrinho = []

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
        precoProduto.innerHTML = mostrarPreco(result)  
        
    }else{
        result = buscarNomeProduto(inputProduto)
        precoProduto.innerHTML = mostrarPreco(result)        
    }    
})

function buscarCodProduto(cod){
    let result = [ ]
    result = produtos.filter((element) => {            
        return cod == element.codProduto
    })
    return result.length > 0 ? result[0] : null
}

function buscarNomeProduto(nome){
    let result = [ ]
    result = produtos.filter((element) => {            
        return nome.toLowerCase() == element.nome.toLowerCase()
    })
    return result.length > 0 ? result[0] : null
}

function mostrarPreco(obj){
    let result = 'Produto não encontrado'
    if(obj){
        result = `O valor do produto é ${obj.preco}`
    }
    return result
}