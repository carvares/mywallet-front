import reactDOM from 'react-dom';
import styled from 'styled-components';
import Signin from './Signin'
import Signup from './Signup';
import Home from './Home';
import './Styles/reset.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewEntry from './NewEntry';
import NewOut from './NewOut';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
    const[userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
        <BrowserRouter>
            <Switch>
                <Background>
                    <Route path="/" exact>
                        <Signin />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/home" exact>
                        <Home/>
                    </Route>
                    <Route path="/newentry">
                        <NewEntry/>
                    </Route>
                    <Route path="/newout">
                        <NewOut/>
                    </Route>
                </Background>
            </Switch>
        </BrowserRouter>
        </UserContext.Provider>
    )
}




const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    margin:0;
    
    
`

reactDOM.render(<App />, document.getElementById("root"));