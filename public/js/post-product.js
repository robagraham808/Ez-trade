const submitProductHandler = async (event) => {

    event.preventDefault();

    const product_name = await document
    .getElementById('product_name')
    .value.trim();
    const shortDescription = await document
    .getElementById('shortDescription')
    .value.trim();
    const longDescription = await document
    .getElementById('longDescription')
    .value.trim();
    const price = await document
    .getElementById('price')
    .value.trim();
    const image = await document
    .getElementById('image')
    .value.trim();
    const location_city = await document
    .getElementById('location_city')
    .value.trim();
    const location_state = await document
    .getElementById('location_state')
    .value.trim();
    const category_id = await document
    .getElementById('chosen-category').value;


    const response = await fetch('/api/products/post-product', {
        method: 'POST',
        body: JSON.stringify({ product_name, shortDescription, longDescription, price, image, location_city, location_state, category_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
    }

}


window.addEventListener('DOMContentLoaded', function () {
    document
      .querySelector('#post-product-form')
      .addEventListener('submit', submitProductHandler);
  });
  