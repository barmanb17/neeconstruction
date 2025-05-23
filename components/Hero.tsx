'use client';

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="1.svg"
          alt="Modern house exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl space-y-6"
            >
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
                Building Excellence
              </h1>
              <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-light italic" 
                  style={{ fontFamily: "serif" }}>
                Crafting Futures
              </h2>
              <p className="text-white/90 text-lg sm:text-lg max-w-xl">
                Premium construction services for residential, commercial, and industrial projects. Excellence in every
                detail, from foundation to finish.
              </p>
              
              <Link
                href="/contact"
                className="inline-block bg-transparent border border-white/20 rounded-full px-6 sm:px-8 md:px-8 py-3 sm:py-3 text-base text-white hover:bg-white/20 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-white/10"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-12 right-8 sm:right-12 lg:right-16 hidden lg:block"
        >
          <img 
            src="/Scroll down.png" 
            alt="scroll down" 
            className="w-24 h-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </motion.div>
      </div>
    </div>
  )
}
