import React from "react"
import { Navbar, Container, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <Navbar variant="" bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Copyright by Gustavo A. Rodriguez S.
                    </Navbar.Text>
                    <Row> </Row>
                    <Row> </Row>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}