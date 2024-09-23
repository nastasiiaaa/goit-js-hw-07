const form = document.querySelector('.login-form');

const handleForm = (event) => {
    event.preventDefault();
    const dataEmail = event.target.elements.email.value.trim();
    const dataPass = event.target.elements.password.value.trim();
    if(dataEmail === '' || dataPass === ''){
        alert('All form fields must be filled in');
    };
    const objectDataForm = {
        email: dataEmail,
       password: dataPass,
      };
    console.log("objectDataForm:", objectDataForm)
    event.target.reset();
    
};
form.addEventListener('submit', handleForm);