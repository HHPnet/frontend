import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/common/app/App'
import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap-theme.css'
//import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
//import 'bootstrap-material-design/dist/css/ripples.css'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
