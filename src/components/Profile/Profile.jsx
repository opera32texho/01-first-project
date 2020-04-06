import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
 
  return (
    <div className ={s.content}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  );
}

export default Profile;