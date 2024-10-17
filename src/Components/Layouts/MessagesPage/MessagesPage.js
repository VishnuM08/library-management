import { PostNewMessages } from "./PostNewMessages";

export const MessagesPage = () => {
  return (
    <div className="container">
      <div className="mt-3 md-3">
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-send-message-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-send-message"
              role="tab"
              aria-controls="nav-sned-message"
              aria-selected="true"
            >
              Submit Question
            </button>
            <button
              className="nav-link"
              id="nav-message-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-message"
              role="tab"
              aria-controls="nav-message"
              aria-selected="false"
            >
              Response / Pending
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-send-message"
            role="tabpanel"
            aria-labelledby="nav-send-message-tab"
          >
            <PostNewMessages />
          </div>
          <div
            className="tab-pane fade"
            id="nav-message"
            role="tabpanel"
            aria-labelledby="nav-message-tab"
          >
            <p>No messages.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
