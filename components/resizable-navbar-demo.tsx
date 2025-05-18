"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name:"Projects",
      link:"/",
    },
    {
      name:"Contact",
      link:"/",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  if (typeof window !== 'undefined') {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="hidden lg:flex">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Contact Us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="lg:hidden">
          <MobileNavHeader>
            <NavbarLogo />
            <div className="text-black">
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Menu */}
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col w-full bg-white/80 backdrop-blur-md rounded-lg"
                  >
                    {navItems.map((item, idx) => (
                      <motion.a
                        key={`mobile-link-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-black hover:text-orange-500 transition-colors"
                      >
                        <span className="block py-3 px-2 border-b border-gray-100">{item.name}</span>
                      </motion.a>
                    ))}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navItems.length * 0.1 }}
                      className="flex w-full flex-col gap-4 mt-6 px-2"
                    >
                      <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                        Contact Us
                      </NavbarButton>
                    </motion.div>
                  </motion.div>
                </MobileNavMenu>
              </>
            )}
          </AnimatePresence>
        </MobileNav>
      </Navbar>
    </div>
  )
}

