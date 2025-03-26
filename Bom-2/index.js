async function getData(){
try{
    document.getElementById("loader").style.display = "flex";
    document.getElementById("container").style.display = "none";
    let response=await fetch("http://localhost:3000/products")
    if(!response.ok){
        throw new Error("http error")
    }
    let result=await response.json()
    console.log(result)
    localStorage.setItem("products",JSON.stringify(result))
    displayData(result)
}
catch(err){
console.error(err)
}
finally {
    // Hide the loader and show the content
    loader.style.display = "none";
    container.style.display = "flex";
}
}

function displayData(products){
    console.log(products)
    let container=document.getElementById("container")
    container.innerHTML=` `
    products.forEach((element) => {
        let {id,images,brand,title,description,price,rating,category,}=element

        let item=document.createElement("div")
        item.className="item"
     item.innerHTML=`
       <img src="${images}">
        <h3>${title}</h3>
        <p> <b>brand:</b> ${brand}<b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  price:</b>$ ${price}</p>
        <p><b>description</b>${description}</p>
        <p><b>rating:</b>⭐${rating} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>category:</b>${category}</p>
        <button onclick="getMoreData(${id})">More</button>
        `
        container.appendChild(item)
    });

}

function getMoreData(id){
    // console.log(id)
    window.location.href=`./more.html?id=${id}`
    
}
getData()