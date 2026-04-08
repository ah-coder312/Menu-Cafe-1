let cart = [];

const data = {
  hot: [
    { name: "إسبريسو", price: menuPrices.espresso, img: "6546468546525.jpg", options: { sugar: ["بدون","قليل","عادي"], size: ["صغير","وسط","كبير"] } },
    { name: "كابتشينو", price: menuPrices.cappuccino, img: "56456468454652.jpg", options: { sugar: ["بدون","قليل","عادي"], milk: ["عادي","زيادة لبن"] } },
    { name: "لاتيه", price: menuPrices.latte, img: "646645544545465644.png", options: { sugar: ["بدون","قليل","عادي"], milk: ["عادي","كريمي"] } },
    { name: "ميكاتو كراميل", price: menuPrices.caramel_macchiato, img: "طريقة-كراميل-ميكاتو.jpg", options: { sugar: ["بدون","قليل","عادي"] } },
    { name: "فلات وايت", price: menuPrices.flat_white, img: "unnamed.png", options: { sugar: ["بدون","قليل","عادي"] } },
    { name: "هوت شوكلت", price: menuPrices.hot_chocolate, img: "5451151151551515.png", options: { marshmallow: ["نعم","لا"] } },
    { name: "موكا ساخنة", price: menuPrices.hot_mocha, img: "3848901-1784609859.jpg", options: { sugar: ["بدون","قليل","عادي"] } },
    { name: "قهوة تركي", price: menuPrices.turkish_coffee, img: "2506866_0.jpg", options: { type: ["سادة","مضبوط","زيادة"] } },
    { name: "قهوة", price: menuPrices.regular_coffee, img: "images.jpg", options: { type: ["سادة","مضبوط","زيادة"] } },
    { name: "شاي", price: menuPrices.tea, img: "5555555555555555664654654.jpg", options: { type: ["أحمر","أخضر","زنجبيل","مغربي"], sugar: ["بدون","قليل","عادي"] } }
  ],
  cold: [
    { name: "مشروبات غازيه", price: menuPrices.soda, img: "44454465644864515.jpg", options: { sugar: ["بدون سكر","عادي"], flavor: ["بيبسي","كوكاكولا","تويست","ريد بول ","فيوري","استنج","شويبس جولد"] } },
    { name: "آيس لاتيه", price: menuPrices.ice_latte, img: "4455646446511551.png", options: { sugar: ["بدون","قليل","عادي"], flavor: ["كلاسيكي","كراميل","موكا"] } },
    { name: "سبانش لاتيه مثلج", price: menuPrices.spanish_latte, img: "6486416481.png", options: { sugar: ["بدون","قليل","عادي"] } },
    { name: "آيس كراميل ميكاتو", price: menuPrices.ice_caramel_macchiato, img: "Caramel-Macchiato-1.jpg", options: { sugar: ["بدون","قليل","عادي"] } },
    { name: "موهيتو (نكهات)", price: menuPrices.mojito, img: "71OcXh+wgRL._AC_UF1000,1000_QL80_.jpg", options: { flavor: ["بلو","فراولة","رمان"] } },
    { name: "ميلك شيك", price: menuPrices.milkshake, img: "64654846546548.png", options: { flavor: ["أوريو","لوتس","فانليا"] } },
    { name: "سموذي فواكه", price: menuPrices.smoothie, img: "6541845515515.jpg", options: { flavor: ["تفاح","مانجو","فراولة"] } },
    { name: "فرابوتشينو كراميل", price: menuPrices.frappuccino, img: "images.jpg", options: { cream: ["نعم","لا"] } },
    { name: "عصائر فريش", price: menuPrices.fresh_juice, img: "12022521498212848301.jpg", options: { flavor: ["برتقال","ليمون بالنعناع","مانجو"] } },
    { name: "مياه معدنيه", price: menuPrices.water, img: "202308311525_17092-preview.jpg", options: { size: [" صغيرة"," وسط","كبيرة"] } }
  ],
  dessert: [
    { name: "مولتن كيك", price: menuPrices.molten_cake, img: "36996.png", options: { size: ["صغير","وسط","كبير"], sugar: ["بدون","قليل","عادي"] } },
    { name: "تشيز كيك", price: menuPrices.cheesecake, img: "651655161515651516.jpg", options: { size: ["صغير","وسط","كبير"], flavor: ["فراولة","مانجو","شوكولاتة"] } },
    { name: "براوني", price: menuPrices.brownies, img: "449489498656565651156.png", options: { with_ice_cream: ["نعم","لا"] } }
  ],
  shisha: [
    { name: "شيشة قص", price: menuPrices.shisha_qass, img: "6551651511.png", options: { size: ["قص","سلوم"], flavor: ["فاخر"] } },
    { name: "شيشة فواكه", price: menuPrices.shisha_fruits, img: "9844848655665446.png", options: { type: ["تفاح","عنب","توت"], flavor: ["عادي","ايس"] } }
  ]
};

