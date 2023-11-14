import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../Common/Button";
import ListContext from "../../store/list-context";
import Item from "./Item";

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

    .btn-wrapper {
        text-align: right;
    }

    .actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        width: 100%;
        border: .1rem solid #eee;
        height: 8rem;
        border-radius: 1rem;
        color: #fff;
        padding: .5rem 0;
        overflow: hidden;

        
    }

    .total-amount {
        font-size: 1.6rem;
    }

    .items-list {
        width: 100%;
        height: 80%;
        margin-top: 1rem;
        border-radius: 1rem;
        border: .1rem solid #eee;
        overflow-y: auto;
    }

    .message {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 1.6rem;
        margin-top: 2rem;
    }
`;

const OrederButton = styled(Button)`
    width: 80%;
    font-size: 1.6rem;

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`;

const List = props => {
    const { foods, totalPrice } = useContext(ListContext);

    const sendOrederList = () => {
        console.log('Sending....');
        console.log({ foods });
    };

    return (
        <Wrapper>
            <div className='btn-wrapper'>
                <Button onClick={props.onClose}>
                    <i className="fa-solid fa-xmark" />
                </Button>
            </div>

            <div className='actions'>
                <p className='total-amount'>Total Price: <span>${totalPrice}</span></p>
                <OrederButton disabled={!Boolean(foods.length)} onClick={sendOrederList}>Order</OrederButton>
            </div>

            <ul className='items-list'>
                {
                    foods.length === 0 && <p className='message'>You Dont't choose any food</p>
                }
                {
                    foods.length > 0 && foods.map(food => <Item key={food.id} id={food.id} name={food.name} amount={food.amount} />)
                }
            </ul>
        </Wrapper>
    );
};

export default List;