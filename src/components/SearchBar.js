
import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar({ searchTerm, onSearch }) {
    return (
        <Form.Control
            type="text"
            placeholder="Tìm kiếm theo tên sản phẩm..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchBar;
