async function getproducts(){
    const response= await fetch('https://dummyjson.com/products');
    // console.log(response);
    const posts = await response.json();
    // console.log(posts);
    const dataa = posts.products;
    const result= dataa.map(function(post){return ` <h2> ${post.title}</h2> <img src=${post.images} /> <p>${post.price}</p>`}).join('');
document.querySelector(".prodect").innerHTML=result;
}
getproducts();