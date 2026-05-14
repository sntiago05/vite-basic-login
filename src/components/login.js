import { getUserByEmail } from "../api/users";
import createHome from "./home";
export default function createLogin(app) {
    app.innerHTML = ` <form
      id="form"
      class="p-5  rounded-2xl flex flex-col gap-2 md:gap-4 md:p-6 shadow-sm shadow-black"
    >
      <div class="flex flex-col w-full gap-1 md:text-2xl md:gap-2">
        <label for="email" class="capitalize">email</label>
        <input
          class="border outline-none py-2 pl-1 rounded-md focus:border-sky-600 md:py-4 md:pl-4"
          type="email"
          name="email"
          id="email"
          placeholder="Example@example.com"
        />
      </div>
      <div class="flex flex-col w-full gap-1 md:text-2xl md:gap-2">
        <label for="password" class="capitalize">password</label>
        <input
          class="border outline-none py-2 pl-1 rounded-md focus:border-sky-600 md:py-4 md:pl-4"
          type="password"
          name="password"
          id="password"
          placeholder="type your password"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-sky-600 text-white h-8 rounded-md active:bg-sky-900 hover:bg-sky-900 cursor-pointer md:h-10 font-bold uppercase"
      >
        login
      </button>
    </form>`
    const form = app.querySelector("#form")

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const { email, password } = Object.fromEntries(data)
        const user = await validateLogin(email, password)
        if (user) {
            localStorage.setItem(
                "session",
                JSON.stringify({
                    isLogged: true,
                    user
                })
            )
        }
        createHome(user,app)
        form.reset()
    })
}

async function validateLogin(email, password) {
    const user = await getUserByEmail(email)
    if (!user) return undefined
    return user.password === password ? user : undefined
}
