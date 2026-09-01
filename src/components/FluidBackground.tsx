import { useEffect, useRef } from "react"

function FluidBackground() {
  const blobRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    let blobX = mouseX
    let blobY = mouseY

    let animationFrame: number

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      blobX += (mouseX - blobX) * 0.08
      blobY += (mouseY - blobY) * 0.08

      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate(${blobX}px, ${blobY}px) translate(-50%, -50%)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)

    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
      ref={blobRef}
      className="
        absolute
        top-0
        left-0
        w-96
        h-96
        bg-blue-200
        rounded-full
        blur-3xl
        opacity-40
        pointer-events-none
      "
    />
  )
}

export default FluidBackground