import React from 'react';
import './App.css';
import Login from "./Components/Login";
import {useAppSelector} from "./features/store";
import {selectIdInstance} from "./features/auth/authSlice";
import Chat from "./Components/Chat";


function App() {

    const idInstance = useAppSelector(selectIdInstance)

    return (
        <div style={{background: '#ededed', padding: '30px 0'}}>

            {
                !idInstance && <Login/>
            }


            {
                idInstance !== 0 && <Chat/>
            }
        </div>
    );
}

export default App;
