import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <Container>
            <Header />

            <div className="mt-3 text-center">
                <h1>404 - Không tìm thấy trang</h1>
                <p>Trang bạn đang tìm kiếm không tồn tại.</p>

                <Link to={`/`}>
                    <Button>Về trang chủ</Button>
                </Link>
            </div>
        </Container>
    )
}

export default NotFound;
