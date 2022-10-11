import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/stream/new" exact component={StreamCreate}></Route>
                    <Route path="/stream/edit" exact component={StreamEdit}></Route>
                    <Route path="/stream/delete" exact component={StreamDelete}></Route>
                    <Route path="/stream/show" exact component={StreamShow}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App