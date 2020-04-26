import React from 'react';
import Post from './Post/Post';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPostsContainer = (props) => {



  let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch(AddPostActionCreator());
      
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
  return < MyPosts />
    
}

export default MyPostsContainer;