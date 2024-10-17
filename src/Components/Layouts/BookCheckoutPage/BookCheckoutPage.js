import { CheckoutBox } from "./CheckoutBox";
import { Reviews } from "./Reviews";

export const BookCheckoutPage = (props) => {
  return (
    <div>
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            <img src={props.img} width="226" height="349" alt="Book" />
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-4">
              <h2>{props.title}</h2>
              <h5 className="text-primary">{props.author}</h5>
              <p className="lead">{props.description}</p>
            </div>
          </div>
          <CheckoutBox />
        </div>
        <hr />
        <Reviews />
      </div>
    </div>
  );
};
