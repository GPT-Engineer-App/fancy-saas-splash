import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CloudBoost</h3>
            <p className="text-sm">Supercharge your business with our cutting-edge SaaS solution.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Features</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm mb-1">Email: info@cloudboost.com</p>
            <p className="text-sm mb-1">Phone: (123) 456-7890</p>
            <p className="text-sm">Address: 123 Tech Street, San Francisco, CA 94105</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 CloudBoost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
