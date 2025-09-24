// components/CourseCard.js
export default function CourseCard({ title, description }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600">
        View Course
      </button>
    </div>
  );
}