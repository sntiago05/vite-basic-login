/** @param {HTMLElement} container */
export default function generateUserLine(user) {
    return `<article
              class="border border-gray-200 rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 hover:shadow-md transition-all duration-200"
            >
              <div class="flex flex-col gap-1">
                <h3 class="capitalize text-lg font-semibold text-gray-800">${user.name}</h3>

                <p class="text-gray-500">${user.email}</p>

                <span
                  class="w-fit bg-sky-100 text-sky-700 text-sm px-3 py-1 rounded-full font-medium"
                >
                  ${user.role}
                </span>
              </div>

              <button
                data-id="${user.id}"
                class="bg-gray-800 hover:bg-black active:scale-[0.98] transition-all duration-200 text-white font-semibold px-5 py-3 rounded-2xl cursor-pointer"
              >
                Manage User
              </button>
            </article>
          `

}