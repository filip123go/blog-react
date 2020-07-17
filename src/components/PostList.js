import React from "react";
import {connect} from "react-redux" // we need this to wire our action Creators to Components
import {fetchPosts} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts(); //the fetchPosts exist in props because we wire it below on the connect function
    }

    //render the list of posts to the screen
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

//each time I want to pass some data from redux side to react side i call mapStateToProps with state arg
const mapStateToProps = (state) => {
    return {posts: state.posts}; //this posts is from the reducer
}

export default connect(
    mapStateToProps,
    {fetchPosts}
)(PostList);