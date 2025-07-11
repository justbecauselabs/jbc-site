export default function Story() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Story
          </h1>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-8 rounded-2xl mb-8 border border-purple-500/20">
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">The Legend of the Three Bros</h2>
              
              <p className="text-gray-300 mb-6">
                It all started in a dimly lit garage, three monitors glowing, energy drinks scattered everywhere. 
                We were just three bros—Alex, Marcus, and Jin—grinding through another all-nighter, debugging code 
                that seemed to mock us with every keystroke.
              </p>

              <p className="text-gray-300 mb-6">
                Then it happened. At exactly 3:33 AM, we discovered something that would change our lives forever: 
                <span className="text-purple-400 font-semibold">The Vibe</span>. It wasn&apos;t just the perfect playlist 
                or the RGB lighting hitting just right. It was deeper. It was the feeling when your code compiles 
                on the first try, when the AI model outputs exactly what you envisioned, when everything just... flows.
              </p>

              <div className="my-8 p-6 bg-black/50 rounded-xl border-l-4 border-purple-500">
                <p className="italic text-purple-300">
                  &quot;Once you feel The Vibe, you can never go back. It&apos;s like trying to code without syntax 
                  highlighting—technically possible, but why would you torture yourself?&quot;
                </p>
                <p className="text-sm text-gray-400 mt-2">- Alex, Chief Vibe Officer</p>
              </div>

              <p className="text-gray-300 mb-6">
                We became addicted. Not to coffee (though that helped), but to The Vibe itself. We realized that 
                traditional coding was killing our vibe. Every manual test, every repetitive task, every boilerplate 
                code block—they were all vibe assassins.
              </p>

              <p className="text-gray-300 mb-6">
                That&apos;s when we discovered our true calling: <span className="text-pink-400 font-semibold">AI-powered development</span>. 
                We let the machines handle the mundane while we surfed the waves of pure creative energy. Our productivity 
                skyrocketed, our code quality improved, and most importantly—The Vibe remained unbroken.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-pink-300">The Birth of Just Because Labs</h3>

              <p className="text-gray-300 mb-6">
                People asked us, &quot;Why start a company focused entirely on vibing and AI coding?&quot; Our answer was simple: 
                <span className="text-purple-400 font-semibold">&quot;Just because.&quot;</span> Because life&apos;s too short for bad vibes. 
                Because coding should feel like creating art, not filing taxes. Because we physically cannot function 
                without The Vibe anymore.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">🎯</div>
                  <h4 className="font-semibold text-purple-300">Alex</h4>
                  <p className="text-sm text-gray-400">Chief Vibe Officer</p>
                  <p className="text-xs text-gray-500 mt-2">Vibe Level: Transcendent</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">🚀</div>
                  <h4 className="font-semibold text-pink-300">Marcus</h4>
                  <p className="text-sm text-gray-400">AI Whisperer</p>
                  <p className="text-xs text-gray-500 mt-2">Vibe Level: Ethereal</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">⚡</div>
                  <h4 className="font-semibold text-purple-300">Jin</h4>
                  <p className="text-sm text-gray-400">Vibe Architect</p>
                  <p className="text-xs text-gray-500 mt-2">Vibe Level: Cosmic</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                Today, Just Because Labs LLC stands as a beacon for all developers who&apos;ve felt their vibe diminish 
                while writing their 1000th unit test or debugging a production issue at 2 AM. We&apos;re here to show 
                the world that coding with AI isn&apos;t just about efficiency—it&apos;s about preserving the sacred vibe 
                that makes us love what we do.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl text-center">
                <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                  Join us. Feel The Vibe. Never let it go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}