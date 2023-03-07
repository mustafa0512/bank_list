let btn_continue_enter_akk = document.querySelector('.btn_continue_enter_akk')
let form = document.forms.form

form.onsubmit = (e) => {
    e.preventDefault()

}

btn_continue_enter_akk.onclick = () => {
    window.location = "../index.html"
}