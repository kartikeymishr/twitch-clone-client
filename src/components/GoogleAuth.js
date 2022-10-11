import React, {Component} from "react";

class GoogleAuth extends Component {
    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            // init() returns a Promise
            window.gapi.client.init({
                clientId: '991098302539-g2gak6asf45p7cffdfepdfj75gm04jko.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'streamy'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})

                // Listens for this boolean to change and calls the method passed as argument
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOutClick}
                >
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignInClick}
                >
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth