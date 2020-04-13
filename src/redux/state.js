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
              id: 2,
              message: "It's my first post",
              likesCount: 15
            }, {
              id: 2,
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
        newMessageText: 'Hi how are you ??'
      }   
    },
    getState(){
      return this._state
    },
    _callSubscriber(){
      console.log('Stage chage');
    },
    addPost () {
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCount : 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    },
    
      updateNewPostText(newText){
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
    },
    
      addMessage () {
      let newMessage = {
        id: 7,
        message : this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    },
    
      updateNewMessageText (newTextOfMessage) {
      this._state.dialogsPage.newMessageText = newTextOfMessage;
      this._callSubscriber(this._state);
    },
    
      subscribe (observer) {
      this._callSubscriber = observer;
    }

}

export default store;