import * as React from "react";
import { RootState } from "../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import LoginSignupBar from "./LoginSignupBar/LoginSignupBar";
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

  const handleClose = () => {
    dispatch(setShowModal(false));
    dispatch(setModalContent("empty"));
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
    <>
      <div className={showModal ? "overlay" : "no-overlay"} />
      <div className={showModal ? "modal" : "modal--hidden"}>
        <section className="modal-main">
          <RenderModalElement />
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </>
  );
}
