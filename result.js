window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    var email = params.get('email');
    document.getElementById('name').setAttribute("value",email);

})
