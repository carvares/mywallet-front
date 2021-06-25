import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { Link ,useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "./contexts/UserContext";
import Loader from "./Loader";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [waiting, setWaiting] = useState(false);
    const history = useHistory();
    const {userInfo,setUserInfo} = useContext(UserContext);
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    const persistLogin = JSON.parse(localStorage.getItem('userInfo'))
    
    useEffect(()=>{if(persistLogin){
        setWaiting(true)
        console.log("entrou")
        const promisse = axios.post('http://localhost:4000/login',{email:persistLogin.email, token:persistLogin.token})
        promisse.then((r)=>{setUserInfo(r.data);history.push("/home");setWaiting(false)})
    }},[] )
    
    function login(e) {
        e.preventDefault()
        const promisse = axios.post('http://localhost:4000/login',{email, password,})
        promisse.then((r)=>{setUserInfo(r.data);history.push("/home")})
    }
    return (
        <Login>
            {waiting? <Loader/>:null}
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <input required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
                <input required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/signup"><p>Primeira vez? Cadastre-se!</p></Link>
        </Login>
    )
}

const Login = styled.div`
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   font-family: 'Raleway';
   padding-top: 30vh;

   h1{
       font-family: 'Saira Stencil One';
       font-size: 32px;
       color: white;
       margin: 0 0 25px 0;
   }
    form{
        display: flex;
        flex-direction: column;
        width: 80vw;
        font-size: 20px;
        input{
            height: 40px;
            padding: 0 10px;
            margin: 0 0 13px 0;
            border-radius: 5px;
            border:none;
        }
        button{
            height: 40px;
            border-radius: 5px;
            border: none;
            background-color: #A328D6;
            color: #fff;
            font-weight: 700;

        }
    }
        p{
            font-size: 15px;
            color:white;
            margin: 35px 0 0 0;
            text-decoration: none;
        }
    
`
