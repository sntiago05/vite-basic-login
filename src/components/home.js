import createLogin from "./login"
import createDashboard from "./dashboard"
import createUserProfile from "./userProfile"
import { getUsers } from "../api/users"

/** @param {HTMLElement} app */
export default async function createHome(user, app) {
    if (!user) return
    if (user.role === "admin") {
        const users = await getUsers()
        console.log(users);
        
        createDashboard(users, app)
        return
    }
    createUserProfile(user, app)
}