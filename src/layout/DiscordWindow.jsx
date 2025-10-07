import { useLayoutEffect, useState } from 'react';
import { UserProfile } from '../components';
import rocketGif from '../assets/rocketGIF.webp';

function DiscordWindow({ 
  children, 
  userName = "Franco Barberis", 
  userAvatar = rocketGif,
  userAvatarGif = null,
  userBio = "Frontend Developer",
  userStatus = "open to work", 
  githubName = "FrancoBarberis" 
}) {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isDark, setIsDark] = useState(true); // por defecto: oscuro
  const [transDur, setTransDur] = useState(500);
  const [sweeping, setSweeping] = useState(false);
  const [sweepType, setSweepType] = useState('darken'); // 'darken' | 'lighten'
  const [sweepDir, setSweepDir] = useState('rtl'); // 'rtl' | 'ltr'

  // Opcional: añade o quita la clase 'dark' en <html> si usas Tailwind darkMode: 'class'
  useLayoutEffect(() => {
    const el = document.documentElement;
    if (isDark) el.classList.add('dark');
    else el.classList.remove('dark');
  }, [isDark]);

  // (sin popover de settings)

  return (
  <div className="h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white flex flex-col overflow-hidden font-mono">
      {/* Barra de título vacía */}
  <div className="bg-gray-200 dark:bg-gray-900 h-6 md:h-8 border-b-2 border-gray-400 dark:border-gray-700 flex-shrink-0" />

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden w-full min-h-0">
        {children}
      </div>

      {/* Barra inferior */}
  <div className="bg-gray-200 dark:bg-gray-900 border-t-2 border-gray-400 dark:border-gray-700 flex items-center gap-2 flex-shrink-0
                      px-2 py-2 md:px-2 md:py-2
                      md:grid md:grid-cols-[5rem_15rem_1fr]">
        {/* Perfil: en mobile ocupa todo; en desktop, 2 primeras columnas */}
        <div className="px-2 md:px-2 md:col-span-2 flex-1">
          <UserProfile 
            name={userName}
            avatar={userAvatar}
            avatarGif={userAvatarGif}
            bio={userBio}
            status={userStatus}
            githubName={githubName}
            audioEnabled={audioEnabled}
            onToggleAudio={() => setAudioEnabled(v => !v)}
            // Toggle de tema reemplaza la rueda de configuración
            isDark={isDark}
            onToggleDark={() => {
              // Duración responsive: más rápido en pantallas chicas
              const w = window.innerWidth;
              let dur = 500; // desktop por defecto
              if (w <= 480) dur = 300;
              else if (w <= 768) dur = 380;
              setTransDur(dur);
              const early = Math.max(0, Math.round(dur * 0.82));
              // Barrido visual: darken de derecha a izquierda (light->dark), lighten de izquierda a derecha (dark->light)
              if (!isDark) {
                setSweepType('darken');
                setSweepDir('rtl');
                setSweeping(true);
                setTimeout(() => setIsDark(true), early);
                setTimeout(() => setSweeping(false), dur);
              } else {
                setSweepType('lighten');
                setSweepDir('ltr');
                setSweeping(true);
                setTimeout(() => setIsDark(false), early);
                setTimeout(() => setSweeping(false), dur);
              }
            }}
          />
        </div>

        {/* Input solo en desktop, con emoji y aviso de demo */}
        <div className="hidden md:block md:col-start-3 md:px-0">
          <div className="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 flex items-center gap-3 border-2 border-gray-400 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-500 text-sm">💬</span>
            <input 
              type="text" 
              placeholder="Mensaje..."
              className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-sm"
            />
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm" title="Emojis">😊</button>
          </div>
        </div>
      </div>

      {/* Overlay de barrido: oscurecer (RTL) o aclarar (LTR) toda la UI */}
      {sweeping && (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div
            className={`w-full h-full scale-x-0 ${sweepDir === 'rtl' ? 'origin-right' : 'origin-left'}`}
            style={{
              background: sweepType === 'darken'
                ? 'linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                : 'linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)',
              animation: `darkwipe ${transDur}ms linear forwards`
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DiscordWindow;