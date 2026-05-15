import { getUserByEmail } from "../api/users";
import createHome from "./home";
import createInvalidCredentials from "./invalidCredentials";
/** @param {HTMLElement} app */
export default function createLogin(app) {
  app.innerHTML = `<form
  id="form"
  class="w-full max-w-md lg:max-w-2xl bg-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col gap-5 lg:gap-7"
>
  <div class="text-center flex flex-col gap-2">
    <h1 class="text-3xl lg:text-5xl font-bold text-gray-800">
      Welcome back
    </h1>

    <p class="text-gray-500 text-sm md:text-base lg:text-xl">
      Login to continue
    </p>
  </div>

  <div class="flex flex-col gap-2">
    <label
      for="email"
      class="text-sm lg:text-lg font-medium text-gray-700"
    >
      Email
    </label>

    <input
      class="border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 lg:py-4 lg:text-lg outline-none transition-all duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
      type="email"
      name="email"
      id="email"
      placeholder="example@email.com"
    />
  </div>

  <div class="flex flex-col gap-2">
   
      <label
        for="password"
        class="text-sm lg:text-lg font-medium text-gray-700"
      >
        Password
      </label>
    

    <input
      class="border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 lg:py-4 lg:text-lg outline-none transition-all duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
      type="password"
      name="password"
      id="password"
      placeholder="Type your password"
    />
  </div>

  <button
    type="submit"
    class="cursor-pointer bg-sky-600 hover:bg-sky-700 active:scale-[0.98] transition-all duration-200 text-white font-semibold py-3 lg:py-4 lg:text-xl rounded-xl shadow-md"
  >
    Login
  </button>
</form>`
  const form = app.querySelector("#form")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const { email, password } = Object.fromEntries(data)
    const user = await validateLogin(email, password)
    if (!user) {
      createInvalidCredentials(app)
      return
    };
    localStorage.setItem(
      "session",
      JSON.stringify({
        isLogged: true,
        user
      })
    )
    createHome(user, app)
    form.reset()
  })
}

async function validateLogin(email, password) {
  const user = await getUserByEmail(email)
  if (!user) return undefined
  return user.password === password ? user : undefined
}
