import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sütik szabályzata</h1>
            <p className="text-muted-foreground">Utolsó frissítés: 2026.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Mi a sütik?</h2>
            <p className="text-muted-foreground">
              A sütik kis szövegfájlok, amelyeket az Ön böngészője tárol a weboldalon. A K.C. NTOMATA LIMITED (GoHungarySportsTours) csak a minimálisan szükséges sütiket használja a weboldal működéséhez.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Milyen sütik használunk?</h2>
            <p className="text-muted-foreground mb-4">Az összes sütit már a felhasználó által történő alapvető működéshez használjuk:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Munkamenet sütik:</strong> Segít nekünk, hogy megértsük, hogyan navigálsz az oldalon</li>
              <li><strong>Beállítások sütik:</strong> Emlékezze az Ön beállításainak (pl. nyelvbeállítások)</li>
              <li><strong>Biztonsági sütik:</strong> Védje meg az oldalunkat az illetéktelen hozzáféréstől</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Nem használunk nyomon követési sütikeket</h2>
            <p className="text-muted-foreground">
              Nem használunk analitikát vagy nyomon követési sütikeket az Ön tevékenységei megfigyelésére. Az Ön adatai magánfüggetlenek maradnak.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Sütik szabályozása</h2>
            <p className="text-muted-foreground">
              Bármilyen sütit törölhetsz az Ön böngészőjének beállításainál. Ez nem akadályozza meg az oldal használatát, azonban néhány funkció nem működhet megfelelően.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Kapcsolat</h2>
            <p className="text-muted-foreground">
              Ha kérdéseid vannak a sütik szabályzatunkkal kapcsolatban, kérjük, vegyél fel velünk kapcsolatot a kapcsolat oldalon keresztül.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
