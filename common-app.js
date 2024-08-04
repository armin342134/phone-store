let cart = {
  item: [],
  total: 0,
};

const randerproduct = (filteredProducts) => {
  const productdiv = document.querySelector(".products");
  productdiv.innerHTML = " ";
  filteredProducts.forEach((item, index) => {
    productdiv.innerHTML += ` 
 <div class="product" >
<div class="product__image">
  <img class="cart-img  store-img" src=${item.image} alt="" />
</div>
<a class="product__title" href="${item.page}">${item.name}</a>
<h3 class="product__price">${item.price} تومان</h3>
<button class="add-to-cart" onclick="addtocart(${index})">افزودن به سبد خرید</button>
</div>
`;
  });
};

// ---------------------------------------------------------------------------------------------------------------------------------------------

// search function

const searchProducts = () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  randerproduct(filteredProducts);
};

// -------------------------add to qyt--------------------------------------------------------------------------------------------------------------------------
const numCart = document.querySelector(".num-cart");
let allqyt = JSON.parse(localStorage.getItem("qyt"));
numCart.innerHTML = allqyt;

const randercartitem = () => {
  var totalqty = 0;
  cart.item.forEach((item) => {
    totalqty += item.qty;
  });
  numCart.innerHTML = `${totalqty}`;
  localStorage.setItem("qyt", totalqty);
};
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------

const addtocart = (productindex) => {
  const product = products[productindex];

  let existingProduct = false;
  let newcartitems = cart.item.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;

      const newitem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };
      return [...state, newitem];
    }
    return [...state, item];
  }, []);
  if (!existingProduct) {
    newcartitems.push({
      ...product,
      qty: 1,
      total: product.price,
    });
  }
  cart = {
    ...cart,
    item: newcartitems,
  };
  randercartitem();
  localStorage.setItem("cartbox", JSON.stringify(cart));
};

const loadCart = () => {
  const savedCart = localStorage.getItem("cartbox");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = { item: [] }; // مقدار پیش‌فرض اگر سبد خرید خالی باشد
  }

  // رندر کردن آیتم‌های سبد خرید
};

// فراخوانی تابع loadCart هنگام بارگذاری صفحه
window.onload = loadCart;

// TABEE EZAFE KARDAN MAHSOL BE SABAD XARID...

const removelocal = () => {
  localStorage.removeItem("cartbox");
  localStorage.removeItem("qty");
};

const removefromcart = (productname) => {
  const newcartitems = cart.item.reduce((state, item) => {
    if (item.name === productname) {
      const newitem = {
        ...item,
        qty: item.qty - 1,
        total: (item.qty - 1) * item.price,
      };
      if (newitem.qty > 0) {
        return [...state, newitem];
      } else {
        return state;
      }
    }
    return [...state, item];
  }, []);
  cart = {
    ...cart,
    item: newcartitems,
  };
  randercartitem();
};

// TABEE HAZF MAHSOL AZ SABAD XARID
randerproduct(products);
