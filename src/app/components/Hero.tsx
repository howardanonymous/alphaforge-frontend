export default function Hero() {

  return (

    <section className="py-32 px-8">

      <div className="max-w-6xl mx-auto">

        <div className="text-zinc-500 mb-4">
          realtime market infrastructure
        </div>

        <h1 className="text-7xl font-bold text-white leading-tight max-w-5xl">

          Market Intelligence
          <br />
          Infrastructure API

        </h1>

        <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">

          AlphaForge delivers realtime volatility detection,
          anomaly streams, and market intelligence feeds
          through low-latency websocket infrastructure.

        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-white text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 transition">

            Start Free

          </button>

          <button className="border border-zinc-700 text-white px-6 py-4 rounded-2xl hover:bg-zinc-900 transition">

            API Docs

          </button>

        </div>

      </div>

    </section>

  );
}