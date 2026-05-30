export default function Navbar() {

  return (

    <div className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur">

      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* 左側 Logo */}
        <div className="text-2xl font-bold text-white">
          AlphaForge
        </div>

        {/* 中間導航 */}
        <div className="flex gap-6 text-zinc-400">

          <button className="hover:text-white transition">
            Dashboard
          </button>

          <button className="hover:text-white transition">
            Pricing
          </button>

          <button className="hover:text-white transition">
            Docs
          </button>

        </div>

        {/* 右側 CTA */}
        <div>

          <button className="bg-white text-black px-4 py-2 rounded-xl font-bold hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </div>

    </div>

  );
}