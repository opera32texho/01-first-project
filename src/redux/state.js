import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state : {
    profilePage:{
        posts :[
            {
              id: 1,
              message: "'Hi are you ?",
              likesCount: 12
            }, {
              id: 2,
              message: "It's my first post",
              likesCount: 15
            }, {
              id: 3,
              message: "It's my first post",
              likesCount: 15
            }, {
              id: 4,
              message: "It's my first post",
              likesCount: 15
            }
          ],
        newPostText : 'Vetal Rulit'
      },
    dialogsPage:{
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
      }   
    },
    getState(){
      return this._state
    },
    _callSubscriber(){
      console.log('Stage chage');
    },

    
      subscribe (observer) {
      this._callSubscriber = observer;
    },
    dispatch(action){
      this._state.profilePage = profileReducer( this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
      this._state.sideBar = sidebarReducer( this._state.sidebar, action);
      this._callSubscriber(this._state);
    }
}    
export default store;