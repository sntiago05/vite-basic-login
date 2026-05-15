import createLogin from "./login"
/** @param {HTMLElement} app */
export default function createInvalidCredentials(app) {
    app.innerHTML = `<section
  class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
>
  <div
    class="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-5 animate-in fade-in zoom-in"
  >
    <div class="flex flex-col gap-2 text-center">
      <div
        class="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center"
      >
        <span class="text-3xl">✕</span>
      </div>

      <h2 class="text-2xl font-bold text-gray-800">
        Invalid credentials
      </h2>

      <p class="text-gray-500">
        Email or password is incorrect.
      </p>
    </div>

    <button
    id="btn-try"
      class="cursor-pointer bg-red-500 hover:bg-red-600 transition-all duration-200 text-white font-semibold py-3 rounded-xl"
    >
      Try again
    </button>
  </div>
</section>
`
app.querySelector("#btn-try").addEventListener("click", () => createLogin(app))
}