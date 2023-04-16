import Nav from 'react-bootstrap/Nav'; //imports Nav component
import Navbar from 'react-bootstrap/Navbar'; //imports Navbar component
import logo from '../images/Netflix-Logo.svg' //imports Netflix-Logo.svg
import notificationIcon from '../images/notifications-icon.svg' //imports notifications-icon.svg
import searchIcon from '../images/search-icon.svg' //imports search-icon.svg
import profileIcon from '../images/profile-icon.png' //imports profile-icon.png

// Header function component 
function Header() {
    return (
        <Navbar className="header-nav" id="header-nav" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" style={{
            fontSize: "1.2vw",
            paddingLeft: "50px",
            paddingRight: "50px",
        }}>
                <Navbar.Brand href="#home" >
                    <img
                        src={logo}
                        width=""
                        height="40"
                        className="d-inline-block align-top"
                        alt="Netflix logo"
                    />
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Series</Nav.Link>
                        <Nav.Link href="">Films</Nav.Link>
                        <Nav.Link href="">New &amp; Popular</Nav.Link>
                        <Nav.Link href="">My List</Nav.Link>
                        <Nav.Link href="">Browse by Languages</Nav.Link>
                    </Nav>
                    <Nav style={{
                        width: "12%",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Nav.Link href="#">
                            <img
                                src={searchIcon}
                                width=""
                                height=""
                                className="d-inline-block align-top"
                                alt="search-icon"
                            />
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <img
                                src={notificationIcon}
                                width=""
                                height=""
                                className="d-inline-block align-top"
                                alt="notification-icon"
                            />
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <img
                                src={profileIcon}
                                width=""
                                height=""
                                className="d-inline-block align-top"
                                alt="profile-icon"
                                style={{ 
                                    borderRadius:"4px"
                                }}
                            />
                        </Nav.Link>
                    </Nav>
        </Navbar>
    );
}

export default Header; //exports Header to import