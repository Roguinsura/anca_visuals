"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left Navigation - Hidden on mobile, visible on tablet+ */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <Link
              href="/about"
              className="text-xs md:text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-xs md:text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              Pricing & Process
            </Link>
            <Link
              href="/portfolio"
              className="text-xs md:text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center group z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>

          {/* Center Logo */}
          <Link href="/" className="text-center absolute left-1/2 transform -translate-x-1/2">
            <div className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1">
              Superlove
            </div>
            <div className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-300">
              Joy, Quiet, Chaos, & Love
            </div>
          </Link>

          {/* Right Side - Social & Inquire */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
            <div className="hidden sm:flex space-x-3 md:space-x-4">
              <Link href="https://instagram.com/superlovefilm" className="hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://vimeo.com/superlovefilm" className="hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                </svg>
              </Link>
              <Link href="https://tiktok.com/@superlovefilm" className="hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
            <Link
              href="/contact"
              className="text-xs md:text-sm font-light tracking-[0.15em] md:tracking-[0.2em] uppercase border-b border-white pb-1 hover:border-gray-300 transition-colors"
            >
              Inquire
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay - Full Screen Background */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{
            backgroundColor: isMobileMenuOpen ? "#1a202c" : "transparent",
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          {/* Menu Content */}
          <div
            className={`relative h-full flex flex-col justify-between p-6 transform transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-light tracking-[0.3em] uppercase text-white mb-1">SUPERLOVE</h1>
                <p className="text-xs tracking-[0.4em] uppercase text-gray-300">JOY, QUIET, CHAOS, & LOVE</p>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links - Centered */}
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              <Link
                href="/about"
                className="flex items-center justify-between text-3xl font-light tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>ABOUT</span>
                <svg
                  className="h-6 w-6 ml-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/pricing"
                className="text-3xl font-light tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRICING &<br />
                PROCESS
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center justify-between text-3xl font-light tracking-[0.2em] uppercase text-white hover:text-gray-300 transition-colors group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>PORTFOLIO</span>
                <svg
                  className="h-6 w-6 ml-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>

            {/* Bottom Section */}
            <div className="space-y-8">
              {/* Social Icons */}
              <div className="flex justify-center space-x-8">
                <Link
                  href="https://instagram.com/superlovefilm"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://vimeo.com/superlovefilm"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                </Link>
                <Link
                  href="https://tiktok.com/@superlovefilm"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>

              {/* Inquire Button */}
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block text-lg font-light tracking-[0.3em] uppercase text-white border-b border-white pb-2 hover:text-gray-300 hover:border-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INQUIRE
                </Link>
              </div>

              {/* Website URL */}
              <div className="text-center">
                <p className="text-sm text-gray-400 tracking-wider">www.superlovefilm.com</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Split Video Background */}
        <div className="absolute inset-0 flex">
          {/* Left Video */}
          <div className="w-1/2 h-full relative">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
              {/* Fallback image */}
              <Image
                src="/placeholder.svg?height=1080&width=960"
                alt="Couple silhouette on beach"
                fill
                className="object-cover"
              />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right Video */}
          <div className="w-1/2 h-full relative">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source
                src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                type="video/mp4"
              />
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              {/* Fallback image */}
              <Image
                src="/placeholder.svg?height=1080&width=960"
                alt="Intimate couple moment"
                fill
                className="object-cover"
              />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-6">
          <p className="text-xs md:text-sm lg:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-200 mb-6 md:mb-8">
            Documentary Film Wedding Photography
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-[0.02em] md:tracking-[0.05em] leading-tight">
            FOR HUMANS
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">CRAVING LIFE</span>
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-white/50 mx-auto mb-4"></div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-300 rotate-90 origin-center">Scroll</p>
        </div>
      </section>

      {/* Featured Work Gallery */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-6 uppercase">Recent Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Each frame tells a story of love, connection, and the beautiful imperfection of being human
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Featured Gallery Grid */}
            <div className="col-span-1 aspect-square group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/50fc73f3-18c0-4408-ae56-feefefccf52e/kiki-doug-crested-butte-wedding-285.jpg?format=2500w"
                alt="Intimate wedding moment captured on film"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-[4/3] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/3ed2192d-b4ac-4288-a279-693d587fe242/mallory-joseph-superlovefilm-472.jpg?format=1000w"
                alt="Golden hour engagement session"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-[3/4] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1733691209392-TX8IBLNIFLIHB03F2HKB/sarah-zach-zion-elopement-27_websize.jpg?format=2500w"
                alt="Artistic bridal portrait on film"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-square group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/55982968-1cd5-4181-8e9e-740a9ffe45bc/katie-josh-hawaii-elopement-250.jpg?format=2500w"
                alt="Candid family moment"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 aspect-[2/1] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/6b770734-4eb7-4c17-a02b-381ad6e6e4b0/lexie-nate-superlove-finals-214.jpg?format=2500w"
                alt="Wedding ceremony in natural light"
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-square group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/07453b81-52ce-42ab-8322-0ec1f3ad79ab/sarah-zach-zion-elopement-626.jpg?format=2500w"
                alt="Romantic couple portrait"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-[3/4] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1733690667531-IGBQ3MEB0C3GSFDZXEIP/Mallory_Joseph_Previews_-52_websize.jpg?format=2500w"
                alt="Editorial fashion on film"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-[4/3] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/e8b3bf5f-3ec5-45a9-b200-5644755e2f07/katie-josh-hawaii-elopement-2.jpg?format=2500w"
                alt="Wedding details and styling"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-1 aspect-square group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/dc73b904-7e4f-4c94-8fe9-a6b48a6994ec/CAMP-Washington-EileanStark--2.jpg?format=2500w"
                alt="Lifestyle portrait session"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 aspect-[2/1] group cursor-pointer">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/2e609c78-fec0-46ac-bd98-6319965f7b58/annie-dustin-olympia-wedding-146.jpg?format=2500w"
                alt="Destination wedding landscape"
                width={800}
                height={400}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.05em] mb-12 leading-tight">
            YOUR MEMORIES
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-gray-300">
              [WRAPPED IN MAGICAL
              <br />
              FILM GOODNESS* AND
              <br />
              STANDING THE TEST OF TIME]
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              There's something magical about film photography that digital just can't replicate. The grain tells
              stories, the colors breathe with life, and the way light dances across each frame creates pure poetry in
              motion.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Every shot is intentional, every moment precious, because you can't just delete and try again. This
              intentionality creates images that don't just capture what happened—they preserve how it felt, how the air
              smelled, how your heart raced in that perfect, unrepeatable moment.
            </p>
            <div className="text-sm text-gray-500 italic pt-8">
              *Film goodness includes but is not limited to: authentic grain structure, unmatched color depth, archival
              longevity, and that indefinable soul that makes your heart skip a beat every single time.
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-light tracking-[0.05em] leading-tight">
                CAPTURING SOULS,
                <br />
                NOT JUST SMILES
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  In a world obsessed with perfection, I believe in the raw beauty of authentic imperfection. The laugh
                  lines that map a lifetime of joy, the tears that speak of overwhelming love, the quiet moments between
                  the grand gestures that reveal who you truly are.
                </p>
                <p>
                  Film photography forces us to slow down, to be present, to truly see. Each frame costs something, so
                  every click matters. This intentionality creates images that breathe with life, that age like fine
                  wine, becoming more precious with each passing year.
                </p>
                <p>
                  My approach is documentary-style with an artistic soul. I'm not just capturing what happened—I'm
                  preserving the essence of who you are, the energy between you, the love that fills the spaces between
                  words. These aren't just photographs; they're heirlooms for generations yet to come.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-block text-sm tracking-[0.2em] uppercase border-b border-white pb-1 hover:border-gray-400 transition-colors"
                >
                  Learn More About My Approach →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] group cursor-pointer">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/88b207ef-d29a-41b5-a44d-cbf7b32d5636/annie-dustin-previews-13.jpg?format=1500w"
                    alt="Behind the scenes film photography"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-square group cursor-pointer">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/3be0b38f-83e4-499a-9eff-b8105b984b6c/kiki-doug-portfolio-1.jpg?format=1500w"
                    alt="Vintage film camera collection"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square group cursor-pointer">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/4ba8d68b-ab7c-4382-9428-d8441d610073/AC_5607_Portra+800_030861-R1-023-10.jpg?format=2500w"
                    alt="Film development process"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-[4/3] group cursor-pointer">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/b1c915fd-d1df-4dc2-a2e9-129bbcbca946/provence-france-elopement-62.jpg?format=2500w"
                    alt="Artistic film photography setup"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Letter Section */}
      <section className="py-32 px-6 bg-amber-50 text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-light tracking-[0.05em]">A LETTER FROM ALMA</h3>
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>Dear beautiful human reading this,</p>
              <p>
                There's something I need to tell you about the magic that happens when we slow down and truly see each
                other. In our hyperconnected, always-on world, we've forgotten the art of being present—really, truly
                present.
              </p>
              <p>
                Film photography is my rebellion against the digital noise. It's my love letter to intentionality, to
                the belief that some moments are too precious to be captured carelessly. When I hold my camera, loaded
                with just 36 frames of possibility, every click becomes a conscious choice.
              </p>
              <p>
                I've spent over a decade perfecting this craft, not just technically, but emotionally. I've learned to
                read the light like poetry, to anticipate the moment before it happens, to become invisible so your
                authentic self can shine through.
              </p>
              <p>
                When you choose film, you're choosing to invest in memories that will age like fine wine—getting more
                beautiful with time, carrying the warmth and character that only analog can provide. Your children's
                children will hold these images and feel the love that created them.
              </p>
              <p>This isn't just photography. This is legacy work.</p>
              <p className="italic pt-4">
                With endless love and light,
                <br />
                <span className="text-2xl font-light">Alma</span>
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/78f7cbf2-b84d-4865-bdae-5b507244d582/000062.jpg?format=2500w"
                alt="Portrait of Alma, film photographer"
                width={500}
                height={600}
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-sm shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-light">10+</div>
                  <div className="text-xs tracking-wider uppercase">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-6 uppercase">The Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From our first conversation to your final gallery delivery, every step is designed to be as meaningful as
              the memories we're creating together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 group">
              <div className="text-8xl font-extralight text-gray-300 group-hover:text-gray-400 transition-colors">
                01
              </div>
              <h3 className="text-2xl font-medium tracking-wide">CONNECT & DREAM</h3>
              <p className="text-gray-600 leading-relaxed">
                We start with a heart-to-heart conversation about your vision, your love story, and what makes your soul
                sing. This isn't just about logistics—it's about understanding the essence of who you are as individuals
                and as a couple. We'll discuss your style preferences, must-have moments, and any special traditions
                that make your story unique.
              </p>
              <div className="text-sm text-gray-500 italic">
                Includes: Detailed consultation, location scouting, timeline planning, and style guide creation
              </div>
            </div>

            <div className="text-center space-y-6 group">
              <div className="text-8xl font-extralight text-gray-300 group-hover:text-gray-400 transition-colors">
                02
              </div>
              <h3 className="text-2xl font-medium tracking-wide">CREATE & CAPTURE</h3>
              <p className="text-gray-600 leading-relaxed">
                On your special day, I become part of your story while remaining beautifully invisible. Using only the
                finest film stocks—Kodak Portra for its dreamy skin tones, Fuji 400H for ethereal light, and Ilford HP5
                for timeless black and white moments. Every frame is shot with intention, every moment captured with the
                reverence it deserves.
              </p>
              <div className="text-sm text-gray-500 italic">
                Includes: Premium film stocks, professional lighting when needed, and real-time backup planning
              </div>
            </div>

            <div className="text-center space-y-6 group">
              <div className="text-8xl font-extralight text-gray-300 group-hover:text-gray-400 transition-colors">
                03
              </div>
              <h3 className="text-2xl font-medium tracking-wide">DEVELOP & DELIVER</h3>
              <p className="text-gray-600 leading-relaxed">
                Your precious film is hand-delivered to the finest lab in Los Angeles, where master technicians develop
                each roll with museum-quality care. I personally review every single frame, carefully selecting and
                editing your final gallery. You'll receive both high-resolution digital files and archival prints that
                will last centuries.
              </p>
              <div className="text-sm text-gray-500 italic">
                Includes: Professional lab processing, expert color correction, digital gallery, and print options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-6 uppercase">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Each service is crafted to honor the unique beauty of your story, captured on the finest film stocks with
              decades of expertise behind every frame.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-2xl font-light mb-4 tracking-wide">Wedding Photography</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your wedding day deserves the timeless elegance of film. From intimate elopements to grand
                  celebrations, I document every precious moment with the artistry and intention that only analog
                  photography can provide.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Full day coverage (8-12 hours)</li>
                  <li>• Complimentary engagement session</li>
                  <li>• 12-20 rolls of premium film stock</li>
                  <li>• Professional lab development</li>
                  <li>• Curated digital gallery (300-500 images)</li>
                  <li>• Print release and archival options</li>
                  <li>• Second shooter available</li>
                </ul>
              </div>

              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-2xl font-light mb-4 tracking-wide">Portrait Sessions</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Whether celebrating an engagement, anniversary, or simply the beauty of being alive, portrait sessions
                  on film capture the essence of who you are in this moment of your story.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 2-3 hour session</li>
                  <li>• Location consultation and scouting</li>
                  <li>• 4-6 rolls of film</li>
                  <li>• Professional development and scanning</li>
                  <li>• 75-100 edited images</li>
                  <li>• Print release included</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4 tracking-wide">Editorial & Commercial</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bringing the distinctive aesthetic of film to fashion, lifestyle, and commercial projects. Perfect for
                  brands seeking authentic, timeless imagery that stands apart from digital uniformity.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Custom project consultation</li>
                  <li>• Creative direction and styling support</li>
                  <li>• Premium film stock selection</li>
                  <li>• Professional team coordination</li>
                  <li>• Full usage rights included</li>
                  <li>• Rush processing available</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-2xl font-light mb-4 tracking-wide">Destination Weddings</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  From the rolling hills of Tuscany to the beaches of Tulum, I travel worldwide to document your love
                  story against the backdrop of your dreams. Film photography and destination weddings are a match made
                  in heaven.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Worldwide travel included</li>
                  <li>• Multi-day coverage options</li>
                  <li>• Local vendor coordination</li>
                  <li>• Cultural ceremony expertise</li>
                  <li>• Extended film stock allowance</li>
                  <li>• Rush international shipping</li>
                </ul>
              </div>

              <div className="border-b border-gray-800 pb-8">
                <h3 className="text-2xl font-light mb-4 tracking-wide">Film Processing & Workshops</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Share the magic of film photography through hands-on workshops and professional processing services
                  for fellow photographers seeking to master the analog craft.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Private and group workshops</li>
                  <li>• Film stock consultation</li>
                  <li>• Professional lab partnerships</li>
                  <li>• Technique masterclasses</li>
                  <li>• Business mentoring for film photographers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4 tracking-wide">Heirloom Albums & Prints</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Transform your digital gallery into tangible treasures with museum-quality prints and handcrafted
                  albums designed to last generations.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Archival quality papers and inks</li>
                  <li>• Custom album design</li>
                  <li>• Fine art print options</li>
                  <li>• Framing consultation</li>
                  <li>• Gift print packages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-32 px-6 bg-amber-50 text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-6 uppercase">Investment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Film photography is an investment in memories that will last lifetimes. Each package includes premium film
              stocks, professional lab development, expert editing, and archival-quality deliverables that honor the
              significance of your story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-200 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium tracking-wide">Portrait Experience</h3>
                <div className="text-4xl font-light text-gray-800">$1,200</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Starting Investment</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium mb-2">What's Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pre-session consultation & planning</li>
                    <li>• 2-3 hour photography session</li>
                    <li>• 4-6 rolls of premium film stock</li>
                    <li>• Professional lab development</li>
                    <li>• Expert color correction & editing</li>
                    <li>• 75-100 high-resolution digital images</li>
                    <li>• Online gallery with download access</li>
                    <li>• Print release for personal use</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 italic">
                  Perfect for engagements, anniversaries, families, and personal branding
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-sm shadow-2xl border-2 border-gray-800 text-center space-y-6 transform scale-105">
              <div className="space-y-2">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Most Popular</div>
                <h3 className="text-2xl font-medium tracking-wide">Wedding Collection</h3>
                <div className="text-4xl font-light">$4,800</div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Complete Experience</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-medium mb-2 text-white">What's Included:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Complimentary engagement session</li>
                    <li>• 8-10 hours wedding day coverage</li>
                    <li>• 15-20 rolls of premium film stock</li>
                    <li>• Professional lab development</li>
                    <li>• Master-level color correction</li>
                    <li>• 400-600 curated digital images</li>
                    <li>• Private online gallery</li>
                    <li>• USB drive with full resolution files</li>
                    <li>• Print release & archival guidance</li>
                    <li>• Timeline planning & vendor coordination</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 italic">Includes travel within 100 miles of Los Angeles</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg border border-gray-200 text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium tracking-wide">Elopement Package</h3>
                <div className="text-4xl font-light text-gray-800">$2,800</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Intimate Celebration</p>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium mb-2">What's Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pre-elopement consultation</li>
                    <li>• 4-6 hours of coverage</li>
                    <li>• 8-12 rolls of premium film</li>
                    <li>• Professional development & scanning</li>
                    <li>• Expert editing & color correction</li>
                    <li>• 200-300 digital images</li>
                    <li>• Online gallery with sharing options</li>
                    <li>• Print release included</li>
                    <li>• Location scouting assistance</li>
                  </ul>
                </div>
                <div className="text-xs text-gray-500 italic">Perfect for intimate ceremonies up to 20 guests</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="text-2xl font-light mb-6 text-center tracking-wide">Add-On Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Second Photographer</span>
                  <span className="text-gray-600">+$800</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Additional Hour of Coverage</span>
                  <span className="text-gray-600">+$400</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Rush Processing (48 hours)</span>
                  <span className="text-gray-600">+$300</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Travel (per day beyond 100 miles)</span>
                  <span className="text-gray-600">+$500</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Custom Album Design</span>
                  <span className="text-gray-600">$800-2,400</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Fine Art Print Package</span>
                  <span className="text-gray-600">$400-1,200</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Film Photography Workshop</span>
                  <span className="text-gray-600">$600</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">International Travel</span>
                  <span className="text-gray-600">Custom Quote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.1em] mb-6 uppercase">Kind Words</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              The greatest honor is being trusted with your most precious moments. Here's what couples have shared about
              their experience working with Superlove Film.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <div className="text-6xl text-gray-600 font-serif">"</div>
              <p className="text-lg text-gray-300 leading-relaxed italic -mt-8">
                Alma captured our wedding day in a way that felt like poetry in motion. Every single image tells a
                story, and the film quality gives them a timeless feel that digital just can't match. When we look at
                our photos, we don't just see what happened—we feel transported back to that exact moment, with all the
                emotions and energy intact. These aren't just photographs; they're heirlooms.
              </p>
              <div className="pt-4">
                <p className="text-white font-medium tracking-wide">Emma & James Richardson</p>
                <p className="text-gray-400 text-sm">Malibu Wedding, September 2024</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-6xl text-gray-600 font-serif">"</div>
              <p className="text-lg text-gray-300 leading-relaxed italic -mt-8">
                The way Alma sees light and emotion is truly magical. Our engagement photos feel like they belong in a
                gallery, but they're also deeply personal and authentic to who we are as a couple. She has this
                incredible ability to make you forget the camera is there, which results in the most genuine, beautiful
                images. The film grain adds such character—these photos will be treasured for generations.
              </p>
              <div className="pt-4">
                <p className="text-white font-medium tracking-wide">Maria & David Chen</p>
                <p className="text-gray-400 text-sm">Big Sur Engagement, October 2024</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <p className="text-gray-300 italic leading-relaxed">
                "Working with Alma was like having a friend document our day. She captured moments we didn't even know
                were happening. The film quality is unmatched."
              </p>
              <div>
                <p className="text-white text-sm font-medium">Sarah & Michael Torres</p>
                <p className="text-gray-500 text-xs">Napa Valley, 2024</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-300 italic leading-relaxed">
                "Every single frame is a work of art. Alma's eye for composition and her mastery of film photography
                created images that take our breath away every time we look at them."
              </p>
              <div>
                <p className="text-white text-sm font-medium">Jessica & Ryan Park</p>
                <p className="text-gray-500 text-xs">Joshua Tree, 2024</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-300 italic leading-relaxed">
                "The investment in film photography was the best decision we made for our wedding. These images will
                never go out of style, and the quality is something we'll treasure forever."
              </p>
              <div>
                <p className="text-white text-sm font-medium">Amanda & Chris Johnson</p>
                <p className="text-gray-500 text-xs">Carmel-by-the-Sea, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light tracking-[0.1em] mb-12 uppercase">As Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center space-y-2">
              <div className="text-lg font-light tracking-wider">MAGNOLIA ROUGE</div>
              <div className="text-xs text-gray-500">Editorial Feature, 2024</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-light tracking-wider">GREEN WEDDING SHOES</div>
              <div className="text-xs text-gray-500">Real Wedding Feature</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-light tracking-wider">STYLE ME PRETTY</div>
              <div className="text-xs text-gray-500">Vendor Spotlight</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-lg font-light tracking-wider">THE KNOT</div>
              <div className="text-xs text-gray-500">Pro Photographer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-amber-50 text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-light tracking-[0.05em] leading-tight">
                FIND ME
                <br />
                ELSEWHERE
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg tracking-wide">EMAIL</h3>
                  <p className="text-gray-700">hello@superlovefilm.com</p>
                  <p className="text-sm text-gray-500">I personally respond to every inquiry within 24 hours</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg tracking-wide">INSTAGRAM</h3>
                  <p className="text-gray-700">@superlovefilm</p>
                  <p className="text-sm text-gray-500">Daily inspiration and behind-the-scenes moments</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg tracking-wide">BASED IN</h3>
                  <p className="text-gray-700">Los Angeles, California</p>
                  <p className="text-sm text-gray-500">Available for travel worldwide</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium text-lg tracking-wide">STUDIO VISITS</h3>
                  <p className="text-gray-700">By appointment in West Hollywood</p>
                  <p className="text-sm text-gray-500">View sample albums and discuss your vision in person</p>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors"
                >
                  Start Your Story →
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-6 tracking-wide">COMPREHENSIVE SERVICES</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p>• Wedding Photography</p>
                    <p>• Engagement Sessions</p>
                    <p>• Elopement Packages</p>
                    <p>• Portrait Photography</p>
                    <p>• Maternity & Newborn</p>
                    <p>• Family Sessions</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Editorial & Fashion</p>
                    <p>• Commercial Projects</p>
                    <p>• Film Processing</p>
                    <p>• Photography Workshops</p>
                    <p>• Mentoring Programs</p>
                    <p>• Print & Album Design</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 tracking-wide">RECOGNITION & AWARDS</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>The Knot Best of Weddings</span>
                    <span>2022, 2023, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WeddingWire Couples' Choice</span>
                    <span>2023, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fearless Photographers Member</span>
                    <span>Since 2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Film Photography Podcast Guest</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 tracking-wide">RECENT DESTINATIONS</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Tuscany, Italy • Santorini, Greece • Tulum, Mexico</p>
                  <p>• Big Sur, California • Jackson Hole, Wyoming</p>
                  <p>• Martha's Vineyard • Napa Valley • Joshua Tree</p>
                  <p>• Paris, France • Banff, Canada • Maui, Hawaii</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <nav className="mb-8">
              <div className="flex flex-wrap justify-center gap-8 text-sm tracking-[0.2em] uppercase">
                <Link href="/about" className="hover:text-gray-400 transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="hover:text-gray-400 transition-colors">
                  Portfolio
                </Link>
                <Link href="/services" className="hover:text-gray-400 transition-colors">
                  Services
                </Link>
                <Link href="/investment" className="hover:text-gray-400 transition-colors">
                  Investment
                </Link>
                <Link href="/process" className="hover:text-gray-400 transition-colors">
                  Process
                </Link>
                <Link href="/contact" className="hover:text-gray-400 transition-colors">
                  Inquire →
                </Link>
              </div>
            </nav>
          </div>

          <div className="border-t border-gray-800 pt-12 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-light tracking-[0.1em] mb-4">SUPERLOVE FILM</h3>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Crafting timeless memories through the art of film photography. For humans craving authentic moments
                that stand the test of time.
              </p>
            </div>

            <div className="text-xs text-gray-500 space-y-2">
              <p>© 2024 Superlove Film Photography. All rights reserved.</p>
              <p>Licensed and insured professional photographer serving worldwide.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-gray-400 transition-colors">
                  Terms of Service
                </Link>
                <span>•</span>
                <Link href="/copyright" className="hover:text-gray-400 transition-colors">
                  Copyright Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
