/* ═══════════════════════════════════════════════
   SOPHTMADE — PRODUCT DATA
   One entry per club + kit (fan/player chosen in modal)
═══════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Manchester United Home Jersey",
    club: "Manchester United",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The iconic red of Old Trafford. This Fan version home kit features Manchester United's classic crest and bold red colourway. Breathable polyester fabric, perfect for matchdays and everyday wear.",
    image: "images/jerseys/man-utd-home-fan.jpg",
    rating: 5,
    reviewCount: 14,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The iconic red of Old Trafford. This Fan version home kit features Manchester United's classic crest and bold red colourway. Breathable polyester fabric, perfect for matchdays and everyday wear."
      },
      "player": {
        "price": 25000,
        "description": "The authentic Player edition of Man United's home kit. Same high-performance fabric worn by the players — lightweight, quick-dry, and tailored fit."
      }
    }
  },
  {
    id: 2,
    name: "Manchester United Away Jersey",
    club: "Manchester United",
    category: "club",
    kit: "away",
    price: 20000,
    description: "United's away strip in a fresh colourway. Fan edition — ideal for away days and casual wear. Features the club crest and sponsor badge.",
    image: "images/jerseys/man-utd-away-fan.jpg",
    rating: 4,
    reviewCount: 6,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "United's away strip in a fresh colourway. Fan edition — ideal for away days and casual wear. Features the club crest and sponsor badge."
      }
    }
  },
  {
    id: 3,
    name: "Real Madrid Away Jersey",
    club: "Real Madrid",
    category: "club",
    kit: "away",
    price: 25000,
    description: "Los Blancos' Player edition away kit. The same jersey worn by the first team — advanced Dri-Fit technology, precision-cut, with the iconic Real Madrid crest.",
    image: "images/jerseys/real-madrid-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      "player": {
        "price": 25000,
        "description": "Los Blancos' Player edition away kit. The same jersey worn by the first team — advanced Dri-Fit technology, precision-cut, with the iconic Real Madrid crest."
      }
    }
  },
  {
    id: 4,
    name: "Real Madrid Home Jersey",
    club: "Real Madrid",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The classic white of the Bernabeu. Fan edition of Real Madrid's home kit — clean, premium design with the golden badge.",
    image: "images/jerseys/real-madrid-home-fan.jpg",
    rating: 5,
    reviewCount: 18,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The classic white of the Bernabeu. Fan edition of Real Madrid's home kit — clean, premium design with the golden badge."
      }
    }
  },
  {
    id: 5,
    name: "Chelsea Home Jersey",
    club: "Chelsea",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The famous Chelsea blue. Fan edition home kit with the iconic lion crest. Comfortable polyester blend, great for the stadium or the street.",
    image: "images/jerseys/chelsea-home-fan.jpg",
    rating: 4,
    reviewCount: 9,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The famous Chelsea blue. Fan edition home kit with the iconic lion crest. Comfortable polyester blend, great for the stadium or the street."
      }
    }
  },
  {
    id: 6,
    name: "Chelsea Away Jersey",
    club: "Chelsea",
    category: "club",
    kit: "away",
    price: 25000,
    description: "Chelsea's Player edition away kit. Authentic match-spec jersey in a striking colourway — the same quality as what the squad wears at Stamford Bridge.",
    image: "images/jerseys/chelsea-away-player.jpg",
    rating: 5,
    reviewCount: 5,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 25000,
        "description": "Chelsea's Player edition away kit. Authentic match-spec jersey in a striking colourway — the same quality as what the squad wears at Stamford Bridge."
      }
    }
  },
  {
    id: 7,
    name: "Barcelona Home Jersey",
    club: "Barcelona",
    category: "club",
    kit: "home",
    price: 25000,
    description: "The famous Blaugrana stripes. Player edition of Barca's iconic home kit — elite-grade fabric, precision stitching, and the Catalan crest worn with pride.",
    image: "images/jerseys/barcelona-home-player.jpg",
    rating: 5,
    reviewCount: 31,
    sizes: ["S","M","L","XL","XXL"],
    featured: true,
    versions: {
      "player": {
        "price": 25000,
        "description": "The famous Blaugrana stripes. Player edition of Barca's iconic home kit — elite-grade fabric, precision stitching, and the Catalan crest worn with pride."
      }
    }
  },
  {
    id: 8,
    name: "Barcelona Away Jersey",
    club: "Barcelona",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Barca's away colours in Fan edition. Clean design with the full Barcelona crest and sponsor badge. Stand out from the crowd.",
    image: "images/jerseys/barcelona-away-fan.jpg",
    rating: 4,
    reviewCount: 7,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "Barca's away colours in Fan edition. Clean design with the full Barcelona crest and sponsor badge. Stand out from the crowd."
      }
    }
  },
  {
    id: 9,
    name: "PSG Away Jersey",
    club: "PSG",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Paris Saint-Germain's away strip. Fan edition in a clean, modern colourway. Features the Eiffel Tower crest and all-over print detail.",
    image: "images/jerseys/psg-away-fan.jpg",
    rating: 5,
    reviewCount: 12,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "Paris Saint-Germain's away strip. Fan edition in a clean, modern colourway. Features the Eiffel Tower crest and all-over print detail."
      }
    }
  },
  {
    id: 10,
    name: "PSG Home Jersey",
    club: "PSG",
    category: "club",
    kit: "home",
    price: 25000,
    description: "The deep navy of the Parc des Princes. Player edition home kit — the authentic match jersey with the iconic red and blue sash design.",
    image: "images/jerseys/psg-home-player.jpg",
    rating: 5,
    reviewCount: 10,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 25000,
        "description": "The deep navy of the Parc des Princes. Player edition home kit — the authentic match jersey with the iconic red and blue sash design."
      }
    }
  },
  {
    id: 11,
    name: "Arsenal Away Jersey",
    club: "Arsenal",
    category: "club",
    kit: "away",
    price: 20000,
    description: "The Gunners' away kit in Fan edition. Arsenal's clean away design with the cannon crest. Great quality at an accessible price.",
    image: "images/jerseys/arsenal-away-fan.jpg",
    rating: 4,
    reviewCount: 4,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The Gunners' away kit in Fan edition. Arsenal's clean away design with the cannon crest. Great quality at an accessible price."
      }
    }
  },
  {
    id: 12,
    name: "Arsenal Home Jersey",
    club: "Arsenal",
    category: "club",
    kit: "home",
    price: 24500,
    description: "Emirates red. Arsenal's Player edition home kit — the same spec worn by the squad at the Emirates Stadium.",
    image: "images/jerseys/arsenal-home-player.jpg",
    rating: 5,
    reviewCount: 6,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 24500,
        "description": "Emirates red. Arsenal's Player edition home kit — the same spec worn by the squad at the Emirates Stadium."
      }
    }
  },
  {
    id: 13,
    name: "Liverpool Home Jersey",
    club: "Liverpool",
    category: "club",
    kit: "home",
    price: 20000,
    description: "All red kit, White Nike swoosh and Standard Chartered Sponsor. LFC crest on the left, clean, simple, iconic Anfield look.",
    image: "images/jerseys/liverpool-home-fan.jpg",
    rating: 5,
    reviewCount: 7,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "All red kit, White Nike swoosh and Standard Chartered Sponsor. LFC crest on the left, clean, simple, iconic Anfield look."
      }
    }
  },
  {
    id: 14,
    name: "Liverpool Away Jersey",
    club: "Liverpool",
    category: "club",
    kit: "away",
    price: 25000,
    description: "White base with teal and lime green accents. LFC crest, clean, modern contrast to the all-red home.",
    image: "images/jerseys/liverpool-away-player.jpg",
    rating: 5,
    reviewCount: 8,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 25000,
        "description": "White base with teal and lime green accents. LFC crest, clean, modern contrast to the all-red home."
      }
    }
  },
  {
    id: 15,
    name: "Atletico Madrid Away Jersey",
    club: "Atletico Madrid",
    category: "club",
    kit: "away",
    price: 25000,
    description: "Black base with dark grey/teal geometric pattern. Teal Nike swoosh and Riyadh Air sponsor in white/teal.",
    image: "images/jerseys/athletico-away-player.jpg",
    rating: 5,
    reviewCount: 8,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 25000,
        "description": "Black base with dark grey/teal geometric pattern. Teal Nike swoosh and Riyadh Air sponsor in white/teal."
      }
    }
  },
  {
    id: 16,
    name: "Atletico Madrid Home Jersey",
    club: "Atletico Madrid",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Red and white vertical stripes all over. Blue Nike swoosh and Nike logo. Main sponsor Riyadh Air in white across chest. Blue trim on collar and sleeves.",
    image: "images/jerseys/athletico-home-fan.jpg",
    rating: 5,
    reviewCount: 5,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "Red and white vertical stripes all over. Blue Nike swoosh and Nike logo. Main sponsor Riyadh Air in white across chest. Blue trim on collar and sleeves."
      }
    }
  },
  {
    id: 17,
    name: "Manchester City Home Jersey",
    club: "Manchester City",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Sky blue shirt all over. Navy blue Nike swoosh + Etihad Airways Sponsor in white. Navy trim on collar + sleeves.",
    image: "images/jerseys/Manchestercity-home-fan.jpg",
    rating: 5,
    reviewCount: 20,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "Sky blue shirt all over. Navy blue Nike swoosh + Etihad Airways Sponsor in white. Navy trim on collar + sleeves."
      }
    }
  },
  {
    id: 18,
    name: "Manchester City Away Jersey",
    club: "Manchester City",
    category: "club",
    kit: "away",
    price: 25000,
    description: "Black base with Abstract light-blue + silver geometricpattern across the body. Silver Nike Swoosh + Ethihad sponsor in navy.",
    image: "images/jerseys/manchestercity-away-player.jpg",
    rating: 5,
    reviewCount: 22,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "player": {
        "price": 25000,
        "description": "Black base with Abstract light-blue + silver geometricpattern across the body. Silver Nike Swoosh + Ethihad sponsor in navy."
      }
    }
  },
  {
    id: 19,
    name: "Nigeria Home Jersey",
    club: "Nigeria",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Super Eagles' iconic green-and-white home kit. Fan edition — one of the most celebrated national team jerseys in Africa. Represent Nigeria with pride.",
    image: "images/jerseys/nigeria-home-fan.jpg",
    rating: 5,
    reviewCount: 41,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The Super Eagles' iconic green-and-white home kit. Fan edition — one of the most celebrated national team jerseys in Africa. Represent Nigeria with pride."
      }
    }
  },
  {
    id: 20,
    name: "Nigeria Away Jersey",
    club: "Nigeria",
    category: "national",
    kit: "away",
    price: 20000,
    description: "The Super Eagles away strip. Fan edition in a bold colourway. Nigeria's away kit is always a fan favourite — don't miss out.",
    image: "images/jerseys/nigeria-away-fan.jpg",
    rating: 5,
    reviewCount: 28,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The Super Eagles away strip. Fan edition in a bold colourway. Nigeria's away kit is always a fan favourite — don't miss out."
      }
    }
  },
  {
    id: 21,
    name: "Brazil Home Jersey",
    club: "Brazil",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The iconic Seleção yellow. Brazil's home kit in Fan edition — the most celebrated football shirt in the world, now in your wardrobe.",
    image: "images/jerseys/brazil-home-fan.jpg",
    rating: 5,
    reviewCount: 35,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      "fan": {
        "price": 20000,
        "description": "The iconic Seleção yellow. Brazil's home kit in Fan edition — the most celebrated football shirt in the world, now in your wardrobe."
      },
      "player": {
        "price": 25000,
        "description": "The iconic Seleção yellow. Brazil's Player edition home kit — premium match-spec fabric worn by the national squad."
      }
    }
  },

  /* ─── NATIONAL TEAMS (IDs 22–31) ─── */
  {
    id: 22,
    name: "France Home Jersey",
    club: "France",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Les Bleus' iconic home kit. Fan edition featuring France's classic navy design and national crest. Perfect for World Cup and Euro supporters.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Les Bleus' iconic home kit. Fan edition featuring France's classic navy design and national crest. Perfect for World Cup and Euro supporters."
      },
      player: {
        price: 25000,
        description: "France Player edition jersey. Premium match-spec fabric worn by the national squad."
      }
    }
  },
  {
    id: 23,
    name: "England Home Jersey",
    club: "England",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Three Lions' home kit. Fan edition in classic white with the iconic English crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Three Lions' home kit. Fan edition in classic white with the iconic English crest."
      },
      player: {
        price: 25000,
        description: "England Player edition. Authentic match jersey worn by the Three Lions."
      }
    }
  },
  {
    id: 24,
    name: "Spain Home Jersey",
    club: "Spain",
    category: "national",
    kit: "home",
    price: 20000,
    description: "La Roja's iconic red home kit. Fan edition with the Spanish national crest and bold design.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "La Roja's iconic red home kit. Fan edition with the Spanish national crest and bold design."
      },
      player: {
        price: 25000,
        description: "Spain Player edition. Premium match jersey for the Spanish national team."
      }
    }
  },
  {
    id: 25,
    name: "Portugal Home Jersey",
    club: "Portugal",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Portugal's home kit in Fan edition. Red shirt with the iconic Portuguese cross and national crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Portugal's home kit in Fan edition. Red shirt with the iconic Portuguese cross and national crest."
      },
      player: {
        price: 25000,
        description: "Portugal Player edition. Authentic match jersey for the Portuguese squad."
      }
    }
  },
  {
    id: 26,
    name: "Argentina Home Jersey",
    club: "Argentina",
    category: "national",
    kit: "home",
    price: 20000,
    description: "La Selección's iconic white and blue stripes. Fan edition with the Argentine crest and national symbol.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "La Selección's iconic white and blue stripes. Fan edition with the Argentine crest and national symbol."
      },
      player: {
        price: 25000,
        description: "Argentina Player edition. Premium match jersey of the national team."
      }
    }
  },
  {
    id: 27,
    name: "Germany Home Jersey",
    club: "Germany",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Die Mannschaft's classic white home kit. Fan edition with the German national crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Die Mannschaft's classic white home kit. Fan edition with the German national crest."
      },
      player: {
        price: 25000,
        description: "Germany Player edition. Premium match jersey for Die Mannschaft."
      }
    }
  },
  {
    id: 28,
    name: "Croatia Home Jersey",
    club: "Croatia",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Fiery Checkers. Croatia's iconic red and white checkered home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Fiery Checkers. Croatia's iconic red and white checkered home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Croatia Player edition. Authentic match jersey of the Croatian squad."
      }
    }
  },
  {
    id: 29,
    name: "Netherlands Home Jersey",
    club: "Netherlands",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Oranje's iconic orange home kit. Fan edition with the Dutch national crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Oranje's iconic orange home kit. Fan edition with the Dutch national crest."
      },
      player: {
        price: 25000,
        description: "Netherlands Player edition. Premium match jersey for Oranje."
      }
    }
  },
  {
    id: 30,
    name: "Morocco Home Jersey",
    club: "Morocco",
    category: "national",
    kit: "home",
    price: 20000,
    description: "Atlas Lions' red home kit. Fan edition with the Moroccan national crest and star.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Atlas Lions' red home kit. Fan edition with the Moroccan national crest and star."
      },
      player: {
        price: 25000,
        description: "Morocco Player edition. Authentic match jersey of the Atlas Lions."
      }
    }
  },
  {
    id: 31,
    name: "Belgium Home Jersey",
    club: "Belgium",
    category: "national",
    kit: "home",
    price: 20000,
    description: "The Red Devils' iconic home kit. Fan edition with the Belgian national crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Red Devils' iconic home kit. Fan edition with the Belgian national crest."
      },
      player: {
        price: 25000,
        description: "Belgium Player edition. Premium match jersey for the Red Devils."
      }
    }
  },

  /* ─── CLUB TEAMS (IDs 32–55) ─── */
  {
    id: 32,
    name: "Aston Villa Home Jersey",
    club: "Aston Villa",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Claret & Blue. Aston Villa's iconic home kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Claret & Blue. Aston Villa's iconic home kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Aston Villa Player edition home kit. Premium match-spec jersey."
      }
    }
  },
  {
    id: 33,
    name: "Aston Villa Away Jersey",
    club: "Aston Villa",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Aston Villa's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Aston Villa's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Aston Villa Player edition away kit."
      }
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
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Pride of Saudi Arabia. Al Nassr's iconic gold and black home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Al Nassr Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 35,
    name: "Al Nassr Away Jersey",
    club: "Al Nassr",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Al Nassr's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Al Nassr's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Al Nassr Player edition away kit."
      }
    }
  },
  {
    id: 36,
    name: "Galatasaray Home Jersey",
    club: "Galatasaray",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Lions of Istanbul. Galatasaray's iconic red and yellow striped home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Lions of Istanbul. Galatasaray's iconic red and yellow striped home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Galatasaray Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 37,
    name: "Galatasaray Away Jersey",
    club: "Galatasaray",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Galatasaray's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Galatasaray's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Galatasaray Player edition away kit."
      }
    }
  },
  {
    id: 38,
    name: "Inter Milan Home Jersey",
    club: "Inter Milan",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Nerazzurri's iconic blue and black stripes. Inter Milan home kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Nerazzurri's iconic blue and black stripes. Inter Milan home kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Inter Milan Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 39,
    name: "Inter Milan Away Jersey",
    club: "Inter Milan",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Inter Milan's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Inter Milan's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Inter Milan Player edition away kit."
      }
    }
  },
  {
    id: 40,
    name: "Inter Miami Home Jersey",
    club: "Inter Miami",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Inter Miami's iconic pink and black home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Inter Miami's iconic pink and black home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Inter Miami Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 41,
    name: "Inter Miami Away Jersey",
    club: "Inter Miami",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Inter Miami's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Inter Miami's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Inter Miami Player edition away kit."
      }
    }
  },
  {
    id: 42,
    name: "AC Milan Home Jersey",
    club: "AC Milan",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Rossoneri's iconic red and black stripes. AC Milan home kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Rossoneri's iconic red and black stripes. AC Milan home kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "AC Milan Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 43,
    name: "AC Milan Away Jersey",
    club: "AC Milan",
    category: "club",
    kit: "away",
    price: 20000,
    description: "AC Milan's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "AC Milan's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "AC Milan Player edition away kit."
      }
    }
  },
  {
    id: 44,
    name: "Napoli Home Jersey",
    club: "Napoli",
    category: "club",
    kit: "home",
    price: 20000,
    description: "SSC Napoli's iconic sky blue home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "SSC Napoli's iconic sky blue home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Napoli Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 45,
    name: "Napoli Away Jersey",
    club: "Napoli",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Napoli's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Napoli's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Napoli Player edition away kit."
      }
    }
  },
  {
    id: 46,
    name: "Roma Home Jersey",
    club: "Roma",
    category: "club",
    kit: "home",
    price: 20000,
    description: "The Giallorossi's iconic red and yellow home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "The Giallorossi's iconic red and yellow home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Roma Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 47,
    name: "Roma Away Jersey",
    club: "Roma",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Roma's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Roma's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Roma Player edition away kit."
      }
    }
  },
  {
    id: 48,
    name: "Bayer Leverkusen Home Jersey",
    club: "Bayer Leverkusen",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Bayer Leverkusen's iconic red and black home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Bayer Leverkusen's iconic red and black home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Bayer Leverkusen Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 49,
    name: "Bayer Leverkusen Away Jersey",
    club: "Bayer Leverkusen",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Bayer Leverkusen's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Bayer Leverkusen's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Bayer Leverkusen Player edition away kit."
      }
    }
  },
  {
    id: 50,
    name: "Bayern Munich Home Jersey",
    club: "Bayern Munich",
    category: "club",
    kit: "home",
    price: 20000,
    description: "FC Bayern Munich's iconic red home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "FC Bayern Munich's iconic red home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "Bayern Munich Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 51,
    name: "Bayern Munich Away Jersey",
    club: "Bayern Munich",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Bayern Munich's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Bayern Munich's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Bayern Munich Player edition away kit."
      }
    }
  },
  {
    id: 52,
    name: "RB Leipzig Home Jersey",
    club: "RB Leipzig",
    category: "club",
    kit: "home",
    price: 20000,
    description: "RB Leipzig's iconic white and red home kit. Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "RB Leipzig's iconic white and red home kit. Fan edition."
      },
      player: {
        price: 25000,
        description: "RB Leipzig Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 53,
    name: "RB Leipzig Away Jersey",
    club: "RB Leipzig",
    category: "club",
    kit: "away",
    price: 20000,
    description: "RB Leipzig's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "RB Leipzig's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "RB Leipzig Player edition away kit."
      }
    }
  },
  {
    id: 54,
    name: "Tottenham Hotspur Home Jersey",
    club: "Tottenham Hotspur",
    category: "club",
    kit: "home",
    price: 20000,
    description: "Spurs' iconic white home kit. Fan edition with the Tottenham crest.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Spurs' iconic white home kit. Fan edition with the Tottenham crest."
      },
      player: {
        price: 25000,
        description: "Tottenham Player edition home kit. Premium match jersey."
      }
    }
  },
  {
    id: 55,
    name: "Tottenham Hotspur Away Jersey",
    club: "Tottenham Hotspur",
    category: "club",
    kit: "away",
    price: 20000,
    description: "Tottenham's away kit in Fan edition.",
    image: null,
    rating: 5,
    reviewCount: 0,
    sizes: ["S","M","L","XL","XXL"],
    featured: false,
    versions: {
      fan: {
        price: 20000,
        description: "Tottenham's away kit in Fan edition."
      },
      player: {
        price: 25000,
        description: "Tottenham Player edition away kit."
      }
    }
  }
];

/* ─── Helper: format price as ₦ ─────────────── */
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

/* ─── Helper: render star rating ────────────── */
function renderStars(rating, reviewCount) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const stars = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  return `<span class="stars">${stars}</span><span class="stars__count">(${reviewCount})</span>`;
}

/* ─── Helper: get unique clubs ───────────────── */
function getUniqueClubs() {
  const clubs = [...new Set(PRODUCTS.map(p => p.club))];
  return clubs.sort();
}
