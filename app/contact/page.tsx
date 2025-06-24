"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    contactNumber: "",
    location: "",
    role: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })

    try {
      const result = await submitContactForm(formDataObj)
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        setFormData({
          fullName: "",
          companyName: "",
          workEmail: "",
          contactNumber: "",
          location: "",
          role: "",
          message: "",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Hands packaging fine jewelry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 leading-tight">
              Let's Begin a Confidential Conversation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              At Saanre, we craft each piece in silence — but we're always listening. If you represent a retail brand,
              private label, or design house, we invite you to connect with us for exclusive manufacturing
              collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-8">Start the Conversation</h2>

                {submitResult && !submitResult.success ? (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{submitResult.message}</p>
                  </div>
                ) : null}

                {submitResult && submitResult.success ? (
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-serif text-gray-900 mb-2">Message Sent Successfully</h3>
                      <p className="text-gray-700 mb-4">{submitResult.message}</p>
                      <p className="text-sm text-gray-600">
                        Your information is secure and will only be used for this business inquiry.
                      </p>
                      <Button onClick={() => setSubmitResult(null)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workEmail" className="text-sm font-medium text-gray-700">
                        Work Email *
                      </Label>
                      <Input
                        id="workEmail"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange("workEmail", e.target.value)}
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber" className="text-sm font-medium text-gray-700">
                          Contact Number
                        </Label>
                        <Input
                          id="contactNumber"
                          type="tel"
                          value={formData.contactNumber}
                          onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                          Location / Country *
                        </Label>
                        <Input
                          id="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                        Your Role *
                      </Label>
                      <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail-owner">Retail Owner</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="private-label">Private Label</SelectItem>
                          <SelectItem value="buyer">Buyer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Brief Message / Enquiry *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg min-h-[120px]"
                        placeholder="Tell us about your project, requirements, or any specific questions you have..."
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Confidential Enquiry"}
                      </Button>
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        We typically respond within 2 business days. Your ideas remain strictly confidential.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Direct Contact Details */}
              <div>
                <h2 className="text-2xl font-serif text-gray-900 mb-8">Prefer a Direct Line?</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700 mb-1">business@saanre.in</p>
                      <p className="text-sm text-gray-500">For official B2B inquiries only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700 mb-1">+91-XXXXXXXXXX</p>
                      <p className="text-sm text-gray-500">Weekdays 10 AM – 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-700 mb-1">Saanre Studio & Manufacturing Unit</p>
                      <p className="text-sm text-gray-500">Jaipur, India</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-serif text-lg text-gray-900 mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Confidential consultation about your project requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Detailed timeline and process overview</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Custom pricing based on your specifications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>NDA signing for complete project confidentiality</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-serif text-gray-900 font-light italic mb-4">
              "We don't just protect designs. We protect ideas."
            </blockquote>
            <cite className="text-sm text-gray-600">— The Saanre Ethos</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
