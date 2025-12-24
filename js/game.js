/**
 * Clase principal del juego El Impostor
 * Maneja toda la lógica del juego
 */
class ImpostorGame {
  constructor() {
    this.state = {
      players: 4,
      impostors: 1,
      selectedCategories: [],
      currentPlayer: 0,
      secretWord: "",
      hintWord: "",
      useHintWord: false,
      roles: [],
      firstPlayer: 0,
    };
  }

  /**
   * Establece el número de jugadores
   * @param {number} count - Número de jugadores (3-20)
   */
  setPlayers(count) {
    if (count < 3 || count > 20) {
      throw new Error("El número de jugadores debe estar entre 3 y 20");
    }
    this.state.players = count;
    this.adjustImpostorsIfNeeded();
  }

  /**
   * Establece el número de impostores
   * @param {number} count - Número de impostores
   */
  setImpostors(count) {
    const maxImpostors = this.getMaxImpostors();
    if (count < 1 || count > maxImpostors) {
      throw new Error(
        `El número de impostores debe estar entre 1 y ${maxImpostors}`
      );
    }
    this.state.impostors = count;
  }

  /**
   * Calcula el máximo número de impostores permitido (40% del total)
   * @returns {number} Número máximo de impostores
   */
  getMaxImpostors() {
    return Math.floor(this.state.players * 0.4);
  }

  /**
   * Ajusta automáticamente el número de impostores si excede el límite
   */
  adjustImpostorsIfNeeded() {
    const maxImpostors = this.getMaxImpostors();
    if (this.state.impostors > maxImpostors) {
      this.state.impostors = maxImpostors;
    }
  }

  /**
   * Establece las categorías seleccionadas
   * @param {Array<string>} categories - Array de nombres de categorías
   */
  setCategories(categories) {
    if (!categories || categories.length === 0) {
      throw new Error("Debe seleccionar al menos una categoría");
    }
    // Guardar las categorías seleccionadas
    this.state.selectedCategories = [...categories];
  }

  /**
   * Establece si se debe usar la palabra pista
   * @param {boolean} enabled - Verdadero para habilitar, falso para deshabilitar
   */
  setHintWordEnabled(enabled) {
    this.state.useHintWord = enabled;
  }

  /**
   * Inicializa un nuevo juego
   */
  startGame() {
    if (this.state.selectedCategories.length === 0) {
      throw new Error("Debe seleccionar al menos una categoría");
    }

    this.state.currentPlayer = 0;

    // Obtener palabra SOLO de las categorías seleccionadas
    const wordData = getRandomWord(this.state.selectedCategories);

    // Guardar palabra y pista EXACTAMENTE como vienen del objeto
    this.state.secretWord = wordData.word;
    this.state.hintWord = wordData.hint;

    this.assignRoles();
    this.selectFirstPlayer();
  }

  /**
   * Asigna roles de manera aleatoria a los jugadores
   */
  assignRoles() {
    // Crear array de ciudadanos
    const roles = Array(this.state.players).fill("citizen");

    // Seleccionar índices aleatorios para impostores
    const impostorIndices = new Set();

    while (impostorIndices.size < this.state.impostors) {
      const randomIndex = Math.floor(Math.random() * this.state.players);
      impostorIndices.add(randomIndex);
    }

    // Asignar rol de impostor
    impostorIndices.forEach((index) => {
      roles[index] = "impostor";
    });

    this.state.roles = roles;
  }

  /**
   * Selecciona aleatoriamente el primer jugador
   */
  selectFirstPlayer() {
    this.state.firstPlayer = Math.floor(Math.random() * this.state.players) + 1;
  }

  /**
   * Obtiene el rol del jugador actual
   * @returns {string} 'citizen' o 'impostor'
   */
  getCurrentRole() {
    return this.state.roles[this.state.currentPlayer];
  }

  /**
   * Avanza al siguiente jugador
   * @returns {boolean} true si hay más jugadores, false si terminaron todos
   */
  nextPlayer() {
    this.state.currentPlayer++;
    return this.state.currentPlayer < this.state.players;
  }

  /**
   * Obtiene el estado actual del juego
   * @returns {Object} Estado completo del juego
   */
  getState() {
    // Asegurar que siempre devuelve la misma palabra y pista
    return {
      players: this.state.players,
      impostors: this.state.impostors,
      selectedCategories: [...this.state.selectedCategories],
      currentPlayer: this.state.currentPlayer,
      secretWord: this.state.secretWord,
      hintWord: this.state.hintWord,
      useHintWord: this.state.useHintWord,
      roles: [...this.state.roles],
      firstPlayer: this.state.firstPlayer,
    };
  }

  /**
   * Reinicia el juego al estado inicial
   */
  reset() {
    const savedCategories = this.state.selectedCategories;
    const savedUseHint = this.state.useHintWord;

    this.state = {
      players: 4,
      impostors: 1,
      selectedCategories: savedCategories, // Mantener categorías seleccionadas
      currentPlayer: 0,
      secretWord: "",
      hintWord: "",
      useHintWord: savedUseHint, // Mantener configuración de pistas
      roles: [],
      firstPlayer: 0,
    };

    // NO resetear palabras usadas para mantener variedad entre partidas
    // resetUsedWords();
  }
}

// Crear instancia global del juego
const game = new ImpostorGame();
