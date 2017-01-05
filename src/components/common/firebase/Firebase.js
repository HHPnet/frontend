import React from 'react'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

export default class Firebase extends React.Component {

    firebaseConfiguration = '{apiKey: "AIzaSyAy8bx1pAoVpDob5yE6_UbhBQ4hGSUZBPU",authDomain: '
        + '"hhpnet-local.firebaseapp.com",databaseURL: "https://hhpnet-local.firebaseio.com",storageBucket: '
        + '"hhpnet-local.appspot.com",messagingSenderId: "869701503990"}'

    render() {
        return (
            <script>
                firebase.initializeApp({this.firebaseConfiguration})
            </script>
        )
    }
}