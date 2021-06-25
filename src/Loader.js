import styled from 'styled-components';
import loading from '../src/assets/loader.gif';

export default function Loader(){
    return(
        <Waiting>
        <img src={loading}></img>
        </Waiting>
    )
}

const Waiting = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background-color: rgba(255,255,255,0.5);

`