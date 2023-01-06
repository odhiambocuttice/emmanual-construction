import { useRef } from "react";
import { Dialog } from "@headlessui/react";

const Modal = ({ onClose = () => {}, children }) => {
  let overlayRef = useRef();

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-gray-900/90"
      />
      <div className="relative flex items-center justify-center w-1/2">
        {children}
      </div>
    </Dialog>
  );
};

export default Modal;
