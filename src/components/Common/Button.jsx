import styled from "styled-components";

const Button = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1.2rem;
    cursor: pointer;
    background-color: rgba(232, 125, 75, 1);
    color: #fff;

    &:hover,
    &:active {
        background-color: rgba(232, 125, 75, 0.8);
    }
`;

export default Button;