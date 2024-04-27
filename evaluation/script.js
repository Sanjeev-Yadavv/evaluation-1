let ProductPage = document.getElementById("getProduct")




function getProduct(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        return  res.json()
        //   console.log(res)
    })
   .then((data)=>{
// console.log(data)
showData(data)
   })
}

function showData(arr){
   let container = document.querySelector(".container")
   container.innerHTML = ""
    arr.forEach(ele => {
        let card = document.createElement("div")
        card.classList = "card"

        let img = document.createElement("img")
        img.src = ele.image

        let title = document.createElement("h5")
        title.innerText = `Title : ${ele.title}`

        let category = document.createElement("p")
        category.innerText = `Category : ${ele.category}`

        let price = document.createElement("p")
        price.innerText = `Price : ${ele.price}`

        card.append(img,title,category,price)
        container.append(card)
    });

}

let selectByCategories = document.getElementById("selectByCategories")
selectByCategories.addEventListener("change", ()=>{
    let value = selectByCategories.value
  if(value==="allCategory"){
    getProduct()
  }
  else{
    let url = `https://fakestoreapi.com/products/category/${value}`
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        showData(data)
    })
  }
})

let selectByPrice = document.getElementById("selectByPrice")
selectByPrice.addEventListener("change",()=>{
    let value = selectByPrice.value
  if(value==="default"){
    getProduct()
  }
  else{
    let url = `https://fakestoreapi.com/products?sort=${value}`
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        showData(data)
    })
  }
})


ProductPage.addEventListener("click", ()=>{
    getProduct()
})