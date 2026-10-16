
function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    if (totalPages <= 1) {
        return null;
    }

    const items = [];

    // Nút Previous
    items.push(
        <button
            key="prev"
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="pagination-btn"
        >
            &laquo;
        </button>
    );

    // Các nút số trang
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

    // Nút Next
    items.push(
        <button
            key="next"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="pagination-btn"
        >
            &raquo;
        </button>
    );

    return (
        <div className="pagination-container">
            {items}
        </div>
    );
}

export default Pagination;
