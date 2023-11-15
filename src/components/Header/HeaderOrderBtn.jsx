import { useContext } from "react";
import styled from "styled-components";
import ListContext from "../../store/list-context";

const Wrapper = styled.button`
    position: relative;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    font-weight: 600;
    width: 12rem;
    height: 3rem;
    border-radius: 1rem;
    cursor: pointer;
    background-color: rgb(232, 126, 75);
    color: #fff;

    .label {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        border-radius: 50%;
        background-color: #790e0e;
        position: absolute;
        top: -.5rem;
        right: -.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const HeaderOrderBtn = props => {
    const { foods } = useContext(ListContext);
    const c = foods.map(food => food.amount).reduce((curr, acc) => curr + acc, 0);

    return (
        <Wrapper onClick={props.onClick}>
            <div className='label'>{c}</div>
            {props.children}
        </Wrapper>
    );
};

export default HeaderOrderBtn;