import "./style.css"
import {getSession} from "./utils/session"
import createLogin from "./components/login"
import createHome from "./components/home"
const app = document.querySelector(".app")
const session = getSession()
if (session?.isLogged) {
    createHome(session.user, app)
} else {
    createLogin(app)
}

