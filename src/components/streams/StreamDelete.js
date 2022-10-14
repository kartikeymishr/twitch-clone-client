import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../actions/actions";
import Modal from "../Modal";
import history from "../../history";
import {Link} from "react-router-dom";

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            // Doesn't render anything in the DOM
            // Used when needed to have some presence in the DOM but not be rendered in the DOM
            // So that it doesn't cause styling issues with CSS
            // Same as <React.Fragment>
            <>
                <button onClick={this.onDelete} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete the stream: ${this.props.stream.title}`
    }

    render() {


        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream, deleteStream
})(StreamDelete)