const numberOfCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(function (element) {
    const categoryTitle = element.querySelector('h2').textContent;
    const items = element.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${items}`);
})