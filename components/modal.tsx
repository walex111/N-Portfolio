import { useRef, useEffect } from "react";

const Modal = ({ onClose = () => {}, children }: any) => {
  return (
    <div
      className="w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80"
      onClick={onClose}
    >
      <div className="w-full h-full font-bebas text-neutral-600 px-20 flex flex-col justify-center items-center tracking-wide overflow-y-auto">
        <div className="h-[90vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
