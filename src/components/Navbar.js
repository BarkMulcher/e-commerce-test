import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


export default function Navbarb({ currentPage, pageChange }) {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' variant='dark' id='header' bg='dark'>
                <Container fluid>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto my-2 my-lg-0'>
                            <Link className='nav-link' href='/'>
                                Home
                            </Link>
                            <Link className='nav-link' href='/shop'>
                                Shop
                            </Link>
                            <Link className='nav-link' href='/checkout'>
                                Checkout
                            </Link>
                            <Link className='nav-link' href='/contact'>
                                Contact
                            </Link>
                            <Link className='nav-link' href='/about'>
                                About Us
                            </Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}