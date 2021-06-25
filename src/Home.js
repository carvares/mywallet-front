import { RiLogoutBoxRLine } from 'react-icons/ri'
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import Transactions from './Transactions';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';

export default function Home() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const history = useHistory();
    function logout(){
        setUserInfo("");
        history.push("/");
    }
    return (
        <Container>
            <h1>{`Olá, ${userInfo.name}`}</h1>
            <RiLogoutBoxRLine onClick={logout}/>
            <TransactionsBox>
                <Transactions />
            </TransactionsBox>
            <New>
                <Link to="/newentry"><div>
                    <HiOutlinePlusCircle />
                    <h2><p>Nova</p>
                        <p>entrada</p></h2>
                </div></Link>
                <Link to="/newout"><div>
                    <HiOutlineMinusCircle />
                    <h2> <p>Nova</p>
                        <p>saida</p></h2>
                </div></Link>
            </New>
        </Container>
    )
}

const Container = styled.div`
    width: 85vw;
    height: 70vh;
    font-family: 'raleway';
    font-weight: 700;
    color: white;
    position: relative;
    margin: 0 auto 0 auto;
    padding-top: 20px;
    &> svg{
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        top: 20px;
        
    }
    h1{
        font-size: 21px;
        margin: 0 0 20px 0;
    }
`
const TransactionsBox = styled.div`
    width: 85vw;
    height: 70vh;
    background-color: #fff;
    border-radius: 5px;
`
const New = styled.div`
    display: flex;
    justify-content: space-between;
    
    div{
        width: 41vw;
        height: 15vh;
        background-color: #A328D6;
        border-radius: 5px;
        margin: 10px 0 0 0;
        position: relative;
        svg{
            width: 25px;
            height: 25px;
            position: absolute;
            left:10px;
            top:10px;
        }
        h2{
          position: absolute;
          bottom: 10px;
          left:10px ;
            
        }
    }
`