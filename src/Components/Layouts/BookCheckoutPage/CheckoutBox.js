import { Link } from "react-router-dom";
import { useState } from "react";
export const CheckoutBox = (props) => {
  const [checkout, setCheckout] = useState(false);

  const checkoutHandler = () => {
    setCheckout(!checkout);
  };

  return (
    <div className="card col-3 container d-flex mb-5">
      <div className="card-body conatiner">
        <div className="mt-3">
          <p>
            <b>0/5 </b>
            Books Checked Out
          </p>
          <hr />
          <h4 className="text-success">Available</h4>
          <div className="row">
            <p className="col-6 lead">
              <b>10 </b>
              Copies
            </p>
            <p className="col-6 lead">
              <b>5 </b>Available
            </p>
          </div>
        </div>
        <button onClick={checkoutHandler} className="btn btn-success btn-md">
          {checkout ? "Checked !!!" : "Check out"}
        </button>
        <hr />
        <p>Sign in to able to review</p>
      </div>
    </div>
  );
};
