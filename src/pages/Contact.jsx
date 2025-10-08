export default function Contact() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h3 className="text-2xl font-bold text-white">Contacto</h3>
      
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
            <span>📧</span> Email
          </h4>
          <a
            href="mailto:francobarberissic3@gmail.com"
            className="text-blue-400 hover:underline"
          >
            francobarberissic3@gmail.com
          </a>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
            <span>💼</span> LinkedIn
          </h4>
          <a
            href="https://linkedin.com/in/franco-barberis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/franco-barberis
          </a>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
            <span>🐙</span> GitHub
          </h4>
          <a
            href="https://github.com/FrancoBarberis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/FrancoBarberis
          </a>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
            <span>📱</span> Teléfono
          </h4>
          <p className="text-gray-300">+54 XXX XXX XXXX</p>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
            <span>📍</span> Ubicación
          </h4>
          <p className="text-gray-300">
            Argentina - Disponible para remoto
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
        <p className="text-sm text-gray-300">
          💡 <strong className="text-white">Disponibilidad:</strong> Abierto a nuevas oportunidades y proyectos freelance.
          No dudes en contactarme para discutir cómo puedo ayudarte.
        </p>
      </div>
    </div>
  );
}
