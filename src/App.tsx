import FluidBackground from "./components/FluidBackground"

function App() {
  return (
    <main className="relative min-h-screen bg-[#f7f7f5] flex flex-col items-center overflow-hidden">

      <FluidBackground />

      <aside className = "fixed left-0 top-0 z-20 h-screen w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md p-4">
      
        <div className = "flex items-center gap-3">
          <div className = "w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
            LM
          </div>
        </div>

        <div>
          <p className = "text-sm font-semibold">
            Liam Moore
          </p>

          <p className = "text-xs text-gray-500 mb-8">
            Portfolio 
          </p>
        </div>

        <nav className = "flex flex-col gap-1">

          <button className = "w-full rounded-lg bg-gray-100 px-3 py-2 text-left text-sm font-medium transition">
            Home
          </button>

          <button className = "w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            About Me
          </button>

          <button className = "w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Experience
          </button>

          <button className = "w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Projects
          </button>

          <button className = "w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Skills
          </button>

        </nav>

        <div className = "absolute bottom-4 left-4 right-4 border-t border-gray-200 pt-4">
          <button className = "w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Contact
          </button>
        </div>
      
      </aside>

    <div className="ml-64 min-h-screen">

      <section className="relative z-10 w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">

        <p className="text-sm font-medium text-gray-500 mb-4">
          SOFTWARE DEVELOPER
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hey, I'm Liam {" "}
          <span className = "inline-block animate-wave"> 
            👋
          </span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-500 max-w-xl">
          I build software, solve problems, and occasionally
          spend far too long fixing one line of code.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <div className="flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-2">

            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-3 outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
            />

            <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              →
            </button>

          </div>
        </div>

        

      </section>

    </div>  

    </main>
  )
}

export default App