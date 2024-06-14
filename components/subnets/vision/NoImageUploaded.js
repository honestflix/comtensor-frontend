// components/NoImageUploaded.js
export default function NoImageUploaded() {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-200 rounded-lg p-6 text-gray-500">
        <svg
          className="w-16 h-16 mb-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M3 12a9 9 0 1018 0 9 9 0 00-18 0z"
          />
        </svg>
        <p>No image uploaded.</p> 
      </div>
    );
  }
  