export default function About() {
  return (
    <div className="space-y-8">
      <div className="mb-12">
        <h1 className="font-mono text-4xl sm:text-5xl font-bold text-center mb-6">About Sundai</h1>
        <p className="text-center text-foreground/70 font-mono text-sm sm:text-base max-w-2xl mx-auto">
          Building the next generation of AI developers and creators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-lg">
          <span className="text-4xl mb-4 inline-block">🎯</span>
          <h2 className="font-mono text-2xl font-bold mb-4">Our Mission</h2>
          <p className="font-mono text-foreground/70 leading-relaxed">
            Build things that matter. We cultivate the best hackers through rapid AI-powered development and spread the
            hacker mindset by teaching skills from community leaders and beyond.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-lg">
          <span className="text-4xl mb-4 inline-block">⭐</span>
          <h2 className="font-mono text-2xl font-bold mb-4">Our Vision</h2>
          <p className="font-mono text-foreground/70 leading-relaxed">
            A world where hacking with AI tools is the new literacy. The "10x developer" is no longer a myth—it's you
            today, building with modern tools and unlimited potential.
          </p>
        </div>
      </div>
    </div>
  )
}
