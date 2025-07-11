export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Vibing with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Three bros. One mission. Infinite vibes. We code the future with AI because we can't live without the vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/story" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
                Our Vibe Story
              </a>
              <a href="/services" className="px-8 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all">
                AI Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-400">We integrate cutting-edge AI into your workflow because manual work kills the vibe.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-transparent p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-3">Vibe Architecture</h3>
              <p className="text-gray-400">Our unique approach to system design ensures maximum vibe retention at all times.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Code Generation</h3>
              <p className="text-gray-400">Let AI write the code while you focus on what matters: maintaining peak vibes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Vibe?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us on this journey where AI meets pure vibes. Because life's too short for bad energy and manual coding.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}