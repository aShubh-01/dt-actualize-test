"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Your Role. Your Impact.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Dive into the JD to understand how you'll contribute, grow, and shape what's next.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="ri-mail-fill text-lg"></i>
                <Link
                  href="mailto:hello@deepthought.education"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@deepthought.education
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="ri-phone-fill text-lg"></i>
                <Link 
                  href="tel:+917207001400" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 72070 01400
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="ri-map-pin-fill text-lg"></i>
                <Link
                  href="https://www.google.com/maps/search/Hyderabad,+India"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hyderabad, India
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <Link
                href="https://www.linkedin.com/company/deepthoughtedutech/"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-blue-400 transition-colors"
              >
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link
                href="https://www.instagram.com/deepthoughtedutechventures?igsh=bnJtdWxjNGJyMmFv"
                aria-label="Follow us on Instagram"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-pink-400 transition-colors"
              >
                <i className="ri-instagram-fill"></i>
              </Link>
              <Link
                href="https://youtube.com/@sciensationmedia?si=pu1EJ5iNvRC463Kp"
                aria-label="Follow us on Youtube"
                target="_blank"
                className="text-2xl text-gray-300 hover:text-red-400 transition-colors"
              >
                <i className="ri-youtube-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 DeepThought. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;