export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="mb-12">
        <h1 className="font-mono text-4xl sm:text-5xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-center text-foreground/70 font-mono text-sm sm:text-base max-w-2xl mx-auto">
          Have questions about Sundai merch or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-background border border-border rounded-lg p-8 space-y-6">
        <div>
          <label className="font-mono text-sm font-bold block mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full font-mono text-sm border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div>
          <label className="font-mono text-sm font-bold block mb-2">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full font-mono text-sm border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div>
          <label className="font-mono text-sm font-bold block mb-2">Message</label>
          <textarea
            placeholder="Tell us what's on your mind..."
            rows={4}
            className="w-full font-mono text-sm border border-border rounded px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
          />
        </div>

        <button className="w-full font-mono text-sm font-bold bg-foreground text-background px-4 py-2 rounded hover:opacity-90 transition">
          Send Message
        </button>
      </div>
    </div>
  )
}
