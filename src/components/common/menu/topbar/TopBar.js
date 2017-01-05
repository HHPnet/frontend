import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import btn_google_signin_light_normal_web_short from './btn_google_signin_light_normal_web_short.png'

export default class TopBar extends React.Component {
    render() {
        const {handlePageMenu} = this.props

        return (
            <AppBar
                title="HipHop-Producciones.net"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={handlePageMenu}>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem>
                        Login <img src={btn_google_signin_light_normal_web_short} alt='Login with Google'/>
                    </MenuItem>
            </IconMenu>
            </AppBar>
        )
    }
}