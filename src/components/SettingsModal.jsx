import { useEffect, useLayoutEffect, useRef, useState } from "react";

function SettingsModal({ isOpen, onClose, isDark, onToggleDark, anchorRect }) {
  if (!isOpen) return null;

  const popRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, arrowLeft: 16 });
  const [arrowSide, setArrowSide] = useState("top"); // 'top' o 'bottom'

  useLayoutEffect(() => {
    const { top = 0, left = 0, right = 0, width = 0, height = 0 } = anchorRect || {};
    let x = left;
    let y = top + height + 8; // abajo por defecto

    const el = popRef.current;
    if (el) {
      const pw = el.offsetWidth;
      const ph = el.offsetHeight;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const anchorCenter = left + width / 2;

      // Alinear para que el borde derecho del popover termine donde termina el UserProfile/botón
      const desiredRight = Math.min(right, vw - 8);
      x = Math.max(8, desiredRight - pw);

      // Preferir arriba si hay espacio
      const yAbove = top - ph - 8;
      if (yAbove >= 8) {
        y = yAbove;
        setArrowSide("bottom");
      } else {
        y = Math.min(top + height + 8, vh - ph - 8);
        setArrowSide("top");
      }

      const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
      const arrowLeft = clamp(anchorCenter - x, 12, pw - 12);
      setPos({ x, y, arrowLeft });
    }

    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, [anchorRect]);

  // Cerrar al hacer click/touch fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (!popRef.current) return;
      if (!popRef.current.contains(e.target)) onClose(); // click fuera => cerrar
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  // Colores de la flecha en light/dark
  const arrowBorder = isDark ? "rgb(55 65 81)" : "rgb(209 213 219)"; // border-gray-700/300
  const arrowFill = isDark ? "rgb(17 24 39)" : "rgb(255 255 255)"; // bg-gray-900/white

  return (
    <div
      ref={popRef}
      className={`fixed z-50 bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 shadow-xl whitespace-nowrap p-2 origin-top-left transform transition duration-150 ease-out ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ top: pos.y, left: pos.x }}
      role="dialog"
      aria-modal="false"
    >
      {/* Flecha superior */}
      {arrowSide === "top" && (
        <>
          <span className="pointer-events-none absolute -top-2" style={{ left: pos.arrowLeft - 7 }} aria-hidden>
            <span
              className="block"
              style={{
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderBottom: `7px solid ${arrowBorder}`,
              }}
            />
          </span>
          <span className="pointer-events-none absolute -top-[6px]" style={{ left: pos.arrowLeft - 6 }} aria-hidden>
            <span
              className="block"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: `6px solid ${arrowFill}`,
              }}
            />
          </span>
        </>
      )}

      {/* Flecha inferior */}
      {arrowSide === "bottom" && (
        <>
          <span className="pointer-events-none absolute -bottom-2" style={{ left: pos.arrowLeft - 7 }} aria-hidden>
            <span
              className="block"
              style={{
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: `7px solid ${arrowBorder}`,
              }}
            />
          </span>
          <span className="pointer-events-none absolute -bottom-[6px]" style={{ left: pos.arrowLeft - 6 }} aria-hidden>
            <span
              className="block"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: `6px solid ${arrowFill}`,
              }}
            />
          </span>
        </>
      )}

      {/* Contenido compacto */}
      <div className="flex items-center gap-2">
        <span className="text-base select-none pointer-events-none cursor-default" aria-hidden>
          🌞
        </span>
        <button
          onClick={onToggleDark}
          className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors cursor-pointer ${isDark ? "bg-green-500" : "bg-gray-600"}`}
          aria-pressed={isDark}
          aria-label="Alternar modo oscuro"
          title={isDark ? "Oscuro ON" : "Oscuro OFF"}
        >
          <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white transition-transform ${isDark ? "translate-x-8" : "translate-x-1"}`}
          />
        </button>
        <span className="text-base select-none pointer-events-none cursor-default" aria-hidden>
          🌙
        </span>
      </div>
    </div>
  );
}

export default SettingsModal;