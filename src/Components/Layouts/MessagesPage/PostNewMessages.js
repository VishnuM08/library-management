export const PostNewMessages = () => {
  return (
    <div className="card mt-3">
      <div className="card-header">Ask any questions to admin</div>
      <div className="card-body">
        <form>
          <div className="mb-3"></div>
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="FromControlInput1"
            placeholder="Title"
          />

          <div className="mb-3">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlTextarea1"
              row={3}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-3">Submit Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};
