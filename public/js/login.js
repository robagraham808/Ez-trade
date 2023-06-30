// const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const email = document.querySelector('#email-signup').value.trim();
//     const firstName = document.querySelector('#first-name-signup').value.trim();
//     const lastName = document.querySelector('#last-name-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
//     const passwordConfirm = document.querySelector('#password-conrifm').value.trim();
  
//     if (email && firstName && lastName && password && passwordConfirm) {
//       const response = await fetch('/api/users/sign-up', {
//         method: 'POST',
//         body: JSON.stringify({ email, firstName, lastName, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

  const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("test");
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        // document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  

//   document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);