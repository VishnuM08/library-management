export const AddNewBook = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="card-header">Add new book</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                required
              ></input>
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Category</label>
              <button
                className="form-control btn btn-secondary dropdown-toggle"
                type="button"
                id="book-dropdown"
                data-bs-toggle="dropdown"
              >
                Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="book-dropdown">
                <li>
                  <a href="" className="dropdown-item">
                    Adventure
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Mysterious
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Crime
                  </a>
                </li>
                <li>
                  <a href="" className="dropdown-item">
                    Love
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Description</label>
              <textarea
                type="text"
                className="form-control"
                id="formControlTextArea1"
                rows={3}
              ></textarea>
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Copies</label>
              <input
                type="number"
                className="form-control"
                name="Copies"
                required
              ></input>
            </div>
            <input type="file" />
            <div>
              <button type="button" className="btn btn-primary mt-3">
                Add Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
