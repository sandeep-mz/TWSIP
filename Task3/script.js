// import { productFeture } from "./assest/productFeture.js";
import { productFeture } from "./assest/productFeture.js";


let inputSearch = document.getElementById("search-input");
let formSearch = document.getElementById("Search-form");
let recentSearch = document.querySelector(".recent-search");
let recentArray = ['mobile', 'Shose', 'Headphone','Laptop'];

formSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    recentArray.unshift(inputSearch.value);

    // Clear the input field
    inputSearch.value = '';

    // Clear the recent search list and re-render
    recentSearch.innerHTML = '';
    recentArray.forEach(el => {
        let recentSearchItem = document.createElement('div');
        recentSearchItem.className = 'recent_list';
        recentSearchItem.innerHTML = `<a href="#"><span class="material-symbols-outlined">history</span>${el}</a>`;
        recentSearch.appendChild(recentSearchItem);
    });
});




// product


let projectList = document.querySelector(".project-list");
let projectListHtml = ''
// console.log(productFeture);
productFeture.forEach(el =>{
    // console.log(el);
    projectListHtml += `
        <div class="product-iteams">
            <a href="${el.link}">
                <div class="product-img">
                    <img src="${el.img}">
                </div>
                <p class="product-iteams-name ">${el.name}
                   ${el.subNav ? `<span class="material-symbols-outlined product-iteams-icon">expand_more</span>` : " " }
                </p>
            </a>
        </div>
    `
})
projectList.innerHTML = projectListHtml;


// JavaScript for the image slider
