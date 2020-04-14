import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Set from './components/Set/Set';

import { Route} from 'react-router-dom';



const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        <Route path="/dialogs"
          render={() => <Dialogs 
                        dialogsPage={props.state.dialogsPage}
                        
                        dispatch={props.dispatch}
                       
                       />} />
        <Route path="/profile"
          render={() => <Profile 
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch}  
            />} />
        <Route path="/news"
          component={News} />
        <Route path="/music"
          component={Music} />
        <Route path="/set"
          component={Set} />

      </div>

    </div>

  );
}

export default App;
