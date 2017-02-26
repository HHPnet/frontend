import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import MdAccountBox from 'react-icons/lib/md/account-box'
import MdSearch from 'react-icons/lib/md/search'

export default class TopBar extends React.Component {
    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">HHP</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <Navbar.Form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search"/>
                            </FormGroup>
                            <Button type="submit"><MdSearch /></Button>
                        </Navbar.Form>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><MdAccountBox /></NavItem>
                        <NavItem eventKey={2} href="#"><MdAccountBox /></NavItem>
                    </Nav>
                </Navbar>
            </header>
        )
    }
}