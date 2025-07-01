// src/components/Modal.jsx
const Modal = ({ isOpen, onClose, title = "Modal Title", children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        {/* Judul */}
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Isi konten */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
