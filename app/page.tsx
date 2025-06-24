"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function SaanreHome() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const processSteps = [
    { name: "Stone Selection" },
    { name: "CAD Design" },
    { name: "3D Printing" },
    { name: "Ghat" },
    { name: "Polish" },
    { name: "Stone Setting" },
    { name: "Meenakari" },
    { name: "Quality Check" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          <source src="https://www.artistryinc.in/assets/videos/header-bg.webm" type="video/webm" />
          {/* Fallback image for browsers that don't support video */}
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Artisan crafting jewelry"
            fill
            className="object-cover"
            priority
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="grid grid-cols-2">
          <div className="relative z-20 text-white max-w-6xl px-6">
            <div className="relative">
              <h1 className="font-black uppercase tracking-[0.2em] leading-none text-left md:text-4xl text-2xl">
                BESPOKE JEWELRY
              </h1>
              <p className="absolute top-8 right-0 md:text-4xl font-serif italic text-amber-400 tracking-wide text-lg">
                Thoughtfully Made
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The House of Saanre */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 leading-tight">
                Crafted In-House. Tailored For You.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-16">
                At Saanre, we partner exclusively with select retailers and private labels to bring jewelry concepts to
                life. Every piece is designed, developed, and perfected under one roof — from stone sourcing to the
                final polish. With a deep respect for confidentiality and heritage, our process is rooted in precision
                and fueled by imagination.
              </p>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                <Link href="/about">Meet Our Founder</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="https://i.ibb.co/bjGp3bBP/Screenshot-2025-06-23-at-11-24-54-PM.png"
                alt="Elegant jewelry model"
                width={400}
                height={450}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://i.ibb.co/YBYQZPB5/Screenshot-2025-06-23-at-11-36-02-PM.png"
                alt="Artisan inspecting gemstone"
                width={400}
                height={450}
                className="rounded-lg object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-28">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 leading-tight">Jewelry Is a Journey</h2>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-loose">
              We don't just manufacture — we transform. At Saanre, every creation passes through an intricate series of
              steps: stone selection, CAD design, 3D printing, ghat, polish, stone setting, meenakari, and quality check
              — all executed in-house. Each phase is intentional, secure, and tailored to your vision.
            </p>
          </div>

          <div className="text-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/process">Explore the Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Designing Bespoke */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Jewelry sketch"
                width={200}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Digital render"
                width={200}
                height={250}
                className="rounded-lg object-cover mt-8"
              />
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Wax mold"
                width={200}
                height={250}
                className="rounded-lg object-cover -mt-8"
              />
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Final product"
                width={200}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 leading-tight">
                Every Sketch, Every Curve, Yours.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-12">
                Whether you bring us a sketch, a moodboard, or a single idea — our design team translates it into
                tangible form. We specialize in transforming abstract inspirations into finished, wearable masterpieces
                tailored to your collection's story.
              </p>
              <div className="text-gray-700">Custom Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Heritage */}
      <section id="craftsmanship" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 leading-tight">
                Where Machines Assist, But Hands Define.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-16">
                Our heritage lies in the finesse of our craftsmen — those who master meenakari, jadai, engraving, and
                precision stone setting. Each piece passes through trained hands and critical eyes, reflecting
                techniques honed over generations.
              </p>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                <Link href="/craftsmanship">View Craftsmanship</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Meenakari enamel work"
                width={250}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Goldsmith at work"
                width={250}
                height={300}
                className="rounded-lg object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality & Trust */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 leading-tight">
            Confidential by Nature. Trusted by Design.
          </h2>
          <p className="text-lg leading-loose max-w-3xl mx-auto mb-16">
            We work behind the scenes with some of the most respected names in jewelry retail. Our reputation is built
            not just on quality — but on our ability to safeguard every design, every brief, and every conversation.
          </p>
          <div className="inline-block bg-gray-800/30 px-6 py-3 rounded-lg">
            <p className="text-gray-400 font-light">Private labels trust us for a reason.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12 leading-tight">
            Saanre is more than a manufacturer — we are your creative partner.
          </h2>
          <p className="text-base text-gray-700 mb-24 max-w-2xl mx-auto leading-loose">
            Discover our process, our values, and how we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/about">About Us</Link>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3">
              <Link href="/craftsmanship">Craftsmanship</Link>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3">
              <Link href="/contact">Begin a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
