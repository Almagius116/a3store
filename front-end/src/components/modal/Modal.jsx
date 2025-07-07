import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ isOpen, message, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center">
      <div className="bg-white rounded-4xl shadow-lg max-w-72 w-full p-6 py-3 relative animate-fadeIn h-40 mt-10">
        <div className="w-full flex justify-center my-3">
          {type === "Success" ? (
            <div className="bg-green-500 p-2 rounded-full border border-green-300">
              <CheckIcon className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className="bg-red-500 p-2 rounded-full border border-red-300">
              <XMarkIcon className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold text-center">{type}</h2>

        <div className="text-center my-3">{message}</div>
      </div>
    </div>
  );
};

export default Modal;
