import React from "react";

export const Pagination = ({
  pages,
  setSelectedPage,  
  SelectedPage,
  NumOfPage,
}) => {
  return (
    <div className="pageBox">
      <button
        className="pageNumBtn"
        onClick={() => SelectedPage > 1 && setSelectedPage(SelectedPage - 1)}
      >
        Previous
      </button>
      {pages.map((e, i) => (
        <button
          key={i}
          className={SelectedPage === e ? "active" : "pageNumBtn"}
          onClick={() => setSelectedPage(e)}
        >
          {e}
        </button>
      ))}

      <button
        className="pageNumBtn"
        onClick={() =>
          SelectedPage < NumOfPage && setSelectedPage(SelectedPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
};
