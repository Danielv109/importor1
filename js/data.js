/**
 * Base de datos de palabras con sus pistas específicas
 */
const WORDS_DATABASE = {
  Navidad: [
    { word: "Santa Claus", hint: "Norte" },
    { word: "Árbol de Navidad", hint: "Pino" },
    { word: "Reno", hint: "Volador" },
    { word: "Muñeco de Nieve", hint: "Zanahoria" },
    { word: "Intercambio", hint: "Azar" },
    { word: "Uvas", hint: "Deseos" },
    { word: "Reyes Magos", hint: "Camello" },
    { word: "Grinch", hint: "Verde" },
    { word: "Cena Navideña", hint: "Unión" },
    { word: "Villancico", hint: "Canto" },
    { word: "Regalo", hint: "Sorpresa" },
    { word: "Estrella", hint: "Punta" },
    { word: "Nieve", hint: "Blanco" },
    { word: "Trineo", hint: "Deslizar" },
    { word: "Campana", hint: "Sonido" },
    { word: "Pesebre", hint: "Nacimiento" },
    { word: "Ángel", hint: "Alas" },
    { word: "Muérdago", hint: "Beso" },
    { word: "Nochebuena", hint: "24" },
    { word: "Galleta", hint: "Jengibre" },
  ],
  "Tendencias y Redes": [
    { word: "TikTok", hint: "Vertical" },
    { word: "iPhone", hint: "Estatus" },
    { word: "Wifi", hint: "Invisible" },
    { word: "Influencer", hint: "Canjes" },
    { word: "Bitcoin", hint: "Virtual" },
    { word: "Netflix", hint: "Maratón" },
    { word: "Inteligencia Artificial", hint: "Futuro" },
    { word: "Hacker", hint: "Acceso" },
    { word: "Spotify", hint: "Audífonos" },
    { word: "Amazon", hint: "Caja" },
    { word: "Instagram", hint: "Filtro" },
    { word: "YouTube", hint: "Play" },
    { word: "WhatsApp", hint: "Doble" },
    { word: "Zoom", hint: "Virtual" },
    { word: "Meme", hint: "Viral" },
    { word: "Emoji", hint: "Cara" },
    { word: "Selfie", hint: "Frontal" },
    { word: "Hashtag", hint: "Numeral" },
    { word: "Podcast", hint: "Audio" },
    { word: "Streaming", hint: "Vivo" },
  ],
  Animales: [
    { word: "Jirafa", hint: "Altura" },
    { word: "León", hint: "Melena" },
    { word: "Pingüino", hint: "Frac" },
    { word: "Perro", hint: "Lealtad" },
    { word: "Gato", hint: "Ágil" },
    { word: "Tiburón", hint: "Aleta" },
    { word: "Águila", hint: "Visión" },
    { word: "Elefante", hint: "Memoria" },
    { word: "Panda", hint: "Bambú" },
    { word: "Dinosaurio", hint: "Extinto" },
    { word: "Tigre", hint: "Rayas" },
    { word: "Oso", hint: "Miel" },
    { word: "Mono", hint: "Banana" },
    { word: "Serpiente", hint: "Veneno" },
    { word: "Delfín", hint: "Inteligente" },
    { word: "Ballena", hint: "Gigante" },
    { word: "Cebra", hint: "Blanco" },
    { word: "Cocodrilo", hint: "Mandíbula" },
    { word: "Caballo", hint: "Galope" },
    { word: "Conejo", hint: "Orejas" },
  ],
  Comida: [
    { word: "Pizza", hint: "Italia" },
    { word: "Sushi", hint: "Rollo" },
    { word: "Tacos", hint: "Tortilla" },
    { word: "Hamburguesa", hint: "Americana" },
    { word: "Cerveza", hint: "Cebada" },
    { word: "Chocolate", hint: "Cacao" },
    { word: "Café", hint: "Despertar" },
    { word: "Palomitas", hint: "Cine" },
    { word: "Pan", hint: "Horno" },
    { word: "Ensalada", hint: "Verde" },
    { word: "Helado", hint: "Frío" },
    { word: "Hot Dog", hint: "Salchicha" },
    { word: "Pasta", hint: "Fideos" },
    { word: "Arroz", hint: "Grano" },
    { word: "Pollo", hint: "Ave" },
    { word: "Queso", hint: "Lácteo" },
    { word: "Leche", hint: "Vaca" },
    { word: "Miel", hint: "Abeja" },
    { word: "Azúcar", hint: "Dulce" },
    { word: "Sal", hint: "Sazonar" },
  ],
  "Vida Cotidiana": [
    { word: "Cama", hint: "Descanso" },
    { word: "Espejo", hint: "Reflejo" },
    { word: "Lavadora", hint: "Centrifugar" },
    { word: "Llaves", hint: "Metal" },
    { word: "Alarma", hint: "Ruido" },
    { word: "Silla", hint: "Sentarse" },
    { word: "Papel Higiénico", hint: "Rollo" },
    { word: "Escoba", hint: "Barrer" },
    { word: "Celular", hint: "Batería" },
    { word: "Microondas", hint: "Rápido" },
    { word: "Reloj", hint: "Tiempo" },
    { word: "Televisión", hint: "Control" },
    { word: "Refrigerador", hint: "Frío" },
    { word: "Almohada", hint: "Suave" },
    { word: "Toalla", hint: "Secar" },
    { word: "Jabón", hint: "Espuma" },
    { word: "Cepillo", hint: "Dientes" },
    { word: "Paraguas", hint: "Lluvia" },
    { word: "Mochila", hint: "Espalda" },
    { word: "Zapatos", hint: "Pies" },
  ],
  Deportes: [
    { word: "Fútbol", hint: "Balón" },
    { word: "Natación", hint: "Agua" },
    { word: "Boxeo", hint: "Guantes" },
    { word: "Tenis", hint: "Red" },
    { word: "Ajedrez", hint: "Estrategia" },
    { word: "Gimnasio", hint: "Sudor" },
    { word: "Golf", hint: "Palo" },
    { word: "Árbitro", hint: "Justicia" },
    { word: "Estadio", hint: "Multitud" },
    { word: "Ciclismo", hint: "Rueda" },
    { word: "Baloncesto", hint: "Canasta" },
    { word: "Voleibol", hint: "Red" },
    { word: "Béisbol", hint: "Bat" },
    { word: "Rugby", hint: "Ovalado" },
    { word: "Hockey", hint: "Disco" },
    { word: "Atletismo", hint: "Pista" },
    { word: "Esgrima", hint: "Espada" },
    { word: "Karate", hint: "Kimono" },
    { word: "Yoga", hint: "Postura" },
    { word: "Surf", hint: "Ola" },
  ],
  Lugares: [
    { word: "Playa", hint: "Sal" },
    { word: "Escuela", hint: "Aprender" },
    { word: "Hospital", hint: "Blanco" },
    { word: "Cine", hint: "Oscuridad" },
    { word: "Aeropuerto", hint: "Espera" },
    { word: "Hotel", hint: "Temporal" },
    { word: "Biblioteca", hint: "Silencio" },
    { word: "Restaurante", hint: "Servicio" },
    { word: "Cárcel", hint: "Encierro" },
    { word: "Cementerio", hint: "Paz" },
    { word: "Parque", hint: "Árboles" },
    { word: "Museo", hint: "Arte" },
    { word: "Teatro", hint: "Escenario" },
    { word: "Banco", hint: "Dinero" },
    { word: "Supermercado", hint: "Carrito" },
    { word: "Gasolinera", hint: "Combustible" },
    { word: "Farmacia", hint: "Cruz" },
    { word: "Iglesia", hint: "Rezar" },
    { word: "Discoteca", hint: "Bailar" },
    { word: "Casino", hint: "Azar" },
  ],
  "Clash Royale": [
    { word: "Gigante", hint: "Lento" },
    { word: "Princesa", hint: "Distancia" },
    { word: "Montapuercos", hint: "Salto" },
    { word: "Ejército de Esqueletos", hint: "Multitud" },
    { word: "Elixir", hint: "Gota" },
    { word: "Torre del Rey", hint: "Central" },
    { word: "Tronco", hint: "Rodar" },
    { word: "Mago Eléctrico", hint: "Zap" },
    { word: "Globo Bombástico", hint: "Esqueleto" },
    { word: "Cofre", hint: "Suerte" },
    { word: "P.E.K.K.A", hint: "Robot" },
    { word: "Mago", hint: "Fuego" },
    { word: "Bruja", hint: "Invocar" },
    { word: "Dragón", hint: "Aéreo" },
    { word: "Golem", hint: "Piedra" },
    { word: "Minero", hint: "Túnel" },
    { word: "Leñador", hint: "Hacha" },
    { word: "Bandida", hint: "Dash" },
    { word: "Megacaballero", hint: "Caída" },
    { word: "Verdugo", hint: "Hacha" },
  ],
  "Estrellas y Famosos": [
    { word: "Shakira", hint: "Caderas" },
    { word: "Bad Bunny", hint: "Conejo" },
    { word: "Messi", hint: "Zurdo" },
    { word: "Cristiano Ronaldo", hint: "Atleta" },
    { word: "Elon Musk", hint: "Marte" },
    { word: "Michael Jackson", hint: "Guante" },
    { word: "Batman", hint: "Huérfano" },
    { word: "Spiderman", hint: "Picadura" },
    { word: "Barbie", hint: "Plástico" },
    { word: "Harry Potter", hint: "Cicatriz" },
    { word: "Taylor Swift", hint: "País" },
    { word: "The Weeknd", hint: "Domingo" },
    { word: "BTS", hint: "Corea" },
    { word: "Dwayne Johnson", hint: "Roca" },
    { word: "Tom Cruise", hint: "Misión" },
    { word: "Will Smith", hint: "Bofetada" },
    { word: "Beyoncé", hint: "Reina" },
    { word: "Rihanna", hint: "Paraguas" },
    { word: "Drake", hint: "Canadá" },
    { word: "Justin Bieber", hint: "Bebé" },
  ],
  "Picante (Solo Adultos)": [
    { word: "Ex", hint: "Pasado" },
    { word: "Tinder", hint: "Catálogo" },
    { word: "Motel", hint: "Discreto" },
    { word: "Suegra", hint: "Familia" },
    { word: "Beso de tres", hint: "Grupo" },
    { word: "Tóxico/a", hint: "Control" },
    { word: "Lencería", hint: "Encaje" },
    { word: "Cruda (Resaca)", hint: "Sed" },
    { word: "Amigos con derechos", hint: "Secreto" },
    { word: "Pack", hint: "Digital" },
    { word: "Ghosting", hint: "Desaparecer" },
    { word: "Friendzone", hint: "Amigo" },
    { word: "Crush", hint: "Secreto" },
    { word: "One Night Stand", hint: "Noche" },
    { word: "Netflix and Chill", hint: "Sofá" },
    { word: "Stalkear", hint: "Espiar" },
    { word: "Screenshot", hint: "Evidencia" },
    { word: "Sugar Daddy", hint: "Dinero" },
    { word: "Infidelidad", hint: "Cuernos" },
    { word: "Sexting", hint: "Mensaje" },
  ],
};

