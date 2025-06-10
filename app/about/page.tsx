"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function AboutPage() {
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
              className="text-xs md:text-sm font-light tracking-[0.2em] uppercase hover:text-gray-300 transition-colors border-b border-white pb-1"
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

      {/* Hero Section - ABOUT ALEXA */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left side - Text */}
          <div className="bg-black flex items-center justify-center p-8 lg:p-16">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.05em] leading-[0.9]">
                ABOUT
                <br />
                <span className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">ALEXA</span>
              </h1>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-64 lg:h-full">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1f315059-74b5-4aa7-9783-e3b660d0d593/superlove-branding--1.jpg?format=2500w"
              alt="Alexa standing on a cliff overlooking dramatic landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Bio Section - HI BABE */}
      <section className="py-24 lg:py-32 px-6 bg-amber-50 text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.05em] mb-8">HI BABE</h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800">
              <p>
                I'm Alexa, and I've been chasing light and capturing souls for over a decade. What started as a college
                photography class turned into an obsession with the magic that happens when film meets light, when
                authentic moments unfold naturally, and when two people are so lost in each other that they forget the
                camera exists.
              </p>
              <p>
                My journey began in the mountains of Colorado, where I first fell in love with the way golden hour light
                dances across faces and landscapes alike. There's something about film that digital just can't
                replicate—the grain tells stories, the colors breathe with life, and every single frame carries the
                weight of intention because you can't just delete and try again.
              </p>
              <p>
                When I'm not behind the camera, you'll find me hiking with my partner Alex, experimenting with new film
                stocks in my darkroom, or curled up with a good book and way too much coffee. I believe that to capture
                authentic moments, you must first live authentically yourself—which means embracing the messy,
                beautiful, imperfect reality of being human.
              </p>
              <p>
                My approach is simple: be present, be patient, and let your story unfold naturally. I'm not here to
                direct your day or pose you into perfection—I'm here to witness the magic that already exists between
                you and transform it into something that will make your heart skip a beat for generations to come.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/50cd41ed-e70f-481a-a5ff-232a6bdd584e/Screen+Shot+2024-10-21+at+3.27.19+PM.jpg?format=2500w"
                alt="Alexa in her element, camera in hand, natural light"
                width={560}
                height={700}
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dual Profile Section - ALEXA & ALEX */}
      <section className="py-24 lg:py-32 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Alexa Profile */}
            <div className="space-y-8">
              <div className="aspect-[3/4] relative mb-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/6248d566-392a-442e-801b-b0d70683835f/AC_1601_Ilford+XP2_020026-R1-029-13.jpg?format=2500w"
                  alt="Portrait of Alexa with film camera"
                  width={450}
                  height={600}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-extralight tracking-[0.05em]">ALEXA</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg font-medium text-black">Lead Photographer & Creative Visionary</p>
                  <p>
                    Born and raised in the Pacific Northwest, I've always been drawn to the moody, ethereal quality of
                    overcast skies and misty mornings. This aesthetic deeply influences my work—I seek out those quiet,
                    contemplative moments that speak to the soul and reveal the poetry in everyday life.
                  </p>
                  <p>
                    My technical expertise spans over 20 different film stocks, from the dreamy pastels of Kodak Portra
                    400 to the rich, dramatic tones of Ilford HP5 Plus. I believe that choosing the right film is like
                    choosing the right words for a poem—each has its own voice, character, and emotional resonance.
                  </p>
                  <p>
                    Beyond weddings, I'm passionate about teaching the art of film photography through workshops and
                    mentoring programs. There's something magical about watching someone fall in love with the analog
                    process for the first time—the anticipation, the intentionality, the beautiful unpredictability of
                    it all.
                  </p>
                  <p>
                    When I'm not photographing love stories, you'll find me exploring remote hiking trails, collecting
                    vintage cameras, or experimenting with alternative developing techniques in my home darkroom.
                  </p>
                </div>
              </div>
            </div>

            {/* Alex Profile */}
            <div className="space-y-8">
              <div className="aspect-[3/4] relative mb-8">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1bd00c55-0634-479d-a66e-eab142874471/000016080002.jpg?format=2500w"
                  alt="Portrait of Alex with documentary style"
                  width={450}
                  height={600}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl md:text-5xl font-extralight tracking-[0.05em]">ALEX</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg font-medium text-black">Documentary Photographer & Storytelling Specialist</p>
                  <p>
                    While Alexa captures the poetry, I focus on the raw, unguarded moments that happen in between the
                    planned shots. My background in photojournalism brings a documentary edge to our collaborative work,
                    ensuring that no precious moment—no matter how fleeting—goes unnoticed or uncaptured.
                  </p>
                  <p>
                    I specialize in capturing the energy and authentic emotion of celebrations—the tears during vows,
                    the explosive laughter during toasts, the quiet conversations between generations, the spontaneous
                    dance floor moments that become family legends. My goal is to be invisible while being everywhere at
                    once.
                  </p>
                  <p>
                    My approach is rooted in patience and observation. I study the rhythm of your day, learn the
                    dynamics of your family, and position myself to capture those split-second expressions that reveal
                    the true depth of connection and joy.
                  </p>
                  <p>
                    Together, Alexa and I create a comprehensive visual narrative that honors both the grand, sweeping
                    moments and the intimate, quiet details. We work in perfect harmony, anticipating each other's
                    movements and ensuring complete, seamless coverage of your celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-16">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.05em] leading-[0.85]">
                VALUES
              </h2>

              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">AUTHENTICITY</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    We believe in capturing real moments, real emotions, and real connections. No forced poses, no
                    artificial scenarios—just the beautiful, messy, perfect truth of who you are and how you love. Every
                    image should feel like a genuine reflection of your story.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">ARTISTRY</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Every frame is composed with intention, every moment captured with artistic vision and technical
                    mastery. We don't just document events—we create visual heirlooms that will be treasured and admired
                    for generations, growing more precious with time.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">INTENTIONALITY</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Film photography demands presence, patience, and purpose. Every click of the shutter is deliberate,
                    every frame precious and irreplaceable. This mindfulness creates images with soul, substance, and
                    emotional depth that transcends mere documentation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide">TIMELESSNESS</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    While trends come and go, true beauty endures forever. We create images that will feel as relevant,
                    moving, and breathtaking in 50 years as they do today—classic, elegant, and eternally beautiful.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/f81cf698-98dd-404d-92d7-273060128732/Alexa+Alex+Home-253.jpg?format=2500w"
                  alt="Film photography process - hands developing film"
                  width={450}
                  height={600}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square relative">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/a767f6b3-30c7-4c2c-b6ce-8fa60f4ab00c/Credit+-+Oli+Sansom%2FBriars+Atlas?format=1500w"
                    alt="Vintage camera collection on wooden table"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="aspect-square relative">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1dfa5b08-9918-434f-8d41-e04957b4f4bb/000056.jpg?format=750w"
                    alt="Film strips hanging in darkroom"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Life Section */}
      <section className="py-24 lg:py-32 px-6 bg-amber-50 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.05em] mb-8">OUR LIFE</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
              When we're not capturing your stories, we're living our own. Here's a glimpse into the adventures, quiet
              moments, creative processes, and everyday magic that inspire our work and fuel our passion for authentic
              storytelling through the timeless medium of film.
            </p>
          </div>

          {/* Masonry-style Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {/* Row 1 */}
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/1737501034997-F5IQKTG1B1TEUPKSZ5XH/Feb24_EileanStark_-74.jpg?format=2500w"
                alt="Mountain hiking adventure with backpacks"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/3be5d983-7ff0-4062-b857-3f2fc22396f2/Screen+Shot+2025-01-27+at+10.30.32+AM.png?format=2500w"
                alt="Morning coffee and film rolls on table"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[4/3]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/bcce50bf-1da4-460d-88a6-e47f8c2e5f59/AC_5764_Superia+400_022741-R1-049-23-1.jpg?format=2500w"
                alt="Travel photography in foreign city"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/6cd64c53-6b4f-4ea1-86ec-460fd00f4a8e/AC_0541_Cinestill+400D_114111-R1-E009-1.jpg?format=1000w"
                alt="Behind the scenes at wedding"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/ad59ae68-6388-4cbd-9e22-2b884138c8b5/Credit+-+Oli+Sansom%2FBriars+Atlas?format=1000w"
                alt="Vintage camera on wooden surface"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="col-span-2 aspect-[2/1]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/a0a532fa-98e6-4b3f-bcf1-24f0de09d22a/AC_1005_Kodak+200_112393-R1-046-21A-1.jpg?format=750w"
                alt="Landscape photography during golden hour"
                width={600}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/c255550f-0565-4bf7-96fb-54ae51b82132/AC_2970_Portra+400_113864-R1-073-35-1.jpg?format=1000w"
                alt="Darkroom development process"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/d27083f1-b3cc-43de-b186-485c8af3d2b2/Credit+-+Oli+Sansom%2FBriars+Atlas?format=1500w"
                alt="Film photography workshop teaching"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[4/3]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/637fab8f-146a-4543-a954-7ae00c98d365/Credit+-+Oli+Sansom%2FBriars+Atlas?format=1500w"
                alt="Travel moments in nature"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Row 3 */}
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/c78e59ba-2544-4e77-938d-2a79694451f7/AC_5599_Ilford+XP2_030859-R1-012-4A-1.jpg?format=750w"
                alt="Studio workspace with film equipment"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/c150e1bc-a6ee-42a6-a5c3-c513423498bc/000074020014-1.jpg?format=1500w"
                alt="Personal portrait session outdoors"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-2 aspect-[2/1]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/6f6e59e9-21fd-4366-8e20-b3dc85e8d454/AC_5593_Fuji+400_116564-R1-034-15A.jpg?format=1500w"
                alt="Road trip adventure with vintage car"
                width={600}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/ec8adc52-47cf-47cf-ae20-595068be6ae3/Alexa+Alex+Two-335_websize.jpg?format=750w"
                alt="Creative process and inspiration"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Row 4 */}
            <div className="col-span-1 aspect-[4/3]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/27aaba6c-16a0-41a1-8a26-a9d030f6b91d/NorthSkyeHouse_-31.jpg?format=750w"
                alt="Everyday moments at home"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/7d6f9c65-d1c3-44c0-b07a-ee06fa421b45/Screen+Shot+2025-01-27+at+10.32.32+AM.png?format=2500w"
                alt="Film photography gear collection"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/9d669082-5b15-45ff-889f-e6e5aff7212e/000074030034-1.jpg?format=2500w"
                alt="Adventure photography in mountains"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-2 aspect-[2/1]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/50a463da-f299-4c0f-8ad7-da1345260e35/70420038_websize.jpg?format=2500w"
                alt="Sunset photography session by ocean"
                width={600}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Row 5 */}
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/e89383d6-b037-48c1-b3e0-c59d0ae8dff6/70420011_websize+%281%29.jpg?format=1500w"
                alt="Personal projects and artistic exploration"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/6f830eb8-5902-475b-8d15-d84aa25d363f/IMG_0735.jpg?format=2500w"
                alt="Quiet moments of reflection"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[4/3]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/47168120-2a40-4185-9985-f18db8b9072e/Credit+-+Oli+Sansom%2FBriars+Atlas?format=2500w"
                alt="Life behind the camera"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/cf4e337e-e6d9-49ee-a1ca-a4a835816a74/AC_5597_Fuji+400_116566-R1-076-36A.jpg?format=750w"
                alt="Travel photography adventures"
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
            <div className="col-span-1 aspect-square">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6536d7241d25f545badd3b3f/e4abdefd-6a56-4c4e-9090-902c1fbfff83/000074020070-1.jpg?format=750w"
                alt="Creative inspiration and process"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-8 text-sm tracking-[0.2em] uppercase">
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="hover:text-gray-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/pricing" className="hover:text-gray-400 transition-colors">
                Pricing & Process
              </Link>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">
                Inquire →
              </Link>
            </div>
          </nav>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light tracking-[0.1em] mb-4">SUPERLOVE FILM</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting timeless memories through the art of film photography. For humans craving authentic moments that
              stand the test of time.
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
      </footer>
    </div>
  )
}
