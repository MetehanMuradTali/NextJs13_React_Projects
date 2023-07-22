"use client"
import React from 'react'
import styles from './page.module.css'
import {GiAngelWings} from "react-icons/gi"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(){
  return (
    <Navbar expand="xl" className="bg-body-tertiary" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/" className={`${styles["brand"]} fs-1`}  >
              <GiAngelWings className={styles["logo"]} />
              Tali
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
              data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  Tali
                </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Projects" id="basic-nav-dropdown" className='fs-5'>
                <NavDropdown.Item href="/Projects/TodoApp">TodoApp</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        

      </Container>

    </Navbar>
  )
}

export default Header

/*
<nav className={styles["header-container"]}>
        <div className={styles["left-flex"]}>
            <h2>
                <Link href={"/"} className={styles["brand"]}>
                    Tali
                    </Link>
            </h2>
        </div>
        <input className={styles.checkbox_toggle} type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className={styles.hamburger}>&#9776;</label>

        <div className={styles["link-container"]}>

        </div>
        <div className={styles["full-page-green"]}></div>
    </nav>*/ 