import "./popUp.scss";

type PopUpBook = {
  modalImg: string;
  active: boolean;
  setModalActive: boolean | any;
};

export const PopUpBook = (props: PopUpBook) => {
  return (
    <div
      className={props.active ? "modal active" : "modal"}
      onClick={() => props.setModalActive(false)}
    >
      <img className="modal-img" src={props.modalImg} alt="#" />
    </div>
  );
};
