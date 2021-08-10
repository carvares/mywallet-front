import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import UserContext from "./contexts/UserContext";

export default function NewEntry(){
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("")
    const history = useHistory();
    const {userInfo} = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    }

    function entry(e){
        e.preventDefault();
        const promisse = axios.post(`${process.env.REACT_APP_API_BASE_URL}/transactions`,{value,description, typeTransaction:"in"},config)
        promisse.then(()=>history.push('/home'))
    }

    return(
        <Container>
            <h1>Nova entrada</h1>
            <form onSubmit={entry}>
                <input required type='number' placeholder='Valor' onChange={e => setValue(e.target.value)}></input>
                <input required type='text' placeholder='Descrição' onChange={e => setDescription(e.target.value)}></input>
                <button type='submit'>Salvar entrada</button>
                <Link to='/home'><button>Cancelar</button></Link>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 80vw;
    height: 80vh;
    margin: 0 auto 0 auto;
    font-family: 'Raleway';
    padding-top: 20px;
    
    h1{
        color:#fff;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 40px;
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
            font-size: 20px;
            
        }
        button{
            width: 80vw;
            height: 40px;
            border-radius: 5px;
            border: none;
            background-color: #A328D6;
            color: #fff;
            font-weight: 700;
            font-size: 20px;
            margin: 0 0 5px 0;
        }
    }
`