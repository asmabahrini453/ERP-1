"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface ProfessionalImageCardProps {
  src: StaticImageData | string
  alt: string
  className?: string
  variants?: any
}

export default function ProfessionalImageCard({ src, alt, className = "", variants }: ProfessionalImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div variants={variants} className={`w-full ${className}`}>
      <Card
        className="overflow-hidden bg-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative">
            <motion.div
              className="flex items-center justify-center overflow-hidden bg-white"
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src }
                alt={alt}
                className="w-full h-auto object-contain transition-all p-6"
              />

              {/* Subtle gradient overlay on hover */}
          
            </motion.div>

         
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
