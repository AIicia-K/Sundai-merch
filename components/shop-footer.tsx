export default function ShopFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left section - Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍨</span>
              <h2 className="font-mono font-bold text-lg text-white">Sundai</h2>
            </div>
            <p className="font-mono text-sm text-slate-300 mb-6 leading-relaxed">
              AI-first merch for builders and innovators. Wear your mission.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition">
                <span className="text-xl">ig</span>
              </a>
            </div>
          </div>

          {/* Middle section - Shop links */}
          <div>
            <h3 className="font-mono font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Gear
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Bundles
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Info links */}
          <div>
            <h3 className="font-mono font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-slate-800 pt-6">
          <p className="font-mono text-xs text-slate-400 text-center">© 2025 Sundai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
