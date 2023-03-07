let btn_continue = document.querySelector('.btn_continue')
let form = document.forms.form

form.onsubmit = (e) => {
    e.preventDefault()
}

btn_continue.onclick = () => {
    window.location = "../index.html"
}