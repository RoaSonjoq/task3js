async function getProoduct(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    const result = products.map(function(ele){
        return `
        <div class="product">
        <h1>${ele.title}</h1>
        <img src=${ele.thumbnail} />
        <p>${ele.price}$</p>
        </div>
        `
    }).join('');
    document.querySelector(".products").innerHTML=result;
}

getProoduct();