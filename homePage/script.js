const login = document.querySelector("#login")
const register = document.querySelector("#register")

function showSignUp() {
    login.classList.add("d-none")
    register.classList.remove("d-none")
}


function showLogin() {
    login.classList.remove("d-none")
    register.classList.add("d-none")
}
