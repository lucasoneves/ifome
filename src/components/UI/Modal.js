import ReactDOM from "react-dom";
import classes from './Modal.module.scss';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </>
  );
};

export default Modal;