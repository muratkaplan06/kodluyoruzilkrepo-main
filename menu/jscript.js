const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

// Önce DOMlarımızı oluşturacağız butonlar için ve menu için

let btnContainerDOM = document.querySelector(".btn-container");
let menuContainerDOM = document.querySelector(".section-center");

// Şimdi butonlar

let create_Button = function(btnName) {
    // btnName adında bir değişken verdik.

    // Temperate ile butonu istediğimiz şekilde oluşturduk.
    let btn = `<button type="button" id="${btnName}" class="btn btn-outline-dark btn-item">${btnName}</button>`;
    return btn;
};

// Butonları ekrana çıkartıyoruz.

let addButtonsToUI = function() {
    btnContainerDOM.innerHTML =
        create_Button("All") +
        create_Button("Korea") +
        create_Button("Japan") +
        create_Button("China");
};

addButtonsToUI();

// Butonlar ekranda...

// Şimdi butonlara koşul ekliyoruz.

btnAll = document.querySelector("#All").addEventListener("click", listAllfoods);
btnKorean = document
    .querySelector("#Korea")
    .addEventListener("click", listKoreanfoods);
btnJapan = document
    .querySelector("#Japan")
    .addEventListener("click", listJapanfoods);
btnChina = document
    .querySelector("#China")
    .addEventListener("click", listChinafoods);

// şimdi tek tek yemek listelerini oluşturuyoruz.

// tüm yemek listeleri...

function listAllfoods() {
    let Allmenu = ""; // boş bir menu yaptık
    menu.map((x) => {
        // sonra dedik ki
        Allmenu += createObject(x); // tüm objeleri allmenuye at.
    });
    menuContainerDOM.innerHTML = Allmenu; // sonra all menuyü menu ekranında yzdır.
}

// sadece kore yemekleri

function listKoreanfoods() {
    let Allmenu = "";
    menu.map((x) => {
        if (x.category == "Korea") {
            // burdaysa sadece kategorisi Korea olanları Allmenunün içine at dedik.
            Allmenu += createObject(x);
        }
    });
    menuContainerDOM.innerHTML = Allmenu;
}

// sadece Japan yemekleri

function listJapanfoods() {
    let Allmenu = "";
    menu.map((x) => {
        if (x.category == "Japan") {
            // burdaysa sadece kategorisi japan olanları Allmenunün içine at dedik.
            Allmenu += createObject(x);
        }
    });
    menuContainerDOM.innerHTML = Allmenu;
}

// sadece CHina yemekleri

function listChinafoods() {
    let Allmenu = "";
    menu.map((x) => {
        if (x.category == "China") {
            // burdaysa sadece kategorisi china olanları Allmenunün içine at dedik.
            Allmenu += createObject(x);
        }
    });
    menuContainerDOM.innerHTML = Allmenu;
}

// Arama filtresi eklendi.

EkleDOM.addEventListener("click", listSearchFoods);

function listSearchFoods() {
    let AllMenu = "";
    menu.map((x) => {
        if (AraDOM.value == x.title) {
            AllMenu += createFood(x);
        }
    });
    menuContainerDOM.innerHTML = AllMenu;
}

// Arama filtresi eklendi.

// burda bir yemek objesi yapıyoruz.

function createObject(food) {
    let item = `
    <div class="menu-items col-lg-6 col-sm-12">
              <img src="${food.img}" alt="${food.title}" ramen="" class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${food.title} Ramen</h4>
                  <h4 class="price">${food.price}</h4>
                </div>
                <div class="menu-text">
                  ${food.desc}
                  
                </div>
              </div>
            </div>
    `;
    return item;
}