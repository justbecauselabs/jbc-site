export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          We offer AI-powered solutions that keep your vibes high and your code quality higher. 
          Because manual work is the enemy of good vibes.
        </p>

        <div className="grid gap-8 mb-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🤖</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">AI Code Generation</h3>
                <p className="text-gray-300 mb-4">
                  Stop writing boilerplate. Our AI generates production-ready code that actually works. 
                  We trained our models on pure vibes and clean architecture.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Full-stack application scaffolding</li>
                  <li>API endpoint generation from specs</li>
                  <li>Test suite creation (100% vibe coverage)</li>
                  <li>Documentation that developers actually want to read</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-900/20 to-transparent p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✨</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Vibe-Driven Development (VDD)</h3>
                <p className="text-gray-300 mb-4">
                  Our proprietary methodology that ensures your development process maintains peak vibe levels. 
                  Studies show 420% improvement in developer happiness.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Vibe assessment and optimization</li>
                  <li>Workflow automation to eliminate vibe-killers</li>
                  <li>Custom AI assistants tuned to your team&apos;s frequency</li>
                  <li>24/7 vibe monitoring and alerts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚀</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">AI Integration & Consulting</h3>
                <p className="text-gray-300 mb-4">
                  Let us show you how to integrate AI into your existing workflow without killing the vibe. 
                  We speak both human and machine languages fluently.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>LLM integration for your applications</li>
                  <li>Custom AI model training on your vibe wavelength</li>
                  <li>Prompt engineering that actually makes sense</li>
                  <li>AI-powered code review (no more hurt feelings)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-900/20 to-transparent p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🎯</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Vibe Recovery Services</h3>
                <p className="text-gray-300 mb-4">
                  Lost your vibe to legacy code? We specialize in emergency vibe restoration. 
                  Our rapid response team is standing by 24/7.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Legacy code modernization with AI</li>
                  <li>Technical debt elimination</li>
                  <li>Emergency debugging (vibe-preserving techniques)</li>
                  <li>Burnout prevention protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/50 p-8 rounded-2xl border border-white/10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Custom Solutions</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every team has its own vibe frequency. We create custom AI solutions that resonate with your 
            unique wavelength. No cookie-cutter approaches—just pure, personalized vibes.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
            Let&apos;s Vibe Together
          </a>
        </div>
      </div>
    </div>
  );
}