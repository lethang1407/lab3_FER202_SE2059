import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>
            <Header />

            <div className="mt-3">
                <h1 className="text-center"> Welcome to Product Store</h1>
                <p className="text-center">Manage and explore products for your need.</p>
                <div className="text-center">
                    <Link to={`/products`}>
                        <Button>View Products</Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Home;