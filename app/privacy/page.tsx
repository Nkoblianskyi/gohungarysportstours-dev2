import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Adatvédelmi szabályzat</h1>
            <p className="text-muted-foreground">Utolsó frissítés: 2026.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Bevezetés</h2>
            <p className="text-muted-foreground">
              A K.C. NTOMATA LIMITED (a továbbiakban: &ldquo;GoHungarySportsTours&rdquo;, &ldquo;mi&rdquo;) elkötelezett az Ön személyes adatainak védelme mellett. Ez az adatvédelmi szabályzat ismerteti, hogyan gyűjtünk, használunk és védelmazünk az Ön adatait.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>Cégadatok:</strong> K.C. NTOMATA LIMITED, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Mit gyűjtünk</h2>
            <p className="text-muted-foreground">
              Minimális adatgyűjtésre törekszünk. Csak azt gyűjtjük, ami szükséges:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>A kapcsolatfomanyomok - név, e-mail, üzenet (amikor Ön megküldi)</li>
              <li>A weboldal használatára vonatkozó információk - az Ön böngészőjének típusa, az Ön IP-címe, a felkeresett oldalak</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Hogyan használjuk az Ön adatait</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Az Ön üzeneteire válaszolni</li>
              <li>A weboldal javítása és biztonsági fejlesztése</li>
              <li>A túrák javítása és új túrák fejlesztése</li>
              <li>Jogi kötelezettségek teljesítése</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Az Ön jogai</h2>
            <p className="text-muted-foreground">
              Joga van bármilyen időpontban hozzáférni, módosítani vagy törölni az adatait. Írjon szíveskedjen szíveskedjen szíveskedjen e-mailt vagy forduljon a kontakt oldalunkon keresztül.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Kapcsolat</h2>
            <p className="text-muted-foreground">
              Ha kérdéseid vannak az adatvédelmi szabályzatunkkal kapcsolatban, kérjük, vegyél fel velünk kapcsolatot a kapcsolat oldalon keresztül.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
