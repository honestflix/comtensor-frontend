// components/ImageItem.js
export default function ImageItem({ src, alt }) {  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <img
          src={src}  
          alt={alt}  
          className="w-48 h-48 object-cover rounded" 
        />
      </div>
    );
  }
  