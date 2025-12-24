/**
 * Base de datos de palabras con sus pistas específicas
 */
const WORDS_DATABASE = {
  Navidad: [
    { word: "Santa Claus", hint: "Regalos y Trineo" },
    { word: "Árbol de Navidad", hint: "Adornos y Luces" },
    { word: "Reno", hint: "Animal Volador" },
    { word: "Muñeco de Nieve", hint: "Frío y Zanahoria" },
    { word: "Carbón", hint: "Niños traviesos" },
    { word: "Turrón", hint: "Dulce duro" },
    { word: "Reyes Magos", hint: "Camellos y Oriente" },
    { word: "Grinch", hint: "Odia la fiesta" },
    { word: "Chimenea", hint: "Fuego y entrada mágica" },
    { word: "Villancico", hint: "Canción tradicional" },
    { word: "Regalo", hint: "Papel brillante" },
    { word: "Estrella", hint: "Punta del árbol" },
    { word: "Nieve", hint: "Blanca y fría" },
    { word: "Trineo", hint: "Desliza sobre hielo" },
    { word: "Campana", hint: "Suena en fiesta" },
    { word: "Pesebre", hint: "Nacimiento de Jesús" },
    { word: "Ángel", hint: "Alas blancas" },
    { word: "Muérdago", hint: "Besos bajo planta" },
    { word: "Nochebuena", hint: "24 de diciembre" },
    { word: "Galleta", hint: "Dulce horneado" },
    { word: "Calcetín", hint: "Cuelga en chimenea" },
    { word: "Guirnalda", hint: "Decoración circular" },
    { word: "Belén", hint: "Figuras del nacimiento" },
    { word: "Vela", hint: "Luz cálida" },
    { word: "Bastón de Caramelo", hint: "Dulce rayado" },
    { word: "Corona", hint: "Círculo decorativo" },
    { word: "Papa Noel", hint: "Barba blanca" },
    { word: "Oro", hint: "Regalo de rey" },
    { word: "Incienso", hint: "Aroma sagrado" },
    { word: "Mirra", hint: "Resina aromática" },
    { word: "Estrella de Belén", hint: "Guía celeste" },
    { word: "Pastores", hint: "Cuidan ovejas" },
    { word: "Oveja", hint: "Lana y balido" },
    { word: "Posada", hint: "Refugio nocturno" },
    { word: "Aguinaldo", hint: "Dinero festivo" },
    { word: "Panettone", hint: "Pan dulce italiano" },
    { word: "Sidra", hint: "Bebida burbujeante" },
    { word: "Cena de Navidad", hint: "Comida familiar" },
    { word: "Misa de Gallo", hint: "Ceremonia nocturna" },
    { word: "Adorno", hint: "Decoración brillante" },
    { word: "Luces", hint: "Brillan en oscuridad" },
    { word: "Cascabel", hint: "Suena al mover" },
    { word: "Pino", hint: "Árbol verde" },
    { word: "Abeto", hint: "Conífera festiva" },
    { word: "Roscón", hint: "Pan circular dulce" },
    { word: "Champagne", hint: "Bebida de burbujas" },
    { word: "Brindis", hint: "Copas que chocan" },
    { word: "Familia", hint: "Reunión de parientes" },
    { word: "Paz", hint: "Deseo navideño" },
    { word: "Alegría", hint: "Sentimiento festivo" },
  ],
  "Tecnología y Tendencias": [
    { word: "TikTok", hint: "Videos cortos verticales" },
    { word: "iPhone", hint: "Manzana mordida" },
    { word: "Wifi", hint: "Internet inalámbrico" },
    { word: "Influencer", hint: "Famoso de internet" },
    { word: "Bitcoin", hint: "Moneda digital" },
    { word: "Netflix", hint: "Películas en casa" },
    { word: "Inteligencia Artificial", hint: "Robots que piensan" },
    { word: "Hacker", hint: "Pirata informático" },
    { word: "Google", hint: "Buscador" },
    { word: "Batería", hint: "Energía portátil" },
    { word: "Streaming", hint: "Video en vivo" },
    { word: "Podcast", hint: "Audio grabado" },
    { word: "Hashtag", hint: "Etiqueta con #" },
    { word: "Selfie", hint: "Foto propia" },
    { word: "Meme", hint: "Imagen graciosa viral" },
    { word: "Emoji", hint: "Carita expresiva" },
    { word: "Instagram", hint: "Fotos y filtros" },
    { word: "YouTube", hint: "Videos online" },
    { word: "Spotify", hint: "Música streaming" },
    { word: "WhatsApp", hint: "Mensajes verdes" },
    { word: "Facebook", hint: "Red social azul" },
    { word: "Twitter", hint: "Pajarito azul" },
    { word: "Zoom", hint: "Videollamadas" },
    { word: "Metaverso", hint: "Realidad virtual social" },
    { word: "NFT", hint: "Arte digital único" },
    { word: "Blockchain", hint: "Cadena de bloques" },
    { word: "Drone", hint: "Cámara voladora" },
    { word: "Robot", hint: "Máquina inteligente" },
    { word: "Smartwatch", hint: "Reloj inteligente" },
    { word: "Tablet", hint: "Pantalla táctil portátil" },
    { word: "Auriculares", hint: "Escuchas música" },
    { word: "Cámara", hint: "Captura momentos" },
    { word: "USB", hint: "Memoria portátil" },
    { word: "Cloud", hint: "Nube de datos" },
    { word: "5G", hint: "Internet rápido" },
    { word: "VPN", hint: "Conexión privada" },
    { word: "Firewall", hint: "Muro de protección" },
    { word: "Antivirus", hint: "Protege PC" },
    { word: "Malware", hint: "Virus dañino" },
    { word: "Cookies", hint: "Galletas digitales" },
    { word: "Avatar", hint: "Personaje digital" },
    { word: "Gaming", hint: "Jugar videojuegos" },
    { word: "E-sports", hint: "Deportes electrónicos" },
    { word: "Twitch", hint: "Streams de juegos" },
    { word: "Discord", hint: "Chat para gamers" },
    { word: "Bug", hint: "Error de software" },
    { word: "Pixel", hint: "Punto de pantalla" },
    { word: "Screenshot", hint: "Captura de pantalla" },
    { word: "Teclado", hint: "Escribir con teclas" },
    { word: "Mouse", hint: "Ratón de PC" },
  ],
  Animales: [
    { word: "Jirafa", hint: "Cuello largo" },
    { word: "León", hint: "Rey de la selva" },
    { word: "Pingüino", hint: "Ave que nada en hielo" },
    { word: "Perro", hint: "Mejor amigo del hombre" },
    { word: "Gato", hint: "Maulla" },
    { word: "Tiburón", hint: "Depredador marino" },
    { word: "Águila", hint: "Vuela muy alto" },
    { word: "Elefante", hint: "Trompa larga" },
    { word: "Mosquito", hint: "Pica y vuela" },
    { word: "Dinosaurio", hint: "Extinto gigante" },
    { word: "Tigre", hint: "Felino rayado" },
    { word: "Oso", hint: "Grande peludo" },
    { word: "Mono", hint: "Salta en árboles" },
    { word: "Serpiente", hint: "Reptil sin patas" },
    { word: "Delfín", hint: "Mamífero inteligente marino" },
    { word: "Ballena", hint: "Gigante del océano" },
    { word: "Cebra", hint: "Caballo rayado" },
    { word: "Cocodrilo", hint: "Reptil acuático" },
    { word: "Caballo", hint: "Galopa rápido" },
    { word: "Vaca", hint: "Da leche" },
    { word: "Cerdo", hint: "Oink oink" },
    { word: "Oveja", hint: "Lana blanca" },
    { word: "Conejo", hint: "Orejas largas" },
    { word: "Tortuga", hint: "Caparazón lento" },
    { word: "Pato", hint: "Cuac cuac" },
    { word: "Gallina", hint: "Pone huevos" },
    { word: "Búho", hint: "Ave nocturna sabia" },
    { word: "Lobo", hint: "Aúlla a la luna" },
    { word: "Zorro", hint: "Astuto pelirojo" },
    { word: "Ardilla", hint: "Come nueces" },
    { word: "Rana", hint: "Salta y croa" },
    { word: "Abeja", hint: "Hace miel" },
    { word: "Mariposa", hint: "Alas de colores" },
    { word: "Araña", hint: "Teje telarañas" },
    { word: "Hormiga", hint: "Trabaja en equipo" },
    { word: "Pulpo", hint: "Ocho tentáculos" },
    { word: "Canguro", hint: "Salta con bolsa" },
    { word: "Koala", hint: "Come eucalipto" },
    { word: "Panda", hint: "Blanco y negro bambú" },
    { word: "Camello", hint: "Jorobas del desierto" },
    { word: "Rinoceronte", hint: "Cuerno grande" },
    { word: "Hipopótamo", hint: "Gordo acuático" },
    { word: "Gorila", hint: "Primate fuerte" },
    { word: "Pavo Real", hint: "Plumas coloridas" },
    { word: "Flamenco", hint: "Rosa una pata" },
    { word: "Cangrejo", hint: "Pinzas laterales" },
    { word: "Estrella de Mar", hint: "Cinco puntas marinas" },
    { word: "Murciélago", hint: "Vuela de noche" },
    { word: "Caracol", hint: "Concha y baboso" },
    { word: "Lombriz", hint: "Gusano de tierra" },
  ],
  Comida: [
    { word: "Pizza", hint: "Redonda con queso" },
    { word: "Sushi", hint: "Pescado crudo y arroz" },
    { word: "Tacos", hint: "Tortilla y carne" },
    { word: "Hamburguesa", hint: "Carne entre panes" },
    { word: "Helado", hint: "Postre congelado" },
    { word: "Chocolate", hint: "Cacao dulce" },
    { word: "Café", hint: "Bebida negra despierta" },
    { word: "Huevo", hint: "Gallina" },
    { word: "Pan", hint: "Harina horneada" },
    { word: "Ensalada", hint: "Verduras mezcladas" },
    { word: "Pasta", hint: "Fideos italianos" },
    { word: "Arroz", hint: "Grano blanco asiático" },
    { word: "Pollo", hint: "Ave de corral" },
    { word: "Carne", hint: "Proteína animal" },
    { word: "Pescado", hint: "Del mar o río" },
    { word: "Queso", hint: "Lácteo amarillo" },
    { word: "Leche", hint: "Blanca de vaca" },
    { word: "Yogurt", hint: "Lácteo cremoso" },
    { word: "Mantequilla", hint: "Unta el pan" },
    { word: "Mermelada", hint: "Dulce de frutas" },
    { word: "Miel", hint: "Dulce de abejas" },
    { word: "Azúcar", hint: "Endulza blanco" },
    { word: "Sal", hint: "Sazona comida" },
    { word: "Pimienta", hint: "Especia picante" },
    { word: "Tomate", hint: "Rojo y jugoso" },
    { word: "Lechuga", hint: "Verde crujiente" },
    { word: "Cebolla", hint: "Hace llorar" },
    { word: "Ajo", hint: "Aroma fuerte" },
    { word: "Zanahoria", hint: "Naranja puntiaguda" },
    { word: "Papa", hint: "Tubérculo versátil" },
    { word: "Plátano", hint: "Amarillo alargado" },
    { word: "Manzana", hint: "Fruta de Eva" },
    { word: "Naranja", hint: "Cítrico vitamina C" },
    { word: "Fresa", hint: "Roja con semillas" },
    { word: "Uva", hint: "Racimo pequeño" },
    { word: "Sandía", hint: "Grande verde roja" },
    { word: "Melón", hint: "Dulce redondo" },
    { word: "Piña", hint: "Corona tropical" },
    { word: "Mango", hint: "Tropical dulce" },
    { word: "Durazno", hint: "Peludo jugoso" },
    { word: "Cereza", hint: "Pequeña roja" },
    { word: "Limón", hint: "Ácido amarillo" },
    { word: "Aguacate", hint: "Verde cremoso" },
    { word: "Pepino", hint: "Verde refrescante" },
    { word: "Brócoli", hint: "Verde árbol pequeño" },
    { word: "Espinaca", hint: "Popeye verde" },
    { word: "Champiñones", hint: "Hongos comestibles" },
    { word: "Maíz", hint: "Elote amarillo" },
    { word: "Frijoles", hint: "Legumbre proteína" },
    { word: "Tortilla", hint: "Círculo de maíz" },
  ],
  "Casa y Objetos": [
    { word: "Cama", hint: "Dormir" },
    { word: "Espejo", hint: "Reflejo" },
    { word: "Refrigerador", hint: "Mantiene frío" },
    { word: "Llaves", hint: "Abre puertas" },
    { word: "Reloj", hint: "Marca el tiempo" },
    { word: "Silla", hint: "Sentarse" },
    { word: "Papel Higiénico", hint: "Baño" },
    { word: "Escoba", hint: "Barrer suelo" },
    { word: "Televisión", hint: "Pantalla entretenimiento" },
    { word: "Microondas", hint: "Calienta rápido" },
    { word: "Mesa", hint: "Comer superficie" },
    { word: "Sofá", hint: "Sentarse cómodo" },
    { word: "Almohada", hint: "Suave cabeza" },
    { word: "Sábana", hint: "Cubre cama" },
    { word: "Cobija", hint: "Abrigo nocturno" },
    { word: "Lámpara", hint: "Luz artificial" },
    { word: "Ventilador", hint: "Aire fresco" },
    { word: "Puerta", hint: "Entrada salida" },
    { word: "Ventana", hint: "Vidrio vista" },
    { word: "Cortina", hint: "Tela cubre ventana" },
    { word: "Alfombra", hint: "Piso suave" },
    { word: "Cuadro", hint: "Arte en pared" },
    { word: "Florero", hint: "Contiene flores" },
    { word: "Vela", hint: "Cera y fuego" },
    { word: "Toalla", hint: "Secar cuerpo" },
    { word: "Jabón", hint: "Limpia manos" },
    { word: "Shampoo", hint: "Lava cabello" },
    { word: "Cepillo de dientes", hint: "Limpia dientes" },
    { word: "Peine", hint: "Desenreda pelo" },
    { word: "Tijeras", hint: "Corta papel" },
    { word: "Lápiz", hint: "Escribe grafito" },
    { word: "Pluma", hint: "Escribe tinta" },
    { word: "Cuaderno", hint: "Hojas unidas" },
    { word: "Libro", hint: "Páginas historias" },
    { word: "Teléfono", hint: "Llamar hablar" },
    { word: "Computadora", hint: "Pantalla teclado" },
    { word: "Control remoto", hint: "Cambiar canal" },
    { word: "Cargador", hint: "Energía cable" },
    { word: "Audifonos", hint: "Escuchar música" },
    { word: "Mochila", hint: "Llevar cosas espalda" },
    { word: "Maleta", hint: "Viaje equipaje" },
    { word: "Paraguas", hint: "Protege lluvia" },
    { word: "Zapatos", hint: "Calzado pies" },
    { word: "Bolsa", hint: "Llevar compras" },
    { word: "Billetera", hint: "Guarda dinero" },
    { word: "Plato", hint: "Recipiente comida" },
    { word: "Vaso", hint: "Beber líquidos" },
    { word: "Taza", hint: "Café té" },
    { word: "Cuchara", hint: "Sopa cubierto" },
    { word: "Tenedor", hint: "Pincha comida" },
  ],
  Deportes: [
    { word: "Fútbol", hint: "Gol y balón" },
    { word: "Natación", hint: "Agua y piscina" },
    { word: "Boxeo", hint: "Guantes y golpes" },
    { word: "Tenis", hint: "Raqueta y red" },
    { word: "Ajedrez", hint: "Tablero y estrategia" },
    { word: "Baloncesto", hint: "Canasta y rebote" },
    { word: "Golf", hint: "Hoyo y palo" },
    { word: "Árbitro", hint: "Reglas y silbato" },
    { word: "Estadio", hint: "Gradas y público" },
    { word: "Medalla", hint: "Premio de metal" },
    { word: "Voleibol", hint: "Red y pelota" },
    { word: "Béisbol", hint: "Bate y guante" },
    { word: "Rugby", hint: "Balón ovalado" },
    { word: "Hockey", hint: "Palo y disco" },
    { word: "Atletismo", hint: "Correr pista" },
    { word: "Ciclismo", hint: "Bicicleta carrera" },
    { word: "Gimnasia", hint: "Flexibilidad acrobacias" },
    { word: "Esgrima", hint: "Espadas duelo" },
    { word: "Karate", hint: "Arte marcial" },
    { word: "Judo", hint: "Lanzamientos tatami" },
    { word: "Taekwondo", hint: "Patadas coreanas" },
    { word: "Escalada", hint: "Subir montaña" },
    { word: "Surf", hint: "Olas tabla" },
    { word: "Esquí", hint: "Nieve montaña" },
    { word: "Snowboard", hint: "Tabla nieve" },
    { word: "Patinaje", hint: "Ruedas o hielo" },
    { word: "Equitación", hint: "Montar caballo" },
    { word: "Yoga", hint: "Posturas relajación" },
    { word: "Crossfit", hint: "Ejercicio intenso" },
    { word: "Maratón", hint: "42 kilómetros" },
    { word: "Triatlón", hint: "Tres deportes" },
    { word: "Arquería", hint: "Arco flechas" },
    { word: "Boliche", hint: "Bola y pinos" },
    { word: "Dardos", hint: "Puntería diana" },
    { word: "Billar", hint: "Mesa bolas taco" },
    { word: "Ping Pong", hint: "Mesa raquetas pequeñas" },
    { word: "Squash", hint: "Pared raqueta" },
    { word: "Paracaidismo", hint: "Saltar avión" },
    { word: "Buceo", hint: "Sumergirse océano" },
    { word: "Remo", hint: "Remar bote" },
    { word: "Vela", hint: "Barco viento" },
    { word: "Polo", hint: "Caballo pelota" },
    { word: "Halterofilia", hint: "Levantar pesas" },
    { word: "Lucha libre", hint: "Combate ring" },
    { word: "MMA", hint: "Artes marciales mixtas" },
    { word: "Fórmula 1", hint: "Autos veloces" },
    { word: "Motocross", hint: "Motos terreno" },
    { word: "BMX", hint: "Bici acrobacias" },
    { word: "Skateboard", hint: "Tabla cuatro ruedas" },
    { word: "Pentatlón", hint: "Cinco pruebas" },
  ],
  Lugares: [
    { word: "Playa", hint: "Arena y mar" },
    { word: "Escuela", hint: "Estudiar y maestros" },
    { word: "Hospital", hint: "Médicos y enfermos" },
    { word: "Cine", hint: "Películas y pantalla grande" },
    { word: "Aeropuerto", hint: "Aviones y maletas" },
    { word: "Gimnasio", hint: "Ejercicio y pesas" },
    { word: "Biblioteca", hint: "Libros y silencio" },
    { word: "Restaurante", hint: "Meseros y comida" },
    { word: "Cárcel", hint: "Prisioneros y celdas" },
    { word: "Cementerio", hint: "Tumbas" },
    { word: "Parque", hint: "Árboles juegos" },
    { word: "Zoológico", hint: "Animales enjaulados" },
    { word: "Museo", hint: "Arte historia" },
    { word: "Teatro", hint: "Actuaciones escenario" },
    { word: "Estadio", hint: "Deportes multitudes" },
    { word: "Centro Comercial", hint: "Tiendas compras" },
    { word: "Supermercado", hint: "Alimentos carritos" },
    { word: "Banco", hint: "Dinero cuentas" },
    { word: "Oficina", hint: "Trabajo escritorios" },
    { word: "Fábrica", hint: "Producción industrial" },
    { word: "Granja", hint: "Animales cultivos" },
    { word: "Bosque", hint: "Árboles naturaleza" },
    { word: "Montaña", hint: "Pico alto" },
    { word: "Río", hint: "Agua corriente" },
    { word: "Lago", hint: "Agua tranquila" },
    { word: "Desierto", hint: "Arena calor" },
    { word: "Selva", hint: "Tropical denso" },
    { word: "Iglesia", hint: "Templo rezar" },
    { word: "Mezquita", hint: "Templo musulmán" },
    { word: "Templo", hint: "Lugar sagrado" },
    { word: "Universidad", hint: "Estudios superiores" },
    { word: "Guardería", hint: "Niños pequeños" },
    { word: "Hotel", hint: "Hospedaje habitaciones" },
    { word: "Motel", hint: "Descanso carretera" },
    { word: "Camping", hint: "Tiendas naturaleza" },
    { word: "Estación de tren", hint: "Vías andenes" },
    { word: "Puerto", hint: "Barcos muelles" },
    { word: "Terminal", hint: "Autobuses central" },
    { word: "Gasolinera", hint: "Combustible autos" },
    { word: "Taller mecánico", hint: "Reparar vehículos" },
    { word: "Peluquería", hint: "Cortar pelo" },
    { word: "Lavandería", hint: "Lavar ropa" },
    { word: "Panadería", hint: "Pan hornear" },
    { word: "Carnicería", hint: "Vender carne" },
    { word: "Farmacia", hint: "Medicamentos recetas" },
    { word: "Estacionamiento", hint: "Guardar autos" },
    { word: "Puente", hint: "Cruza río" },
    { word: "Túnel", hint: "Paso subterráneo" },
    { word: "Castillo", hint: "Fortaleza medieval" },
    { word: "Pirámide", hint: "Egipto triangular" },
  ],
  "Clash Royale": [
    { word: "Gigante", hint: "Tanque lento" },
    { word: "Princesa", hint: "Dispara flechas lejos" },
    { word: "Montapuercos", hint: "Salta el río" },
    { word: "Ejército de Esqueletos", hint: "Muchos y débiles" },
    { word: "Elixir", hint: "Energía morada" },
    { word: "Torre del Rey", hint: "Edificio principal" },
    { word: "Tronco", hint: "Rueda y aplasta" },
    { word: "Mago Eléctrico", hint: "Zap y aturdir" },
    { word: "Globo Bombástico", hint: "Bomba aérea" },
    { word: "Cofre", hint: "Premios y cartas" },
    { word: "P.E.K.K.A", hint: "Robot destructor" },
    { word: "Mago", hint: "Bolas de fuego" },
    { word: "Bruja", hint: "Invoca esqueletos" },
    { word: "Dragón", hint: "Vuela y escupe fuego" },
    { word: "Golem", hint: "Piedra gigante" },
    { word: "Sabueso de Lava", hint: "Perro de fuego" },
    { word: "Minero", hint: "Túnel sorpresa" },
    { word: "Leñador", hint: "Hacha y furia" },
    { word: "Bandida", hint: "Ataque dash" },
    { word: "Megacaballero", hint: "Salta aplasta" },
    { word: "Chispitas", hint: "Electricidad rápida" },
    { word: "Verdugo", hint: "Hacha giratoria" },
    { word: "Arqueras Mágicas", hint: "Disparan flechas mágicas" },
    { word: "Barril de Duendes", hint: "Lanza duendes" },
    { word: "Mini P.E.K.K.A", hint: "Robot pequeño" },
    { word: "Valquiria", hint: "Hacha giratoria área" },
    { word: "Príncipe", hint: "Lanza y caballo" },
    { word: "Príncipe Oscuro", hint: "Escudo caballo" },
    { word: "Mosquetero", hint: "Dispara balas" },
    { word: "Caballero", hint: "Espada escudo" },
    { word: "Arqueras", hint: "Dos flechas" },
    { word: "Bárbaros", hint: "Cuatro espadas" },
    { word: "Duendes", hint: "Verdes rápidos" },
    { word: "Esbirros", hint: "Voladores negros" },
    { word: "Bebé Dragón", hint: "Pequeño escupe fuego" },
    { word: "Megaesbirro", hint: "Grande volador" },
    { word: "Espíritu de Fuego", hint: "Suicida explosivo" },
    { word: "Espíritu de Hielo", hint: "Congela enemigos" },
    { word: "Flechas", hint: "Hechizo área" },
    { word: "Bola de fuego", hint: "Explosión grande" },
    { word: "Rayo", hint: "Daño instantáneo" },
    { word: "Veneno", hint: "Daño por tiempo" },
    { word: "Tornado", hint: "Mueve tropas" },
    { word: "Congelar", hint: "Para enemigos" },
    { word: "Furia", hint: "Velocidad aumentada" },
    { word: "Espejo", hint: "Duplica carta" },
    { word: "Clon", hint: "Copia tropas" },
    { word: "Cohete", hint: "Misil directo" },
    { word: "Ariete", hint: "Rompe edificios" },
    { word: "Torre Infernal", hint: "Rayo caliente" },
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
 * Última palabra secreta y pista usadas
 */
let currentWordData = null;

/**
 * Obtiene una palabra aleatoria SOLO de las categorías seleccionadas
 */
function getRandomWord(selectedCategories) {
  if (!selectedCategories || selectedCategories.length === 0) {
    throw new Error("Debe seleccionar al menos una categoría");
  }

  // Si SOLO se seleccionó palabras personalizadas
  if (
    selectedCategories.length === 1 &&
    selectedCategories.includes("Palabras personalizadas")
  ) {
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

    // Si ya se usaron todas las palabras personalizadas, reiniciar
    if (availableWords.length === 0) {
      usedWordsByCategory[categoryKey] = [];
      const selected =
        customWords[Math.floor(Math.random() * customWords.length)];
      usedWordsByCategory[categoryKey].push(selected.word);
      currentWordData = selected;
      return selected;
    }

    const selected =
      availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWordsByCategory[categoryKey].push(selected.word);
    currentWordData = selected;
    return selected;
  }

  // Recolectar palabras SOLO de las categorías seleccionadas
  let allAvailableWords = [];

  selectedCategories.forEach((category) => {
    // Saltar palabras personalizadas si no están en uso exclusivo
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
      // Inicializar tracking para esta categoría si no existe
      if (!usedWordsByCategory[category]) {
        usedWordsByCategory[category] = [];
      }

      // Filtrar palabras ya usadas de esta categoría
      const availableCategoryWords = WORDS_DATABASE[category].filter(
        (item) => !usedWordsByCategory[category].includes(item.word)
      );

      allAvailableWords = allAvailableWords.concat(availableCategoryWords);
    }
  });

  // Si ya se usaron todas las palabras de todas las categorías seleccionadas, reiniciar
  if (allAvailableWords.length === 0) {
    // Reiniciar SOLO las categorías seleccionadas
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

  // Seleccionar palabra aleatoria
  const selected =
    allAvailableWords[Math.floor(Math.random() * allAvailableWords.length)];

  // Marcar palabra como usada en su categoría correspondiente
  let wordCategory = null;

  // Buscar a qué categoría pertenece la palabra
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

  currentWordData = selected;
  return selected;
}

/**
 * Obtiene la palabra y pista actual
 */
function getCurrentWordData() {
  return currentWordData;
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
      hint: "Palabra personalizada",
    }));
}

function getCustomWords() {
  return customWords.map((item) => item.word);
}

function resetUsedWords() {
  usedWordsByCategory = {};
  currentWordData = null;
}
