"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  const advantages = [
    {
      feature: "Bespoke Only",
      meaning: "No repeats. Every design is built from your brief.",
    },
    {
      feature: "In-House Manufacturing",
      meaning: "From casting to setting — no outsourcing.",
    },
    {
      feature: "Confidentiality First",
      meaning: "Strict NDAs. No reuse. No leaks. Ever.",
    },
    {
      feature: "Heritage Techniques",
      meaning: "Meenakari, Jadai, Ghat — passed down generations.",
    },
    {
      feature: "Design-to-Delivery Control",
      meaning: "Smooth, timeline-focused processes.",
    },
    {
      feature: "Mid-Large Retail Expertise",
      meaning: "We understand scale and subtlety.",
    },
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
            alt="Founder walking through workshop"
            fill
            className="object-cover"
            priority
          />
        </video>

        <div className="absolute inset-0 bg-black/25 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
            Designing in Silence. Creating with Precision.
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            We are not in the spotlight — our pieces are. Behind every exquisite retail collection is a team that
            understands discretion, obsession, and design storytelling. Welcome to Saanre.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
                A Craftsman First. A Founder Forever.
              </h2>
              <p className="text-base text-gray-700 leading-loose mb-8">
                Saanre was born from a simple yet powerful belief: That true luxury lies not in logos, but in the way
                things are made.
              </p>
              <p className="text-base text-gray-700 leading-loose mb-8">
                Founded by Manish Soni, Saanre is built on deep industry knowledge, obsessive detail orientation, and an
                eye for what the modern B2B client truly values — integrity, customization, and quiet excellence.
              </p>
              <p className="text-base text-gray-700 leading-loose mb-12">
                Having worked closely with global retail brands and private labels, he understands what it takes to stay
                invisible while delivering brilliance. Saanre reflects his personal values: discretion, clarity of
                thought, and uncompromising quality.
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-6">
                <p className="text-lg font-serif text-gray-900 italic">
                  "I built Saanre not to be seen — but to be remembered by what we create."
                </p>
                <cite className="text-sm text-gray-600 mt-2 block">— Manish Soni, Founder</cite>
              </blockquote>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Manish Soni, Founder of Saanre"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Team reviewing designs"
                  width={250}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Artisan working under warm light"
                  width={250}
                  height={300}
                  className="rounded-lg object-cover mt-12"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">Why We Exist</h2>
              <p className="text-base text-gray-700 leading-loose mb-8">
                Saanre exists to empower mid-to-large retailers and private labels with world-class jewelry
                manufacturing — under one roof, with zero compromise.
              </p>
              <p className="text-base text-gray-700 leading-loose mb-8">
                We aren't a vendor. We are your silent partner — from sketch to stone to shelf.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">No catalogues. No price lists. No distractions.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Only custom-made, fully confidential production</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Every piece manufactured in-house</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Rooted in Indian heritage, powered by global standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">What Sets Us Apart</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-loose">
              Our partners trust us not just because of what we do — but how we do it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Team collaboration"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Hands doing stone placement"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="space-y-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8 py-6 border-b border-gray-100 last:border-b-0">
                <div>
                  <h3 className="font-serif text-lg text-gray-900">{advantage.feature}</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-base text-gray-700 leading-relaxed">{advantage.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People of Saanre */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
              The Heart Behind the Hands
            </h2>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-loose">
              Our team is made up of 60+ highly skilled artisans, designers, polishers, and quality checkers — many of
              whom have honed their skills for decades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Image
              src="/placeholder.svg?height=400&width=350"
              alt="Master artisan at work"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/placeholder.svg?height=400&width=350"
              alt="Designer sketching"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/placeholder.svg?height=400&width=350"
              alt="Quality checker inspecting piece"
              width={350}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="text-center">
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-loose">
              Each one plays a role in translating your design brief into physical elegance. Their pride doesn't come
              from being seen — but from knowing the world will see their work.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <video
              className="w-full max-w-4xl mx-auto rounded-lg mb-12"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Workshop winding down"
                width={800}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </video>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-tight">
              Let's Build Something Invisible, Together.
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              If you believe great jewelry doesn't need a name on it — just a legacy inside it — let's create. We're
              here to quietly power your next iconic collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                <Link href="/process">View Our Process</Link>
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
