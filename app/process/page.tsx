"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ProcessPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [selectedStone, setSelectedStone] = useState(null)
  const [polishSlider, setPolishSlider] = useState(50)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stones = [
    { name: "Diamond", clarity: "VVS1", origin: "Botswana", image: "/placeholder.svg?height=200&width=200" },
    { name: "Ruby", clarity: "AAA", origin: "Myanmar", image: "/placeholder.svg?height=200&width=200" },
    { name: "Emerald", clarity: "VS", origin: "Colombia", image: "/placeholder.svg?height=200&width=200" },
    { name: "Sapphire", clarity: "VVS", origin: "Kashmir", image: "/placeholder.svg?height=200&width=200" },
    { name: "Pearl", clarity: "AAA+", origin: "Tahiti", image: "/placeholder.svg?height=200&width=200" },
    { name: "Tanzanite", clarity: "VS1", origin: "Tanzania", image: "/placeholder.svg?height=200&width=200" },
    { name: "Opal", clarity: "Premium", origin: "Australia", image: "/placeholder.svg?height=200&width=200" },
    { name: "Tourmaline", clarity: "VVS", origin: "Brazil", image: "/placeholder.svg?height=200&width=200" },
    { name: "Garnet", clarity: "AAA", origin: "Madagascar", image: "/placeholder.svg?height=200&width=200" },
  ]

  const qualityChecks = [
    { icon: "🔍", step: "Structural Integrity", description: "Testing clasp strength and durability" },
    { icon: "✨", step: "Polish Uniformity", description: "Ensuring consistent shine across all surfaces" },
    { icon: "💎", step: "Stone Alignment", description: "Verifying perfect positioning and security" },
    { icon: "🔬", step: "Magnification Check", description: "Detecting invisible flaws under 10x magnification" },
    { icon: "📋", step: "Client Specifications", description: "Final inspection against custom requirements" },
  ]

  const timelineSteps = [
    { name: "Design Brief", duration: "1-2 days", color: "bg-blue-500" },
    { name: "CAD & 3D Print", duration: "2-3 days", color: "bg-purple-500" },
    { name: "Stone Selection", duration: "1 day", color: "bg-yellow-500" },
    { name: "Ghat Casting", duration: "1-2 days", color: "bg-red-500" },
    { name: "Assembly & Jadai", duration: "2-3 days", color: "bg-green-500" },
    { name: "Meenakari", duration: "3-4 days", color: "bg-pink-500" },
    { name: "Polishing", duration: "1 day", color: "bg-indigo-500" },
    { name: "Quality Check", duration: "1 day", color: "bg-gray-500" },
    { name: "Packaging", duration: "1 day", color: "bg-amber-500" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Manufacturing process overview"
            fill
            className="object-cover"
            priority
          />
        </video>

        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-5xl px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">From Vision to Reality</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Every piece tells a story of transformation. From the first sketch to the final polish, witness the journey
            that turns inspiration into heirloom.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
              onClick={() => document.getElementById("step-1")?.scrollIntoView({ behavior: "smooth" })}
            >
              Begin the Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Step 1: Design Brief & Sketching - Notebook Style */}
      <section id="step-1" className="py-40 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Step 1</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Design Brief & Sketching</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every masterpiece begins with a conversation. Your vision, our interpretation, captured in lines and
              curves.
            </p>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div className="relative">
            <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
              <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Initial sketch"
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl mb-2">Initial Concept</h3>
                <p className="text-gray-600 text-sm">First rough sketches capturing the essence of your vision</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mood board"
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl mb-2">Mood Board</h3>
                <p className="text-gray-600 text-sm">
                  Color palettes, textures, and inspirations that guide the design
                </p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Detailed sketch"
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl mb-2">Refined Sketch</h3>
                <p className="text-gray-600 text-sm">Detailed drawings with measurements and specifications</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="3D visualization"
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-serif text-xl mb-2">Early 3D Preview</h3>
                <p className="text-gray-600 text-sm">First digital visualization of the concept</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <blockquote className="text-xl font-serif italic text-gray-700">
              "Every line drawn is a promise kept, every curve a story told."
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">— Design Team Lead</cite>
          </div>
        </div>
      </section>

      {/* Step 2: CAD & 3D Printing - Split Screen with Vertical Reveal */}
      <section className="py-40 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-blue-400 tracking-wide uppercase">Step 2</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8">CAD & 3D Printing</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Where art meets precision. Digital blueprints transform sketches into tangible prototypes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-serif mb-4">From Sketch to Digital</h3>
                <p className="text-gray-300 mb-6">
                  Our CAD specialists translate hand-drawn concepts into precise 3D models, ensuring every detail is
                  captured with mathematical accuracy.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Hand sketch"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-serif mb-4">Precision Modeling</h3>
                <p className="text-gray-200 mb-6">
                  Advanced CAD software creates detailed 3D models with exact measurements, stone settings, and
                  structural integrity calculations.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="CAD model"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-serif mb-4">3D Prototype</h3>
                <p className="text-gray-300 mb-6">
                  High-resolution 3D printing creates physical prototypes for testing fit, feel, and final approval
                  before casting.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="3D printed prototype"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Stone Selection - Grid Layout with Magnified Interactions */}
      <section className="py-40 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">Step 3</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Stone Selection</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each gemstone tells its own story. We source only the finest, ensuring every piece meets our exacting
              standards.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-16">
            {stones.map((stone, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedStone === index ? "ring-4 ring-amber-400 scale-105" : ""
                }`}
                onClick={() => setSelectedStone(selectedStone === index ? null : index)}
              >
                <CardContent className="p-0">
                  <Image
                    src={stone.image || "/placeholder.svg"}
                    alt={stone.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold">{stone.name}</h3>
                    <p className="text-sm text-gray-600">Clarity: {stone.clarity}</p>
                    <p className="text-sm text-gray-600">Origin: {stone.origin}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedStone !== null && (
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src={stones[selectedStone].image || "/placeholder.svg"}
                    alt={stones[selectedStone].name}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-4">{stones[selectedStone].name}</h3>
                  <div className="space-y-3">
                    <p>
                      <strong>Clarity:</strong> {stones[selectedStone].clarity}
                    </p>
                    <p>
                      <strong>Origin:</strong> {stones[selectedStone].origin}
                    </p>
                    <p>
                      <strong>Cut:</strong> Precision cut for maximum brilliance
                    </p>
                    <p>
                      <strong>Certification:</strong> GIA certified with full documentation
                    </p>
                  </div>
                  <p className="text-gray-600 mt-6">
                    Each stone is hand-selected by our gemologists, ensuring exceptional quality and ethical sourcing.
                    We maintain relationships with trusted suppliers worldwide to bring you the finest specimens.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Step 4: Ghat (Casting) - Vertical Cinematic Scroll */}
      <section className="py-40 bg-gradient-to-b from-red-900 to-orange-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-orange-400 tracking-wide uppercase">Step 4</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8">Ghat - The Art of Casting</h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Fire transforms metal into form. Ancient techniques meet modern precision in the sacred art of casting.
            </p>
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Molten metal pouring"
                width={800}
                height={400}
                className="rounded-lg mx-auto mb-8"
              />
              <h3 className="text-2xl font-serif mb-4">Molten Transformation</h3>
              <p className="text-orange-200 max-w-2xl mx-auto">
                Precious metals heated to exact temperatures, poured with precision into investment molds created from
                our 3D prototypes.
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Tree formation"
                width={800}
                height={400}
                className="rounded-lg mx-auto mb-8"
              />
              <h3 className="text-2xl font-serif mb-4">Tree Formation</h3>
              <p className="text-orange-200 max-w-2xl mx-auto">
                Multiple pieces cast simultaneously on a tree structure, optimizing metal flow and ensuring consistent
                quality across the batch.
              </p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Mold breaking"
                width={800}
                height={400}
                className="rounded-lg mx-auto mb-8"
              />
              <h3 className="text-2xl font-serif mb-4">The Reveal</h3>
              <p className="text-orange-200 max-w-2xl mx-auto">
                Investment molds carefully broken away to reveal the raw cast pieces, ready for the next stage of
                refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Assembly & Jadai - Interactive Exploded View */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-green-600 tracking-wide uppercase">Step 5</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Assembly & Jadai</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Where structure meets soul. Precision stone setting and assembly bring the design to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-serif mb-4">Structural Assembly</h3>
                <p className="text-gray-700 mb-6">
                  Cast components are carefully assembled, ensuring perfect alignment and structural integrity. Each
                  joint is reinforced for lasting durability.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Precision fitting of all components</li>
                  <li>• Reinforcement of stress points</li>
                  <li>• Quality check at each assembly stage</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-serif mb-4">Jadai - Stone Setting</h3>
                <p className="text-gray-700 mb-6">
                  Our master stone setters employ traditional jadai techniques, securing each gemstone with invisible
                  precision that will last generations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Hand-selected setting techniques for each stone</li>
                  <li>• Microscopic precision in placement</li>
                  <li>• Security testing for every setting</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Exploded view of jewelry assembly"
                width={500}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Interactive Assembly View</p>
                <p className="text-xs opacity-80">Each component precisely positioned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 6: Meenakari - Art Gallery Wall */}
      <section className="py-40 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-pink-600 tracking-wide uppercase">Step 6</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Meenakari - The Art of Enamel</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ancient artistry meets contemporary design. Hand-applied enamel work that transforms metal into canvas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Enamel color preparation"
                width={250}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg mb-2">Color Preparation</h3>
                <p className="text-sm text-gray-600">Grinding and mixing traditional enamel powders</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Brush application"
                width={250}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg mb-2">Brush Application</h3>
                <p className="text-sm text-gray-600">Delicate brushwork applying enamel layers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Firing process"
                width={250}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg mb-2">Kiln Firing</h3>
                <p className="text-sm text-gray-600">High-temperature firing to fuse enamel to metal</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Final enamel work"
                width={250}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg mb-2">Finished Artwork</h3>
                <p className="text-sm text-gray-600">Completed meenakari ready for final assembly</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-xl font-serif italic text-gray-700 mb-4">
              "Each stroke of enamel is a brushstroke of heritage, painted with fire and patience."
            </blockquote>
            <cite className="text-sm text-gray-500">— Master Meenakari Artisan</cite>
          </div>
        </div>
      </section>

      {/* Step 7: Polishing & Finishing - Before & After Slider */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Step 7</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Polishing & Finishing</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The final transformation. From raw cast to mirror finish, revealing the true beauty within.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-serif mb-4">Before Polishing</h3>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Raw jewelry before polishing"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif mb-4">After Polishing</h3>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Polished jewelry"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Interactive Slider */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-full bg-white shadow-lg relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-serif text-lg mb-2">Initial Finishing</h3>
              <p className="text-sm text-gray-600">Removing casting marks and rough edges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-lg mb-2">Progressive Polishing</h3>
              <p className="text-sm text-gray-600">Multiple stages from coarse to mirror finish</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-serif text-lg mb-2">Final Inspection</h3>
              <p className="text-sm text-gray-600">Ensuring perfect finish on every surface</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 8: Quality Checks - Checklist Visual + Photo Grid */}
      <section className="py-40 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Step 8</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">Quality Assurance</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every piece undergoes rigorous inspection. Our commitment to perfection is non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif mb-8">Quality Checklist</h3>
              <div className="space-y-6">
                {qualityChecks.map((check, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl">{check.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{check.step}</h4>
                      <p className="text-sm text-gray-600">{check.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Quality inspector at work"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Magnification inspection"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Measurement verification"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Final approval"
                width={250}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 9: Packaging & Dispatch - Cinematic Storytelling */}
      <section className="py-40 bg-gradient-to-br from-amber-900 to-yellow-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-amber-400 tracking-wide uppercase">Step 9</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8">Packaging & Dispatch</h2>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              The final chapter of our story. Discreet packaging that protects your investment and maintains
              confidentiality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Protective packaging"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Protective Packaging</h3>
              <p className="text-amber-200 text-sm">Custom foam inserts and protective materials</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Confidential labeling"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Confidential Labeling</h3>
              <p className="text-amber-200 text-sm">Discreet packaging with no brand identification</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Secure dispatch"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-serif mb-2">Secure Dispatch</h3>
              <p className="text-amber-200 text-sm">Insured shipping with tracking and signature confirmation</p>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-xl font-serif italic mb-4">
              "Every package carries not just jewelry, but trust, discretion, and the promise of excellence."
            </blockquote>
            <cite className="text-sm text-amber-300">— Logistics Team</cite>
          </div>
        </div>
      </section>

      {/* Step 10: The Full Journey - Timeline Animation */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">The Complete Journey</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From concept to creation, every step is a testament to our commitment to excellence.
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold mb-4`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-sm font-semibold mb-1">{step.name}</h3>
                  <p className="text-xs text-gray-600">{step.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif mb-4">Ready to Create?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Let us transform your vision into reality. Every piece tells a story, and we're here to help you tell
              yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
