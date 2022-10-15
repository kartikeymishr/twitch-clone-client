import React from "react";
import {Route, Router, Switch} from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
// import '../style/App.css'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header/>
                <div className="ui container">
                    {/* Switch tag only shows one component, not all that match the Route */}
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route>
                        <Route path="/stream/new" exact component={StreamCreate}></Route>
                        <Route path="/stream/edit/:id" exact component={StreamEdit}></Route>
                        <Route path="/stream/delete/:id" exact component={StreamDelete}></Route>
                        <Route path="/stream/:id" exact component={StreamShow}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App