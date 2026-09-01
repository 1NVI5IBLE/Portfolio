import { useState } from "react";
import type React from "react";

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }


  return (
    <main 
      onMouseMove={handleMouseMove}
      className = "relative min-h-screen bg-[#f7f7f5] flex flex-col items-center overflow-hidden">

      <div
        className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <section className = "relative z-10 w-full max-w-5xl flex flex-col items-center text-center px-6 pt-24">

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
            <button className = "w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              →
            </button>
          </div>
        </div>

        <div className = "mt-20 w-full max-w-2xl grid grid-cols-2 gap-3">
          <button className = "bg-white border border-gray-200  rounded-xl p-4 text-center hover:bg-gray-50 hover:-translate-y-1 transition duration-200">
            About Me
          </button>

          <button className = "bg-white border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 hover:-translate-y-1 transition duration-200">
            Experience
          </button>

          <button className = "bg-white border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 hover:-translate-y-1 transition duration-200">
            Projects
          </button>

          <button className = "bg-white border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-50 hover:-translate-y-1 transition duration-200">
            Skills
          </button>
        </div>

      </section>
    </main>
  )
}

export default App