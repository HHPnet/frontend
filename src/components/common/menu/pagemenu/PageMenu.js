import React from 'react'
import {IndexLink, Link} from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

export default class PageMenu extends React.Component {
    render() {
        const {openPageMenu} = this.props
        const {handlePageMenu} = this.props

        return (
            <Drawer open={openPageMenu} docked={false}>
                <IconButton onTouchStart={handlePageMenu} touch={true} onClick={handlePageMenu}>
                    <ContentClear/>
                </IconButton>
                <MenuItem onTouchTap={handlePageMenu}>
                    <IndexLink to="/">Inicio</IndexLink>
                </MenuItem>
                <MenuItem onTouchTap={handlePageMenu}>
                    <Link to="/maquetas">Maquetas</Link>
                </MenuItem>
            </Drawer>
        )
    }
}