import React from "react";

import MaxWidth from "../max-width/MaxWidth";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white">
      <MaxWidth>
        <div className=" py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo/logo.svg" alt="Logo" width={135} height={40} />
              <span>
              

              </span>
            </div>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Newsroom</li>
              <li className="hover:text-blue-500 cursor-pointer">Join Our Team</li>
              <li className="hover:text-blue-500 cursor-pointer">Our Vision</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">Secure File Transfers</li>
              <li className="hover:text-blue-500 cursor-pointer">High-Speed Uploads</li>
              <li className="hover:text-blue-500 cursor-pointer">User-Friendly Interface</li>
              <li className="hover:text-blue-500 cursor-pointer">Multi-Platform Support</li>
              <li className="hover:text-blue-500 cursor-pointer">Detailed Analytics</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">Updates and Articles</li>
              <li className="hover:text-blue-500 cursor-pointer">Security Practices</li>
              <li className="hover:text-blue-500 cursor-pointer">API Documentation</li>
              <li className="hover:text-blue-500 cursor-pointer">Tutorial Videos</li>
              <li className="hover:text-blue-500 cursor-pointer">Pricing Plans</li>
              <li className="hover:text-blue-500 cursor-pointer">Community Forum</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 py-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-6">
          <span>All rights reserved by MatDash.</span>
          <span>Produced by <span className="text-white font-semibold">AdminMart.</span></span>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
