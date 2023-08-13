import React, { useEffect } from "react";
import Button from "./Button";
import '/public/css/popup.css';

// // Styled components
// const ModalOuter = styled.div`
//   display: ${props => props.isOpen ? 'flex' : 'none'};
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   background-color: rgba(0,0,0,0.4);
//   align-items: center;
//   justify-content: center;
// `;

// const ModalInner = styled.div`
//   background-color: #fefefe;
//   margin: auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 50%;
// `;

// const CloseButton = styled.span`
//   color: #aaaaaa;
//   float: right;
//   font-size: 28px;
//   font-weight: bold;
//   &:hover,
//   &:focus {
//     color: #000;
//     text-decoration: none;
//     cursor: pointer;
//   }

// Modal component
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
            {autoClose && (
              //   <CloseButton onClick={onClose}>&times;</CloseButton>
              <Button text="close" size="btn-small" onClick={onClose} />
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
