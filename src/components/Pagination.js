
import { Pagination as BootstrapPagination } from "react-bootstrap";

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
        <BootstrapPagination.Prev
            key="prev"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        />
    );

    for (let page = 1; page <= totalPages; page++) {
        items.push(
            <BootstrapPagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => onPageChange(page)}
            >
                {page}
            </BootstrapPagination.Item>
        );
    }

    items.push(
        <BootstrapPagination.Next
            key="next"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
        />
    );

    return (
        <div className="d-flex justify-content-center mt-4">
            <BootstrapPagination className="mb-0">
                {items}
            </BootstrapPagination>
        </div>
    );
}

export default Pagination;