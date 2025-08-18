"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import type React from "react"
import { useEffect, useId, useRef, useState } from "react"

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  fadeEdges?: boolean
  [key: string]: unknown
}

export function DotPattern({
  width = 16,
  height = 16,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  fadeEdges = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const dots = Array.from(
    {
      length: Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height),
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width)
      const row = Math.floor(i / Math.ceil(dimensions.width / width))
      return {
        x: col * width + cx,
        y: row * height + cy,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }
    },
  )

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot) => {
        // Calculate distance from edges for linear fade effect
        let opacity = 1
        if (fadeEdges) {
          // Calculate normalized distances from edges (0 at edge, 1 at center)
          const normalizedX = (2 * Math.min(dot.x, dimensions.width - dot.x)) / dimensions.width
          const normalizedY = (2 * Math.min(dot.y, dimensions.height - dot.y)) / dimensions.height

          // Use the minimum distance to any edge
          const edgeDistance = Math.min(normalizedX, normalizedY)

          // Apply a less aggressive fade function (square root instead of cube)
          // This makes more dots visible toward the edges
          opacity = Math.sqrt(edgeDistance)

          // Boost the opacity to make more dots visible
          opacity = Math.min(1, opacity * 1.5)

          // Only make dots completely disappear if they're very close to the edge
          if (edgeDistance < 0.05) opacity = 0
        }

        return (
          <motion.circle
            key={`${dot.x}-${dot.y}`}
            cx={dot.x}
            cy={dot.y}
            r={cr}
            fill="currentColor"
            opacity={opacity}
            initial={glow ? { opacity: fadeEdges ? opacity * 0.4 : 0.4, scale: 1 } : {}}
            animate={
              glow
                ? {
                    opacity: [
                      fadeEdges ? opacity * 0.4 : 0.4,
                      fadeEdges ? opacity : 1,
                      fadeEdges ? opacity * 0.4 : 0.4,
                    ],
                    scale: [1, 1.5, 1],
                  }
                : {}
            }
            transition={
              glow
                ? {
                    duration: dot.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: dot.delay,
                    ease: "easeInOut",
                  }
                : {}
            }
          />
        )
      })}
    </svg>
  )
}
