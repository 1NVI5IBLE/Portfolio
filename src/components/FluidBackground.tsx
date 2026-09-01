import { useEffect, useRef } from "react"

function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext("2d")

    if (!context) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    window.addEventListener("resize", resizeCanvas)

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    let animationFrame: number

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      context.filter = "blur(80px)"

      context.fillStyle = "rgba(80, 120, 255, 0.35)"

      context.beginPath()
      context.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2)
      context.fill()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export default FluidBackground