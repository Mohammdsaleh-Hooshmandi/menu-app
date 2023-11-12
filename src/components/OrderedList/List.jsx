import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Common/Button";
import ListContext from "../../store/list-context";

const showAnimation = keyframes`
    from {
        width: 0;
    }

    to {
        width: 30rem;
    }
`;

const Wrapper = styled.div`
    top: 0;
    width: 30rem;
    border-radius: 0 1rem 1rem 0;
    padding: 2rem;
    position: fixed;
    height: 100vh;
    z-index: 15;
    background-color: #111;
    animation: ${showAnimation} linear .5s;
    overflow-x: hidden;

    .actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        width: 100%;
        border: .1rem solid #eee;
        height: 10%;
        border-radius: 1rem;
        color: #fff;
        padding: .5rem 0;
        overflow: hidden;

        > p {
            font-size: 1.6rem;
        }

        > button {
            font-size: 1.6rem;
            letter-spacing: .1rem;
            font-weight: 600;
            width: 80%;
            height: 3rem;
            border-radius: 1rem;
            cursor: pointer;
            background-color: rgb(232, 126, 75);
            color: #fff;
        }
    }
`;

const ListItems = styled.ul`
    width: 100%;
    height: 80%;
    margin-top: 1rem;
    border-radius: 1rem;
    border: .1rem solid #eee;
`;

const List = props => {
    const orderedFoods = useContext(ListContext);
    console.log(orderedFoods)

    return (
        <Wrapper>
            <Button onClick={props.onClose}>close</Button>

            <div className='actions'>
                <p>Total Amount: <span>${orderedFoods.totalAmount}</span></p>
                <button>Order</button>
            </div>

            <ListItems></ListItems>
        </Wrapper>
    );
};

export default List;