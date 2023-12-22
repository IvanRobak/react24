const Modal = ({ children, toggleShowModal }) => {
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
          {children}
          <div className="modal-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
