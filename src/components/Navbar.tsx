import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ReactComponent as CartIcon } from '../assets/cart-icon.svg'

export function Navbar () {
    return (
        <NavbarBs sticky='top' className='bg-light shadow-sm mb-3'>
            <Container>
                <Nav className=''>
                    <Nav.Link to = '/' as = {NavLink}>HOME</Nav.Link>
                    <Nav.Link to = '/store' as = {NavLink}>STORE</Nav.Link>
                    <Nav.Link to = '/about' as = {NavLink} >ABOUT</Nav.Link>
                </Nav>
                <Button className='rounded-circle' style={{ width: '3rem', height: '3rem', position: "relative" }} variant='outline-primary'>
                    <CartIcon/>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center' style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>11</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}