const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: 500000,
    image: "images/iphone/iphone-13-Apple-3-.jpg",
    page: "pages/IPHONE/pageip13.html",
  },
  {
    id: 2,
    name: "iPhone13Pro",
    price: 750000,
    image: "images/iphone/iphone-13-Pro-Apple-.jpg",
    page: "pages/IPHONE/page-13pro.html",
  },
  {
    id: 3,
    name: "iPhone13ProMax",
    price: 850000,
    image: "images/iphone/iphone-13-Pro-Max-Apple-3-.jpg",
    page: "pages/IPHONE/page-13promax.html",
  },
  {
    id: 4,
    name: "iPhone14",
    price: 750000,
    image: "images/iphone/14BB.webp",
  },
  {
    id: 5,
    name: "iPhone14Pro",
    price: 750000,
    image: "images/iphone/14PRO.webp",
  },
  {
    id: 6,
    name: "iPhone14ProMax",
    price: 750000,
    image: "images/iphone/14PROMAX.webp",
  },
  {
    id: 7,
    name: "iPhone15",
    price: 480000,
    image: "images/iphone/15W.webp",
  },
  {
    id: 8,
    name: "iPhone15ProMax",
    price: 750000,
    image: "images/iphone/15.webp",
  },

  {
    id: 9,
    name: "Samsung A05",
    price: 50000,
    image: "images/samsung/Galaxy-A05-۲.jpg",
    page: "pages/IPHONE/pageip13.html",
  },
  {
    id: 10,
    name: "Samsung A05s",
    price: 75000,
    image: "images/samsung/05S.webp",
    page: "pages/IPHONE/page-13pro.html",
  },
  {
    id: 11,
    name: "Samsung A15",
    price: 85000,
    image: "images/samsung/a15.webp",
    page: "pages/IPHONE/page-13promax.html",
  },
  {
    id: 12,
    name: "Samsung A25",
    price: 120000,
    image: "images/samsung/a25.webp",
  },
  {
    id: 13,
    name: "Samsung A35",
    price: 150000,
    image: "images/samsung/35.webp",
  },
  {
    id: 14,
    name: "Samsung A55",
    price: 200000,
    image: "images/samsung/a55.webp",
  },
  {
    id: 15,
    name: "Samsung S23 FE",
    price: 280000,
    image: "images/samsung/S23FE.webp",
  },
  {
    id: 16,
    name: "Samsung S24 ULTRA",
    price: 750000,
    image: "images/samsung/S24ULRTAGOLD.webp",
  },
  {
    id: 17,
    name: "Xiaomi Note 13Pro",
    price: 50000,
    image: "images/xiaomi/note13problack.webp",
    page: "pages/IPHONE/pageip13.html",
  },
  {
    id: 18,
    name: "Xiaomi Note13",
    price: 75000,
    image: "images/xiaomi/note13blue.webp",
    page: "pages/IPHONE/page-13pro.html",
  },
  {
    id: 19,
    name: "Xiaomi Poco C65",
    price: 85000,
    image: "images/xiaomi/pococ65black.webp",
    page: "pages/IPHONE/page-13promax.html",
  },
  {
    id: 20,
    name: "Xiaomi Poco x6",
    price: 120000,
    image: "images/xiaomi/pocox6blue.webp",
  },
  {
    id: 21,
    name: "Redmi 12",
    price: 150000,
    image: "images/xiaomi/redmin12white.jpg",
  },

  {
    id: 22,
    name: "Redmin Pad Se",
    price: 200000,
    image: "images/xiaomi/redminpad1.jpg",
  },
  {
    id: 23,
    name: "Xiaomi Note 12s",
    price: 280000,
    image: "images/xiaomi/Xiaomi-Redmi-Note-12Sblack.jpg",
  },
  {
    id: 24,
    name: "Redmi A3",
    price: 750000,
    image: "images/xiaomi/a3black.webp",
  },
  {
    id: 25,
    name: "Nokia 106",
    price: 800,
    image: "../../images/nokia/106.webp",
    page: "pageip13.html",
  },
  {
    id: 26,
    name: "Nokia 130",
    price: 1200,
    image: "../../images/nokia/130-2.webp",
    page: "page-13pro.html",
  },
  {
    id: 27,
    name: "Nokia 150",
    price: 1500,
    image: "../../images/nokia/nokia150-3.webp",
    page: "page-13promax.html",
  },
  {
    id: 28,
    name: "Nokia 2720 Filip",
    price: 2000,
    image: "../../images/nokia/nokia2720-1.webp",
  },
  {
    id: 29,
    name: "Nokia 6310",
    price: 1500,
    image: "../../images/nokia/nokia6310-2.webp",
  },
  {
    id: 30,
    name: "Nokia 5310",
    price: 1500,
    image: "../../images/nokia/nokia5310-1.webp",
  },
  {
    id: 31,
    name: "Nokia 6300",
    price: 1500,
    image: "../../images/nokia/nokia6300-1.webp",
  },
  {
    id: 32,
    name: "Nokia 215",
    price: 1200,
    image: "../../images/nokia/nokia215-1.webp",
  },
];

