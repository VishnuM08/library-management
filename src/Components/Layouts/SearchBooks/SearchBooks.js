import { Link } from "react-router-dom";

export const SearchBooks = (props) => {
  return (
    <div>
      <div>
        <div className="container card mt-3 shadow p-3 bm-4 bg-body rounded ">
          <div className="row g-0">
            <div className="col-md-2">
              <div className="d-none d-lg-block">
                {<img src={props.img} width="151" height="233" alt="book" />}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{props.author}</h5>
                <h4>{props.title}</h4>
                <p className="card-text">{props.description}</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <Link
                className="btn btn-md main-color text-white"
                to={`/checkout/${props.id}`}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
