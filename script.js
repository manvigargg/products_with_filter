const checkboxes = document.querySelectorAll('.filter-checkbox');
const products = document.querySelectorAll('.product');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedCategories = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    products.forEach(product => {
      const category = product.getAttribute('data-category');
      if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
