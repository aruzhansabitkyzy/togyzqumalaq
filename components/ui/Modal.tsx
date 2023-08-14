import React, { useEffect } from "react";
import Button from "./Button";
import "/public/css/popup.css";

const Modal = ({
  isOpen,
  onClose,
  autoClose,
  children,
}: {
  isOpen: boolean;
  onClose: Function;
  autoClose: boolean;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (autoClose && isOpen) {
      const timer = setTimeout(onClose, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, autoClose, onClose]);

  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup__box dark:bg-dark1 bg-light1">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
