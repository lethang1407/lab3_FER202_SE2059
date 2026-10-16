import {Container, Nav, Navbar } from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">
                        Product Store
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar" />

                    <Navbar.Collapse id="main-navbar">
                        <Nav className="d-flex ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;