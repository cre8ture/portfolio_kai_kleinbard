// import { useState, useEffect } from 'react';

// const Modal = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const hasOpenedBefore = localStorage.getItem('hasOpenedModalBefore');
//     if (!hasOpenedBefore) {
//       setIsOpen(true);
//       localStorage.setItem('hasOpenedModalBefore', 'true');
//     }
//   }, []);

//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={handleClose}
//         >
//           <div
//             className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-1000 text-black"
//             onClick={(e) => e.stopPropagation()}
//             style={{ opacity: isOpen ? 1 : 0 }}
//           >
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


import { useState, useEffect } from 'react';

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasOpenedBefore = localStorage.getItem('hasOpenedModalBefore');
    if (!hasOpenedBefore) {
      setIsOpen(true);
      localStorage.setItem('hasOpenedModalBefore', 'true');
    }
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-1000"
          onClick={handleClose}
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg transition-opacity duration-1000 text-black"
            onClick={(e) => e.stopPropagation()}
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
