import * as React from "react";
import { RootState } from "../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowModal,
  setModalContent,
} from "../../Store/redux/slices/modalSlice";

export interface IModalProps {}

export default function Modal(props: IModalProps) {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.modal.showModal);
  const ModalContent = useSelector(
    (state: RootState) => state.modal.modalContent,
  );

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const handleClose = () => {
    dispatch(setShowModal(false));
    dispatch(setModalContent("empty"));
  };

  const LoginSignupBar = () => {
    return (
      <div className="loginSignup">
        username:
        <input />
        password:
        <input />
      </div>
    );
  };

  const RenderModalElement = () => {
    switch (ModalContent) {
      case "oauth":
        return <LoginSignupBar />;
      case "empty":
        return <div />;
      default:
        return <div />;
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <RenderModalElement />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
