// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Subtítulos sincronizados aproximados para Floricienta - Flores Amarillas
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del sol iluminaba la Esquina", time: 32 },
  { text: "lo sentía tan cercano lo sentía desde niña", time: 40 },
  { text: "ella sabía que sabía que algún día pasaría", time: 46 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 51 },
  { text: "No te apures no detengas el instante del encuentro", time: 58 },
  { text: "Está dicho que es un hecho no la pierdas no hay derecho", time: 62 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 68 },
  { text: "En ese bar tan desierto y se esperaba la encuentro", time: 93 },
  { text: "encuentro", time: 97.5 },
  { text: "ella llegó en limusina amarilla por supuesto", time: 99},
  { text: "Él se acercó de repente y la miró tan de frente", time: 108 },
  { text: "Toda una vida soñó y no pudo decir nada", time: 114.5 },
  { text: "Ella sabía que sabía que algún día pasaría", time: 121 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 128 },
  { text: "No te apures no detengas el instante del encuentro", time: 133 },
  { text: "Está dicho que es un hecho no la pierdas no hay derecho", time: 137 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 144 },
  { text: "Ella sabía que sabía que algún día pasaría", time: 168 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 173 },
  { text: "No te apures no detengas el instante del encuentro", time: 180 },
  { text: "Está dicho que es un hecho no la pierdas no hay derecho", time: 184 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 189 },
  { text: "Él ya sabía que él sabía, él sabía ya sabía", time: 197 },
  { text: "Que sabía ya sabía y se olvidaron de sus flores", time: 202 },
  { text: "Amarillas", time: 205 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);