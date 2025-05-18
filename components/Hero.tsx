import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

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
        {/* Navigation */}

        {/* Hero Section */}
        <main className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl lg:px-20">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">Building Excellence</h1>
            <h2 className="text-white text-4xl md:text-6xl font-light italic mb-6" style={{ fontFamily: "serif" }}>
              Crafting Futures
            </h2>
            <p className="text-white/90 text-lg max-w-xl mb-8">
              Premium construction services for residential, commercial, and industrial projects. Excellence in every
              detail, from foundation to finish.
            </p>
            <Link
              href="#"
              className="inline-block border border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-black transition hover:-translate-y-0.5"
   >
              Get Started
            </Link>
          </div>
        </main>

        {/* Circular Element */}
        <div className="absolute bottom-20 right-20 hidden lg:block ">
            <img src="/Scroll down.png" alt="scrol down" />
        </div>
      </div>
    </div>
  )
}
