"use client"
import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null) //canvasRef stores a refeerence of the <canvas> elem so we can draw on it
  const heroRef = useRef<HTMLElement | null>(null) // Reference to the Hero section
//useEffect we use it to set up the animation effect once we render the page
  useEffect(() => {
    const canvas = canvasRef.current //retrieves the actual canvas elem
    heroRef.current = document.getElementById("hero-section") as HTMLElement
    if (!canvas || !heroRef.current) return

    const ctx = canvas.getContext("2d") //gets a 2D drawing context, which is needed to draw on the canvas
    if (!ctx) return

    // Set canvas size to match window size
  const resizeCanvas = () => {
      canvas.width = heroRef.current!.offsetWidth
      canvas.height = heroRef.current!.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle settings
    const particleCount =80 //Total number of particles
    const particles: Particle[] = [] //An array to store all the particles
    const connectionDistance = 180 //The max distance at which particles will connect with a line
    const baseRadius = 2 //The size of each particle

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 1, // Small random movement in X direction
        dy: (Math.random() - 0.5) * 1, // Small random movement in Y direction
        radius: baseRadius, // A fixed size
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height) // clears the canvas before redrawing the particles

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle based on its dx and dy
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off walls ya3ni :If the particle reaches the edge, it bounces back (by reversing dx or dy)
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        // Draw particle
        ctx.beginPath() //starts a new drawing
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2) //draws the particle
        ctx.fillStyle = "rgba(0, 102, 255, 1)" //set the color 
        ctx.fill() //fill the particle with the color

        // Connect nearby particles
        particles.slice(i + 1).forEach((otherParticle) => {
            //calculate the distanc e between the current particle and the other neighbors of it
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
            //If they are close enough (distance < connectionDistance), a line is drawn between them
          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.5 * (1 - distance / connectionDistance)})`; 
           // ctx.lineWidth = 1.5;
            ctx.stroke()
          }
        })
      })
      //we call animate() func on the next frame to keep the animation running 
      requestAnimationFrame(animate)
    }

    animate()
    //When the component is removed (unmounted), the resize listener is removed to prevent memory leaks
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    //render the canvas
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white via-purple-50/50 to-blue-50/50"
    />
  )
}

