const Add_message = 'Add-message';
const Update_New_Message_text = 'Update-New-Message-Text';

const dialogsReducer = (state, action) =>{
   switch(action.type){
        case Add_message :
            let newMessage = {
            id: 7,
            message : state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case Update_New_Message_text :
            state.newMessageText = action.newTextOfMessage;
            return state;
        default:
            return state;
      }
      
}

export const AddMessageActionCreator = () => ({type: Add_message});
export const UpdateNewMessageTextActionCreator = (text) =>
              ({type: Update_New_Message_text, newTextOfMessage: text})

export default dialogsReducer;