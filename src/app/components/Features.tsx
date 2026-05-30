const items = [
  {
    title: "Realtime WebSocket Streams",
    desc: "Low-latency streaming market alerts infrastructure."
  },
  {
    title: "Volatility Detection",
    desc: "Detect abnormal market behavior across channels."
  },
  {
    title: "Multi-Channel Routing",
    desc: "BTC, NASDAQ, GOLD and custom feeds."
  }
];

export default function Features() {

  return (

    <section className="px-8 pb-32">

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">

        {items.map((item) => (

          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >

            <div className="text-2xl font-bold text-white mb-4">
              {item.title}
            </div>

            <div className="text-zinc-400 leading-relaxed">
              {item.desc}
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}