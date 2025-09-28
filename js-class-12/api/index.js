
function getProducts() {
    fetch("https://dummyjson.com/products").then((response) => response.json()).then((result) => showProduct(result))
}

function showProduct(result) {
    const { products } = result
    let cardElementContainer = document.getElementById('container')
    products.map((element) => {
        const { thumbnail, price, title, description , id } = element
        cardElementContainer.innerHTML += `
        <a href='./product.html?id=${id}&name=Arham' >
        <div id="product-card">
            <div id="product-front">
                <div class="shadow"></div>
                <img src=${thumbnail} alt="" />
                <div class="image_overlay"></div>
                <div id="view_details">View details</div>
                <div class="stats">
                    <div class="stats-container">
                        <span class="product_price">$${price}</span>
                        <span class="product_name">${title}</span>
                        <p>${description}</p>

                        <div class="product-options">
                            <strong>SIZES</strong>
                            <span>XS, S, M, L, XL, XXL</span>
                            <strong>COLORS</strong>
                            <div class="colors">
                                <div class="c-blue"><span></span></div>
                                <div class="c-red"><span></span></div>
                                <div class="c-white"><span></span></div>
                                <div class="c-green"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-back">
                <div class="shadow"></div>
                <div id="carousel">
                    <ul>
                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png" alt="" />
                        </li>
                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png" alt="" />
                        </li>
                        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png" alt="" />
                        </li>
                    </ul>
                    <div class="arrows-perspective">
                        <div class="carouselPrev">
                            <div class="y"></div>
                            <div class="x"></div>
                        </div>
                        <div class="carouselNext">
                            <div class="y"></div>
                            <div class="x"></div>
                        </div>
                    </div>
                </div>
                <div id="flip-back">
                    <div id="cy"></div>
                    <div id="cx"></div>
                </div>
            </div>
        </div> 
        </a>
        `
    })

}

getProducts()