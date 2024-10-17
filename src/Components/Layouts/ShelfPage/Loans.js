import { useParams, Link } from "react-router-dom";

export const Loans = () => {
  return (
    <div className="d-none d-lg-block mt-2">
      <>
        <h5>Current Loans:</h5>
        <div className="row mt-3 mb-3">
          <div className="col-4 col-md-4 container">
            <img
              src={require("../../Pictures/BooksImages/Room-on-the-roof.png")}
              width="226"
              height="349"
              alt="Book"
            />
          </div>
          <div className="card col-3 col-md-3 container d-flex">
            <div className="card-body">
              <div className="m-3">
                <h4>Loan Options</h4>
                <p className="text-secondary"> Due in 5 days</p>
              </div>
              <div className="list-group mt-3">
                <button
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  data-bs-toggle="modal"
                  data-bs-target={`modal#{}`}
                >
                  Return Book
                </button>
                <Link
                  to={"search"}
                  className="list-group-item list-group-item-action"
                >
                  Search more books?
                </Link>
              </div>
              <hr />
              <p className="md-1">
                Select any action that you want if your book loan duration is
                going to expire
              </p>
            </div>
          </div>
        </div>
        <hr />
      </>
    </div>
  );
};
