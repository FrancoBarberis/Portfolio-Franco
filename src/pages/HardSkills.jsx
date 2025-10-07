export default function HardSkills() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-xl font-semibold">Te presento mi stack</h2>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 w-full max-w-2xl">
        {/* Fila 1: HTML HTML JS */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium">
          HTML
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium">
          JavaScript
        </div>

        {/* Fila 2: CSS CSS (JS continúa) */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium">
          CSS
        </div>

        {/* Fila 3: REACT GIT GIT */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-1 row-span-2 flex items-center justify-center font-medium">
          React
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium">
          Git
        </div>

        {/* Fila 4: (REACT continúa) FIGMA FIGMA */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded text-center col-span-2 row-span-1 flex items-center justify-center font-medium">
          Figma
        </div>
      </div>
    </div>
  );
}
