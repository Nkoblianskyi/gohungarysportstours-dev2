import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { content } from '@/lib/content'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background border-b border-border">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{content.about.title}</h1>
            <p className="text-xl text-muted-foreground">Ismerj meg minket és a minimalista túrázás filozófiáját.</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{content.about.mission}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {content.about.missionText}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hiszünk, hogy az igazi kalandok nem az extrém felszerelésben vagy a drámai nézőpontokban rejlenek, hanem az egyszerűségben, az autonómiában és az ős-magyar természet közvetlen tapasztalatában. Minden túrát arra terveztünk meg, hogy az emberek vissza tudjanak térni az alapokhoz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A minimalist megközelítés nem azt jelenti, hogy kevésebbet csinálsz. Ez azt jelenti, hogy csak azt csinálod, ami igazán számít: az élmény, a természet és a személyi fejlődés.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">{content.about.values}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Autentikusság</h3>
                <p className="text-muted-foreground">
                  Valódi magyar természeti élményt kínálunk. Nincs szépítés, nincs túl-kameraizálás - csak az igazi tájak és az igazi érzések.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Fenntarthatóság</h3>
                <p className="text-muted-foreground">
                  Tiszteletben tartjuk a környezetet. Minimális lábnyom hagyása nem csak felelősségünk, hanem szenvedélyünk is.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Hozzáférhetőség</h3>
                <p className="text-muted-foreground">
                  A túrázás nem kell drágának lennie. Meg akarjuk mutatni, hogy mindenki él az aktív táj-élmények, függetlenül az előzetes tapasztalattól.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Közösség</h3>
                <p className="text-muted-foreground">
                  Az emberek összekapcsolásában hiszünk a közös élményen keresztül. Az érzés az emberek között sokkal erősebb, mint a szövetség.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">A cégről</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                A GoHungarySportsTours azért jött létre, hogy Magyarország természeti szépségeit mindenki számára elérhetővé tegye. A Bükk hegységtől az Aggteleki-karsztig, a Mecsektől a Tiszáig — ezek a tájak mindig felfedezésre várnak.
              </p>
              <p>
                Minimalist megközelítésünk lényege: az igazi élményhez nincs szükség bonyolult felszerelésre vagy drága szervezésre. A természet maga az élmény — egyszerű, autentikus és elérhető.
              </p>
              <p>
                Saját fejlesztésű túráink mindegyike kizárólag természetes környezetben zajlik, kerülve a városias vagy kereskedelmi helyszíneket. Ezek valóban egyedi, szerzői útvonalak.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Céginformáció</h3>
              <address className="not-italic text-foreground space-y-1 leading-relaxed">
                <p className="font-semibold text-lg">K.C. NTOMATA LIMITED</p>
                <p className="text-muted-foreground">Stylianou Lena,</p>
                <p className="text-muted-foreground">24 Christiana Court, Flat/Office 202,</p>
                <p className="text-muted-foreground">Strovolos,</p>
                <p className="text-muted-foreground">2019 Nicosia, Cyprus</p>
              </address>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 to-secondary/20 border-y border-border">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Készen állsz az abentúrára?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Válassz egy túrát és fedezd fel a magyar természet szépségét.
            </p>
            <Link
              href="/catalog"
              className="inline-block px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Túrák megtekintése
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
