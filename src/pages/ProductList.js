
import { useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { products } from "../data/products";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

function ProductList() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get("keyword") || "";
    const category = searchParams.get("category") || "Tất cả";
    const sortOrder = searchParams.get("sort") || "default";

    const parsedPage = Number.parseInt(
        searchParams.get("page") || "1",
        10
    );

    const currentPage =
        Number.isFinite(parsedPage) && parsedPage > 0
            ? parsedPage
            : 1;

    const pageSize = 5;

    const updateQueryParams = (key, value) => {
        setSearchParams(
            (prev) => {
                const params = new URLSearchParams(prev);

                if (
                    !value ||
                    value === "Tất cả" ||
                    value === "default"
                ) {
                    params.delete(key);
                } else {
                    params.set(key, value);
                }

                params.set("page", "1");

                return params;
            },
            { replace: true }
        );
    };

    const handleSearch = (value) => {
        updateQueryParams("keyword", value);
    };

    const handleCategoryChange = (value) => {
        updateQueryParams("category", value);
    };

    const handleSortChange = (value) => {
        updateQueryParams("sort", value);
    };

    let filteredProducts = products.filter((product) => {
        const matchName = product.name
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());

        const matchCategory =
            category === "Tất cả" ||
            product.category === category;

        return matchName && matchCategory;
    });

    if (sortOrder === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const totalPages = Math.ceil(
        filteredProducts.length / pageSize
    );

    useEffect(() => {
        const maxPage = Math.max(1, totalPages);

        if (currentPage > maxPage) {
            setSearchParams(
                (prev) => {
                    const params = new URLSearchParams(prev);
                    params.set("page", String(maxPage));
                    return params;
                },
                { replace: true }
            );
        }
    }, [currentPage, totalPages, setSearchParams]);

    const startIndex = (currentPage - 1) * pageSize;

    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + pageSize
    );

    const handlePageChange = (page) => {
        const maxPage = Math.max(1, totalPages);

        if (page < 1 || page > maxPage) {
            return;
        }

        setSearchParams(
            (prev) => {
                const params = new URLSearchParams(prev);
                params.set("page", String(page));
                return params;
            },
            { replace: true }
        );
    };

    return (
        <Container>
            <Header />

            <Row className="mt-3">
                <Col md={5}>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearch={handleSearch}
                    />
                </Col>

                <Col md={7}>
                    <CategoryFilter
                        category={category}
                        onCategoryChange={handleCategoryChange}
                        sortOrder={sortOrder}
                        onSortChange={handleSortChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    {filteredProducts.length > 0 && (
                        <div className="mt-4">
                            Tổng: {filteredProducts.length} | Trang: {startIndex + 1}/{" "}
                            {Math.min(
                                startIndex + pageSize,
                                filteredProducts.length
                            )}{" "}
                        </div>
                    )}
                </Col>
                <Col>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </Col>
            </Row>

            <Table striped bordered className="mt-3">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Danh mục</th>
                        <th>Giá</th>
                        <th>Mô tả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>

                <tbody>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product, index) => (
                            <tr key={product.id}>
                                <td>{startIndex + index + 1}</td>

                                <td>
                                    {product.name}
                                </td>

                                <td>
                                    {product.category}
                                </td>

                                <td>
                                    {product.price.toLocaleString("vi-VN")} đ
                                </td>

                                <td>{product.description}</td>
                                <td>
                                    <Button>
                                        Chi tiết
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center py-4">
                                Không tìm thấy sản phẩm phù hợp.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
}

export default ProductList;
