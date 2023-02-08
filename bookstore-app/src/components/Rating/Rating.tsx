import "./rating.scss";

type Rate = {
  rate: number;
};
export const Rating = (props: Rate) => {
  return (
    <div className="rating" data-total-value={props.rate}>
      <div className="rating-item" data-item-value="5">
        ★
      </div>
      <div className="rating-item" data-item-value="4">
        ★
      </div>
      <div className="rating-item" data-item-value="3">
        ★
      </div>
      <div className="rating-item" data-item-value="2">
        ★
      </div>
      <div className="rating-item" data-item-value="1">
        ★
      </div>
    </div>
  );
};
