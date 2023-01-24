import { IPaginaton } from "../../interfaces";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./pagination.scss";
export const Pagination = ({
  countOfPages,
  currentPage,
  setCurrentPage,
}: IPaginaton) => {
  const pageNumbers = Array.from(
    { length: countOfPages },
    (__, index) => index + 1
  );

  const nextPage = () => {
    if (currentPage !== countOfPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="navigation">
      <div className="navigation-list">
        <Link
          className="navigation__button"
          onClick={prevPage}
          to={
            currentPage === 1
              ? `?page=${currentPage}`
              : `?page=${currentPage - 1}`
          }
        >
          Prev
        </Link>

        {pageNumbers.map((pageNum) => (
          <Link
            to={`?page=${pageNum}`}
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={
              pageNum === currentPage
                ? "navigation__button navigation__button--active"
                : "navigation__button"
            }
          >
            {pageNum}
          </Link>
        ))}
        <Link
          className="navigation__button"
          to={
            currentPage === countOfPages
              ? `?page=${currentPage}`
              : `?page=${currentPage + 1}`
          }
          onClick={nextPage}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
