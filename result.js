window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    var username = params.get('username');
    if (username!=null){
    document.getElementById('name').setAttribute("value",username);}

})
