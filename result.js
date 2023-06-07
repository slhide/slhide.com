window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('email');
    const surname = params.get('password'); */

    // Via local Storage
    /* const email = localStorage.getItem('NAME');
    const password = localStorage.getItem('PASSWORD'); */
    
    const email = sessionStorage.getItem('NAME');
    const password = sessionStorage.getItem('PASSWORD');
    
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-pasword').innerHTML = password;

})
