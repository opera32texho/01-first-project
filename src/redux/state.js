import { rerenderEntireTree } from "../render";

let state = {
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

    
}

export let addPost = () =>{
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCount : 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 7,
    message : state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}
export default state;