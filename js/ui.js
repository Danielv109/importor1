/**
 * Clase para manejar la interfaz de usuario
 */
class UIManager {
  constructor() {
    this.screens = {
      home: document.getElementById("homeScreen"),
      passPhone: document.getElementById("passPhoneScreen"),
      reveal: document.getElementById("revealScreen"),
      game: document.getElementById("gameScreen"),
    };

    this.elements = {
      playersPreview: document.getElementById("playersPreview"),
      impostorsPreview: document.getElementById("impostorsPreview"),
      categoriesPreview: document.getElementById("categoriesPreview"),
      errorMessage: document.getElementById("errorMessage"),
      currentPlayerNameDisplay: document.getElementById(
        "currentPlayerNameDisplay"
      ),
      roleContentSwipe: document.getElementById("roleContentSwipe"),
      firstPlayerDisplay: document.getElementById("firstPlayerDisplay"),
      rolesDisplay: document.getElementById("rolesDisplay"),
      rolesCard: document.getElementById("rolesCard"),
      revealCardSwipe: document.getElementById("revealCardSwipe"),
      cardFront: document.getElementById("cardFront"),
      cardBack: document.getElementById("cardBack"),
      avatarImage: document.getElementById("avatarImage"),
    };

    this.playerNames = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"];
    this.selectedCategories = [];
    this.isRevealed = false;

    // Array de avatares disponibles
    this.avatars = [
      "img/avatars/avatar1.jpg",
      "img/avatars/avatar2.jpg",
      "img/avatars/avatar3.jpg",
      "img/avatars/avatar4.jpg",
      "img/avatars/avatar5.jpg",
      "img/avatars/avatar6.jpg",
      "img/avatars/avatar7.jpg",
      "img/avatars/avatar8.jpg",
    ];

    this.initializeEventListeners();
    this.updateUI();
  }

