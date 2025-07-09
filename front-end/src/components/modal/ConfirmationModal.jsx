import Button from "../buttons/Button";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message, btnMsg }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-400 opacity-30 flex items-center justify-center z-30"></div>
      <div className="fixed  inset-0 z-50 flex items-center justify-center ">
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
          <h2 className="text-lg font-semibold mb-3">Konfirmasi</h2>
          <p className="mb-6">{message}</p>
          <div className="flex justify-end gap-4">
            <Button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 hover:text-white  text-gray-600"
            >
              Batal
            </Button>
            <Button onClick={onConfirm}>{btnMsg}</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
