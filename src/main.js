import createLogin from "./components/login"
import createHome from "./components/home"
const app = document.querySelector(".app")
const session = JSON.parse(localStorage.getItem("session"))
if (session?.isLogged) {
    createHome(session.user,app)
} else {
    createLogin(app)
}

