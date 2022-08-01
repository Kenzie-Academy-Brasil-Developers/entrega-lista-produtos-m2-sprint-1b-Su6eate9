const ulProdutos = document.querySelector("ul")

//Buttons
const btnAllProducts   = document.querySelector("#btn00")
const btnHortifruti    = document.querySelector("#btn01")
const btnPanificadora  = document.querySelector("#btn02")
const btnLaticinios    = document.querySelector("#btn03")
const btnBusca         = document.querySelector("#btn04")

//Contador
const contadorPreco = document.querySelector("#contador")
let sumValor = produtos.reduce((acc,element) => acc + parseInt(element.preco),0)
contadorPreco.innerText = `R$${sumValor},00`

//Create products
produtos.forEach(createProducts)

function createProducts(products){
    const liProducts = document.createElement("li")

    let imgProduct    = document.createElement("img")
    let nomeProduct   = document.createElement("h3")
    let secaoProduct  = document.createElement("span")
    let precoProduct  = document.createElement("p")

    imgProduct.src         = products.img 
    imgProduct.alt         = products.nome
    nomeProduct.innerText  = `${products.nome}`
    secaoProduct.innerText = `${products.secao}`
    precoProduct.innerText = `R$${products.preco},00`.replace(".",",")

    liProducts.append(imgProduct, nomeProduct, secaoProduct, precoProduct)
    ulProdutos.appendChild(liProducts)
}

function listCards(products){
    ulProdutos.innerHTML = ""   
    products.forEach(element => {
        createProducts(element)
    })
    let sumValor = produtos.reduce((acc,element) => acc + parseInt(element.preco),0)
    contadorPreco.innerText = `R$${sumValor},00`
}

//Button All mostrando produtos
btnAllProducts.addEventListener("click", () => {
    listCards(produtos)
    let sumValor = produtos.reduce((acc,element) => acc + parseInt(element.preco),0)
    contadorPreco.innerText = `R$${sumValor},00`
})

//Button Hortifruti
btnHortifruti.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const hortifruti = produtos.filter(products => {
        return products.secao === "Hortifruti"
    })
    listCards(hortifruti)
    let sumValor = hortifruti.reduce((acc,element) => acc + parseInt(element.preco),0)
    contadorPreco.innerText = `R$${sumValor},00`
})

//Button Panificadora
btnPanificadora.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const panificadora = produtos.filter(products => {
        return products.secao === "Panificadora"
    })
    listCards(panificadora)
    let sumValor = panificadora.reduce((acc,element) => acc + parseInt(element.preco),0)
    contadorPreco.innerText = `R$${sumValor},00` 
})

//Button Laticínios
btnLaticinios.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const laticinios = produtos.filter(products => {
        return products.secao === "Laticínio"
    })
    listCards(laticinios)
    let sumValor = laticinios.reduce((acc,element) => acc + parseInt(element.preco),0)
    contadorPreco.innerText = `R$${sumValor},00`
})

//Search name
const btnSearch   = document.querySelector("#btn04")

btnBusca.addEventListener("click", () => {  
    const inputValor  = document.querySelector(".campoBuscaPorNome").value
    const productFilter = produtos.filter(products => {
        return products.nome.toLowerCase() === inputValor.toLowerCase()
    })
    return listCards(productFilter)   
})

{/* <li>
    <img src="./src/img/maça.png" alt="Imagem maçã">
    <h3>Maçã</h3>
    <span>Hortifruti</span>
    <p>R$ 2.00</p>
</li> */}