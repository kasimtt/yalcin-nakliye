export const metadata = {
  title: "Hakkımızda — Yalçın Nakliye",
  description: "Yalçın Nakliye hakkında: tecrübemiz, hizmet anlayışımız ve çalışma bölgelerimiz (Çiğli, Bayraklı, Menemen, İzmir).",
};

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-6 dark:bg-black">
      <main className="mx-auto max-w-3xl bg-white p-8 dark:bg-[#0b0b0b]">
        <h1 className="text-3xl font-bold">Hakkımızda</h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          Yalçın Nakliye, Çiğli ve İzmir çevresinde yıllardır hizmet veren
          profesyonel bir nakliye firmasıdır. Müşteri memnuniyeti, zamanında
          teslimat ve hasarsız taşıma ilkelerimizdir. Taşımalarımız sırasında eşyaların
          güvenliği için özel ambalajlama, sabitleme ve taşıma teknikleri uyguluyoruz;
          teslimatta hasar riskini azaltmaya odaklanıyoruz.
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Vizyonumuz</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Güvenilir, hızlı ve ekonomik taşıma çözümleri sunarak bölgedeki
            lider nakliye firmalarından biri olmak.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Değerlerimiz</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
            <li>Güven ve şeffaflık</li>
            <li>Zamanında hizmet</li>
            <li>Deneyimli ve eğitimli ekip</li>
            <li>Özenli ve dikkatli taşıma</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Hizmet Bölgelerimiz</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Çiğli, Bayraklı, Menemen ve tüm İzmir bölgesi.
          </p>
        </section>
      </main>
    </div>
  );
}
