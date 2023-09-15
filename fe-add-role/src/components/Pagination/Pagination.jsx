import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Button from "../Button/Button";
import { useSelector } from "react-redux";

const Pagination = ({ page }) => {
  const totalPage = useSelector((state) => state.totalPage);
  const currentPage = useSelector((state) => state.currentPage);

  const nextPage = () => {
    if (currentPage !== totalPage) {
      page("next");
    }
  };

  const prevPage = () => {
    page("prev");
  };

  return (
    <nav className="ml-auto">
      <ul className="pagination flex h-10 items-center gap-1">
        <h2>{`${currentPage} out of ${totalPage}`}</h2>
        <li className="page-item">
          <Button className="page-link page-button " clickHandler={prevPage}>
            <HiOutlineChevronLeft size={20} />
          </Button>
        </li>
        <li className="page-item ">
          <Button className="page-link page-button" clickHandler={nextPage}>
            <HiOutlineChevronRight size={20} />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
