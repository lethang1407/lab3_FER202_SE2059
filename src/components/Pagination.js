
function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    if (totalPages <= 1) {
        return null;
    }

    const items = [];

    items.push(
        <button
            key="prev"
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="pagination-btn"
        >
            Trước
        </button>
    );

    for (let page = 1; page <= totalPages; page++) {
        items.push(
            <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`pagination-btn ${
                    page === currentPage ? "active" : ""
                }`}
                aria-current={
                    page === currentPage ? "page" : undefined
                }
            >
                {page}
            </button>
        );
    }

    items.push(
        <button
            key="next"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="pagination-btn"
        >
            Sau
        </button>
    );

    return (
        <div className="pagination-container">
            {items}
        </div>
    );
}

export default Pagination;
