const showPass = document.getElementById('showPass')
const passInput = document.getElementById('password')

showPass.addEventListener('change', function () {
    if (showPass.checked) {
        passInput.type = 'text'
    } else {
        passInput.type = 'password'
    }
})

const passWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/

const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    const pass = document.getElementById('password').value
    const confirmPass = document.getElementById('confirmPassword').value

    if (!passWord.test(pass)) {
        alert('Пароль должен содержать минимум 4 букв')
        event.preventDefault()
    } else if (pass !== confirmPass){
        alert('Пароли не совпадают')
        event.preventDefault()
    }else {
        alert('Все успешно')
    }
})




const block = document.querySelector('.box')
let position = 0

const move = () => {
    if (position <= 500){
        position++
        block.style.left = `${position}px`
        setInterval(move, 1)
    }
}
move()