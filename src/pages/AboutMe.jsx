export default function AboutMe() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-bold">¡Hola! Soy Franco</h3>
      <p>
        Soy desarrollador Full Stack con foco en experiencias limpias y usables.
        Tengo experiencia realizando varios tipos de proyectos: sitios
        corporativos, paneles administrativos, e-commerce y soluciones a medida.
      </p>
      <div>
        <h4 className="font-semibold mb-2">Stack principal</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li>Frontend: React, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Express, PostgreSQL</li>
          <li>DevOps: Docker, AWS, Git</li>
        </ul>
      </div>
      <p>
        📧{" "}
        <a
          href="mailto:francobarberissic3@gmail.com"
          className="text-blue-600 hover:underline"
        >
          francobarberissic3@gmail.com
        </a>
      </p>
    </div>
  );
}
