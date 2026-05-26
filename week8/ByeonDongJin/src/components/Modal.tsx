interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({
  message,
  onConfirm,
  onCancel,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[300px] rounded-xl bg-white p-6">
        <p className="mb-4 text-center text-[14px]">
          {message}
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded bg-gray-200 px-4 py-2"
          >
            취소
          </button>

          <button
            onClick={onConfirm}
            className="rounded bg-blue-500 px-4 py-2 text-white"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;