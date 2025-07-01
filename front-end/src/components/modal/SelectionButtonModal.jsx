const SelectionButtonModal = ({ isOpen, onClose, options = [], onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Pilih Opsi</h2>
        <ul className="space-y-2">
          {options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  onSelect(option);
                  onClose();
                }}
                className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-blue-500 hover:text-white"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Batal
        </button>
      </div>
    </div>
  );
};

export default SelectionButtonModal;
