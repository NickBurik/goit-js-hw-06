const categoriesElem = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesElem.length);

for (const categorie of categoriesElem) {
    console.log("Category: ", categorie.firstElementChild.textContent);
    console.log("Elements: ", categorie.querySelectorAll("li").length);
}
