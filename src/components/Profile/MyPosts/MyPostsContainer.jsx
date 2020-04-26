import React from 'react';
import MyPosts from './MyPosts';
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPostsContainer = (props) => {

  let state  = props.store.getState();


 
    let addPost = () => {
      props.store.dispatch(AddPostActionCreator());
      
    }
    
    let onPostChange = (text) => {
        let action = UpdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
  return (< MyPosts updateNewPostText ={onPostChange} addPost ={addPost} posts = {state.profilePage.posts} newPostText = {state.profilePage.newPostText}/>)
    
}

export default MyPostsContainer;