import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li style={{color : "red" , backgroundColor : 'pink' , margin : '10px'}} key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
