const header = document.querySelector(".header");

window.addEventListener("load", () => {
  header.innerHTML = `<header class="header">
    <div class="container-header">
      <div class="item-right">
        <i class="fa-brands fa-apple"></i>
        <h2>موبایل صالحی</h2>
      </div>

      <div class="item-center">
        <form action="">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="search" type="text" placeholder="جستوجوی محصولات ..." >
          <select class="select">
            <option value="">همه دسته ها</option>
            <option value="">همه گوشی ها</option>
            <option value="">اپل</option>
            <option value="">سامسونگ</option>
            <option value="">شیایومی</option>
            <option value="">نوکیا</option>
            <option value="">تی سی ال</option>
            <option value="">داریا</option>

          </select>
        </form>

      </div>

            <div class="item-left">
            <div class="login">
               <button class="login-btn">ورود به حساب کاربری</button>
              </div>
              <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>

            </header>
            <div class="menu">
            <nav class="nav-menu">
              <ul>
                <li><a href="">فروشگاه</a>
                  <ul>
                    <li><a href="">آیفون</a></li>
                    <li><a href="">سامسونگ</a></li>
                    <li><a href="">شیایومی</a></li>
                    <li><a href="">نوکیا</a></li>
                    <li><a href="">هدفون بلوتوثی</a></li>
                    <li><a href="">ساعت هوشمند</a></li>
                  </ul>
                </li>
                <li><a href="">فروش اقساطی</a></li>
                <li><a href="../../login-page/login-account.html">حساب کاربری</a></li>
                <li><a href="">سبد خرید</a></li>
                <li><a href="">درباره ما</a></li>
              </ul>
            </nav>
            </div>`;
});

let bigimg = document.querySelector(".big-img");
let img = document.querySelectorAll(".img");

img.forEach((photo) => {
  photo.addEventListener("click", (event) => {
    bigimg.src = event.target.src;
  });
});

// EZAFE KARDAN AX HAYE KOCHAK BE AKSE BOZORG

window.addEventListener("scroll", () => {
  var sidbar = document.querySelector(".sidebar-right");
  var headerHeight = header.offsetHeight;
  if (window.scrollY >= headerHeight) {
    sidbar.classList.add("fixed");
  } else {
    sidbar.classList.remove("fixed");
  }
});

// SCROLL NAKHORDAN MENU SIDBAR

let Tozihat = document.querySelector(".description-producs-a");
let display = document.querySelector(".div-tozihat");

Tozihat.addEventListener("click", (event) => {
  event.preventDefault();
  display.classList.toggle("div-tozihat-visible");
  showtable.classList.remove("div-table-active");
});

// CLICK BE GESMATE TOZIHAT VE NEMAYESH AN

let showtable = document.querySelector(".div-table");
let specification = document.querySelector(".specification");

specification.addEventListener("click", (event) => {
  event.preventDefault();
  showtable.classList.toggle("div-table-active");
  display.classList.remove("div-tozihat-visible");
});
