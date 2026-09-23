// ============================================================
//  CONFIGURATIE — pas hier alles aan voor jullie tocht
// ============================================================

export const DEBUG_MODE = false;

export const PIN = "1956";
export const DEBUG_PIN = "9000";
// Nog doen: tekst bij pincode aanpassen 
// Tekst om te vertellen: papa, gefeliciteerd. We hebben een heel leuk kadootje voor je. 
// Alleen hadden we die voor de zekerheid opgeborgen in een kistje. Met een slot er omheen, zodat het extra veilig is. Maar nu zijn we de code kwijt. 
// We hebben gelukkig wel een manier voor je om de code te achterhalen. Daar kan deze tablet je bij helpen. Heel veel succes.

export const WELCOME = {
  title: "Opa Matt ~ 70 jaar!",
  message:
    "Lieve opa Matt, ons pap,\n\nGefeliciteerd met je 70ste verjaardag!\n\n Om de code te kraken ga je een reis maken. Onderweg kom je allerlei opdrachten tegen, die je zonder gevaar voor eigen leven moeten oplossen!\n Gelukkig hoef je dat niet alleen te doen: jullie gaan met z'n allen samen de uitdaging aan. Het kompas wijst jullie de weg: zet hem op!\n\n"
    + "BELANGRIJK:\n"
    + "- Het kompas moet in het begin kalibreren. Het kan dan de verkeerde richting op wijzen of minder nauwkeurig zijn.\n"
    + "- Loop eerst een tiental meters MET DE APP OPEN OP HET SCHERM. Eenmaal gekalibreerd blijft het kompas werken.\n"
    + "- Vanaf dat moment hoef je de app niet continu open te hebben om batterij te besparen.\n"
    + "- Onder het kompas staat hoe ver de locatie is.\n"
    + "- Hoe dichter jullie bij jullie doel zijn, hoe nauwkeuriger het kompas wordt.\n\n"
    + "Veel plezier en veel succes!",
  photo: null, // Zet hier het pad naar een foto, bijv. "/photo.jpg"
};

