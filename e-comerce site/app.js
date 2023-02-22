const hats = [
    {
        id: 0, 
        hatUrl:"https://www.bon-clic-bon-genre.eu/vignette2/px7835cirillo-bordeaux-1_20211102164854.jpg",
        title: "Panama",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 340,
        category: "man",
        quantity: 27,
    },
    {
        id: 1,
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/stafford_escorial_navy_a_1600x.jpg?v=1640025332",
        title: "Homburg",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 127,
        category: "man",
        quantity: 76,
    },
    {
        id: 2,
        hatUrl:"https://cdn.shopify.com/s/files/1/0274/9962/6553/products/135004Z_ec496905-cc35-46ec-9758-251b521dcf50.jpg?v=1650024993&width=533",
        title: "Cowboy",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 128,
        category: "woman",
        quantity: 15,
    },
    {
        id: 3,
        hatUrl:"https://www.cappellieborse.gr/images/cached/700x700-photo1810.jpg",
        title: "Tryolean",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 620,
        category: "woman",
        quantity: 19,
    },
    {
        id: 4,
        hatUrl:"https://fwrd.co.za/wp-content/uploads/sites/2/2020/11/Fedora-Black-Black-Soc-600x600.jpg",
        title: "Fedora classic",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 762,
        category: "woman",
        quantity: 37,
    },
    {
        id: 5,
        hatUrl:"https://www.headtohat.com/wp-content/uploads/2022/02/Bermuda-back-300x300.jpg",
        title: "Ben Hogan",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 390,
        category: "man",
        quantity: 56,
    },
    {
        id: 6,
        hatUrl:"https://candyscostumeshop.com/wp-content/uploads/2022/10/SK430-1.jpg",
        title: "Homburg",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 328,
        category: "woman",
        quantity: 3,
    },
    {
        id: 7,
        hatUrl:"https://media.takealot.com/covers_images/55c50a42183149bf8ae647126e36b76a/s-zoom.file",
        title: "Porkpie",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 825,
        category: "man",
        quantity: 17,
    },
    {
        id: 8,
        hatUrl:"https://kmartau.mo.cloudinary.net/f4e8b6d8-57ac-412c-aa2c-6396ef115161.jpg?tx=w_300,h_300,c_pad",
        title: "Poor-Boy",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 475,
        category: "woman",
        quantity: 8,
    },
    {
        id: 9,
        hatUrl:"https://cdn.shopify.com/s/files/1/0397/0396/9949/products/chelsea-fedora-05.14_300x.jpg?v=1604581093",
        title: "Tophat",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 666,
        category: "children",
        quantity: 5,
    },
    {
        id: 10,
        hatUrl:"https://i.ebayimg.com/images/g/9oYAAOSwll1WvfuB/s-l500.jpg",
        title: "Derby a.k.a Bowler",
        subTitle: "საუკეთესო ხარისხის ტყავისგან შეკერილი ქუდი",
        price: 178,
        category: "children",
        quantity: 3,
    }
];


let newHats = [...hats];
let cart = [];
let myCart = [];



// cards rendering function
const cardsRenderer = (item) => {
    return `<div class="card">
               <img src=${item.hatUrl} id="image" alt="some image">

               <p id="title" style="color: #b12b6b;">${item.title}</p>
               <div id="subTitle">${item.subTitle}</div>
           
               <div id="quantity"><p>Quantity: ${item.quantity}</p></div>
               <div id="price" class="pink"><p>${item.price}$</p></div>
               
               <button class="add-to-cart" style="color: #fbfbfb;">Add To Cart</button>
               </div>`
            };
            
const cardContainer = document.getElementById("card-container"); 
            

const categoryBtn = document.querySelectorAll(`.categoryBtn`);
const categoryBtns = [...categoryBtn];





// search function
const searchFunction = () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("input");

    searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredHats = hats.filter((hat) => hat.title.toLowerCase().includes(searchTerm));

        cardContainer.innerHTML = filteredHats.map((hat) => cardsRenderer(hat)).join("");
    });
};
searchFunction();



const cartNum = document.getElementById("count");

cardContainer.innerHTML = hats.map((hat) => cardsRenderer(hat)).join("");




const addToCartBtns = document.getElementsByClassName("add-to-cart");
let addToCartBtn = [...addToCartBtns];


// myCart rendering function
const cartRenderer = (card) => {
    return `
    <div id="added-cart">
        <div class="cart-added-image">
            <img class="added-image" src=${card.hatUrl}     alt="panama">
            <h5>${card.title}</h5>
        </div>

        <div class="unit-price">
            <p>$${card.price}</p>
        </div>

        <div class="units">
            <div class="btn minus">-</div>
            <div class="number">1</div>
            <div class="btn plus">+</div>           
        </div>
        <div> 
        <button class="delete-button" onclick="deleteCart()" ><img
        id="delete-image"src="./assets/trash.png" alt="delete icon"></button>
        </div> 
    </div>
    `
};         


//add to cart
const addCardsButtons = () => {
    const myCartDiv = document.getElementById("added-cart");
    const addToCartBtns = document.getElementsByClassName("add-to-cart");
    let addToCartBtn = [...addToCartBtns];
    
    addToCartBtn.forEach((card, index) => {
        card.addEventListener("click", () => {
            cart.push(newHats[index].title);
            cartNum.innerHTML = cart.length;
            myCart.push(newHats[index]);
            myCartDiv.innerHTML = myCart.map((hat) => cartRenderer(hat)).join("");
        });
    });
}; 

addCardsButtons();



//remove items from myCart
const deleteCart = () => {
    const myCartDiv = document.getElementById("added-cart");
    const deleteBtn = document.getElementsByClassName("delete-button");
    let deleteBtns = [...deleteBtn];
  
    deleteBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        cart.splice(index, 1);
        cartNum.innerHTML = cart.length;
        myCart.splice(index, 1);
        myCartDiv.innerHTML = myCart.map((hat) => cartRenderer(hat)).join("");
        deleteBtns = [...document.getElementsByClassName("delete-button")];
        deleteCart();
      });
    });
  };


//filter

categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "all") {
            newHats = [...hats];
            cardContainer.innerHTML = newHats
            .map((item) => cardsRenderer(item)).join("");

            addCardsButtons();
            return;
        }

        let filtered = hats.filter((hat) => hat.category === (btn.textContent));

        newHats = [...filtered];

        cardContainer.innerHTML = filtered.map((hat) => cardsRenderer(hat)).join(""); 

        addCardsButtons();
    });
});


