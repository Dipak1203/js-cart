// DIPAK KUMAL

const product = [
  {
    id: 0,
    image: "images/1.png",
    title: "Nike",
    price: 30,
  },
  {
    id: 1,
    image: "images/2.png",
    title: "Blackberrys",
    price: 72,
  },
  {
    id: 2,
    image: "images/3.png",
    title: "Pepe Jeans",
    price: 99,
  },
  {
    id: 3,
    image: "images/4.png",
    title: "Jack & Jones",
    price: 78,
  },
  {
    id: 4,
    image: "images/5.png",
    title: "Mufti",
    price: 98,
  },
  {
    id: 5,
    image: "images/6.png",
    title: "Adidas",
    price: 70,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;

document.getElementById("root").innerHTML = categories
  .map((item) => {
    {
      const { image, title, price } = item;
        return(
            `<div class="box">
                <div class='img-box'>
                    <img src=${image} class='images'></img>
                </div>
                <div class='bottom'>
                  <p>${title}</p>
                  <h2>$ ${price}.00 </h2>` +
                  "<button onclick='addToCart("+(i++)+")'>Add to Cart </button>" +
                  `</div>
                  </div>`
        )
    }
  })
  .join("");

  let cart = [];

  const addToCart = (a) =>{
    cart.push({...categories[a]})
    displayCart();
  }

  const delElement = (a) =>{
    cart.splice(a,1);
    displayCart();
  }
  const displayCart = (a) =>{
    let j = 0;               
    let total=0;
   document.getElementById('count').innerHTML = cart.length; 
   
    if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your Cart it empty";
      document.getElementById('total').innerHTML = "$ "+0+".00"
    }else{
      document.getElementById('cartItem').innerHTML = cart.map((items) =>{
        let {image,title,price} = items;
        total +=price;
        document.getElementById('total').innerHTML = "$ " + total;
        return (
          `<div class='cart-item'>
            <div class='row-image'>
            <img class='rowImg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        )
      }).join('')
    }
  }
  displayCart()