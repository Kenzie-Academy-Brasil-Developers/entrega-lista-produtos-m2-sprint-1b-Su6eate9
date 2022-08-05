//Adicionando itens ao carrinho
const btnBuy = document.querySelector("#btnBuy")

btnBuy.addEventListener("click", addProduct)

function addProduct(products){
    carrinhoProducts.push(products)

    const carrinhoCompras = document.querySelector("container__carrinho-compras")
    const ulCarrinho      = document.querySelector("container__carrinho-compras ul")

    let liCarrinho = document.createElement("li")
    liCarrinho.classList.add("oferta")

    let divCarrinho = document.createElement("div")
    let imgCarrinho = document.createElement('img')
    let nameCarrinho = document.createElement('h3')
    let pCarrinho = document.createElement('p')
    let btnCarrinho = document.createElement('button')

    //Propriedades
    imgCarrinho.src = products.img
    imgCarrinho.alt = products.nome   
    nameCarrinho.innerText = `${products.nome}`
    pCarrinho.innerText = `${products.secao}`
    btnCarrinho.innerText = 'Remover'

    carrinhoCompras.append(ulCarrinho)
    ulCarrinho.append(liCarrinho)

    liCarrinho.append(imgCarrinho, divCarrinho)
    divCarrinho.append(nameCarrinho, pCarrinho, btnCarrinho)    
}