
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/1c2e56bb8b2f5d51332d0f9ddb220f05/533004864e99e11afa640a2ac35b3821.png" 
                alt="Nyota Innovations Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-white font-bold text-lg" style={{fontFamily: 'Orbitron, sans-serif'}}>Nyota Innovations</span>
            </div>
            <p className="text-blue-100 max-w-md leading-relaxed">
              Pioneering the future of technology through AI, AR, and digital transformation solutions that empower businesses to reach new heights.
            </p>
            <div className="flex space-x-4 mt-6">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500/20 transition-colors">
                <i className="ri-twitter-line text-blue-400"></i>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500/20 transition-colors">
                <i className="ri-linkedin-line text-blue-400"></i>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500/20 transition-colors">
                <i className="ri-github-line text-blue-400"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">Home</Link>
              <Link href="/services" className="block text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">Services</Link>
              <Link href="/about" className="block text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">About Us</Link>
              <Link href="/contact" className="block text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">AI Solutions</div>
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">AR Development</div>
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">VR Development</div>
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">MR Development</div>
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">Digital Transformation</div>
              <div className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer">Consulting</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 <span style={{fontFamily: 'Orbitron, sans-serif'}}>Nyota Innovations</span>. All rights reserved. | Shaping the future, one innovation at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
