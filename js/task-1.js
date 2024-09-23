const category = document.querySelector('#categories');
const quantityItem = category.querySelectorAll('.item');
const arrayItem = [...quantityItem];
console.log("Number of categories:", quantityItem.length);
quantityItem.forEach(elem => {
    const h2 = elem.querySelector("h2").textContent;
    const elements = elem.lastElementChild.children.length;
    console.log(`Category: ${h2}`);
    console.log(`Elements: ${elements}`);
});