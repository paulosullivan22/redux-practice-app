import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchUser } from '../actions'

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleClick = id => {
        this.props.fetchUser(id)
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <hr />
                    <button onClick={() => this.handleClick(post.id)}>Log user info</button>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.user)
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostList)