function App() {
  return (
    <main className = "min-h-screen bg-[#f7f7f5] flex flex-col items-center">

      <section className = "w-full max-w-5xl flex flex-col items-center text-center px-6 pt-24">

        <p className = "text-sm font-medium text-gray-500 mb-4">
          SOFTWARE DEVELOPER
        </p>

        <h1 className = "text-5xl md:text-7xl font-bold tracking-tight">
          Hey, I'm Liam 👋
        </h1>

        <p className = "mt-5 text-lg md:text-xl text-gray-500 max-w-xl">
          I build software, solve problems, and occasionally
          spend far too long fixing one line of code.
        </p>

        <div className = "mt-10 w-full max-w-2xl">
          <div className = "flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-2">
            <input
            type="text"
            placeholder="Ask me anything..."
            className = "flex-1 px-4 py-3 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
            />
            <button className = "w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition">
              →
            </button>
          </div>
        </div>

      </section>
    </main>
  )
}

export default App