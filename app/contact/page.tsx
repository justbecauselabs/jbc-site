"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    vibeLevel: "high"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll vibe with you soon. 🚀");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-gray-300 mb-12">
            Ready to elevate your development experience? Hit us up and let&apos;s create something amazing together. 
            We respond faster to high-vibe inquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="John Vibe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="john@vibes.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="vibeLevel" className="block text-sm font-medium mb-2">Current Vibe Level</label>
                  <select
                    id="vibeLevel"
                    value={formData.vibeLevel}
                    onChange={(e) => setFormData({...formData, vibeLevel: e.target.value})}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="low">Low (Help needed ASAP)</option>
                    <option value="medium">Medium (Room for improvement)</option>
                    <option value="high">High (Let&apos;s collaborate)</option>
                    <option value="transcendent">Transcendent (On our wavelength)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-purple-500 focus:outline-none transition-colors h-32 resize-none"
                    placeholder="Tell us about your project and how we can help elevate your vibes..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-[1.02]"
                >
                  Send Vibes
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Other Ways to Vibe</h2>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-500/20">
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">vibes@justbecauselabs.com</p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-900/20 to-transparent p-6 rounded-xl border border-pink-500/20">
                    <h3 className="font-semibold mb-2">Discord</h3>
                    <p className="text-gray-300">JustBecauseVibes#1337</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-500/20">
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-gray-300">Whenever the vibes are right</p>
                    <p className="text-sm text-gray-400 mt-1">(Usually 10 PM - 4 AM PST)</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-3">Emergency Vibe Support</h3>
                <p className="text-gray-300 text-sm mb-3">
                  If you&apos;re experiencing a critical vibe emergency (e.g., production bug at 3 AM, 
                  existential coding crisis, or severe burnout), we offer 24/7 emergency support.
                </p>
                <p className="text-purple-400 font-mono text-sm">VIBE-911-HELP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}