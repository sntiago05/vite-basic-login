const form = document.querySelector("#form")

const users = [
    {
        name: "admin",
        email: "admin@example.com",
        password: "1234"
    },
    {
        name: "santiago",
        email: "santiago@gmail.com",
        password: "(()=>{})()"
    }, {
        name: "santiago",
        email: "santiago@gmail.com",
        password: "123"
    }
]


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const email = data.get("email")
    const password = data.get("password")
    const user = validateLogin(email, password)
    createMessageModal(user)
    form.reset()
})

function validateLogin(email, password) {
    return users.find(u => u.email === email && u.password === password)
}

function createMessageModal(user) {
    const modal = document.createElement("section")
    modal.className = "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
    modal.innerHTML = `
    <section class="relative ${user ? "bg-emerald-400" : "bg-red-400"} rounded-md p-10">
        <button class="absolute top-2 right-2 h-10 cursor-pointer ${user ? "text-red-400" : "text-black"} text-2xl hover:bg-white/50 px-2 rounded-2xl">x</button>
        <h1 class="text-white text-4xl">${user ? `Welcome ${user.name}` : "Invalid credentials"}</h1>
      </section>`


    modal.addEventListener("click", (e) => {
        const button = e.target.closest("button")
        if (button) modal.remove()
    })
    document.body.appendChild(modal)
}