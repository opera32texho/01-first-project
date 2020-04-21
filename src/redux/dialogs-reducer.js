const Add_message = 'Add-message';
const Update_New_Message_text = 'Update-New-Message-Text';
 
let initialState = {
    dialogs : [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Vika' },
        { id: 6, name: 'Valera' }
      ],
    messages : [
        { id: 1, message: "Yo" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Go walk?" },
        { id: 5, message: "Yo?" },
        { id: 6, message: "Yo man" }
       
      ],
    newMessageText: ''
  };  

const dialogsReducer = (state = initialState, action) =>{
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