import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId); //the fetchUser exist in props because we wire it below on the connect function
    }

    render() {
        const {user} = this.props;
        if (!user) {
            return null;
        }
        return (
            <div className="header">
                {user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => { //ownProps is a reference to the variables indside then componentDidMount
    return {user: state.users.find((user) => user.id === ownProps.userId)};
}

export default connect(
    mapStateToProps,
    {fetchUser}
)(UserHeader);