export const STOPS = [

    {
    name: "Speeltuin Neptunus",
    lat: 51.838921,
    lng: 5.832842,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "t1n7",
    puzzle: {
      type: "text",
      question: "1 + 1 = ?",
      answer: "2",
      hints: ["Gebruik een rekenmachine"],
    },
    completeMessage: "Geweldig! Jullie eerste stop zit erop! Op naar de volgende stop.",
  },
  {
    name: "Midden in Planetenpark",
    lat: 51.838292,
    lng: 5.830611,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "m1p7",
    puzzle: {
      type: "text",
      question: "Jullie eerste echte vakantie samen: welke stad was dat?",
      answer: "amsterdam",
      hints: ["De stad staat bekend om zijn grachten en fietsen.", "Het was ergens in Nederland, de hoofdstad."],
    },
    completeMessage: "Wat een mooie herinnering! Jullie zijn er bijna...",
  },
  {
    name: "Speeltuin 2",
    lat: 51.8373541,
    lng: 5.8295025,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "s2p7",
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Dit was speeltuin 2! Op naar de volgende stop.",
  },
  {
    name: "Vogeltjes?",
    lat: 51.8383303,
    lng: 5.8280723,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "v0g7",
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Had je toevallig vogeltjes kunnen spotten?",
  },
  {
    name: "Filimo",
    lat: 51.836357039896214,
    lng: 5.824969690886946,
    arrivalRadius: 20,
    showCat: true,
    cheatCode: "f1l7",
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Filimo! Op naar de volgende stop.",
  },
  {
    name: "Steegje Lanteerne",
    lat: 51.835570,
    lng: 5.823362,
    arrivalRadius: 15,
    showCat: true,
    cheatCode: "l4n7",
    puzzle: {
      type: "text",
      question: "Wat is 1 + 1?",
      answer: "2",
      hints: ["Het antwoord is een getal."],
    },
    completeMessage: "Steegje Lanteerne! Op naar de volgende stop.",
  },
  {
    name: "Er was eens...", //adres: Beerschemaasweg 55, 6545 AC Nijmegen
    // Nog doen: 
    // 2. Aantal antwoorden aanpassen, hij kan nu niet omgaan met dat er foute antwoorden tussen staan.
    lat: 51.741462, 
    lng: 5.748668,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "r2e9",
    arrivalMessage: "Lang geleden, heel lang geleden, op een boerderij in een heel klein dorpje werd een kleine Martien geboren. Hij groeide op tot een bebaarde jongeman en ontmoette zijn prinses uit Langenboom. Samen kregen ze twee draakjes van kinderen. Elke week passen ze op de kleinkaboutertjes en leven ze nog lang en gelukkig. \n\n"
      + "Opdracht 1 - Herken jullie baby foto's!\n"
      + "- Zet jullie foto's in de juiste volgorde. Begin met de oudste persoon en eindig met de jongste.\n"
      + "- Let op: er staan ook foute foto's tussen. Maar dat betekent niet dat jullie ze niet kennen.\n"
      + "- Jullie krijgen te zien hoeveel antwoorden jullie goed hebben.\n"
      + "- Klik op de foto om te vergroten. Klik nog een keer om het weer te verkleinen.\n\n"
      + "Komen jullie er niet uit? Onder 'Hint tonen' staat welke foto's de foute afleiders zijn.\n",
     
    puzzle: {
      type: "photo-order",
      question: "Zet de foto's in de juiste chronologische volgorde van de oudste persoon naar de jongste.\n\n",
      photos: [
        { label: "A", url: `${import.meta.env.BASE_URL}tijdvliegt/A.jpg` }, // Erik
        { label: "B", url: `${import.meta.env.BASE_URL}tijdvliegt/B.jpg` }, // Moeder Sanne
        { label: "C", url: `${import.meta.env.BASE_URL}tijdvliegt/C.jpg` }, // Jeanne
        { label: "D", url: `${import.meta.env.BASE_URL}tijdvliegt/D.jpg` }, // Rachid
        { label: "E", url: `${import.meta.env.BASE_URL}tijdvliegt/E.jpg` }, // Nora 
        { label: "F", url: `${import.meta.env.BASE_URL}tijdvliegt/F.jpg` }, // Bas
        { label: "G", url: `${import.meta.env.BASE_URL}tijdvliegt/G.jpg` }, // Astrid
        { label: "H", url: `${import.meta.env.BASE_URL}tijdvliegt/H.jpg` }, // Susanne
        { label: "I", url: `${import.meta.env.BASE_URL}tijdvliegt/I.jpg` }, // Matt
        { label: "J", url: `${import.meta.env.BASE_URL}tijdvliegt/J.jpg` }, // Sarah
        { label: "K", url: `${import.meta.env.BASE_URL}tijdvliegt/K.jpg` }, // Cody
        { label: "L", url: `${import.meta.env.BASE_URL}tijdvliegt/L.jpg` }, // Sanne
        { label: "M", url: `${import.meta.env.BASE_URL}tijdvliegt/M.jpg` }, // Vader Sanne
        { label: "N", url: `${import.meta.env.BASE_URL}tijdvliegt/N.jpg` }, // Robin
      ],
      answer: "ICDLHANFK",
      hints: ["De volgende foto's zijn afleiders: B, E, G, J, M"],
    },
    completeMessage: "Dit was Beerschemaasweg 55! \n\n Op naar de volgende stop.",
  },
  {
    name: "Je moet een Risk durven nemen", // Adres: Oefenhokje van Tennisvereniging Esteren, Karweg 2, 5364 MZ Escharen
    // Nog doen: 
    // 2. Puzzel aanpassen. 
    // 3. Foto grafitti toevoegen. 
    // 4. Bij goede antwoord tekst aanpassen naar 'Dat klopt!'5. Foto toevoegen met goede antwoorden omcirkeld 6. Foto's toevoegen van sport en spel bij startpagina
    lat: 51.740569, 
    lng: 5.739456,
    arrivalRadius: 5,
    showCat: true,
    cheatCode: "8ks4",
    arrivalMessage: "Onze Matt houdt wel van een spelletje. Vroeger voetbalde hij zelf, maar nu kijkt het vooral: het liefste als Bas speelt. Maar hij zit niet stil: tennis, dynamic tennis, padel; de ballen vliegen hem om de oren. En hij is nog steeds te porren voor een (kaart)spelletje, waarbij hij een risico niet uit de weg gaat. Maar lukt het hem ook om dit spelletje te winnen? \n",
    puzzle: {
      type: "multi",
      question: "Onderstaande foto komt niet helemaal overeen met de werkelijkheid. De muurschildering ziet er in het echt ietsjes anders uit. Kunnen jullie alle verschillen vinden? \n\n Tip: klik op de foto om te vergroten of te verkleinen.",
      questions: [
        { question: "Hoeveel verschillen zijn er?", answers: ["7"] },
            ],
    },
    completeMessage: "Dit was het oefenhok! Op naar de volgende stop.",
  },
    {
    name: "Een lange loopbaan", //Adres: Kantine van Tennisvereniging Esteren, Karweg 2, 5364 MZ Escharen
    // Nog doen: 
    // 2. Puzzel tekst aanpassen 
    // 3. Foto toevoegen prins Matt en/of LOE na afronden opdracht 
    // 4. Foto toevoegen van werk bij startpagina 5. Tweede hint verwijderen
    lat: 51.740666, 
    lng: 5.740385,
    arrivalRadius: 5,
    showCat: true,
    cheatCode: "b9x4",
    arrivalMessage: "Opa Matt geniet nu van een welverdiend persioen, maar hiervoor was hij beroepsambtenaar. Hij werd over de hele regio gestationeerd, zoals helemaal in Beers en zelfs in Uden! Maar onze Matt heeft voor nog een bijzondere organisatie gewerkt. Weten jullie welke? \n\nOpdracht: \n Volg de drie aanwijzingen om het antwoord te vinden.",
    puzzle: {
      type: "text",
      question: "Aanwijzingen:\n 1. NOG MAKEN (E) \n 2. NOG MAKEN (L) \n 3. NOG MAKEN (O) \n\n" 
      +"Waarvoor heeft Matt jarenlang 'gewerkt'?",
      answer: "LOE",
      hints: ["Jullie hebben 3 aanwijzingen gekregen en het antwoord bestaat uit 3 letters. Toevallig, hè?", "VERWIJDEREN"],
    },
    completeMessage: "Dit was de kantine! Op naar de volgende stop.",
  }, 
  {
    name: "Van Classic Rock tot The Rock", //Adres: 't Dorpshuus, Meester Bongaardsweg 2, 5364 PM Escharen
    // Nog doen: 
    // 2. Foto's toevoegen startscherm van Status Quo en Alice Cooper 
    // 3. Foto's eindscherm toevoegen van Cody's making off 4. Optioneel: volgorde films aanpassen
    lat: 51.744164, 
    lng: 5.745508,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "p3n7",
    arrivalMessage: "Onze Matt houdt wel van wat cultuur op z'n tijd. De ene keer staat hij te headbangen op classic rock, de andere keer host hij mee in de polonaise. Films kijkt hij ook graag, tenminste... sommige films. Er moet wel genoeg actie in zitten. Dat is bij de films in de volgende opdracht niet altijd het geval, dus hij kan vast wat hulp gebruiken... Kunnen jullie raden welke films hier uitgebeeld worden?\n\n -Klik op de foto om te vergroten of verkleinen.\n- Komen jullie er niet uit, dan staat onder 'Hint tonen' een lijst met films, waar de goede antwoorden tussen staan.\n\nDisclaimer: No babies were harmed in the making of this quiz.",
    puzzle: {
      type: "photo-quiz",
      question: "Welke film zie je op elke foto?",
      photos: [
        { url: `${import.meta.env.BASE_URL}filmquiz/1.jpg`, answer: "Lion King" },
        { url: `${import.meta.env.BASE_URL}filmquiz/2.jpg`, answer: "Terminator" },
        { url: `${import.meta.env.BASE_URL}filmquiz/3.jpg`, answer: "Life of Pi" },
        { url: `${import.meta.env.BASE_URL}filmquiz/4.jpg`, answer: "Godzilla" },
        { url: `${import.meta.env.BASE_URL}filmquiz/5.jpg`, answer: "E.T." },
        { url: `${import.meta.env.BASE_URL}filmquiz/6.jpg`, answer: "shining" },
        { url: `${import.meta.env.BASE_URL}filmquiz/7.jpg`, answer: "Madagascar" },
        { url: `${import.meta.env.BASE_URL}filmquiz/8.jpg`, answer: "Neverending Story" },
      ],
      hints: ["Alladin, Beethoven, Bolt, Catnado, Chicago, Chronicles of Narnia, Creature from the black lagoon, Cube, E.T., Eurovision Song Contest: The story of Fire Saga, Frankenstein, Garfield, George of the jungle, Godzilla, How to train your dragon, Jaws, Jumanji, Jungle Book, Jurassic Park, Life of Pi, Lion King, Madagascar, Men in Black, Monster Inc, Okja, Predator, Psycho, Rango, Shrek, The Goonies, The Hulk, The Matrix, The Never Ending Story, The Shining, The Sound of Music, The Terminator, The Tigger movie, The Wizard of Ozz, They live, Turks Fruit"],
    },
    completeMessage: "Dat was 't Dorpshuus! Op naar de volgende stop.",
  }, 
   {
    name: "Stoute opa!", // Adres: Speeltuin bij Basisschool de Ester - Sint Machutusweg 2A, 5364 RB Escharen
    // Nog doen: 
    // 2. Puzzel tekst aanpassen 
    // 3. Foto toevoegen van spelende opa met kleinkinderen bij eindpagina
    lat: 51.742911, 
    lng: 5.745409,
    arrivalRadius: 10,
    showCat: true,
    cheatCode: "9mw5",
    arrivalMessage: "Stoute opa? Speelse opa! \n\n Opa doet niets liever dan samen met oma met de kleinkinderen spelen: samen wandelen, naar de speeltuin, spelletjes spelen. \n En opa houdt ook zeker van om een beetje gek te doen. \n Dat komt goed uit, want dat is zeker nodig voor de volgende opdrachten.",
    puzzle: {
      type: "multi",
      question: "Voer de volgende opdrachten uit en zet de foto's in de familie app. Voor elke goed uitgevoerde foto krijgen jullie een woord die je bij de opdracht in moet vullen.",
      questions: [
        {
          question: "Opdracht 1: Alle kleinkinderen op de glijbaan.",
          answers: ["Stoute"],
        },
        {
          question: "Een foto met alle heren die een gekke bek trekken en een foto met alle dames die een gekke bek trakken. Wie kunnen dit het beste?",
          answers: ["opa"],
        },
        {
          question: "Opa en oma met de kleinkinderen op het klimrek.",
          answers: ["is"],
        },
        {
          question: "De kinderen (zonder de kleinkideren) springend.",
          answers: ["heel"],
        },
        {
          question: "Iedereen staat op de foto!",
          answers: ["lief"],
        },
      ],
      },
    completeMessage: "Dat was de speeltuin! Op naar de laatste stop.",
  },
 {
    name: "Wereldwijs(?)", // Adres: Thuis, Veldweg 17, 5364 RH Escharen
    // Nog doen: 
    // 2. Extra pagina toevoegen met foto's van reizen en eerste deel van tekst. 
    // 3. Foto toevoegen van familie bij tweede pagina tekst 4. Hint weghalen bij kompas (wel laten staan bij arrivalmessage) 5. tekst gecentreerd aanpassen naar links uitgelijnd
    lat: 51.742354, 
    lng: 5.748381,
    arrivalRadius: 5,
    hints: ["Leg de foto's op chronologische volgorde en draai ze om."],
    arrivalMessage: "Samen reizen opa en oma de wereld rond.\n Maar geen enkele plek is zo fijn als hier: \n thuis met z'n allen samen. \n\n Lieve opa, \n\nDe reis is bijna ten einde: nog 1 opdracht te gaan.\n In de kamer liggen drie foto's verstopt: \n samen vormen ze de code. \n\n Succes!",
    showCat: true,
    isFinal: true,
  },

];
