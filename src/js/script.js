const ulProdutos = document.querySelector("ul")

//Buttons
const btnAllProducts   = document.querySelector("#btn00")
const btnHortifruti    = document.querySelector("#btn01")
const btnPanificadora  = document.querySelector("#btn02")
const btnLaticinios    = document.querySelector("#btn03")
const btnBusca         = document.querySelector("#btn04")

//Contador
const contadorPreco = document.querySelector("#contador")
let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")

//Create products
produtos.forEach(createProducts)

function createProducts(products,i){
    const liProducts  = document.createElement("li")
    const componentes = document.createElement("ol")
    const divProducts = document.createElement("div")

    let imgProduct     = document.createElement("img")
    let nomeProduct    = document.createElement("h3")
    let secaoProduct   = document.createElement("span")
    let precoProduct   = document.createElement("p")
    let buy            = document.createElement("button")

    //Loop in componentes
    percorreComponentes(products, componentes)

    imgProduct.src         = products.img 
    imgProduct.alt         = products.nome
    nomeProduct.innerText  = `${products.nome}`
    secaoProduct.innerText = `${products.secao}`
    precoProduct.innerText = `R$${products.preco}`.replace(".",",")
    buy.innerText = "Comprar"
    buy.id = "btnBuy"

    divProducts.append(precoProduct, buy)
    liProducts.append(imgProduct, nomeProduct, secaoProduct, componentes, divProducts)    
    ulProdutos.appendChild(liProducts)
}

//Percorrer componentes
function percorreComponentes(array, olComponentes){
    array.componentes.forEach((elemento) => {
        let liComponentes  = document.createElement("li")
        liComponentes.innerText = `${elemento}`
        olComponentes.appendChild(liComponentes)
    })
}

function listCards(products){
    ulProdutos.innerHTML = ""   
    products.forEach(element => {
        createProducts(element)
    })
    let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
    contadorPreco.innerText = `R$${sumValor}`
}

//Button All mostrando produtos
btnAllProducts.addEventListener("click", () => {
    listCards(produtos)
    let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
    contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")
})

//Button Hortifruti
btnHortifruti.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const hortifruti = produtos.filter(products => {
        return products.secao === "Hortifruti"
    })
    listCards(hortifruti)
    let sumValor = hortifruti.reduce((acc,element) => acc + element.preco,0)
    contadorPreco.innerText = `R$${sumValor}`.replace(".",",")
})

//Button Panificadora
btnPanificadora.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const panificadora = produtos.filter(products => {
        return products.secao === "Panificadora"
    })
    listCards(panificadora)
    let sumValor = panificadora.reduce((acc,element) => acc + element.preco,0)
    contadorPreco.innerText = `R$${sumValor}`.replace(".",",") 
})

//Button Laticínios
btnLaticinios.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const laticinios = produtos.filter(products => {
        return products.secao === "Laticínios"
    })
    listCards(laticinios)
    let sumValor = laticinios.reduce((acc,element) => acc + element.preco,0)
    contadorPreco.innerText = `R$${sumValor}`.replace(".",",")
})

//Search name
const btnSearch = document.querySelector("#btn04")
const keySearch = document.querySelector(".campoBuscaPorNome") 

btnBusca.addEventListener("click", () => {  
    const inputValor  = document.querySelector(".campoBuscaPorNome").value
    const productFilter = produtos.filter(products => {
        return products.nome.toLowerCase() === inputValor.toLowerCase()
    })
    return listCards(productFilter)   
})

keySearch.addEventListener("keydown", () => {
    const inputValor  = document.querySelector(".campoBuscaPorNome").value
    // if(inputValor.innerText == ""){
    //     listCards
    // }
    const productFilter = produtos.filter(products => {
        return products.nome.toLowerCase() === inputValor.toLowerCase()
    })
    return listCards(productFilter)
})

/* <li>
    <img src="./src/img/maça.png" alt="Imagem maçã">
    <h3>Maçã</h3>
    <span>Hortifruti</span>
    <p>R$ 2.00</p>
</li> */