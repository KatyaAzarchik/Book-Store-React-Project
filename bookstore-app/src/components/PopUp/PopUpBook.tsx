import { IModal } from "../../interfaces";
import "./popUp.scss";
export const PopUpBook = (props: IModal) => {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setModalActive(false)}
    >
      <img className="modal-img" src={props.modalImg} alt="#" />
    </div>
  );
};
