window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const email = params.get('email');*/

    // Via local Storage
    const email = localStorage.getItem('NAME'); 
    
    const email = sessionStorage.getItem('NAME');
    document.getElementById('name').innerHTML = email;

})
