import React from 'react'

import PageMenu from '../menu/pagemenu/PageMenu'
import TopBar from '../menu/topbar/TopBar'
import Firebase from '../firebase/Firebase'

export default class Page extends React.Component {
    constructor(props) {
        super(props)

        this._handlePageMenu = this._handlePageMenu.bind(this)

        this.state = {openPageMenu: false}
    }

    _handlePageMenu() {
        this.setState({openPageMenu: !this.state.openPageMenu})
    }

    render() {
        return (
            <div>
                <PageMenu handlePageMenu={this._handlePageMenu} openPageMenu={this.state.openPageMenu}/>
                <TopBar handlePageMenu={this._handlePageMenu}/>
                <div>{this.props.children}</div>
                <Firebase/>
            </div>
        )
    }
}