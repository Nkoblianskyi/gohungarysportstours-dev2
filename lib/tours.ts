import { Tour } from './types'

export const tours: Tour[] = [
  {
    id: '1',
    nameHu: 'Bükk hegység túra',
    descriptionHu: 'Felfedezd a Bükk hegység varázslatos erdeit és hegycsúcsait. Egy autentikus minimalist kirándulás a magyar természet szívén.',
    distance: 18,
    elevation: 450,
    duration: '6 óra',
    difficulty: 'moderate',
    activity: 'hiking',
    season: ['tavasz', 'nyár', 'ősz'],
    startDate: '2026-05-15',
    routeOverview: 'Egyenes útvonal a Bükk legszebb helyein keresztül, erdei ösvényeken és hegyvidéki tájak között.',
    experienceLayers: [
      {
        title: 'Fizikai kihívás',
        description: 'Közepes erőfeszítés szintemelkedéssel és terepen.',
      },
      {
        title: 'Természeti szépség',
        description: 'Lenyűgöző erdei kilátások és hegyi panoráma.',
      },
      {
        title: 'Kulturális kapcsolat',
        description: 'Az ős-magyar történelem nyomai a tájban.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Kezdő túrázó',
        description: 'Kiváló bevezetés a hegyi túrázásba',
        focus: 'Fokozatos felkészülés és élvezet'
      },
      {
        title: 'Sportolói nézőpont',
        description: 'Jó terep kondícióépítéshez',
        focus: 'Terep és szintemeléssel szembesítés'
      },
      {
        title: 'Fotós nézőpont',
        description: 'Csodálatos természeti jellegzetességek',
        focus: 'Fényre és kompozícióra érzékeny helyek'
      }
    ],
    images: ['/images/bukk-forest.jpg', '/images/bukk-panorama.jpg'],
    relatedTourIds: ['2', '3']
  },
  {
    id: '2',
    nameHu: 'Aggteleki-karszt kerékpár',
    descriptionHu: 'Kalandozz az Aggteleki-karszt varázsán. Kerékpáros túra a magyar és szlovák határ között, lenyűgöző tájak közt.',
    distance: 32,
    elevation: 280,
    duration: '5 óra',
    difficulty: 'moderate',
    activity: 'cycling',
    season: ['tavasz', 'nyár', 'ősz'],
    startDate: '2026-06-20',
    routeOverview: 'Karszt vidéken át vezető út, országutakon és vidéki útvonalakon keresztül, festői falvak mellett.',
    experienceLayers: [
      {
        title: 'Geológiai csodák',
        description: 'A karszt formációk és barlangi világok felfedezése.',
      },
      {
        title: 'Kerékpáros élmény',
        description: 'Kellemes tempó vegyesen terep és útvonal között.',
      },
      {
        title: 'Történelmi tájak',
        description: 'Ős-magyar települések és tradícióik.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Kezdő kerékpáros',
        description: 'Ideális távolság és terep kombinációja',
        focus: 'Élvezet és megfelelő kihívás'
      },
      {
        title: 'Kalandvágyó',
        description: 'Felfedezés és újdonság',
        focus: 'Ismeretlen területek felfedezése'
      }
    ],
    images: ['/images/aggtelek-karst.jpg', '/images/karst-village.jpg'],
    relatedTourIds: ['1', '4']
  },
  {
    id: '3',
    nameHu: 'Fűzér-Telkibánya futás',
    descriptionHu: 'Egy trail running élmény a Zemplén. Szintemelkedéssel és természeti szépséggel teli futóút.',
    distance: 12,
    elevation: 320,
    duration: '2 óra 30 perc',
    difficulty: 'challenging',
    activity: 'running',
    season: ['tavasz', 'nyár', 'ősz'],
    startDate: '2026-06-01',
    routeOverview: 'Sziklás terepen futás erdőn keresztül, folyóvölggyel és hegyvidéki tájakkal.',
    experienceLayers: [
      {
        title: 'Sportteljesítmény',
        description: 'Intenzív terep futás edzéshez.',
      },
      {
        title: 'Erdei légkörtől',
        description: 'Fenyőerdők és természeti elemek az út mellett.',
      },
      {
        title: 'Elvonultság',
        description: 'Az érintetlen természetbe való merülés.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Futó atléta',
        description: 'Technikai terep és megközelítő erőfeszítés',
        focus: 'Teljesítmény és feltárás'
      },
      {
        title: 'Fitnesz lelkesedő',
        description: 'Jó kondícióépítési lehetőség',
        focus: 'Egészség és élvezet'
      }
    ],
    images: ['/images/fuzzer-trail.jpg', '/images/trail-forest.jpg'],
    relatedTourIds: ['1', '5']
  },
  {
    id: '4',
    nameHu: 'Tisza menti séta',
    descriptionHu: 'Sétálj a Tisza mellett, találkozz a magyar folyó szépségével. Relaxáló séta a vízparton és természeti értékek között.',
    distance: 8,
    elevation: 0,
    duration: '2 óra 30 perc',
    difficulty: 'easy',
    activity: 'walking',
    season: ['tavasz', 'nyár', 'ősz', 'tél'],
    startDate: '2026-05-15',
    routeOverview: 'Sík terepen a Tisza folyó mellett, parkos területeken és erdei ösvényeken.',
    experienceLayers: [
      {
        title: 'Vízi élet',
        description: 'Megfigyelése és az ökoszisztéma megismerése.',
      },
      {
        title: 'Relaksáció',
        description: 'Nyugodt tempó és békés környezet.',
      },
      {
        title: 'Madárles',
        description: 'Ritkás madárfajok megfigyelésének lehetősége.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Család',
        description: 'Összes korosztálynak megfelelő',
        focus: 'Közös élmény és felfedezés'
      },
      {
        title: 'Természetrajzos',
        description: 'Biológiai megfigyelésekre alkalmas',
        focus: 'Tanulás és felfedezés'
      },
      {
        title: 'Fotós',
        description: 'Szép természeti pillanatok',
        focus: 'Vizuális szépség'
      }
    ],
    images: ['/images/tisza-river.jpg', '/images/riverbank-walk.jpg'],
    relatedTourIds: ['2', '6']
  },
  {
    id: '5',
    nameHu: 'Mecsek nyúlvány kerékpár',
    descriptionHu: 'Körüljárás a Mecsek hegység körül kerékpáron. Erdők, hegyek és vidéki táj egy úton.',
    distance: 28,
    elevation: 380,
    duration: '4 óra 30 perc',
    difficulty: 'moderate',
    activity: 'cycling',
    season: ['tavasz', 'nyár', 'ősz'],
    startDate: '2026-05-01',
    routeOverview: 'Kör útvonal kerékpárforgalomra alkalmassá tett utakon és szintemelkedéseken.',
    experienceLayers: [
      {
        title: 'Hegyvidéki kerékpározás',
        description: 'Szintemelkedés és technikai kihívások.',
      },
      {
        title: 'Erdei légkörtől',
        description: 'Szép erdőség és kilátások.',
      },
      {
        title: 'Települések felkeresése',
        description: 'Kis falvak és helyi kultúra megismerése.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Közepesen haladó',
        description: 'Megfelelő kihívás szintje',
        focus: 'Fejlődés és élvezet'
      },
      {
        title: 'Kalandvágyó',
        description: 'Felfedezésre tele út',
        focus: 'Új helyek és élmények'
      }
    ],
    images: ['/images/mecsek-cycling.jpg', '/images/mountain-bike.jpg'],
    relatedTourIds: ['2', '3']
  },
  {
    id: '6',
    nameHu: 'Pilis hegység sétaútvonal',
    descriptionHu: 'Könnyed séta a Pilis hegység szívén. Erdei ösvények és csendes természet közötti sétálás.',
    distance: 6,
    elevation: 150,
    duration: '2 óra',
    difficulty: 'easy',
    activity: 'walking',
    season: ['tavasz', 'nyár', 'ősz'],
    startDate: '2026-07-01',
    routeOverview: 'Sík erdei terep minimális szintemelkedéssel, ideális bevezetés a természetbe.',
    experienceLayers: [
      {
        title: 'Erdei meditáció',
        description: 'Csendben történő elmélkedésre alkalmas helyek.',
      },
      {
        title: 'Botanikai felfedezés',
        description: 'Tavaszi virágok és erdei flóra.',
      },
      {
        title: 'Lélek frissítés',
        description: 'Pihenésre és ellazulásra tökéletes.',
      }
    ],
    travelerPerspectives: [
      {
        title: 'Gyógyító',
        description: 'Stressz oldásra ideális',
        focus: 'Wellbeing és béke'
      },
      {
        title: 'Kezdő',
        description: 'Könnyű bevezetés a túrázásba',
        focus: 'Önbizalom építés'
      }
    ],
    images: ['/images/pilis-forest.jpg', '/images/forest-path.jpg'],
    relatedTourIds: ['4', '1']
  }
]

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id)
}

export function filterTours(query?: string, activity?: string, difficulty?: string): Tour[] {
  return tours.filter(tour => {
    if (query) {
      const q = query.toLowerCase()
      if (!tour.nameHu.toLowerCase().includes(q) && !tour.descriptionHu.toLowerCase().includes(q)) {
        return false
      }
    }
    if (activity && tour.activity !== activity) return false
    if (difficulty && tour.difficulty !== difficulty) return false
    return true
  })
}
