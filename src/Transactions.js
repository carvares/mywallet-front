import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "./contexts/UserContext";
import ValueRender from "./ValueRender";

export default function Transactions() {
    const [valueList, setValueList] = useState([]);
    const {userInfo} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    }
    useEffect(()=>{
        const promisse = axios.get('http://localhost:4000/transactions', config)
        promisse.then(r =>  setValueList(r.data))
    },[])
    
    if (valueList[0] === undefined || valueList[0].length === 0) {
        return (
            <Text>Não há registros de entrada ou saída</Text>
        )
    }
    return (
        <Container>
        <List>
            {valueList[0].map((i) => {
                return (
                    <li key = {i.id}>
                        <p>{i.date}</p>
                        <h2>{i.description}</h2>
                        <ValueRender typeTransaction={i.typeTransaction} value={i.value} />
                    </li>
                )
            }).reverse()}
        </List>
        <Balance value = {valueList[1]}>
            <p>SALDO</p>
            <span>{(valueList[1]/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</span>
        </Balance>
        </Container>
        
    )
}
const Container = styled.div`
    width: 85vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
`
const Text = styled.p`
    width: 60vw;
    height: 10vh;
    color:#868686;
    text-align: center;
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 400;
    margin: 0 auto 0 auto;
    padding: 30vh 0 0 0;
`
const List = styled.div`
    margin: 0 auto 0 auto;
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 446px;
    min-height:446px;

    overflow-y: scroll;

    li{
        width: 80vw;
        margin: 4px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        p{
        
        color:#c6c6c6;

    }
        h2{
        color:#000;
        width: 45vw;
    }
    }
`
const Balance = styled.div`
    width: 80vw;
    height: 20px;
    font-family: 'Raleway';
    font-size: 17px;
    margin: 0 0 10px 0;
    display: flex;
    justify-content: space-between;
    p{
        font-weight: 700;
        color: #000;
       

    }
    span{
        font-weight: 400;
        color:${props => props.value >= 0? "#03AC00":"#C70000" }

    }
    `
