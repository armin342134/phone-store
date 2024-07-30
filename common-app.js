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

// ---------------------------------------------------------------------------------------------------------------------------------------------------

const randercartitem = () => {
  let cartdiv = document.querySelector(".cart__items");
  cartdiv.innerHTML = " ";
  const totalpriceEl = document.querySelector(".cart__total-price");
  const numCart = document.querySelector(".num-cart");
  let totalprice = 0;
  var totalqty = 0;
  if (cart.item.length === 0) {
    cartdiv.innerHTML = " محصولی در سبد وجود ندارد";
  }
  cart.item.forEach((item) => {
    totalprice += item.total;
    totalqty += item.qty;
    cartdiv.innerHTML += `
    <div class="cart__item">
    <div class="col-md-4">
      <button class="cart__item-remove"  onclick="removefromcart( '${item.name}') ;removelocal('${item.name}') ">حذف</button>
    </div>
    <div class="col-md-4">
      <div class="qty">${item.qty}</div>
    </div>
    <div class="col-md-4">
    <h3 class="cart__item-title">${item.name}</h3>
    </div>
    </div>
    
    `;
  });
  totalpriceEl.innerHTML = `مجموع ${totalprice} تومان`;
  numCart.innerHTML = `${totalqty}`;
  localStorage.setItem("qyt", totalqty);
};
// ----------------------------------------------------------------------------------------------------------------------------------------------------
const numCart = document.querySelector(".num-cart");
let qyt = localStorage.getItem("qyt");
numCart.innerHTML = Number(qyt);
console.log(typeof qyt);

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
