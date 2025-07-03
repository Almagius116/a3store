const SelectionButtonModal = ({ isOpen, onClose, options = [], onSelect }) => {
  if (!isOpen) return null;

  return (
    <>
      <button onClick={onClose} className="absolute inset-0 z-50"></button>
      <div className="absolute top-20 z-50 right-[6%] bg-gray-100 p-6 rounded-lg shadow-lg w-2/5 max-w-2xs">
        <h2 className="text-xl font-semibold mb-4">Info</h2>
        <ul className="space-y-2">
          {options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  onSelect(option);
                  onClose();
                }}
                className="w-full text-left px-4 py-2 bg-gray-200 rounded hover:bg-gray-500 transition duration-700 hover:text-white"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectionButtonModal;
