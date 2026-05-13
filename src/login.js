const users = [
    {
        id: 1,
        name: "joel",
        age: 24,
        email: "joel@mail.com",
        password: "123",
        status: "training",
        isActive: true,
    },

    {
        id: 2,
        name: "jonathan",
        age: 18,
        email: "jonathan@mail.com",
        password: "abc",
        status: "training",
        isActive: true,
    },

    {
        id: 3,
        name: "omar",
        age: 21,
        email: "omar@mail.com",
        password: "321",
        status: "training",
        isActive: true,
    },

    {
        id: 4,
        name: "andres",
        age: 24,
        email: "andres@mail.com",
        password: "asd",
        status: "training",
        isActive: true,
    },

    {
        id: 5,
        name: "Juanse",
        age: 17,
        email: "juanse@mail.com",
        password: "qwe",
        status: "training",
        isActive: true,
    },

    {
        id: 6,
        name: "Pablo",
        age: 27,
        email: "pablo@mail.com",
        password: "111",
        status: "training",
        isActive: true,
    },

    {
        id: 7,
        name: "Yesid",
        age: 24,
        email: "yesid@mail.com",
        password: "222",
        status: "training",
        isActive: true,
    },

    {
        id: 8,
        name: "Angel",
        age: 23,
        email: "angel@mail.com",
        password: "333",
        status: "training",
        isActive: true,
    },

    {
        id: 9,
        name: "Alejandro",
        age: 58,
        email: "alejandro@mail.com",
        password: "444",
        status: "training",
        isActive: true,
    },

    {
        id: 10,
        name: "Valeria Michelle",
        age: 17,
        email: "valeria@mail.com",
        password: "555",
        status: "training",
        isActive: true,
    },

    {
        id: 11,
        name: "Didian",
        age: 21,
        email: "didian@mail.com",
        password: "666",
        status: "training",
        isActive: true,
    },

    {
        id: 12,
        name: "jaime",
        age: 18,
        email: "jaime@mail.com",
        password: "777",
        status: "training",
        isActive: true,
    },

    {
        id: 15,
        name: "salomon",
        age: 20,
        email: "salomon@mail.com",
        password: "888",
        status: "training",
        isActive: true,
    },

    {
        id: 16,
        name: "Andres",
        age: 17,
        email: "andres2@mail.com",
        password: "999",
        status: "training",
        isActive: true,
    },

    {
        id: 17,
        name: "Matias",
        age: 19,
        email: "matias@mail.com",
        password: "mat",
        status: "training",
        isActive: true,
    },

    {
        id: 18,
        name: "miguel",
        age: 18,
        email: "miguel@mail.com",
        password: "mig",
        status: "training",
        isActive: true,
    },

    {
        id: 19,
        name: "mateo",
        age: 20,
        email: "mateo@mail.com",
        password: "mto",
        status: "training",
        isActive: true,
    },

    {
        id: 20,
        name: "Valeria",
        age: 19,
        email: "valeria2@mail.com",
        password: "val",
        status: "training",
        isActive: true,
    },

    {
        id: 21,
        name: "santiago",
        age: 22,
        email: "santiago@mail.com",
        password: "san",
        status: "training",
        isActive: true,
    },

    {
        id: 22,
        name: "yulianis",
        age: 24,
        email: "yulianis@mail.com",
        password: "yul",
        status: "training",
        isActive: true,
    },

    {
        id: 23,
        name: "jamh",
        age: 23,
        email: "jamh@mail.com",
        password: "jam",
        status: "training",
        isActive: true,
    },

    {
        id: 24,
        name: "eymi",
        age: 28,
        email: "eymi@mail.com",
        password: "eym",
        status: "training",
        isActive: true,
    },

    {
        id: 25,
        name: "santiago otalora",
        age: 20,
        email: "otalora@mail.com",
        password: "oto",
        status: "training",
        isActive: true,
    },

    {
        id: 26,
        name: "Andres Benavides",
        age: 19,
        email: "benavides@mail.com",
        password: "ben",
        status: "training",
        isActive: true,
    },

    {
        id: 27,
        name: "Camilo Meza",
        age: 24,
        email: "camilo@mail.com",
        password: "cam",
        status: "training",
        isActive: true,
    },

    {
        id: 28,
        name: "Jhonatan Sanchez",
        age: 21,
        email: "jhonatan@mail.com",
        password: "jho",
        status: "training",
        isActive: true,
    },

    {
        id: 29,
        name: "Keyla gonzalez",
        age: 17,
        email: "keyla@mail.com",
        password: "key",
        status: "training",
        isActive: true,
    },
];

const form = document.querySelector("#form")
const session = JSON.parse(localStorage.getItem("session"))
if (session?.isLogged) {
    createMessageModal(session.user)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const { email, password } = Object.fromEntries(data)
    const user = validateLogin(email, password)
    if (user) {
        localStorage.setItem(
            "session",
            JSON.stringify({
                isLogged: true,
                user
            })
        )
    }
    createMessageModal(user)
    form.reset()
})

function validateLogin(email, password) {
    return users.find(
        u => u.email === email && u.password === password
    )
}

function logout() {
    localStorage.removeItem("session")
    location.reload()
}

function createMessageModal(user) {
    const modal = document.createElement("section")
    modal.className =
        "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"

    if (!user) {
        modal.innerHTML = `
        <section class="bg-zinc-900 border border-red-500 text-white rounded-xl p-6 w-full max-w-sm flex flex-col gap-5">

            <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold text-red-400">
                    Usuario no encontrado
                </h2>
            </div>

            <p class="text-zinc-300">
                No se encontró ningún usuario con esas credenciales.
            </p>

            <button
                class="bg-red-500 hover:bg-red-600 transition rounded-md py-2 font-bold cursor-pointer"
            >
                Cerrar
            </button>
        </section>
        `
    }
    else {
        modal.innerHTML = `
        <section class="bg-zinc-900 text-white rounded-md pb-5 flex flex-col border-2 border-zinc-700 p-3 lg:text-4xl lg:p-5 w-full max-w-md">
            <article class="w-full flex flex-col gap-4 justify-center items-center">
                <h1 class="text-lg lg:text-4xl flex flex-col p-4 uppercase font-bold">
                    Bienvenido ${user.name}
                </h1>

                <div class="flex gap-5 justify-between px-2 text-sm lg:text-2xl">
                    <p><strong>Age:</strong> ${user.age}</p>
                    <p><strong>Status:</strong> ${user.status}</p>
                </div>

                <button 
                    id="logout-btn"
                    class="w-full cursor-pointer font-bold bg-red-400 rounded-sm h-10 hover:text-stone-400 hover:bg-red-500 active:bg-red-500 active:text-stone-400 lg:text-2xl"
                >
                    Logout
                </button>
            </article>
        </section>
        `
    }
    modal.addEventListener("click", (e) => {
        const button = e.target.closest("button")
        if (!button) return
        if (button?.id === "logout-btn") {
            logout()
            return
        }
        modal.remove()
    })
    document.body.appendChild(modal)
}