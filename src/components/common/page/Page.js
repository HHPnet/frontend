import React from 'react'

import TopBar from '../menu/topbar/TopBar'
import Firebase from '../firebase/Firebase'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class Page extends React.Component {
    render() {
        return (
            <Grid fluid className="no-padding">
                <Row className="no-margin">
                    <Col xs={12} className="no-padding">
                        <TopBar/>
                    </Col>
                </Row>
                <Row className="no-margin">
                    <Col xs={12} className="no-padding">
                        {this.props.children}
                    </Col>
                </Row>
                <Firebase/>
            </Grid>
        )
    }
}