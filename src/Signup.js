import { useState } from "react"
import styled from "styled-components";
import { Link, useHistory} from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    function registry(e) {
        e.preventDefault()
        if(password === confirmPassword){
        const promisse = axios.post(`${process.env.REACT_APP_API_BASE_URL}/registry`, {"name":name, "email":email, "password": password})
        promisse.then(()=>history.push("/"))
        } else{
            alert("As senhas informadas não são iguais")
        }
    }
    return (
        <Registry>
            <h1>MyWallet</h1>
            <form onSubmit={registry}>
                <input required type="text" placeholder="Nome" onChange={e => setName(e.target.value)}></input>
                <input  required type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
                <input required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}></input>
                <input required type="password" placeholder="Confirme a senha" onChange={e => setConfirmPassword(e.target.value)}></input>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </Registry>
    )
}

const Registry = styled.div`
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   font-family: 'Raleway';
   padding-top: 20vh;

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
        }
    
`
