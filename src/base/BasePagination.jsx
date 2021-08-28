import React from "react";
import { Link } from "react-router-dom";
import { ArrowCircleLeft, ArrowCircleRight } from "../icons/icons";
import BaseButton from "./BaseButton";

const BasePagination = ({ total, itemsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-section">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};
export default BasePagination;
