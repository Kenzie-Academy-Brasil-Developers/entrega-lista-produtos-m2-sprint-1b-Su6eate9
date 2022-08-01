const ulProdutos = document.querySelector("ul")

//Buttons
const btnAllProducts   = document.querySelector("#btn00")
const btnHortifruti    = document.querySelector("#btn01")
const btnPanificadora  = document.querySelector("#btn02")
const btnLaticinios    = document.querySelector("#btn03")
const btnBusca         = document.querySelector("#btn04")

//Contador
const contadorPreco = document.querySelector("#contador")

function sumProducts(x){
    let i = 0
    sum = i += x
    return sum
}

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

produtos.forEach(listCards)

function listCards(products){
    ulProdutos.innerHTML = ""   
    createProducts(products)
}

//Button All mostrando produtos
btnAllProducts.addEventListener("click", () => {
    listCards(produtos)
})

//Button Hortifruti
btnHortifruti.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const hortifruti = produtos.filter(products => {
        return products.secao === "Hortifruti"
    })
    listCards(hortifruti)
})

//Button Panificadora
btnPanificadora.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const panificadora = produtos.filter(products => {
        return products.secao === "Panificadora"
    })
    listCards(panificadora) 
})

//Button Laticínios
btnLaticinios.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const laticinios = produtos.filter(products => {
        return produtos.secao === "Laticínio"
    })
    listCards(laticinios)
})

//Search name
const inputValor  = document.querySelector(".campoBuscaPorNome")
const btnSearch   = document.querySelector("#btn04")

function buscarNomeProduct(product) {    
    btnBusca.addEventListener("click", item => {              
        inputValor.innerText = `${item.nome}`.toLowerCase()
        console.log(item)
    })
}

{/* <li>
    <img src="./src/img/maça.png" alt="Imagem maçã">
    <h3>Maçã</h3>
    <span>Hortifruti</span>
    <p>R$ 2.00</p>
</li> */}