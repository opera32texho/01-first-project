const Add_post = 'Add-post';
const Update_New_Post_Text = 'Update-New-Post-Text';

let initialState = {
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
  }

const profileReducer = (state = initialState, action) =>{
    switch(action.type){

        case Add_post :
            let newPost = {
            id:5 ,
            message: state.newPostText,
            likesCount : 0 
            
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case Update_New_Post_Text:      
            state.newPostText = action.newText;
            return state;       
        default:
            return state
      }
      
}

export const AddPostActionCreator = () => ({type: Add_post});
export const UpdateNewPostTextActionCreator = (text) =>
              ({type: Update_New_Post_Text, newText: text});

export default profileReducer;

