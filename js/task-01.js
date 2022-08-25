const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(categories => {
    console.log(`Category:`, categories.firstElementChild.textContent);
    console.log(`Elements:`, categories.lastElementChild.children.length);
});












