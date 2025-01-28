let basket = JSON.parse(localStorage.getItem("save")) || [];

let update = () => {
    document.querySelector(".quantity").innerHTML = basket
      .map((x) => x.item)
      .reduce((x, y) => x + y, 0);
  };
  update()
  