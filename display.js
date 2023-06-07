function handleSubmit () {
    const name = document.getElementById('email').value;
    const surname = document.getElementById('password').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("PASSWORD", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("PASSWORD", surname);

    return;
}
