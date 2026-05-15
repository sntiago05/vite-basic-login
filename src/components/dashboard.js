import { logout } from "../utils/session"
import generateUserLine from "./userDetail"
import createUserProfile from "./userProfile"

/**
 * @param {HTMLElement} app
 * @param {Array} users *
 */
export default function createDashboard(users, app) {
  const totalAdmins = users.filter(u => u.role === "admin").length
  const totalUsers = users.length
  const activeUsers = users.filter(u => u.isActive).length
  app.innerHTML = ` <div class="min-h-screen w-full bg-gray-100 flex flex-col">
      <header
        class="w-full bg-white border-b border-gray-200 px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between shadow-sm"
      >
        <div class="flex flex-col">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p class="text-gray-500 text-sm md:text-base">
            Manage all platform users
          </p>
        </div>

        <div class="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search user by name..."
            class="border border-gray-300 bg-gray-50 rounded-2xl px-4 py-3 outline-none transition-all duration-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-200 md:w-80"
          />

          <button
            id="logout-btn"
            class="bg-red-500 hover:bg-red-600 active:scale-[0.98] transition-all duration-200 text-white font-semibold px-6 py-3 rounded-2xl shadow-sm cursor-pointer"
          >
            Log out
          </button>
        </div>
      </header>

      <main class="flex-1 p-4 md:p-8 flex flex-col gap-6">
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article
            class="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
          >
            <p class="text-gray-500 text-sm">Total Users</p>

            <h2 class="text-3xl font-bold text-gray-800 mt-2">${totalUsers}</h2>
          </article>

          <article
            class="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
          >
            <p class="text-gray-500 text-sm">Admins</p>

            <h2 class="text-3xl font-bold text-gray-800 mt-2">${totalAdmins}</h2>
          </article>

          <article
            class="bg-white rounded-3xl p-6 shadow-sm border border-gray-200"
          >
            <p class="text-gray-500 text-sm">Active users</p>

            <h2 class="text-3xl font-bold text-gray-800 mt-2">${activeUsers}</h2>
          </article>
        </section>

        <section
          class="bg-white rounded-3xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col gap-6"
        >
          <div class="flex items-center justify-between">
            <h2 class="text-xl md:text-2xl font-bold text-gray-800">Users</h2>

            <button
              class="bg-sky-600 hover:bg-sky-700 active:scale-[0.98] transition-all duration-200 text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer"
            >
              Add User
            </button>
          </div>

          <section class="flex flex-col gap-4 users">


      
          </section>
        </section>
      </main>
    </div>`

  const sectionUsers = app.querySelector(".users")

  sectionUsers.innerHTML = users.map(u => generateUserLine(u)).join("")

  sectionUsers.addEventListener("click", (e) => {
    const button = e.target.closest("button")
    
    
    if (!button) return
    const id = Number(button.dataset.id)
    const userSelected = users.find(u => Number(u.id) === id)
    console.log(userSelected);
    
    if (!userSelected) return
    createUserProfile(userSelected, app)
  })

  app.querySelector("#logout-btn").addEventListener("click",logout)
}
