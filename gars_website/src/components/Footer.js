import React from "react"
import { Navbar, Container } from "react-bootstrap"

export const Footer = () => {
    return (
        <Navbar variant="" bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Copyright by Gustavo A. Rodriguez S.
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}