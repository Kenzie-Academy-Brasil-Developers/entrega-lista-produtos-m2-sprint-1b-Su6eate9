const ulProdutos = document.querySelector("ul")
const ulCart = document.createElement("ul")

//Buttons
const btnAllProducts   = document.querySelector("#btn00")
const btnHortifruti    = document.querySelector("#btn01")
const btnPanificadora  = document.querySelector("#btn02")
const btnLaticinios    = document.querySelector("#btn03")
const formSelect       = document.querySelector(".containerBuscaPorNome")

//Contador
const contadorPreco = document.querySelector("#contador")
// let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
// contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")

//Create products
// produtos.forEach(createProducts)
produtos.forEach(createProducts)
function createProducts(products){
    const liProducts  = document.createElement("li")
    const componentes = document.createElement("ol")
    const divProducts = document.createElement("div")

    let imgProduct     = document.createElement("img")
    let nomeProduct    = document.createElement("h3")
    let secaoProduct   = document.createElement("span")
    let precoProduct   = document.createElement("p")
    let buy            = document.createElement("button")

    //Loop in components
    percorreComponentes(products, componentes)

    addProduct(products,buy)

    imgProduct.src         = products.img 
    imgProduct.alt         = products.nome
    nomeProduct.innerText  = `${products.nome}`
    secaoProduct.innerText = `${products.secao}`
    precoProduct.innerText = `R$${products.preco}`.replace(".",",")
    buy.innerText          = "Comprar"
    buy.classList.add("btnBuy")

    divProducts.append(precoProduct, buy)
    liProducts.append(imgProduct, nomeProduct, secaoProduct, componentes, divProducts)    
    ulProdutos.appendChild(liProducts)
}

//Percorrer itens da lista componentes
function percorreComponentes(array, olComponentes){
    array.componentes.forEach((elemento) => {
        let liComponentes  = document.createElement("li")
        liComponentes.innerText = `${elemento}`
        olComponentes.appendChild(liComponentes)
    })
}

//Function para listar produtos em tela
function listCards(products){
    ulProdutos.innerHTML = "" 
      
    products.forEach(element => {
        createProducts(element)
        addProduct(element)
    })
    // let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
    // contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")
}

//Button All mostrando produtos
btnAllProducts.addEventListener("click", () => {
    listCards(produtos)
    // let sumValor = produtos.reduce((acc,element) => acc + element.preco,0)
    // contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")
})

//Button Hortifruti
btnHortifruti.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const hortifruti = produtos.filter(products => {
        return products.secao === "Hortifruti"
    })
    listCards(hortifruti)
    // let sumValor = hortifruti.reduce((acc,element) => acc + element.preco,0)
    // contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")
})

//Button Panificadora
btnPanificadora.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const panificadora = produtos.filter(products => {
        return products.secao === "Panificadora"
    })
    listCards(panificadora)
    // let sumValor = panificadora.reduce((acc,element) => acc + element.preco,0)
    // contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",") 
})

//Button Laticínios
btnLaticinios.addEventListener("click", () => {
    ulProdutos.innerHTML = ""

    const laticinios = produtos.filter(products => {
        return products.secao === "Laticínios"
    })
    listCards(laticinios)
    // let sumValor = laticinios.reduce((acc,element) => acc + element.preco,0)
    // contadorPreco.innerText = `R$${sumValor}`.slice(0,7).replace(".",",")
})

//Search name, section and category
const keySearch = document.querySelector(".campoBuscaPorNome") 

formSelect.addEventListener("submit", (event) => {
    event.preventDefault() 
    const inputValor = document.querySelector(".campoBuscaPorNome").value
    const productFilter = produtos.filter(products => {
        return products.nome.toLowerCase().startsWith(inputValor.toLowerCase()) || products.secao.toLowerCase().startsWith(inputValor.toLowerCase()) || products.categoria.toLowerCase().startsWith(inputValor.toLowerCase())
    })
    return listCards(productFilter)   
})

//Carrinho
function listProductCart(cart){
    //modelo do produto no carrinho
    const containerCart = document.querySelector(".container__carrinho-compras")

    ulCart.innerHTML = ""

    containerCart.appendChild(ulCart)
    
    cart.forEach(element => {
        const liCart     =  document.createElement("li")
        const img        = document.createElement("img")
        const divContent = document.createElement("div")
        const divBtn     = document.createElement("div")
        const name       = document.createElement("h3")
        const section    = document.createElement("p")
        const price      = document.createElement("p")
        const btn        = document.createElement("button")
        const imgBtn     = document.createElement("img")

        img.src           = `${element.img}`
        img.alt           = `${element.nome}`
        divContent.classList.add("content__cart")
        divBtn.classList.add("btn__cart")
        name.innerText    = `${element.nome}`
        section.innerText = `${element.secao}`
        price.innerText   = `R$${element.preco}`.slice(0,7).replace(".",",")
        btn.classList.add("btnRemove")
        imgBtn.src        = "./src/img/trash.png"

        ulCart.appendChild(liCart)
        liCart.append(img,divContent,divBtn)
        divContent.append(name,section,price)
        divBtn.append(btn)
        btn.append(imgBtn)
    })
}

function addProduct(product,btn){
    btn.addEventListener("click", () => {
        cartProducts.push(product)
        listProductCart(cartProducts)
    })   
}

function removeCart(product,btn){
    btn.addEventListener("click", () => {

    })
}

function sumCart(){
    //soma do carrinho
}
/* <li>
    <img src="./src/img/maça.png" alt="Imagem maçã">
    <h3>Maçã</h3>
    <span>Hortifruti</span>
    <div>
        <p>R$ 2.00</p>
        <button>Comprar</button>
    </div>
</li> */