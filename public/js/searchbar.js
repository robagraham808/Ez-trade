const searchBar = document.querySelector('.custom-searchbar');
const mobileSearchBar = document.querySelector('.custom-searchbar-mobile');
const searchButton = document.querySelector('.search-button');
const mobileSearchButton = document.querySelector('.mobile-search-button');
const input = document.querySelector('.search-bar');

searchBar.addEventListener("submit", async function(event) {
    event.preventDefault();
   
    const userSearch = input.value;
    console.log(userSearch);

    const response = await fetch(`/searchbar/${userSearch}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        // console.log('ok!');
        document.location.replace(`/searchbar/${userSearch}`);
    } else {
    alert(response.statusText);
    }    
        
}); 

mobileSearchButton.addEventListener("click", async function() {
   
    const userSearch = mobileSearchBar.textContent;
    console.log(userSearch);

    const response = await fetch(`/searchbar/${userSearch}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
    document.location.replace(`/searchbar/${userSearch}`);
    } else {
    alert(response.statusText);
    }    
        
}); 
    