let cart = {
  item: [],
  total: 0,
};

const randerproduct = (filteredProducts) => {
  const productdiv = document.querySelector(".products");
  const productsam = document.querySelector(".products-sam");
  const productsxiaomi = document.querySelector(".products-xiaomi");
  const productsnokia = document.querySelector(".products-nokia");

  productdiv.innerHTML = " ";
  productsam.innerHTML = " ";
  productsxiaomi.innerHTML = " ";
  productsnokia.innerHTML = " ";
  // //-------------------------------------------------------------------------------------------------------------------------

  filteredProducts.forEach((item, index) => {
    if (item.id <= 8) {
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
    } else if (item.id > 8 && item.id <= 16) {
      productsam.innerHTML += `
     <div class="product" >
    <div class="product__image">
      <img class="cart-img  store-img" src=${item.image} alt="" />
    </div>
    <a class="product__title" href="${item.page}">${item.name}</a>
    <h3 class="product__price">${item.price} تومان</h3>
    <button class="add-to-cart" onclick="addtocart(${index})">افزودن به سبد خرید</button>
  </div>
  `;
    } else if (item.id > 16 && item.id <= 24) {
      productsxiaomi.innerHTML += `
      <div class="product" >
     <div class="product__image">
       <img class="cart-img  store-img" src=${item.image} alt="" />
     </div>
     <a class="product__title" href="${item.page}">${item.name}</a>
     <h3 class="product__price">${item.price} تومان</h3>
     <button class="add-to-cart" onclick="addtocart(${index})">افزودن به سبد خرید</button>
   </div>
   `;
    } else if (item.id > 24 && item.id <= 32) {
      productsnokia.innerHTML += `
      <div class="product" >
     <div class="product__image">
       <img class="cart-img  store-img" src=${item.image} alt="" />
     </div>
     <a class="product__title" href="${item.page}">${item.name}</a>
     <h3 class="product__price">${item.price} تومان</h3>
     <button class="add-to-cart" onclick="addtocart(${index})">افزودن به سبد خرید</button>
   </div>
   `;
    }
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
  let totalqty = 0;
  if (cart.item.length === 0) {
    cartdiv.innerHTML = " محصولی در سبد وجود ندارد";
  }
  cart.item.forEach((item) => {
    totalprice += item.total;
    totalqty += item.qty;
    cartdiv.innerHTML += `
    <div class="cart__item">
    <div class="col-md-4">
      <button class="cart__item-remove"  onclick="removefromcart( '${item.name}') ,removeProduct('${item.id}') ">حذف</button>
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

// TABEE EZAFE KARDAN MAHSOL BE SABAD XARID...

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
  randercartitem();
};

// فراخوانی تابع loadCart هنگام بارگذاری صفحه
window.onload = loadCart;

const savedCart = (cart) => {
  localStorage.setItem("cartbox", JSON.stringify(cart));
};

//تابع حذف آرایه ها از  local storage

function removeProduct(id) {
  let local = JSON.parse(localStorage.getItem("cartbox"));
  let cart = local.item;
  cart = cart.filter((item) => item.id !== id);
  local.item = cart;
  localStorage.setItem("cartbox", JSON.stringify(local));
}

const removelocal = () => {
  localStorage.removeItem("cartbox");
  localStorage.removeItem("qty");
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// TABEE HAZF MAHSOL AZ SABAD XARID

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
  localStorage.setItem("cartbox", JSON.stringify(cart));
};

randerproduct(products);

// TA IN GESMAT SAKHT SABAD XARID VE EZAFE KARDAN MAHSOL...

let baner = document.querySelector(".baner");
let previusbtn = document.querySelector(".previus-btn");
let next = document.querySelector(".next-btn");
let currentIndex = 0;

const img = [
  {
    image: "images/salehi.jpg",
  },
  {
    image: "images/samsung.jpg",
  },
  {
    image: "images/iphone-14.jpg",
  },
];
function displayObject(index) {
  baner.innerHTML = `<a href=""><img class="baner-img" src="${img[index].image}" alt=""></a>
  `;
}
previusbtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentIndex > 0) {
    currentIndex--;
    displayObject(currentIndex);
  }
});

next.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentIndex < img.length - 1) {
    currentIndex++;
    displayObject(currentIndex);
  }
});

// timer ax haye baner

let currentIndexImg = 0;
const imageElement = document.getElementById("baner-img");
function changeimage() {
  currentIndexImg = (currentIndexImg + 1) % img.length;
  imageElement.src = img[currentIndexImg].image;
}
setInterval(changeimage, 3000);

// VE IN GESMAT TA INJA SAKHT BANER PAYIN MENU

let loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", () => {
  open("login-page/login-account.html", "_top");
});

// CODE DOKME VOROD BE HESAB KARBARI
