// returns a FlipCards instance which does the "next" logic

const FlipCards = (function () {
  const data = [
    { front: "Uhr",             back: "die" },
    { front: "Stadtmitte",      back: "die" },
    { front: "Ort",             back: "der" },
    { front: "Flugzeug",        back: "das" },
    { front: "Zeit",            back: "die" },
    { front: "Kopfhörer",       back: "der" },
    { front: "Schwimmbad",      back: "das" },
    { front: "Schrank",         back: "der" },
    { front: "Braten",          back: "der" },
    { front: "Bar",             back: "die" },
    { front: "Bild",            back: "das" },
    { front: "Flasche",         back: "die" },
    { front: "Kugelschreiber",  back: "der" },
    { front: "Schirm",          back: "der" },
    { front: "Seife",           back: "die" },
    { front: "Zimmer",          back: "das" },
    { front: "Teppich",         back: "der" },
    { front: "Café",            back: "das" },
    { front: "Formular",        back: "das" },
    { front: "Bus",             back: "der" },
    { front: "Fleisch",         back: "das" },
    { front: "Koffer",          back: "der" },
    { front: "Maus",            back: "die" },
    { front: "Milch",           back: "die" },
    { front: "Gepäck",          back: "das" },
    { front: "Konzert",         back: "das" },
    { front: "Kuchen",          back: "der" },
    { front: "Haltestelle",     back: "die" },
    { front: "Rechnung",        back: "die" },
    { front: "Zentrum",         back: "das" },
    { front: "Telefon",         back: "das" },
    { front: "Laptop",          back: "der" },
    { front: "Computer",        back: "der" },
    { front: "Tee",             back: "der" },
    { front: "Rucksack",        back: "der" },
    { front: "Kneipe",          back: "der" },
    { front: "Schlüssel",       back: "der" },
    { front: "Orange",          back: "die" },
    { front: "Taxi",            back: "das" },
    { front: "Obst",            back: "das" },
    { front: "Schinken",        back: "der" },
    { front: "Boot",            back: "das" },
    { front: "Supermarkt",      back: "der" },
    { front: "Fehler",          back: "der" },
    { front: "Stift",           back: "der" },
    { front: "Ei",              back: "das" },
    { front: "Lampe",           back: "die" },
    { front: "Tomate",          back: "die" },
    { front: "Nummer",          back: "die" },
    { front: "Gleis",           back: "das" },
    { front: "Kino",            back: "das" },
    { front: "Schokolade",      back: "die" },
    { front: "Kette",           back: "die" },
    { front: "Hänchen",         back: "das" },
    { front: "Drucker",         back: "der" },
    { front: "Messer",          back: "das" },
    { front: "Notizbuch",       back: "das" },
    { front: "Löffel",          back: "der" },
    { front: "Dose",            back: "die" },
    { front: "Bahnsteig",       back: "der" },
    { front: "Post",            back: "die" },
    { front: "Käse",            back: "der" },
    { front: "Buch",            back: "das" },
    { front: "Tasche",          back: "die" },
    { front: "Marmelade",       back: "die" },
    { front: "Handy",           back: "das" },
    { front: "Tisch",           back: "der" },
    { front: "Bleistift",       back: "der" },
    { front: "Bier",            back: "das" },
    { front: "Kartoffel",       back: "die" },
    { front: "Bahnhof",         back: "der" },
    { front: "SMS",             back: "die" },
    { front: "Salat",           back: "der" },
    { front: "Fest",            back: "das" },
    { front: "Theater",         back: "das" },
    { front: "Apfel",           back: "der" },
    { front: "Bank",            back: "die" },
    { front: "Briefmarke",      back: "die" },
    { front: "Suppe",           back: "die" },
    { front: "Streichholz",     back: "das" },
    { front: "Fahrrad",         back: "das" },
    { front: "Polizei",         back: "die" },
    { front: "Tastatur",        back: "die" },
    { front: "Ampel",           back: "die" },
    { front: "Flughafen",       back: "der" },
    { front: "Wort",            back: "das" },
    { front: "E-Mail",          back: "die" },
    { front: "Sofa",            back: "das" },
    { front: "Couch",           back: "die" },
    { front: "Kissen",          back: "das" },
    { front: "Kalender",        back: "der" },
    { front: "Park",            back: "der" },
    { front: "Hönig",           back: "der" },
    { front: "Dom",             back: "der" },
    { front: "Termin",          back: "der" },
    { front: "Fotoaparat",      back: "der" },
    { front: "Kamera",          back: "die" },
    { front: "Tasse",           back: "die" },
    { front: "Stuhl",           back: "der" },
    { front: "S-Bahn",          back: "die" },
    { front: "U-Bahn",          back: "die" },
    { front: "Brot",            back: "das" },
    { front: "Weg",             back: "der" },
    { front: "Brücke",          back: "die" },
    { front: "Stadtplan",       back: "der" },
    { front: "Zug",             back: "der" },
    { front: "Butter",          back: "die" },
    { front: "Feuerzeug",       back: "das" },
    { front: "Bett",            back: "das" },
    { front: "Bildschirm",      back: "der" },
    { front: "Eis",             back: "das" },
    { front: "Navigator",       back: "das" },
    { front: "Auto",            back: "das" },
    { front: "Tag",             back: "der" },
    { front: "Fisch",           back: "der" },
    { front: "Sessel",          back: "der" },
    { front: "Schiff",          back: "das" },
    { front: "Restaurant",      back: "das" },
    { front: "Museum",          back: "das" },
    { front: "Brille",          back: "die" },
    { front: "Maske",           back: "die" },
  ];

  class FlipCards {
    constructor() {
      this.data = data;

      // just keeping track of what variables exist here
      this.index = undefined;
      this.current = undefined;
      this.flipped = undefined;
    }

    // returns the back of the current card or the front of next card
    next() {
      if (this.index == undefined) {
        this.index = 0;
        this.current = data[this.index];
        this.flipped = false;
        return this.current.front;
      }

      if (this.flipped) {
        this.index += 1;
        
        if (this.index >= this.data.length) {
          return "# Finished #";
        }

        this.current = data[this.index]
        this.flipped = false;
        return this.current.front;
      }

      this.flipped = true;
      return this.current.back;
    }
  }

  return new FlipCards();
})()
