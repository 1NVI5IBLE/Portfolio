import { useEffect, useRef } from "react"

type TrailPoint = {
  x: number
  y: number
}

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

    const trail: TrailPoint[] = []

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY

      trail.push({
        x: mouse.x,
        y: mouse.y,
      })

      if (trail.length > 25) {
        trail.shift()
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    let animationFrame: number

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      context.filter = "blur(50px)"

      trail.forEach((point, index) => {
        const progress = index / trail.length

        const radius = 60 + progress * 100
        const opacity = progress * 0.25

        const gradient = context.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          radius
        )

        gradient.addColorStop(
          0,
          `rgba(80, 120, 255, ${opacity})`
        )

        gradient.addColorStop(
          0.5,
          `rgba(190, 100, 255, ${opacity})`
        )

        gradient.addColorStop(
          1,
          `rgba(255, 120, 180, 0)`
        )

        context.fillStyle = gradient

        context.beginPath()
        context.arc(
          point.x,
          point.y,
          radius,
          0,
          Math.PI * 2
        )

        context.fill()
      })

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