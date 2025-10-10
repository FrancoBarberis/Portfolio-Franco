// Función para crear un sonido de "pop" discreto usando Web Audio API
// Este pop es más grave, ideal para cambios de servidor
export const playChannelSwitchSound = (audioEnabled = true) => {
  if (!audioEnabled) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Crear dos osciladores para un sonido "pop" más rico
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configuración del sonido "pop": dos frecuencias que caen rápidamente
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    // Frecuencias que descienden para crear efecto "pop"
    oscillator1.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.05);
    
    oscillator2.frequency.setValueAtTime(600, audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.05);
    
    // Envelope: ataque rápido y decay rápido para efecto "pop"
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.12, audioContext.currentTime + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
    
    // Reproducir
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.08);
    oscillator2.stop(audioContext.currentTime + 0.08);
    
    // Limpiar después de reproducir
    oscillator1.onended = () => {
      audioContext.close();
    };
  } catch (error) {
    console.warn('No se pudo reproducir el sonido:', error);
  }
};

// Función para crear un sonido de "pop" más agudo para canales
export const playHighPopSound = (audioEnabled = true) => {
  if (!audioEnabled) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Crear dos osciladores para un sonido "pop" agudo
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configuración del pop agudo: frecuencias más altas
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    // Frecuencias agudas que descienden
    oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator1.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.04);
    
    oscillator2.frequency.setValueAtTime(1200, audioContext.currentTime);
    oscillator2.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.04);
    
    // Envelope: más rápido y sutil
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.003);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.06);
    
    // Reproducir
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.06);
    oscillator2.stop(audioContext.currentTime + 0.06);
    
    // Limpiar después de reproducir
    oscillator1.onended = () => {
      audioContext.close();
    };
  } catch (error) {
    console.warn('No se pudo reproducir el sonido:', error);
  }
};

// Función alternativa para usar archivos de audio desde assets
// Para usarla, coloca tu archivo de audio (MP3, WAV, etc.) en src/assets/
// Por ejemplo: src/assets/channel-switch.mp3
// 
// Ejemplo de uso:
// import channelSwitchSound from '../assets/channel-switch.mp3';
// playAudioFile(channelSwitchSound, audioEnabled);

export const playAudioFile = (audioFilePath, audioEnabled = true) => {
  if (!audioEnabled) return;
  
  try {
    const audio = new Audio(audioFilePath);
    audio.volume = 0.3; // Volumen discreto (0.0 a 1.0)
    audio.play().catch(error => {
      console.warn('No se pudo reproducir el archivo de audio:', error);
    });
  } catch (error) {
    console.warn('Error al cargar el archivo de audio:', error);
  }
};


