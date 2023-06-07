function handleSubmit () {
    const email = document.getElementById('email').value;
    // to set into local storage
    localStorage.setItem("NAME", email);
    sessionStorage.setItem("NAME", email);
    return;
}