/**
 * Array para almacenar palabras personalizadas del usuario
 */
let customWords = [];

/**
 * Array para rastrear palabras ya usadas por categoría
 */
let usedWordsByCategory = {};

/**
 * Obtiene una palabra aleatoria SOLO de las categorías seleccionadas
 */
function getRandomWord(selectedCategories) {
  if (!selectedCategories || selectedCategories.length === 0) {
    throw new Error("Debe seleccionar al menos una categoría");
  }

  if (selectedCategories.includes("Palabras personalizadas")) {
    if (customWords.length === 0) {
      throw new Error("Debe agregar al menos una palabra personalizada");
    }

    const categoryKey = "custom";
    if (!usedWordsByCategory[categoryKey]) {
      usedWordsByCategory[categoryKey] = [];
    }

    const availableWords = customWords.filter(
      (item) => !usedWordsByCategory[categoryKey].includes(item.word)
    );

    if (availableWords.length === 0) {
      usedWordsByCategory[categoryKey] = [];
      const selected =
        customWords[Math.floor(Math.random() * customWords.length)];
      usedWordsByCategory[categoryKey].push(selected.word);
      return selected;
    }

    const selected =
      availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWordsByCategory[categoryKey].push(selected.word);
    return selected;
  }

  let allAvailableWords = [];

  selectedCategories.forEach((category) => {
    if (category === "Palabras personalizadas") {
      if (customWords.length > 0) {
        const categoryKey = "custom";
        if (!usedWordsByCategory[categoryKey]) {
          usedWordsByCategory[categoryKey] = [];
        }

        const availableCustomWords = customWords.filter(
          (item) => !usedWordsByCategory[categoryKey].includes(item.word)
        );
        allAvailableWords = allAvailableWords.concat(availableCustomWords);
      }
    } else if (WORDS_DATABASE[category]) {
      if (!usedWordsByCategory[category]) {
        usedWordsByCategory[category] = [];
      }

      const availableCategoryWords = WORDS_DATABASE[category].filter(
        (item) => !usedWordsByCategory[category].includes(item.word)
      );

      allAvailableWords = allAvailableWords.concat(availableCategoryWords);
    }
  });

  if (allAvailableWords.length === 0) {
    selectedCategories.forEach((category) => {
      if (category === "Palabras personalizadas") {
        usedWordsByCategory["custom"] = [];
        if (customWords.length > 0) {
          allAvailableWords = allAvailableWords.concat(customWords);
        }
      } else if (WORDS_DATABASE[category]) {
        usedWordsByCategory[category] = [];
        allAvailableWords = allAvailableWords.concat(WORDS_DATABASE[category]);
      }
    });
  }

  if (allAvailableWords.length === 0) {
    throw new Error(
      "No hay palabras disponibles en las categorías seleccionadas"
    );
  }

  const selected =
    allAvailableWords[Math.floor(Math.random() * allAvailableWords.length)];

  let wordCategory = null;

  if (customWords.find((item) => item.word === selected.word)) {
    wordCategory = "custom";
  } else {
    for (const [category, words] of Object.entries(WORDS_DATABASE)) {
      if (words.find((item) => item.word === selected.word)) {
        wordCategory = category;
        break;
      }
    }
  }

  if (wordCategory) {
    if (!usedWordsByCategory[wordCategory]) {
      usedWordsByCategory[wordCategory] = [];
    }
    usedWordsByCategory[wordCategory].push(selected.word);
  }

  return selected;
}

function getCategories() {
  const categories = Object.keys(WORDS_DATABASE);
  categories.push("Palabras personalizadas");
  return categories;
}

function setCustomWords(words) {
  customWords = words
    .filter((word) => word.trim() !== "")
    .map((word) => ({
      word: word.trim(),
      hint: "Personalizada",
    }));
}

function getCustomWords() {
  return customWords.map((item) => item.word);
}

function resetUsedWords() {
  usedWordsByCategory = {};
}
