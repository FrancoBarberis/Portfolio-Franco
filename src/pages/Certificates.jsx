export default function Certificates() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h4 className="font-bold text-lg mb-2">Frontend</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">
            React
          </span>
          <span className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full text-sm">
            Vue.js
          </span>
          <span className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full text-sm">
            TypeScript
          </span>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">Backend</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full text-sm">
            Node.js
          </span>
          <span className="bg-red-100 dark:bg-red-900 px-3 py-1 rounded-full text-sm">
            Python
          </span>
          <span className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full text-sm">
            PostgreSQL
          </span>
        </div>
      </div>
    </div>
  );
}
