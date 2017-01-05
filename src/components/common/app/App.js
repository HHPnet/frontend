import React from 'react'
import {Router, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
    grey50,
    grey500,
    grey400,
    pinkA200,
    grey100,
    darkBlack,
    white,
    grey300,
    cyan500,
    fullBlack
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'
import routes from '../../routes'

export default class App extends React.Component {
    static muiTheme() {
        return getMuiTheme({
            palette: {
                primary1Color: grey500,
                primary2Color: grey50,
                primary3Color: grey400,
                accent1Color: pinkA200,
                accent2Color: grey100,
                accent3Color: grey500,
                textColor: darkBlack,
                alternateTextColor: white,
                canvasColor: white,
                borderColor: grey300,
                disabledColor: fade(darkBlack, 0.3),
                pickerHeaderColor: cyan500,
                clockCircleColor: fade(darkBlack, 0.07),
                shadowColor: fullBlack,
            }
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(App.muiTheme())}>
                <Router routes={routes} history={browserHistory}/>
            </MuiThemeProvider>
        );
    }
}
