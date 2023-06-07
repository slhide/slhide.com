window.addEventListener('load', () => {

    // Via Query parameters - GET
    const params = (new URL(document.location)).searchParams;
    var email = params.get('email');
    document.getElementById('name').value = email;
    // Via local Storage
    const email = localStorage.getItem('NAME'); 
    
    const email = sessionStorage.getItem('NAME');
    document.getElementById('name').value = email;

})
