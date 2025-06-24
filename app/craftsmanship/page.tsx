"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CraftsmanshipPage() {
  const heritageSkills = [
    {
      name: "Meenakari",
      description: "Traditional enameling, hand-applied with patience and fire",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jadai",
      description: "Precision stone setting, secure and invisible",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ghat Making",
      description: "Building complex skeletal structures before a design takes shape",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Hand Engraving",
      description: "Touch-driven perfection in every detail",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const qualityChecks = [
    "Structural integrity & clasp testing",
    "Polishing uniformity check",
    "Stone alignment & tightness",
    "Invisible flaws under magnification",
    "Final client-specific inspection criteria",
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
            alt="Master artisan working on jewelry"
            fill
            className="object-cover"
            priority
          />
        </video>

        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
            Craftsmanship, In Its Purest Form.
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Every piece we create is shaped by skilled hands, guided by legacy, and perfected through discipline. It's
            not just jewelry — it's the fingerprint of craft.
          </p>
        </div>
      </section>

      {/* The Saanre Standard */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                Built With Intention. Backed by Generations.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-8">
                At Saanre, craftsmanship isn't just a department — it's our foundation. Every piece, from first wax to
                final polish, is shaped in-house by artisans whose expertise is rooted in traditional Indian techniques
                — yet sharpened by modern expectations.
              </p>
              <p className="text-base text-gray-700 leading-loose">
                We don't cut corners. We carve stories. Every design carries the quiet precision of hands trained to
                feel what machines cannot.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="/placeholder.svg?height=350&width=280"
                alt="Artisan engraving jewelry"
                width={280}
                height={350}
                className="rounded-lg object-cover"
              />
              <Image
                src="/placeholder.svg?height=350&width=280"
                alt="Designer sketching with tools"
                width={280}
                height={350}
                className="rounded-lg object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Techniques */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
              Preserving the Artistry of a Bygone Era.
            </h2>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-loose">
              Our team preserves rare jewelry techniques — passed down over generations — and adapts them for today's
              discerning clientele. Each style tells its own story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {heritageSkills.map((skill, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Image
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{skill.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-loose">
              These aren't just methods. They are disciplines — practiced, preserved, and protected inside our walls.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Quality inspection with loupe"
                width={600}
                height={500}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                Perfection Isn't a Phase. It's a Culture.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-8">
                We believe the pursuit of perfection lies in the process. Every piece is rigorously inspected at
                multiple touchpoints — by hand, loupe, and lens — to ensure flawless finish, symmetry, alignment, and
                durability.
              </p>

              <div className="mb-8">
                <h3 className="font-serif text-lg text-gray-900 mb-4">Our quality control process includes:</h3>
                <ul className="space-y-3">
                  {qualityChecks.map((check, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-base text-gray-700 leading-loose">
                Nothing leaves our floor unless it meets the mark — not just ours, but yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="py-40 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Trusted With More Than Jewelry.</h2>
              <p className="text-base leading-loose mb-8 text-gray-300">
                We handle more than products — we handle vision. That's why every project we undertake is treated with
                strict confidentiality. We work silently in the background of some of the finest names in jewelry
                retail, maintaining their trust through discretion, discipline, and complete non-disclosure.
              </p>
              <p className="text-base leading-loose text-gray-300">
                We don't publish collections. We don't copy ideas. We don't share samples. Your designs remain yours —
                always.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Secure storage and confidentiality"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Workshop overview"
              width={800}
              height={400}
              className="rounded-lg object-cover w-full max-w-4xl mx-auto mb-12"
            />
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
              Every detail tells a story. Every line reflects a decision.
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              This is not just manufacturing — it's mindful making.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/process">See How We Build Jewelry from the Ground Up</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-gray-900 font-light italic">
            "We don't just make jewelry. We make the piece that completes your vision."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
