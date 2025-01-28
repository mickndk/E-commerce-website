let basket = JSON.parse(localStorage.getItem("save")) || [];
let content = document.querySelector(".content");

let update = () => {
  document.querySelector(".quantity").innerHTML = basket
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0);
};

let generate_content = () => {
  if (basket.length) {
    content.innerHTML = basket
      .map((x) => {
        let { id, name, price, item, img } = x;
        return `
          <div class="cart">
            <img width="120" src="${img}" alt="">
            <div class="cart-desc">
              <h4>Name: ${name}</h4>
              <h4>Price: R${price}</h4>
              <div class="counter">
                <i onclick="decrement('${id}')" class="fa-solid fa-minus"></i>
                <div id='${id}' class="quant">${item}</div>
                <i onclick="increment('${id}')" class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div class="result">
              <h4 class="total">Total: R${price * item}</h4>
              <div class="btn">
                <button onclick="remove('${id}')">Remove</button>
              </div>
            </div>
          </div>`;
      })
      .join("");
  } else {
    content.innerHTML = `
    <div class="cartEmptyContainer">
   <h3>Your cart is empty!</h3>
    <a href="index.html">Go home</a>
    </div>`
  }
};

let increment = (id) => {
  let search = basket.find((x) => x.id == id);

  if (search) {
    search.item += 1;
  } else {
    basket.push({ id, item: 1 });
  }

  upload(id);
  update();
  generate_content();
  saveItems();
  totalPrice();
};

let decrement = (id) => {
  let search = basket.find((x) => x.id == id);

  if (search && search.item > 0) {
    search.item -= 1;
    if (search.item === 0) {
      basket = basket.filter((x) => x.id !== id); // Remove item if quantity is 0
    }
  }

  upload(id);
  update();
  generate_content();
  saveItems();
  totalPrice();
};

let upload = (id) => {
  let search = basket.find((x) => x.id == id);
  if (search) {
    document.getElementById(id).innerHTML = search.item;
  }
};

let remove = (id) => {
  basket = basket.filter((x) => x.id !== id);
  update();
  generate_content();
  saveItems();
  totalPrice();
};

let saveItems = () => {
  localStorage.setItem("save", JSON.stringify(basket));
};

let totalPrice = () => {
  let total = basket.reduce((sum, x) => sum + x.price * x.item, 0);
  document.querySelector(".cart-summary").innerHTML = `Total: R${total}`;
};
let checkSection=()=>{
  document.querySelector('.buttons').innerHTML=`
   <div class="btn1">
     <button>View</button>
    </div>
    <div class="btn2">
     <button>Approve and pay</button>`
}
checkSection()

// Initial function calls
generate_content();
update();
totalPrice();
let menu=document.querySelector('.menu')
let menuIcon=document.querySelector('.fa-bars')
menuIcon.addEventListener("click",()=>{
  if(menu.style.display==='none'){
      menu.style.display='flex'
  }else{
      menu.style.display='none'
  }
})