const categoriesSection = document.getElementById("categories");
const productsContainer = document.getElementById("products");

// دالة عرض المنتجات (بعد التعديل)
function showCategory(category){
  categoriesSection.style.display = "none";
  const backSection = document.getElementById("backSection");
  if(backSection) backSection.style.display = "block";
  productsContainer.innerHTML = "";
  
  data[category].forEach(item => {
    let optionsHTML = "";
    if(item.options){
      for(let key in item.options){
        optionsHTML += `<label>${key}:</label>
          <select class="item-option" data-option="${key}">
            ${item.options[key].map(opt => `<option value="${opt}">${opt}</option>`).join("")}
          </select>`;
      }
    }
    
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${item.img}" class="product-img" loading="lazy">
        <h3>${item.name}</h3>
        <p>${item.price} EGP</p>
        ${optionsHTML}
        <button onclick="addToCart(this,'${item.name}',${item.price},'${item.img}')">أضف للسلة</button>
      </div>
    `;
  });
}

// باقي الدوال (Add to cart, Update, Remove, WhatsApp) بتفضل زي ما هي لأنها بتعتمد على "البيانات" اللي جاية من دالة العرض
function addToCart(btn, name, price, img){
  const card = btn.parentElement;
  const selects = card.querySelectorAll(".item-option");
  let selectedOptions = {};
  selects.forEach(select => selectedOptions[select.dataset.option] = select.value);
  cart.push({name, price, img, options: selectedOptions});
  updateCart();
}

function updateCart(){
  const container = document.getElementById("cartItems");
  let total = 0;
  container.innerHTML = "";
  cart.forEach((item,index)=>{
    total += item.price;
    let optionsText = "";
    if(item.options){ for(let key in item.options){ optionsText += `(${key}: ${item.options[key]}) `; } }
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" class="cart-thumb">
        <span>${item.name} ${optionsText}- ${item.price} EGP</span>
        <span class="delete" onclick="removeItem(${index})">❌</span>
      </div>
    `;
  });
  document.getElementById("total").innerText = "الإجمالي: " + total + " EGP";
  document.getElementById("count").innerText = cart.length;
  document.getElementById("countBottom").innerText = cart.length;
}

function removeItem(index){ cart.splice(index,1); updateCart(); }

// أيقونات السلة
const cartPopup = document.getElementById("cartPopup");
const cartIconTop = document.getElementById("cartIconTop");
const cartIconBottom = document.getElementById("cartIconBottom");
const closeCart = document.getElementById("closeCart");

if(cartIconTop) cartIconTop.addEventListener("click", ()=>{cartPopup.classList.toggle("show");});
if(cartIconBottom) cartIconBottom.addEventListener("click", ()=>{cartPopup.classList.toggle("show");});
if(closeCart) closeCart.addEventListener("click", ()=>{cartPopup.classList.remove("show");});

// إرسال الطلب واتساب
document.getElementById("orderBtn").addEventListener("click", ()=>{
  if(cart.length===0){alert("السلة فارغة!"); return;}
  let tableNumber = document.getElementById("tableNumber").value;
  if(!tableNumber){alert("اكتب رقم الترابيزة!"); return;}
  let notes = document.getElementById("notes").value || "لا يوجد";

  let message = `طلب جديد:\nرقم الترابيزة: ${tableNumber}\nملاحظات: ${notes}\n`;
  cart.forEach(item=>{
    let optionsText = "";
    if(item.options){for(let key in item.options){optionsText += `(${key}: ${item.options[key]}) `;}}
    message += `${item.name} ${optionsText}- ${item.price} EGP\n`;
  });
  window.open("https://wa.me/201123385820?text="+encodeURIComponent(message));
});

// زر العودة
const backBtn = document.getElementById("backBtn");
if(backBtn) {
    backBtn.addEventListener("click", ()=>{
        document.getElementById("categories").style.display = "block";
        document.getElementById("backSection").style.display = "none";
        document.getElementById("products").innerHTML = "";
    });
}

updateCart();
