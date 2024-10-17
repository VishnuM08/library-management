import { HistoryPage } from "./HistoryPage";
import { Loans } from "./Loans";

export const ShelfPage = () => {
  return (
    <div className="container">
      <div className="mt-3 ml-7">
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-loans-tab"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-loans"
              type="button"
              aria-controls="nav-loans"
              aria-selected="true"
            >
              Loans
            </button>
            <button
              className="nav-link"
              id="nav-history-tab"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-history"
              aria-controls="nav-history"
              aria-selected="false"
            >
              History
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-loans"
            role="tabpanel"
            aria-labelledby="nav-loans-tab"
          >
            <Loans />
          </div>
          <div
            className="tab-pane fade"
            id="nav-history"
            role="tabpanel"
            aria-labelledby="nav-history-tab"
          >
            <HistoryPage />
          </div>
        </div>
      </div>
    </div>
  );
};
