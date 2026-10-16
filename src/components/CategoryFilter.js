
import { Row, Col, Form } from "react-bootstrap";

function CategoryFilter({
    category,
    onCategoryChange,
    sortOrder,
    onSortChange
}) {
    const categories = [
        "Tất cả",
        "Điện thoại",
        "Laptop",
        "Máy tính bảng",
        "Phụ kiện"
    ];

    return (
        <Row className="g-2">
            <Col xs={12} sm={6}>
                <Form.Select
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    aria-label="Lọc theo danh mục"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Form.Select>
            </Col>

            <Col xs={12} sm={6}>
                <Form.Select
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value)}
                    aria-label="Sắp xếp theo giá"
                >
                    <option value="default">Mặc định</option>
                    <option value="asc">Giá tăng dần</option>
                    <option value="desc">Giá giảm dần</option>
                </Form.Select>
            </Col>
        </Row>
    );
}

export default CategoryFilter;
