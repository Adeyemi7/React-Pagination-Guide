import ReactPaginate from "react-paginate"
const PaginationComponent = ({previousLabel,
    nextLabel,
    breakLabel,
    pageCount,
    marginPagesDisplayed,
    pageRangeDisplayed,
    handlePageClick,
    containerClassName,
    ...props
}) => {


  return (
    <div className="mt-4">
        <ReactPaginate
          previousLabel={ previousLabel}
          nextLabel={nextLabel}
          breakLabel={breakLabel}
          pageCount={pageCount}
          marginPagesDisplayed={marginPagesDisplayed}
          pageRangeDisplayed={pageRangeDisplayed}
          onPageChange={handlePageClick}
          containerClassName={containerClassName}
          {...props}

        />
      </div>
  )
}

export default PaginationComponent