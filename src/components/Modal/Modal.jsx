// import { Component } from 'react';

import { useEffect } from 'react';

const Modal = ({ children, toggleShowModal }) => {
  useEffect(() => {
    const handlePressEsc = e => {
      console.log('mount', Date.now());
      if (e.code === 'Escape') toggleShowModal();
    };

    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [toggleShowModal]);

  // componentDidMount() {
  //   window.addEventListener('keydown', handlePressEsc);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', handlePressEsc);
  // }

  return (
    <div className="modal fade show" style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggleShowModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
