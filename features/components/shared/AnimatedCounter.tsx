import { useEffect, useRef, useState } from "react"

interface StatItem {
  number: number
  label: string
}

const AnimatedCounter = ({ number, label }: StatItem) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let animationFrameId: number
    const startTime = Date.now()
    const duration = 2000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth acceleration/deceleration
      const easeOutQuad = 1 - Math.pow(1 - progress, 2)
      const currentCount = Math.floor(number * easeOutQuad)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setCount(number)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isVisible, number])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-red-600 mb-2 font-nunito-sans">+{count}</div>
      <div className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-open-sans">{label}</div>
    </div>
  )
}
export default AnimatedCounter;