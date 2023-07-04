const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordConfirm = document.querySelector('#password-confirm').value.trim();
    const phone = 404;

    if (email && first_name && last_name && password && passwordConfirm) {

        if (password === passwordConfirm) {
                    console.log("sign up info received");

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, phone, password }),
            headers: { 'Content-Type': 'application/json' },
          });

        if (response.ok) {
        document.location.replace('/');
        } else {
        alert(response.statusText);
        }
        }

    };

};

window.onload=function(){
    document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
};

// document
// .querySelector('#signup-form')
// .addEventListener('submit', signupFormHandler);
