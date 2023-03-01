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
