import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onPostChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
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
        <textarea onChange={onPostChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
        <button onClick={addMessage}>Sent</button>
      </div>

    </div>

  );
}

export default Dialogs;