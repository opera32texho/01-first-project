import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {
 
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }
  
  let onMessageChange = () => {
    let text = newMessageElement.current.value; 
    props.onNewMessageChange(text);
  }

  return (
    <div className={s.dialogs}>

      <div className={s.dialogItems}>
        {dialogsElements} 
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>

      <div className={s.messageSent}>
        <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="Write message" value={props.dialogsPage.newMessageText} />
        <button onClick={addMessage}>Send</button>
      </div>

    </div>

  );
}

export default Dialogs;