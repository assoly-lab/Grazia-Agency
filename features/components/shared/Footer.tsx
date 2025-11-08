import { Mail, Phone, MapPin, Download, CreditCard } from "lucide-react"

export default function Footer() {
  const businesses = {
    "Management Software": [
      "Customised applications and software",
      "Mobile application (Android & iOS)",
      "Our Solutions",
    ],
    "Website creation": [
      "Website maintenance",
      "Website creation",
      "E-Commerce website creation",
      "Domain name",
      "Web hosting",
    ],
    "Our Solutions": [
      "Sales Management Software - EasyCommerce",
      "Hotel Management Software - Easyshote",
      "Security Guard Company Management Software - EasyGard",
      "Point of sale solution (POS)",
    ],
    "E-reputation": [
      "Consulting and Strategy",
      "Search Engine Optimisation (SEO)",
      "Paid advertising (SEA / SMA)",
      "Community Management",
      "Digital Content Creation",
      "Branding and Visual Creation",
      "Print and Communication Media",
    ],
  }

  return (
    <footer className="w-full bg-slate-900 text-white py-16 border-t-2 border-red-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 font-open-sans relative pb-4">
              SGGI CONTACT
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-red-500"></span>
            </h3>

            <div className="space-y-6 font-nunito-sans">
              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 font-open-sans">Need support?</p>
                  <p className="text-white hover:text-red-500 transition-colors">contact@grazia-agency.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 font-open-sans">Any questions?</p>
                  <p className="text-white hover:text-red-500 transition-colors">+212 661 349 989</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 font-open-sans">Office address</p>
                  <p className="text-white text-sm">
                    123 Business Ave, City
                  </p>
                </div>
              </div>

              {/* Partner CTA */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-3 font-open-sans">Votre Partenaire Informatique</p>
                <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-open-sans font-semibold">
                  <Download className="w-4 h-4" />
                  Download our brochure
                </button>
              </div>
            </div>
          </div>

          {/* Businesses Grid */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-8 font-open-sans relative pb-4">
              OUR CORE BUSINESSES
              <span className="absolute left-0 bottom-0 w-12 h-1 bg-red-500"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(businesses).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-lg font-bold text-red-500 mb-4 font-open-sans">{category}</h4>
                  <ul className="space-y-3 font-nunito-sans">
                    {items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer text-sm"
                      >
                        <span className="text-red-500 mr-2">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-nunito-sans">Grazia Agency ©  2025 - Tous droits réservés.</p>

            {/* Footer Links */}
            <div className="flex gap-6 text-sm font-nunito-sans">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                TERMS AND CONDITIONS
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Agency
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-4 items-center">
              <CreditCard
                className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              />
              <CreditCard
                className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              />
              <CreditCard
                className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              />
              <CreditCard
                className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
