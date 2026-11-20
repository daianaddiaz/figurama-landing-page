# 🌐 Figurama — Landing Page

Sitio web de presentación para **Figurama**, el videojuego de tablero táctico con patrones geométricos y mitos clásicos desarrollado en **Godot 4** y **C#**. Está pensado para mostrar la jugabilidad, los personajes y sus habilidades, el enfoque de diseño **MDA**, el proceso de desarrollo, la arquitectura multijugador en red y el enlace al repositorio principal del juego.

---

## ✨ Secciones de la Landing Page

- **Logo Superior & Barra de Navegación (`Navbar`):** Banner superior con el logo principal de gran escala, barra fija con el título **FIGURAMA** acompañado de una imagen decorativa en PNG transparente, enlaces directos a *Jugabilidad*, *Mitos & Poderes*, *Diseño (MDA)*, *Proceso & Tech*, botón a GitHub y menú hamburguesa en vista móvil.
- **Hero:** Presentación principal del proyecto, etiquetas de tecnología/modo de juego, accesos rápidos, indicador de color de las 4 fichas y espacio para captura/GIF del tablero.
- **🎮 Jugabilidad y Reglas:** Flujo del turno en 4 pasos (robo/planificación, movimientos/reroll, restricción de color y condición de victoria) junto a un bloque destacado sobre figuras, HUD y ambientación dinámica.
- **🐺 Leyendas y Habilidades Únicas:** Tarjetas de los cuatro personajes (**Lobizón**, **Luz Mala**, **El Pomberito** y **Mulánima**) con su rol, descripción de poder e ilustraciones sin marco, acompañadas por íconos de **Font Awesome 6**.
- **🎯 Diseño de Juego (Framework MDA):** Pestañas interactivas para alternar entre **Mecánicas**, **Dinámicas** y **Estéticas**.
- **🛠️ Proceso de Desarrollo y Arquitectura:** Línea de tiempo del desarrollo (patrón *Command*, pulido visual/3D y adaptación multijugador) acompañada de tarjetas resumen sobre transporte/RPC con `ENetMultiplayerPeer`, salas/descubrimiento UDP y validación autoritativa del servidor.
- **Footer:** Créditos del equipo (**Kevin Alemanno**, **Alejandro Decurgez** y **Daiana Diaz**), enlace al repositorio y retorno al inicio.

---

## 🎨 Estilo Visual, Tipografías e Íconos

- **Fondo continuo:** Degradado diagonal inspirado en `FondoJugador3.jpg` (verdes luminosos/medios hacia azul marino/índigo profundo), con ajuste a `background-attachment: scroll` en móviles para evitar saltos visuales.
- **Acentos de fichas:** Colores inspirados en las fichas del juego junto con detalles en verde para acciones y estados activos.
- **Tipografías locales (`assets/`):**
  - **Designer** para títulos y marca.
  - **TT Chocolates Trial Bold** para navbar, botones, etiquetas y textos resaltados.
  - **TT Chocolates Trial Medium** para el cuerpo de texto general.
- **Iconografía:** Integración de **Font Awesome 6** vía CDN con reglas específicas para evitar conflictos de herencia con las fuentes locales de los títulos.
- **Diseño responsivo:** Grillas adaptables, escalado fluido de logos e imágenes PNG, navegación colapsable en celulares y prevención de desborde horizontal.
