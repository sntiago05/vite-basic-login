export function getSession() {
    return JSON.parse(localStorage.getItem("session"))
}

export function logout() {
    localStorage.removeItem("session")
    location.reload()
}