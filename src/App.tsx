import { useState } from "react"
import FluidBackground from "./components/FluidBackground"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="relative min-h-screen bg-[#f7f7f5] overflow-hidden">

      <FluidBackground />


      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-20 h-screen w-64 border-r border-gray-200 bg-white/80 backdrop-blur-md p-4">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
            LM
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">
            Liam Moore
          </p>

          <p className="text-xs text-gray-500 mb-8">
            Portfolio
          </p>
        </div>


        {/* Navigation */}
        <nav className="flex flex-col gap-1">

          <button
            onClick={() => setActiveSection("home")}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
              activeSection === "home"
                ? "bg-gray-100 font-medium text-black"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => setActiveSection("about")}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
              activeSection === "about"
                ? "bg-gray-100 font-medium text-black"
                : "text-gray-600 hover:bg-gray-100 hover:text-black"
            }`}
          >
            About Me
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Experience
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Projects
          </button>

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Skills
          </button>

        </nav>


        {/* Bottom sidebar */}
        <div className="absolute bottom-4 left-4 right-4 border-t border-gray-200 pt-4">

          <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 hover:text-black transition">
            Contact
          </button>

        </div>

      </aside>


      {/* Main content */}
      <div className="ml-64 min-h-screen">


        {/* HOME */}
        {activeSection === "home" && (

          <section className="relative z-10 w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">

            <p
              className="animate-fade-down text-sm font-medium text-gray-500 mb-4"
              style={{ animationDelay: "0ms" }}
            >
              SOFTWARE DEVELOPER
            </p>

            <h1
              className="animate-fade-down text-5xl md:text-7xl font-bold tracking-tight"
              style={{ animationDelay: "100ms" }}
            >
              Hey, I'm Liam{" "}

              <span className="inline-block animate-wave">
                👋
              </span>

            </h1>

            <p
              className="animate-fade-down mt-5 text-lg md:text-xl text-gray-500 max-w-xl"
              style={{ animationDelay: "200ms" }}
            >
              I build software, solve problems, and occasionally
              spend far too long fixing one line of code.
            </p>


            {/* Homepage input */}
            <div
              className="animate-fade-down mt-10 w-full max-w-2xl"
              style={{ animationDelay: "300ms" }}
            >

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

        )}


        {/* ABOUT ME CHAT */}
        {activeSection === "about" && (

          <section className="relative z-10 min-h-screen flex flex-col">

            {/* Conversation */}
            <div className="w-full max-w-3xl mx-auto flex-1 px-6 pt-16 pb-40">

              <p className="text-sm text-gray-500 mb-10">
                About Me
              </p>


              {/* User message */}
              <div className="flex justify-end mb-8">

                <div className="bg-gray-200 rounded-2xl px-5 py-3 max-w-md">
                  Tell me about Liam
                </div>

              </div>


              {/* Liam response */}
              <div className="max-w-2xl">

                <p className="text-gray-800 leading-7">
                  Hey! I'm Liam, a software developer who enjoys
                  building useful applications, solving problems,
                  and learning new technologies.
                </p>

                <p className="mt-4 text-gray-800 leading-7">
                  I enjoy working across frontend, backend and cloud
                  technologies, and I'm particularly interested in
                  building software that has a real purpose behind it.
                </p>

              </div>

            </div>


            {/* Bottom input */}
            <div className="fixed bottom-0 left-64 right-0 z-20 px-6 pb-6 pt-12 bg-gradient-to-t from-[#f7f7f5] via-[#f7f7f5] to-transparent">

              <div className="w-full max-w-2xl mx-auto">

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

            </div>

          </section>

        )}

      </div>

    </main>
  )
}

export default App