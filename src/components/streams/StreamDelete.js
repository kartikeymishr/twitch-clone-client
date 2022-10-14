import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchStream} from "../../actions/actions";
import Modal from "../Modal";

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                Stream Delete
                <Modal/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamDelete)