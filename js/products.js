/* ═══════════════════════════════════════════════
   SOPHTMADE — PRODUCT DATA
═══════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Manchester United Home Jersey",
    club: "Manchester United",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The iconic red home kit of Manchester United from Old Trafford. Fan edition designed for comfort, everyday wear, and matchday support.",
    image: "images/jerseys/man-utd-home-fan.jpg",
    rating: 5,
    reviewCount: 14,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      fan: { price: 20000, description: "Comfortable fan version of Manchester United's home kit, built for casual wear and matchday support." },
      player: { price: 25000, description: "Authentic player edition Manchester United home kit with lightweight, performance-fit material used by professionals." }
    }
  },
  {
    id: 2,
    name: "Manchester United Away Jersey",
    club: "Manchester United",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Manchester United away kit featuring a clean, modern design made for away fixtures and supporter wear.",
    image: "images/jerseys/man-utd-away-fan.jpg",
    rating: 4,
    reviewCount: 6,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Fan version of Manchester United away kit for casual and supporter wear." },
      player: { price: 25000, description: "Player edition Manchester United away kit with match-level performance fabric." }
    }
  },
  {
    id: 3,
    name: "Real Madrid Away Jersey",
    club: "Real Madrid",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Real Madrid away kit designed for elite away performances, featuring a modern and stylish club design.",
    image: "images/jerseys/real-madrid-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      fan: { price: 20000, description: "Fan edition Real Madrid away jersey for supporters." },
      player: { price: 25000, description: "Authentic Real Madrid player edition away kit with elite performance materials." }
    }
  },
  {
    id: 4,
    name: "Real Madrid Home Jersey",
    club: "Real Madrid",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The classic white Real Madrid home kit representing tradition, success, and the legacy of the Bernabéu.",
    image: "images/jerseys/real-madrid-home-fan.jpg",
    rating: 5,
    reviewCount: 18,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Fan version of Real Madrid home kit for everyday supporters." },
      player: { price: 25000, description: "Player edition Real Madrid home kit with slim athletic fit and breathable performance fabric." }
    }
  },
  {
    id: 5,
    name: "Chelsea Home Jersey",
    club: "Chelsea",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Chelsea's iconic blue home kit representing Stamford Bridge heritage and club identity.",
    image: "images/jerseys/chelsea-home-fan.jpg",
    rating: 4,
    reviewCount: 9,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      fan: { price: 20000, description: "Chelsea fan home jersey designed for comfort and everyday wear." },
      player: { price: 25000, description: "Chelsea player edition home kit with elite match-ready materials." }
    }
  },
  {
    id: 6,
    name: "Chelsea Away Jersey",
    club: "Chelsea",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Chelsea away kit with a bold modern design built for away matches and supporter style.",
    image: "images/jerseys/chelsea-away-player.jpg",
    rating: 5,
    reviewCount: 5,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Chelsea fan away jersey for supporters." },
      player: { price: 25000, description: "Chelsea player edition away kit built for performance and speed." }
    }
  },
  {
    id: 7,
    name: "Barcelona Home Jersey",
    club: "Barcelona",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Barcelona home kit featuring the iconic Blaugrana stripes, symbolizing Catalan pride and football heritage.",
    image: "images/jerseys/barcelona-home-player.jpg",
    rating: 5,
    reviewCount: 31,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      fan: { price: 20000, description: "Barcelona fan home jersey for supporters." },
      player: { price: 25000, description: "Barcelona player edition home kit with premium match-spec materials." }
    }
  },
  {
    id: 8,
    name: "Arsenal Away Jersey",
    club: "Arsenal",
    category: "club",
    kit: "away",
    price: 20000,
    description: "The Gunners' away kit in a clean design with the iconic cannon crest. Great quality at an accessible price.",
    image: "images/jerseys/arsenal-away-fan.jpg",
    rating: 4,
    reviewCount: 4,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Arsenal fan away jersey — clean design with the cannon crest at an accessible price." },
      player: { price: 25000, description: "Arsenal player edition away kit with performance-grade fabric used at the Emirates Stadium." }
    }
  },
  {
    id: 9,
    name: "Arsenal Home Jersey",
    club: "Arsenal",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Emirates red. Arsenal's home kit representing the spirit and tradition of the Gunners.",
    image: "images/jerseys/arsenal-home-player.jpg",
    rating: 5,
    reviewCount: 6,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Arsenal fan home jersey in iconic Emirates red. Comfortable for matchday and everyday wear." },
      player: { price: 25000, description: "Arsenal player edition home kit — the same spec worn by the squad at the Emirates Stadium." }
    }
  },
  {
    id: 10,
    name: "Liverpool Home Jersey",
    club: "Liverpool",
    category: "club",
    kit: "home",
    price: 20000,
    description: "All red kit with white Nike swoosh and Standard Chartered sponsor. LFC crest on the left — clean, simple, iconic Anfield look.",
    image: "images/jerseys/liverpool-home-fan.jpg",
    rating: 5,
    reviewCount: 7,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "All red Liverpool fan home jersey. White Nike swoosh and Standard Chartered sponsor. Iconic Anfield look." },
      player: { price: 25000, description: "Liverpool player edition home kit with elite match-spec fabric and tailored athletic fit." }
    }
  },
  {
    id: 11,
    name: "Liverpool Away Jersey",
    club: "Liverpool",
    category: "club",
    kit: "away",
    price: 20000,
    description: "White base with teal and lime green accents. LFC crest — clean, modern contrast to the all-red home.",
    image: "images/jerseys/liverpool-away-player.jpg",
    rating: 5,
    reviewCount: 8,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Liverpool fan away jersey — white base with teal and lime green accents. A modern contrast to the all-red home." },
      player: { price: 25000, description: "Liverpool player edition away kit. White base with teal and lime green accents. Match-spec performance fabric." }
    }
  },
  {
    id: 12,
    name: "Atletico Madrid Away Jersey",
    club: "Atletico Madrid",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Black base with dark grey/teal geometric pattern. Teal Nike swoosh and Riyadh Air sponsor in white/teal.",
    image: "images/jerseys/athletico-away-player.jpg",
    rating: 5,
    reviewCount: 8,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Atletico Madrid fan away jersey — black base with dark grey/teal geometric pattern." },
      player: { price: 25000, description: "Atletico Madrid player edition away kit. Black base with teal geometric pattern and match-spec performance fabric." }
    }
  },
  {
    id: 13,
    name: "Atletico Madrid Home Jersey",
    club: "Atletico Madrid",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Red and white vertical stripes all over. Blue Nike swoosh. Main sponsor Riyadh Air in white across chest. Blue trim on collar and sleeves.",
    image: "images/jerseys/athletico-home-fan.jpg",
    rating: 5,
    reviewCount: 5,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Atletico Madrid fan home jersey — red and white vertical stripes, blue Nike swoosh and Riyadh Air sponsor." },
      player: { price: 25000, description: "Atletico Madrid player edition home kit. Iconic red and white stripes with match-spec performance fabric." }
    }
  },
  {
    id: 14,
    name: "Manchester City Home Jersey",
    club: "Manchester City",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Sky blue shirt all over. Navy blue Nike swoosh + Etihad Airways sponsor in white. Navy trim on collar and sleeves.",
    image: "images/jerseys/Manchestercity-home-fan.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Manchester City fan home jersey — sky blue with navy Nike swoosh and Etihad Airways sponsor." },
      player: { price: 25000, description: "Manchester City player edition home kit. Sky blue with elite performance fabric used at the Etihad Stadium." }
    }
  },
  {
    id: 15,
    name: "Manchester City Away Jersey",
    club: "Manchester City",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Black base with abstract light-blue and silver geometric pattern across the body. Silver Nike swoosh and Etihad sponsor in navy.",
    image: "images/jerseys/manchestercity-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Manchester City fan away jersey — black base with light-blue and silver geometric pattern." },
      player: { price: 25000, description: "Manchester City player edition away kit. Black base with abstract geometric design and match-spec performance fabric." }
    }
  },
  {
    id: 16,
    name: "Nigeria Home Jersey",
    club: "Nigeria",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Super Eagles' iconic green-and-white home kit. One of the most celebrated national team jerseys in Africa. Represent Nigeria with pride.",
    image: "images/jerseys/nigeria-home-fan.jpg",
    rating: 5,
    reviewCount: 41,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Nigeria Super Eagles fan home jersey — iconic green and white design. Represent with pride." },
      player: { price: 25000, description: "Nigeria Super Eagles player edition home kit. Premium match-spec fabric worn by the national squad." }
    }
  },
  {
    id: 17,
    name: "Nigeria Away Jersey",
    club: "Nigeria",
    category: "national",
    kit: "away",
    price: 20000,
    description: "The Super Eagles away strip in a bold colourway. Nigeria's away kit is always a fan favourite — don't miss out.",
    image: "images/jerseys/nigeria-away-fan.jpg",
    rating: 5,
    reviewCount: 28,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Nigeria Super Eagles fan away jersey in a bold colourway. Always a fan favourite." },
      player: { price: 25000, description: "Nigeria Super Eagles player edition away kit. Bold colourway with match-spec performance fabric." }
    }
  },
  {
    id: 18,
    name: "Brazil Home Jersey",
    club: "Brazil",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The iconic Seleção yellow. Brazil's home kit — the most celebrated football shirt in the world, now in your wardrobe.",
    image: "images/jerseys/brazil-home-fan.jpg",
    rating: 5,
    reviewCount: 35,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Brazil Seleção fan home jersey — the iconic yellow shirt. The most celebrated football shirt in the world." },
      player: { price: 25000, description: "Brazil Seleção player edition home kit. Iconic yellow with premium match-spec fabric worn by the national squad." }
    }
  },
  {
    id: 19,
    name: "France Home Jersey",
    club: "France",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Les Bleus' iconic home kit featuring France's classic navy design and national crest. Perfect for World Cup and Euro supporters.",
    image: "images/jerseys/france-home-player.jpg",
    rating: 5,
    reviewCount: 15,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "France Les Bleus fan home jersey — classic navy design with national crest. Perfect for tournament support." },
      player: { price: 25000, description: "France Les Bleus player edition home kit. Premium match-spec fabric worn by the national squad." }
    }
  },
  {
    id: 20,
    name: "England Home Jersey",
    club: "England",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Three Lions' home kit in classic white with the iconic English crest.",
    image: "images/jerseys/england-home-player.jpg",
    rating: 5,
    reviewCount: 23,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "England Three Lions fan home jersey — classic white with the iconic English crest." },
      player: { price: 25000, description: "England Three Lions player edition home kit. Authentic match jersey worn by the national squad." }
    }
  },
  {
    id: 21,
    name: "Spain Home Jersey",
    club: "Spain",
    category: "national",
    kit: "home",
    price: 20000,
    description: "La Roja's iconic red home kit with the Spanish national crest and bold design.",
    image: "images/jerseys/spain-home-player.jpg",
    rating: 5,
    reviewCount: 21,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Spain La Roja fan home jersey — iconic red design with the Spanish national crest." },
      player: { price: 25000, description: "Spain La Roja player edition home kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 22,
    name: "Portugal Home Jersey",
    club: "Portugal",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Portugal's home kit in Fan edition. Red shirt with the iconic Portuguese cross and national crest.",
    image: "images/jerseys/portugal-home-player.jpg",
    rating: 5,
    reviewCount: 19,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Portugal fan home jersey — red shirt with the iconic Portuguese cross and national crest." },
      player: { price: 25000, description: "Portugal player edition home kit. Authentic match jersey for the Portuguese squad." }
    }
  },
  {
    id: 23,
    name: "Argentina Home Jersey",
    club: "Argentina",
    category: "national",
    kit: "home",
    price: 20000,
    description: "La Selección's iconic white and blue stripes with the Argentine crest and national symbol.",
    image: "images/jerseys/argentina-home-player.jpg",
    rating: 5,
    reviewCount: 23,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Argentina La Selección fan home jersey — iconic white and blue stripes with the Argentine crest." },
      player: { price: 25000, description: "Argentina La Selección player edition home kit. Premium match jersey of the national team." }
    }
  },
  {
    id: 24,
    name: "Germany Home Jersey",
    club: "Germany",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Die Mannschaft's classic white home kit with the German national crest.",
    image: "images/jerseys/german-home-player.jpg",
    rating: 5,
    reviewCount: 25,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Germany Die Mannschaft fan home jersey — classic white with the national crest." },
      player: { price: 25000, description: "Germany Die Mannschaft player edition home kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 25,
    name: "Croatia Home Jersey",
    club: "Croatia",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Croatia's iconic red and white checkered home kit. The Fiery Checkers — fan edition.",
    image: "images/jerseys/croatia-home-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Croatia fan home jersey — iconic red and white checkered design. The Fiery Checkers." },
      player: { price: 25000, description: "Croatia player edition home kit. Authentic match jersey of the Croatian squad." }
    }
  },
  {
    id: 26,
    name: "Croatia Away Jersey",
    club: "Croatia",
    category: "national",
    kit: "away",
    price: 20000,
    description: "Croatia's away kit in a clean modern design. Fan edition.",
    image: "images/jerseys/croatia-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Croatia fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Croatia player edition away kit. Authentic match jersey of the Croatian squad." }
    }
  },
  {
    id: 27,
    name: "Netherlands Home Jersey",
    club: "Netherlands",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Oranje's iconic orange home kit with the Dutch national crest.",
    image: "images/jerseys/netherlands-home-player.jpg",
    rating: 5,
    reviewCount: 18,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Netherlands Oranje fan home jersey — iconic orange with the Dutch national crest." },
      player: { price: 25000, description: "Netherlands Oranje player edition home kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 28,
    name: "Netherlands Away Jersey",
    club: "Netherlands",
    category: "national",
    kit: "away",
    price: 20000,
    description: "Netherlands away kit in a modern clean design. Fan edition.",
    image: "images/jerseys/netherlands-away-player.jpg",
    rating: 5,
    reviewCount: 18,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Netherlands Oranje fan away jersey in a modern clean design." },
      player: { price: 25000, description: "Netherlands Oranje player edition away kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 29,
    name: "Morocco Home Jersey",
    club: "Morocco",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Atlas Lions' red home kit with the Moroccan national crest and star.",
    image: "images/jerseys/morocco-home-player.jpg",
    rating: 5,
    reviewCount: 28,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Morocco Atlas Lions fan home jersey — red kit with the national crest and star." },
      player: { price: 25000, description: "Morocco Atlas Lions player edition home kit. Authentic match jersey of the national squad." }
    }
  },
  {
    id: 30,
    name: "Morocco Away Jersey",
    club: "Morocco",
    category: "national",
    kit: "away",
    price: 20000,
    description: "Morocco Atlas Lions away kit in a bold modern design. Fan edition.",
    image: "images/jerseys/morocco-away-player.jpg",
    rating: 5,
    reviewCount: 28,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Morocco Atlas Lions fan away jersey in a bold modern design." },
      player: { price: 25000, description: "Morocco Atlas Lions player edition away kit. Premium match jersey for the national squad." }
    }
  },
  {
    id: 31,
    name: "Belgium Home Jersey",
    club: "Belgium",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Red Devils' iconic home kit with the Belgian national crest.",
    image: "images/jerseys/belgium-home-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Belgium Red Devils fan home jersey — iconic kit with the Belgian national crest." },
      player: { price: 25000, description: "Belgium Red Devils player edition home kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 32,
    name: "Belgium Away Jersey",
    club: "Belgium",
    category: "national",
    kit: "away",
    price: 20000,
    description: "The Red Devils' away kit in a clean modern design. Fan edition.",
    image: "images/jerseys/belgium-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Belgium Red Devils fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Belgium Red Devils player edition away kit. Premium match jersey for the national team." }
    }
  },
  {
    id: 33,
    name: "Aston Villa Home Jersey",
    club: "Aston Villa",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Claret and Blue. Aston Villa's iconic home kit in fan edition.",
    image: "images/jerseys/astonvilla-home-player.jpg",
    rating: 5,
    reviewCount: 21,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Aston Villa fan home jersey — iconic claret and blue design." },
      player: { price: 25000, description: "Aston Villa player edition home kit. Premium match-spec jersey." }
    }
  },
  {
    id: 34,
    name: "Al Nassr Home Jersey",
    club: "Al Nassr",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Pride of Saudi Arabia. Al Nassr's iconic gold and black home kit. Fan edition.",
    image: "images/jerseys/alnasr-home-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Al Nassr fan home jersey — iconic gold and black design. The Pride of Saudi Arabia." },
      player: { price: 25000, description: "Al Nassr player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 35,
    name: "Galatasaray Home Jersey",
    club: "Galatasaray",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Lions of Istanbul. Galatasaray's iconic red and yellow striped home kit. Fan edition.",
    image: "images/jerseys/galatasaray-home-player.jpg",
    rating: 5,
    reviewCount: 17,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Galatasaray fan home jersey — iconic red and yellow stripes. The Lions of Istanbul." },
      player: { price: 25000, description: "Galatasaray player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 36,
    name: "Galatasaray Away Jersey",
    club: "Galatasaray",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Galatasaray's away kit in fan edition.",
    image: "images/jerseys/galatasaray-away-player.jpg",
    rating: 5,
    reviewCount: 21,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Galatasaray fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Galatasaray player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 37,
    name: "Inter Milan Home Jersey",
    club: "Inter Milan",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Nerazzurri's iconic blue and black stripes. Inter Milan home kit in fan edition.",
    image: "images/jerseys/intermillan-home-player.jpg",
    rating: 5,
    reviewCount: 29,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Inter Milan fan home jersey — iconic blue and black Nerazzurri stripes." },
      player: { price: 25000, description: "Inter Milan player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 38,
    name: "Inter Milan Away Jersey",
    club: "Inter Milan",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Inter Milan's away kit in fan edition.",
    image: "images/jerseys/intermillan-away-player.jpg",
    rating: 5,
    reviewCount: 27,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Inter Milan fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Inter Milan player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 39,
    name: "Inter Miami Home Jersey",
    club: "Inter Miami",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Inter Miami's iconic pink and black home kit. Fan edition.",
    image: "images/jerseys/InterMiami-Home-player.jpg",
    rating: 5,
    reviewCount: 26,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Inter Miami fan home jersey — iconic pink and black design." },
      player: { price: 25000, description: "Inter Miami player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 40,
    name: "Inter Miami Away Jersey",
    club: "Inter Miami",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Inter Miami's away kit in fan edition.",
    image: "images/jerseys/InterMiami-away-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Inter Miami fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Inter Miami player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 41,
    name: "AC Milan Home Jersey",
    club: "AC Milan",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Rossoneri's iconic red and black stripes. AC Milan home kit in fan edition.",
    image: "images/jerseys/acmilan-home-player.jpg",
    rating: 5,
    reviewCount: 21,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "AC Milan fan home jersey — iconic red and black Rossoneri stripes." },
      player: { price: 25000, description: "AC Milan player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 42,
    name: "AC Milan Away Jersey",
    club: "AC Milan",
    category: "club",
    kit: "away",
    price: 20000,
    description: "AC Milan's away kit in fan edition.",
    image: "images/jerseys/acmilan-away-player.jpg",
    rating: 5,
    reviewCount: 21,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "AC Milan fan away jersey in a clean modern design." },
      player: { price: 25000, description: "AC Milan player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 43,
    name: "Napoli Home Jersey",
    club: "Napoli",
    category: "club",
    kit: "home",
    price: 20000,
    description: "SSC Napoli's iconic sky blue home kit. Fan edition.",
    image: "images/jerseys/napoli-home-player.jpg",
    rating: 5,
    reviewCount: 24,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Napoli fan home jersey — iconic sky blue design." },
      player: { price: 25000, description: "Napoli player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 44,
    name: "Roma Home Jersey",
    club: "Roma",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Giallorossi's iconic red and yellow home kit. Fan edition.",
    image: "images/jerseys/roma-home-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Roma fan home jersey — iconic red and yellow Giallorossi design." },
      player: { price: 25000, description: "Roma player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 45,
    name: "Bayer Leverkusen Home Jersey",
    club: "Bayer Leverkusen",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Bayer Leverkusen's iconic red and black home kit. Fan edition.",
    image: "images/jerseys/Leverkusen-home-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Bayer Leverkusen fan home jersey — iconic red and black design." },
      player: { price: 25000, description: "Bayer Leverkusen player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 46,
    name: "Bayer Leverkusen Away Jersey",
    club: "Bayer Leverkusen",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Bayer Leverkusen's away kit in fan edition.",
    image: "images/jerseys/Leverkusen-away-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Bayer Leverkusen fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Bayer Leverkusen player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 47,
    name: "Bayern Munich Home Jersey",
    club: "Bayern Munich",
    category: "club",
    kit: "home",
    price: 20000,
    description: "FC Bayern Munich's iconic red home kit. Fan edition.",
    image: "images/jerseys/bayernmunich-home-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Bayern Munich fan home jersey — iconic red design from the Allianz Arena." },
      player: { price: 25000, description: "Bayern Munich player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 48,
    name: "Bayern Munich Away Jersey",
    club: "Bayern Munich",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Bayern Munich's away kit in fan edition.",
    image: "images/jerseys/bayernmunich-away-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Bayern Munich fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Bayern Munich player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 49,
    name: "RB Leipzig Home Jersey",
    club: "RB Leipzig",
    category: "club",
    kit: "home",
    price: 20000,
    description: "RB Leipzig's iconic white and red home kit. Fan edition.",
    image: "images/jerseys/rbleipzig-home-player.jpg",
    rating: 5,
    reviewCount: 23,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "RB Leipzig fan home jersey — iconic white and red design." },
      player: { price: 25000, description: "RB Leipzig player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 50,
    name: "RB Leipzig Away Jersey",
    club: "RB Leipzig",
    category: "club",
    kit: "away",
    price: 20000,
    description: "RB Leipzig's away kit in fan edition.",
    image: "images/jerseys/rbleipzig-away-player.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "RB Leipzig fan away jersey in a clean modern design." },
      player: { price: 25000, description: "RB Leipzig player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 51,
    name: "Tottenham Hotspur Home Jersey",
    club: "Tottenham Hotspur",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Spurs' iconic white home kit with the Tottenham crest.",
    image: "images/jerseys/tottenham-home-player.jpg",
    rating: 5,
    reviewCount: 26,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Tottenham Hotspur fan home jersey — iconic white design with the Spurs crest." },
      player: { price: 25000, description: "Tottenham Hotspur player edition home kit. Premium match jersey." }
    }
  },
  {
    id: 52,
    name: "Tottenham Hotspur Away Jersey",
    club: "Tottenham Hotspur",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Tottenham's away kit in fan edition.",
    image: "images/jerseys/tottenham-away-player.jpg",
    rating: 5,
    reviewCount: 30,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Tottenham Hotspur fan away jersey in a clean modern design." },
      player: { price: 25000, description: "Tottenham Hotspur player edition away kit. Premium match jersey." }
    }
  },
  {
    id: 53,
    name: "Brighton Home Jersey",
    club: "Brighton",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Brighton and Hove Albion's iconic blue and white striped home kit. Fan edition.",
    image: "images/jerseys/Brighton-home-player.jpg",
    rating: 5,
    reviewCount: 26,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: { price: 20000, description: "Brighton fan home jersey — iconic blue and white stripes from the Amex Stadium." },
      player: { price: 25000, description: "Brighton player edition home kit. Premium match jersey." }
    }
  }
];

/* ─── Helpers ─────────────────────────────── */
function formatPrice(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

function getClubImage(club, kit) {
  const p = PRODUCTS.find(item => item.club === club && (!kit || item.kit === kit) && item.image);
  return p ? p.image : null;
}

function renderStars(rating, reviewCount) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const stars = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  return `<span class="stars">${stars}</span><span class="stars__count">(${reviewCount})</span>`;
}

function getUniqueClubs() {
  const clubs = [...new Set(PRODUCTS.map(p => p.club))];
  return clubs.sort();
}