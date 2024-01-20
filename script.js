const list = document.querySelector("ul")
const pressButton = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonReduceAll = document.querySelector(".reduce-all")
const buttonfilterAll = document.querySelector(".filter-all")


const formatCurrency =(value)=>{
    const newValue = value.toLocaleString('pt-br',{
        style: 'currency', 
        currency: 'BRL',
    })

return newValue
}

const showAll = (productsArray) => {

    let myLi = ""

    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src} alt="">
            <p>${product.name}</p>
            <P class="item-price">${formatCurrency(product.price)}</P>
        </li>
        `
    })
    list.innerHTML = myLi
}



const mapAllItems = () => {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

const reduceAllItems = () => {
    const fullPrice = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total do cardápio sem desconto é:</p>
        <P class="item-price">${formatCurrency(fullPrice)}</P>
    </li>
    `
}

const filterProducts = () => {
    const filterVegans = menuOptions.filter((product) => product.vegan)
    showAll(filterVegans)

}

pressButton.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
buttonReduceAll.addEventListener("click", reduceAllItems)
buttonfilterAll.addEventListener("click",filterProducts)