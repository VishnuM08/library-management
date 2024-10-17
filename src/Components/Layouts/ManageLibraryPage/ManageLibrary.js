import { AddNewBook } from "./components/AddNewBook";
import { AdminMessages } from "./components/AdminMessages";

export const ManageLibrary = () => {
  return (
    <div className="container">
      <div className="mt-5">
        <h3>Manage Library</h3>
        <nav>
          <div className="nav nav-tabs mt-3" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-add-book-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-add-book"
              role="tab"
            >
              Add new book
            </button>
            <button
              className="nav-link "
              id="nav-quantity-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-quantity"
              role="tab"
            >
              Change quantity
            </button>
            <button
              className="nav-link "
              id="nav-messsages-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-messages"
              role="tab"
            >
              Messages
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active " id="nav-add-book">
            <AddNewBook />
          </div>
          <div className="tab-pane fade" id="nav-quantity">
            quantity
          </div>
          <div className="tab-pane fade" id="nav-messages">
            <AdminMessages />
          </div>
        </div>
      </div>
    </div>
  );
};