  /**
   * Selecciona un avatar aleatorio
   */
  getRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * this.avatars.length);
    return this.avatars[randomIndex];
  }

  /**
   * Establece el avatar de fondo en la tarjeta
   */
  setRandomAvatarBackground() {
    const avatarImage = this.elements.avatarImage;
    const randomAvatar = this.getRandomAvatar();

    const img = new Image();
    img.onload = () => {
      avatarImage.style.backgroundImage = `url('${randomAvatar}')`;
      console.log("✅ Avatar cargado:", randomAvatar);
    };

    img.onerror = () => {
      console.error("❌ No se encontró la imagen:", randomAvatar);
      const colors = [
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      ];
      const randomGradient = colors[Math.floor(Math.random() * colors.length)];
      avatarImage.style.backgroundImage = randomGradient;
    };

    img.src = randomAvatar;
  }

  /**
   * Inicializa todos los event listeners
   */
  initializeEventListeners() {
    // Botón de configuración de jugadores
    document
      .getElementById("playersConfigBtn")
      .addEventListener("click", () => {
        this.openPlayersModal();
      });

    // Botón de configuración de impostores
    document
      .getElementById("impostorsConfigBtn")
      .addEventListener("click", () => {
        this.openImpostorsModal();
      });

    // Botón de configuración de categorías
    document
      .getElementById("categoriesConfigBtn")
      .addEventListener("click", () => {
        this.openCategoriesModal();
      });

    document
      .getElementById("hintWordToggle")
      .addEventListener("change", (e) => {
        game.setHintWordEnabled(e.target.checked);
      });

    document.getElementById("startGameBtn").addEventListener("click", () => {
      this.startGame();
    });

    // Solo botón "Estoy Listo" para revelar
    document.getElementById("readyBtnNew").addEventListener("click", () => {
      this.revealRole();
    });

    // Botón "Siguiente Jugador"
    document.getElementById("nextPlayerBtn").addEventListener("click", () => {
      this.hideAndContinue();
    });

    document.getElementById("revealRolesBtn").addEventListener("click", () => {
      this.toggleRolesDisplay();
    });

    document.getElementById("restartBtn").addEventListener("click", () => {
      this.restart();
    });
  }

  /**
   * Revela el rol al presionar el botón
   */
  revealRole() {
    this.elements.cardFront.classList.add("hidden");
    this.elements.cardBack.classList.add("visible");
    this.isRevealed = true;
    this.displayRoleInSwipe();
  }

  /**
   * Resetea el estado de la tarjeta
   */
  resetCard() {
    this.isRevealed = false;
    this.elements.cardFront.classList.remove("hidden");
    this.elements.cardBack.classList.remove("visible");
  }

  /**
   * Muestra el rol en la tarjeta
   */
  displayRoleInSwipe() {
    const state = game.getState();
    const role = game.getCurrentRole();

    const secretWord = state.secretWord;
    const hintWord = state.hintWord;

    if (role === "impostor") {
      let impostorHTML = `
        <div class="role-badge impostor">IMPOSTOR</div>
        <div class="impostor-icon">🤫</div>
        <div class="impostor-alert">¡ERES EL IMPOSTOR!</div>
      `;

      if (state.useHintWord && hintWord) {
        impostorHTML += `
          <p style="font-size: 1rem; opacity: 0.7; margin-top: 20px; color: #666;">Tu pista es:</p>
          <div class="hint-word" style="color: #FFD700; background: #FFF9E6; padding: 15px; border-radius: 15px;">${hintWord}</div>
          <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 15px; color: #666;">Usa esta pista para disimular</p>
        `;
      } else {
        impostorHTML += `
          <p style="font-size: 1rem; opacity: 0.7; margin-top: 15px; color: #666;">No conoces la palabra secreta.<br>Actúa con astucia.</p>
        `;
      }

      this.elements.roleContentSwipe.innerHTML = impostorHTML;
    } else {
      this.elements.roleContentSwipe.innerHTML = `
                <div class="role-badge citizen">CIUDADANO</div>
                <p style="font-size: 1rem; margin-top: 20px; margin-bottom: 10px; color: #666;">La palabra secreta es:</p>
                <div class="word-display">${secretWord}</div>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 15px; color: #666;">Memorízala y encuentra al impostor.</p>
            `;
    }
  }

  /**
   * Abre el modal de configuración de jugadores
   */
  openPlayersModal() {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.id = "playersModal";

    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>👥 Jugadores</h2>
                    <button class="modal-close" id="closePlayersModal">✕</button>
                </div>
                <div class="modal-body">
                    <div class="players-list" id="playersList"></div>
                    <button class="add-player-btn" id="addPlayerBtn">Agregar Jugador</button>
                    <p style="text-align: center; margin-top: 15px; font-size: 0.9rem; color: #666;">
                        Mínimo 3 jugadores, máximo 20
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" id="savePlayersBtn">Guardar</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    this.renderPlayersList();

    // Event listeners
    document
      .getElementById("closePlayersModal")
      .addEventListener("click", () => {
        modal.remove();
      });

    document.getElementById("addPlayerBtn").addEventListener("click", () => {
      if (this.playerNames.length < 20) {
        this.playerNames.push(`Jugador ${this.playerNames.length + 1}`);
        this.renderPlayersList();
      }
    });

    document.getElementById("savePlayersBtn").addEventListener("click", () => {
      game.setPlayers(this.playerNames.length);
      this.updateUI();
      modal.remove();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  /**
   * Renderiza la lista de jugadores
   */
  renderPlayersList() {
    const container = document.getElementById("playersList");
    if (!container) return;

    container.innerHTML = "";

    this.playerNames.forEach((name, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "player-item-wrapper";

      wrapper.innerHTML = `
                <div class="player-item-delete-bg">
                    <span>🗑️</span>
                </div>
                <div class="player-item" data-index="${index}">
                    <div class="player-number-badge">${index + 1}</div>
                    <input 
                        type="text" 
                        class="player-input" 
                        value="${name}" 
                        placeholder="Nombre del jugador"
                        data-index="${index}"
                    >
                </div>
            `;

      container.appendChild(wrapper);

      const playerItem = wrapper.querySelector(".player-item");
      const deleteBg = wrapper.querySelector(".player-item-delete-bg");

      // Variables para el swipe
      let startX = 0;
      let currentX = 0;
      let isDragging = false;

      // Touch events
      playerItem.addEventListener("touchstart", (e) => {
        if (this.playerNames.length <= 3) return;

        startX = e.touches[0].clientX;
        isDragging = true;
        playerItem.classList.add("swiping");
        playerItem.style.transition = "none";
      });

      playerItem.addEventListener("touchmove", (e) => {
        if (!isDragging || this.playerNames.length <= 3) return;

        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        // Solo permitir swipe hacia la izquierda
        if (diffX > 0 && diffX <= 80) {
          playerItem.style.transform = `translateX(-${diffX}px)`;
        }
      });

      playerItem.addEventListener("touchend", (e) => {
        if (!isDragging || this.playerNames.length <= 3) return;

        isDragging = false;
        playerItem.classList.remove("swiping");
        playerItem.style.transition = "transform 0.3s ease";

        const diffX = startX - currentX;

        // Si deslizó más de 40px, mostrar botón de eliminar
        if (diffX > 40) {
          playerItem.style.transform = "translateX(-80px)";

          // Hacer clickeable el fondo rojo
          deleteBg.style.pointerEvents = "auto";
          deleteBg.style.cursor = "pointer";

          // Evento de click en el botón de eliminar
          const deleteHandler = () => {
            this.playerNames.splice(index, 1);
            this.playerNames = this.playerNames.map((n, i) =>
              n.startsWith("Jugador") ? `Jugador ${i + 1}` : n
            );
            this.renderPlayersList();
          };

          deleteBg.removeEventListener("click", deleteHandler);
          deleteBg.addEventListener("click", deleteHandler);
        } else {
          // Regresar a posición original
          playerItem.style.transform = "translateX(0)";
          deleteBg.style.pointerEvents = "none";
        }
      });

      // Mouse events para desktop
      playerItem.addEventListener("mousedown", (e) => {
        if (this.playerNames.length <= 3) return;

        startX = e.clientX;
        isDragging = true;
        playerItem.classList.add("swiping");
        playerItem.style.transition = "none";
        e.preventDefault();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isDragging || this.playerNames.length <= 3) return;

        currentX = e.clientX;
        const diffX = startX - currentX;

        if (diffX > 0 && diffX <= 80) {
          playerItem.style.transform = `translateX(-${diffX}px)`;
        }
      });

      document.addEventListener("mouseup", () => {
        if (!isDragging || this.playerNames.length <= 3) return;

        isDragging = false;
        playerItem.classList.remove("swiping");
        playerItem.style.transition = "transform 0.3s ease";

        const diffX = startX - currentX;

        if (diffX > 40) {
          playerItem.style.transform = "translateX(-80px)";
          deleteBg.style.pointerEvents = "auto";
          deleteBg.style.cursor = "pointer";

          const deleteHandler = () => {
            this.playerNames.splice(index, 1);
            this.playerNames = this.playerNames.map((n, i) =>
              n.startsWith("Jugador") ? `Jugador ${i + 1}` : n
            );
            this.renderPlayersList();
          };

          deleteBg.removeEventListener("click", deleteHandler);
          deleteBg.addEventListener("click", deleteHandler);
        } else {
          playerItem.style.transform = "translateX(0)";
          deleteBg.style.pointerEvents = "none";
        }
      });
    });

    // Event listeners para inputs (actualizar nombres)
    container.querySelectorAll(".player-input").forEach((input) => {
      input.addEventListener("input", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.playerNames[index] = e.target.value || `Jugador ${index + 1}`;
      });

      // Evitar que el swipe interfiera con el input
      input.addEventListener("touchstart", (e) => {
        e.stopPropagation();
      });

      input.addEventListener("mousedown", (e) => {
        e.stopPropagation();
      });
    });

    // Actualizar botón de agregar
    const addBtn = document.getElementById("addPlayerBtn");
    if (addBtn) {
      addBtn.disabled = this.playerNames.length >= 20;
    }
  }

  /**
   * Abre el modal de configuración de impostores
   */
  openImpostorsModal() {
    const maxImpostors = game.getMaxImpostors();
    const currentImpostors = game.getState().impostors;

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🎭 Impostores</h2>
                    <button class="modal-close">✕</button>
                </div>
                <div class="modal-body">
                    <p style="text-align: center; margin-bottom: 20px; color: #666;">
                        Selecciona cuántos impostores habrá en el juego
                    </p>
                    <div class="number-input" style="margin: 30px 0;">
                        <button id="decreaseImpostorsModal" type="button">-</button>
                        <span id="impostorsCountModal">${currentImpostors}</span>
                        <button id="increaseImpostorsModal" type="button">+</button>
                    </div>
                    <p style="text-align: center; font-size: 0.9rem; color: #666;">
                        Máximo: ${maxImpostors} (40% de ${this.playerNames.length} jugadores)
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" id="saveImpostorsBtn">Guardar</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    let tempImpostors = currentImpostors;

    document
      .getElementById("decreaseImpostorsModal")
      .addEventListener("click", () => {
        if (tempImpostors > 1) {
          tempImpostors--;
          document.getElementById("impostorsCountModal").textContent =
            tempImpostors;
        }
      });

    document
      .getElementById("increaseImpostorsModal")
      .addEventListener("click", () => {
        if (tempImpostors < maxImpostors) {
          tempImpostors++;
          document.getElementById("impostorsCountModal").textContent =
            tempImpostors;
        }
      });

    document
      .getElementById("saveImpostorsBtn")
      .addEventListener("click", () => {
        game.setImpostors(tempImpostors);
        this.updateUI();
        modal.remove();
      });

    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.remove();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  /**
   * Abre el modal de configuración de categorías
   */
  openCategoriesModal() {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>🎯 Categorías</h2>
                    <button class="modal-close">✕</button>
                </div>
                <div class="modal-body">
                    <p style="text-align: center; margin-bottom: 20px; color: #666;">
                        Selecciona al menos una categoría
                    </p>
                    <div class="categories-modal" id="categoriesModalList"></div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" id="saveCategoriesBtn">Guardar</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    this.renderCategoriesModal();

    document
      .getElementById("saveCategoriesBtn")
      .addEventListener("click", () => {
        // Guardar las categorías seleccionadas
        const selectedCheckboxes = modal.querySelectorAll(
          ".category-item-modal input:checked"
        );
        this.selectedCategories = Array.from(selectedCheckboxes).map(
          (cb) => cb.value
        );
        this.updateUI();
        modal.remove();
      });

    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.remove();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  /**
   * Renderiza las categorías en el modal
   */
  renderCategoriesModal() {
    const container = document.getElementById("categoriesModalList");
    if (!container) return;

    const categories = getCategories();
    container.innerHTML = "";

    categories.forEach((category, index) => {
      const isCustom = category === "Palabras personalizadas";
      const icon = isCustom ? "✏️" : "";
      const isSelected = this.selectedCategories.includes(category);

      const div = document.createElement("div");
      div.className = `category-item-modal ${isSelected ? "selected" : ""}`;
      div.innerHTML = `
                <label style="flex: 1; cursor: pointer; font-weight: 500;">
                    ${icon} ${category}
                </label>
                <input type="checkbox" id="catModal-${index}" value="${category}" ${
        isSelected ? "checked" : ""
      }>
            `;

      div.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT") {
          const checkbox = div.querySelector("input");

          if (isCustom && !checkbox.checked) {
            this.openCustomWordsModalInline(div, checkbox);
            return;
          }

          checkbox.checked = !checkbox.checked;
          div.classList.toggle("selected", checkbox.checked);
        }
      });

      // Event listener para el checkbox
      const checkbox = div.querySelector("input");
      checkbox.addEventListener("change", (e) => {
        div.classList.toggle("selected", e.target.checked);
      });

      container.appendChild(div);
    });
  }

  /**
   * Abre modal de palabras personalizadas dentro del modal de categorías
   */
  openCustomWordsModalInline(categoryDiv, categoryCheckbox) {
    const existingWords = getCustomWords();
    const wordsText = existingWords.join(", ");

    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.style.zIndex = "1001";

    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>✏️ Palabras Personalizadas</h2>
                    <button class="modal-close">✕</button>
                </div>
                <div class="modal-body">
                    <p style="color: #666; margin-bottom: 15px; font-size: 0.95rem;">
                        Escribe tus palabras separadas por comas:<br>
                        <em>Ejemplo: Playa, Montaña, Ciudad</em>
                    </p>
                    <textarea id="customWordsInput" 
                        style="width: 100%; min-height: 150px; padding: 15px; border: 2px solid #E0E0E0; border-radius: 12px; font-size: 1rem; font-family: inherit; resize: vertical;"
                        placeholder="Escribe aquí...">${wordsText}</textarea>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" id="saveCustomWordsInline">Guardar</button>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    document
      .getElementById("saveCustomWordsInline")
      .addEventListener("click", () => {
        const input = document.getElementById("customWordsInput").value;
        const words = input
          .split(",")
          .map((w) => w.trim())
          .filter((w) => w !== "");

        if (words.length === 0) {
          alert("Debes agregar al menos una palabra");
          return;
        }

        setCustomWords(words);

        // Marcar el checkbox como seleccionado
        categoryCheckbox.checked = true;
        categoryDiv.classList.add("selected");

        modal.remove();
      });

    modal.querySelector(".modal-close").addEventListener("click", () => {
      modal.remove();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  /**
   * Actualiza toda la UI con el estado actual
   */
  updateUI() {
    const state = game.getState();

    // Actualizar preview de jugadores
    const playersText = this.playerNames.length === 1 ? "jugador" : "jugadores";
    this.elements.playersPreview.textContent = `${this.playerNames.length} ${playersText}`;

    // Actualizar preview de impostores
    const impostorsText = state.impostors === 1 ? "impostor" : "impostores";
    this.elements.impostorsPreview.textContent = `${state.impostors} ${impostorsText}`;

    // Actualizar preview de categorías
    const selectedCount = this.selectedCategories.length;
    if (selectedCount === 0) {
      this.elements.categoriesPreview.textContent = "Ninguna seleccionada";
    } else if (selectedCount === 1) {
      this.elements.categoriesPreview.textContent = this.selectedCategories[0];
    } else {
      this.elements.categoriesPreview.textContent = `${selectedCount} seleccionadas`;
    }
  }

  /**
   * Inicia el juego
   */
  startGame() {
    try {
      // Validar que haya categorías seleccionadas
      if (this.selectedCategories.length === 0) {
        throw new Error("Debe seleccionar al menos una categoría");
      }

      // Pasar las categorías seleccionadas al juego
      game.setCategories(this.selectedCategories);
      game.startGame();
      this.hideError();
      this.updatePassPhoneScreen();
      this.switchScreen("home", "passPhone");
    } catch (error) {
      this.showError(error.message);
    }
  }

  /**
   * Actualiza la pantalla de pasar teléfono
   */
  updatePassPhoneScreen() {
    const state = game.getState();
    const playerIndex = state.currentPlayer;
    const playerName =
      this.playerNames[playerIndex] || `Jugador ${playerIndex + 1}`;

    this.elements.currentPlayerNameDisplay.textContent = playerName;
    this.setRandomAvatarBackground();
    this.resetCard();
  }

  /**
   * Oculta y continúa al siguiente jugador
   */
  hideAndContinue() {
    if (game.nextPlayer()) {
      this.updatePassPhoneScreen();
    } else {
      this.switchScreen("passPhone", "game");
      this.displayGameScreen();
    }
  }

  /**
   * Muestra la pantalla de juego
   */
  displayGameScreen() {
    const state = game.getState();
    const firstPlayerName =
      this.playerNames[state.firstPlayer - 1] || `Jugador ${state.firstPlayer}`;
    this.elements.firstPlayerDisplay.textContent = firstPlayerName;
    this.elements.rolesCard.style.display = "none";
  }

  /**
   * Alterna la visualización de roles
   */
  toggleRolesDisplay() {
    const rolesCard = this.elements.rolesCard;

    if (rolesCard.style.display === "none") {
      this.renderRoles();
      rolesCard.style.display = "block";
    } else {
      rolesCard.style.display = "none";
    }
  }

  /**
   * Renderiza todos los roles
   */
  renderRoles() {
    const state = game.getState();
    let rolesHTML = "";

    state.roles.forEach((role, index) => {
      const playerName = this.playerNames[index] || `Jugador ${index + 1}`;
      const roleText = role === "impostor" ? "🕵️ IMPOSTOR" : "👤 Ciudadano";
      const roleClass = role === "impostor" ? "impostor" : "citizen";
      rolesHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.1); border-radius: 10px; margin-bottom: 10px;">
                    <span style="font-weight: 600;">${playerName}</span>
                    <span class="role-badge ${roleClass}" style="margin: 0;">${roleText}</span>
                </div>
            `;
    });

    // Mostrar palabra secreta y pista (si existe)
    rolesHTML += `
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 10px;">
                <strong>Palabra Secreta:</strong> ${state.secretWord}
        `;

    if (state.useHintWord && state.hintWord) {
      rolesHTML += `<br><strong>Pista del Impostor:</strong> ${state.hintWord}`;
    }

    rolesHTML += `</div>`;

    this.elements.rolesDisplay.innerHTML = rolesHTML;
  }

  /**
   * Reinicia el juego
   */
  restart() {
    game.reset();
    this.elements.rolesCard.style.display = "none";
    // Mantener categorías seleccionadas
    this.updateUI();
    this.switchScreen("game", "home");
  }

  /**
   * Cambia entre pantallas con animación
   */
  switchScreen(fromScreen, toScreen) {
    const from = this.screens[fromScreen];
    const to = this.screens[toScreen];

    from.classList.add("hiding");

    setTimeout(() => {
      from.classList.remove("active", "hiding");
      to.classList.add("active");
    }, 300);
  }

  /**
   * Muestra un mensaje de error
   */
  showError(message) {
    this.elements.errorMessage.innerHTML = `<div class="error-message">${message}</div>`;
  }

  /**
   * Oculta el mensaje de error
   */
  hideError() {
    this.elements.errorMessage.innerHTML = "";
  }
}

// Inicializar la UI cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UIManager();
});
