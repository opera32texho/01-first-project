import React from 'react';
import Dialogs from './Dialogs';
import { AddMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';



const DialogsContainer = (props) => {


let state = props.store.getState().dialogsPage;


  let addMessage = () => {
    props.store.dispatch(AddMessageActionCreator());
  }
  
  let onMessageChange = (text) => {
    props.store.dispatch( UpdateNewMessageTextActionCreator(text));
  }

  return (
    < Dialogs addMessage = {addMessage} onNewMessageChange ={onMessageChange} dialogsPage = {state}/>
  );
}

export default DialogsContainer;