import createLogin from "./login"

function logout() {
    localStorage.removeItem("session")
    location.reload()
}

export default function createHome(user, app) {
    if (!user) {
        app.innerHTML = `
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
                id = "close-btn"
                class="bg-red-500 hover:bg-red-600 transition rounded-md py-2 font-bold cursor-pointer"
            >
                Cerrar
            </button>
        </section>
        `
    }
    else {
        app.innerHTML = `
        <section class="bg-zinc-900 text-white rounded-md pb-5 flex flex-col border-2 border-zinc-700 p-3 lg:text-4xl lg:p-5 w-full max-w-md md:max-w-lg">
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
    app.querySelector("#logout-btn")?.addEventListener("click", logout);
    app.querySelector("#close-btn")?.addEventListener("click", () => createLogin(app));

}