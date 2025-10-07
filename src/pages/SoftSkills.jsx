export default function SoftSkills() {
  return (
    <div>
      <img
        src="/proyecto1.jpg"
        alt="TburgerLabs"
        className="w-full max-w-md mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">
        TburgerLabs - Sistema de Pedidos
      </h3>
      <p className="mb-4">
        Aplicación web completa para gestión de pedidos de restaurante con
        <strong> React + Node.js + PostgreSQL</strong>.
      </p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Características:</h4>
        <ul className="list-disc ml-6">
          <li>Panel de administración</li>
          <li>Sistema de pedidos en tiempo real</li>
          <li>Integración con pagos</li>
          <li>Dashboard de estadísticas</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ver Demo
        </a>
        <a
          href="#"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
