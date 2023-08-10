
const deleteItem = async (event) => {
    event.preventDefault();

    console.log('click')

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

    
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/profile');

        } else {
          alert('Failed to delete project');
        }
      }
    
}


window.addEventListener('DOMContentLoaded', function () {
    document
      .querySelector('#delete-form')
      .addEventListener('submit', deleteItem);
});
  