import { deleteById, getUsers } from "../api/users"
import { getSession, logout } from "../utils/session"
import createDashboard from "./dashboard"
import createLogin from "./login"
/**@param {HTMLElement} app */
export default async function createUserProfile(user, app) {
  app.innerHTML = `  <section class="w-full max-w-2xl bg-white rounded-3xl p-8 shadow-xl ">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-800">My profile</h2>

          <p class="text-gray-500 mt-2">Update your personal information</p>
        </div>

        <form class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <label class="font-medium text-gray-700"> Name </label>

            <input
              type="text"
              value="${user.name}"
              class="border border-gray-300 rounded-xl px-4 py-3 bg-gray-50"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-medium text-gray-700"> Email </label>

            <input
              type="email"
              value="${user.email}"
              class="border border-gray-300 rounded-xl px-4 py-3 bg-gray-50"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="font-medium text-gray-700"> New password </label>

            <input
              type="password"
              placeholder="••••••••"
              class="border border-gray-300 rounded-xl px-4 py-3 bg-gray-50"
            />
          </div>

          <div class="flex gap-4 mt-4">
            <button
              type="submit"
              class="bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-700"
            >
              Update profile
            </button>

            <button
              id = "delete"
              type="button"
              class="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600"
            >
              Delete account
            </button>
          </div>
        </form>
      </section>`
  app.querySelector("#delete").addEventListener("click", async () => {
    const succces = await deleteById(user.id)
    const session = getSession()
    if (session?.user?.email === user.email) {
      console.log(succces);
      logout()
      //createLogin(app)
    } else {
      const users = await getUsers()
      createDashboard(users, app)
    }
  })
}