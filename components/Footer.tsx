"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 h-[50vh] lg:min-w-[1600px] text-white">
      <div className="flex flex-col justify-between h-full container mx-auto px-6">
        <div className="footer-content mt-[2rem] flex flex-col md:flex-row justify-between">
          {/* Brand Section */}
          <div className="footer-section flex flex-col items-center flex-1 mb-6 md:mb-0">
            <p className="text-xl font-semibold">
              Your Role. Your Impact.
            </p>
            <p className="text-gray-400 mt-2 text-center">
              Dive into the JD to understand how you’ll contribute, grow, and shape what’s next.
            </p>
          </div>
          {/* Contact Section */}
          <div className="footer-section flex flex-col items-center flex-1 gap-5 md:mb-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="flex gap-2">
              <i className="ri-mail-fill"></i>
              <Link
                href="mailto:hello@deepthought.education"
                className="hover:underline"
              >
                hello@deepthought.education
              </Link>
            </p>
            <p className="flex gap-2">
              <i className="ri-phone-fill"></i>
              <Link href="tel:+917207001400" className="hover:underline">
                +91 72070 01400
              </Link>
            </p>
            <p className="flex gap-2">
              <i className="ri-map-pin-fill"></i>
              <Link
                href="https://www.google.com/maps/search/Hyderabad,+India"
                target="_blank"
                className="hover:underline"
              >
                Hyderabad, India
              </Link>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="footer-section flex flex-col items-center flex-1">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/deepthoughtedutech/"
                aria-label="Follow us on LinkedIn"
                target="_blank"
              >
                <i className="text-2xl text-white hover:text-blue-500 transition ri-linkedin-fill"></i>
              </Link>
              <Link
                href="https://www.instagram.com/deepthoughtedutechventures?igsh=bnJtdWxjNGJyMmFv"
                aria-label="Follow us on Instagram"
                target="_blank"
              >
                <i className="ri-instagram-fill text-2xl hover:text-pink-500 transition"></i>
              </Link>
              <Link
                href="https://youtube.com/@sciensationmedia?si=pu1EJ5iNvRC463Kp"
                aria-label="Follow us on Youtube"
                target="_blank"
              >
                <i className="ri-youtube-line text-2xl hover:text-red-500 transition"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-6 border-t border-gray-700 pt-4">
          <p>&copy; 2024 DT Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
