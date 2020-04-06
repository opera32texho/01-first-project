import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
  let newPostElemet = React.createRef();
    let addPost = () => {
      let text = newPostElemet.current.value;
      alert(text);
    }
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElemet}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;