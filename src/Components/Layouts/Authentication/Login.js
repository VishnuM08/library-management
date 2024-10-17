import { Link } from "react-router-dom";
import { Homepage } from "../HomePage/Homepage";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const submitHandler = () => {
    let path = "/home";
    history.push(path);
  };

  return (
    <div className="container mt-5 pt-4 col-3 shadow p-3 mb-5 bg-white rounded">
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
        <p>
          Dont have an account click here <Link to="/sign-up">click here </Link>
        </p>
      </form>
    </div>
  );
};
