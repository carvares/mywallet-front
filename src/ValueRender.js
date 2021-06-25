
import styled from "styled-components";


export default function ValueRender({ typeTransaction, value }) {

    return (
        <Value type={typeTransaction}>{(value/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</Value>
    )

}

const Value = styled.span`
    color: ${props => props.type === "in" ? "#22B620" : "#C70000"}
`