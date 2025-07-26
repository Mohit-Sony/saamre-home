import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            {/* <h3 className="text-2xl font-serif font-bold mb-4">SAANRE</h3> */}
            {/* Logo Image */}
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="SAANRE Logo"
                className=" w-30 h-20 object-contain"
              />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-4">Bikaner Creation Private Limited</h4>
            <p className="text-lg font-serif font-bold mb-4">D - 248 , Bihari Marg , Bani Park , Jaipur</p>

            <p className="text-gray-400">Bespoke jewelry manufacturing with heritage craftsmanship.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-white transition-colors">
                  Craftsmanship
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/T&C" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Begin a conversation with our team</p>
            <Link href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
              Get in Touch →
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Saanre. All rights reserved. Crafted with precision and care.</p>
        </div>
      </div>
    </footer>
  )
}
