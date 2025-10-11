import { useState } from "react";

const CONTACT_DATA = [
  { label: "Email", value: "francobarberissic3@gmail.com", color: "from-green-500 to-green-700", icon: "📧" },
  { label: "LinkedIn", value: "linkedin.com/in/franco-barberis", color: "from-blue-500 to-blue-700", icon: "💼" },
  { label: "GitHub", value: "github.com/FrancoBarberis", color: "from-violet-600 to-violet-900", icon: "🐙" },
  { label: "Ubicación", value: "Argentina - Disponible para remoto", color: "from-yellow-400 to-yellow-600", icon: "📍" },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (value, idx) => {
    navigator.clipboard.writeText(value);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-2 pb-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Contacto</h2>
      <div className="flex flex-col gap-6 w-full max-w-md">
        {CONTACT_DATA.map((item, idx) => (
          <div
            key={item.label}
            className={`
              relative rounded-xl px-5 py-4 shadow-lg
              bg-gradient-to-br ${item.color}
              text-white flex items-center justify-between
              border border-white/10
              ring-2 ring-indigo-400/20
              transition-all
              animate-pulse-glow
            `}
            style={{
              boxShadow:
                item.label === "Email"
                  ? "0 0 8px 1px rgba(34,197,94,0.25), 0 0 16px 2px rgba(34,197,94,0.12)"
                  : item.label === "LinkedIn"
                  ? "0 0 8px 1px rgba(59,130,246,0.25), 0 0 16px 2px rgba(59,130,246,0.12)"
                  : item.label === "GitHub"
                  ? "0 0 8px 1px rgba(55,65,81,0.25), 0 0 16px 2px rgba(55,65,81,0.12)"
                  : item.label === "Ubicación"
                  ? "0 0 8px 1px rgba(236,72,153,0.25), 0 0 16px 2px rgba(236,72,153,0.12)"
                  : "0 0 8px 1px rgba(99,102,241,0.15), 0 0 16px 2px rgba(99,102,241,0.08)"
            }}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-lg flex items-center gap-2">{item.icon} {item.label}</span>
              <span className="text-sm opacity-90">{item.value}</span>
            </div>
            <button
              onClick={() => handleCopy(item.value, idx)}
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white px-2 py-1 rounded transition-all text-xs font-semibold shadow cursor-copy"
              title="Copiar"
              style={{cursor: 'pointer'}}
            >
              <span role="img" aria-label="Copiar" style={{fontSize: '1.2em'}}>🖱️</span>
              {copied === idx && (
                <span className="ml-2 bg-indigo-700 text-white px-2 py-1 rounded text-xs font-semibold shadow animate-fade-in inline-block">
                  ¡Copiado!
                </span>
              )}
            </button>
          </div>
        ))}
      </div>
      {/* Eliminado disponibilidad */}
      {/* Animaciones CSS extra para glow y fade-in */}
      <style>{`
        @keyframes pulse-glow-green {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(34,197,94,0.25), 0 0 16px 2px rgba(34,197,94,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(34,197,94,0.35), 0 0 32px 8px rgba(34,197,94,0.18); }
        }
        @keyframes pulse-glow-blue {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(59,130,246,0.25), 0 0 16px 2px rgba(59,130,246,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(59,130,246,0.35), 0 0 32px 8px rgba(59,130,246,0.18); }
        }
        @keyframes pulse-glow-gray {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(55,65,81,0.25), 0 0 16px 2px rgba(55,65,81,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(55,65,81,0.35), 0 0 32px 8px rgba(55,65,81,0.18); }
        }
        @keyframes pulse-glow-pink {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(236,72,153,0.25), 0 0 16px 2px rgba(236,72,153,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(236,72,153,0.35), 0 0 32px 8px rgba(236,72,153,0.18); }
        }
        .animate-pulse-glow {
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation-delay: 0s;
        }
        .from-green-500.animate-pulse-glow { animation-name: pulse-glow-green; }
        .from-blue-500.animate-pulse-glow { animation-name: pulse-glow-blue; }
  .from-violet-600.animate-pulse-glow { animation-name: pulse-glow-violet; }
  .from-yellow-400.animate-pulse-glow { animation-name: pulse-glow-yellow; }
        @keyframes pulse-glow-violet {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(124,58,237,0.25), 0 0 16px 2px rgba(124,58,237,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(124,58,237,0.35), 0 0 32px 8px rgba(124,58,237,0.18); }
        }
        @keyframes pulse-glow-yellow {
          0%, 100% { box-shadow: 0 0 8px 1px rgba(250,204,21,0.25), 0 0 16px 2px rgba(250,204,21,0.12); }
          50% { box-shadow: 0 0 24px 6px rgba(250,204,21,0.35), 0 0 32px 8px rgba(250,204,21,0.18); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 0.4s;}
      `}</style>
    </div>
  );
}
