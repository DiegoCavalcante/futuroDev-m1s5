let produtos = []
let carrinho = []

let produto = {
    codProduto: 1,
    nome: 'Arroz',
    preco: 5.99
}

produtos.push(produto)

const consultar  = document.getElementById('search')
const comprar  = document.getElementById('comprar')
const buttonCarrinho  = document.getElementById('carrinho')
let precoProduto = document.getElementById('preco-produto')
let totalCarrinho = document.getElementById('preco-carrinho')

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

comprar.addEventListener('click', () => {
    const inputProduto = document.getElementById('product').value
    let result 
    if(!isNaN(Number(inputProduto)) ){        
        result = buscarCodProduto(inputProduto)
        if(result){
            carrinho.push(result)
            console.log(carrinho)
            const valorCarrinho = new Intl.NumberFormat("pt-BR").format(precoCarrinho(carrinho))    
            totalCarrinho.innerText = `Total do carrinho R$ ${valorCarrinho}`
        }
         
        
    }else{
        result = buscarNomeProduto(inputProduto)
        if(result){
            carrinho.push(result)
            const valorCarrinho = new Intl.NumberFormat("pt-BR").format(precoCarrinho(carrinho))    
            totalCarrinho.innerText = `Total do carrinho R$ ${valorCarrinho}`
        }     
    }    
})

buttonCarrinho.addEventListener('click', () => {     
    const valorCarrinho = new Intl.NumberFormat("pt-BR").format(precoCarrinho(carrinho))
    
    totalCarrinho.innerText = `Total do carrinho R$ ${valorCarrinho}`
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

function precoCarrinho(obj){
    let result 
    result = obj.reduce((acc, cur) => {
        return acc + cur.preco
    },0)
    return result
}