import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import AmountButton from "../Common/AmountButton";
import ListContext from "../../store/list-context";

const Wrapper = styled.div`
    width: 32rem;
    height: 60rem;
    background-color: #111;
    position: fixed;
    z-index: 15;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    overflow: hidden;

    .close-btn-wrapper {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .image-wrapper {
        width: 100%;
        height: 50%;
        background-color: blue;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
    }

    .contents-wrapper {
        padding: 2rem;
        color: #fff;
    }

    .food-name {
        font-size: 3rem;
        font-weight: 600;
    }

    .food-description {
        font-size: 1.6rem;
        width: 100%;
        height: 12rem;
        overflow: auto;
    }

    .food-price {
        font-size: 1.8rem;
        font-weight: 500;
    }

    .actions {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding-bottom: 1rem;
    }

    .amount {
        color: #fff;
        font-size: 1.6rem;
    }

    .btns-wrapper {
        display: flex;
        justify-content: space-between;
    }
`;

const OrederButton = styled(Button)`
    width: 30%;
    font-size: 1.6rem;
`;

const Card = props => {
    const [amount, setAmount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const { addFood, foods } = useContext(ListContext);

    useEffect(() => {
        const isExist = foods.find(food => food.id === props.id);

        if (isExist) {
            setIsAdded(true);
        }
    }, [foods]);

    const increaseAmountHandler = () => {
        setAmount(prevAmount => prevAmount + 1);
    };

    const decreaseAmountHandler = () => {
        setAmount(prevAmount => {
            if (prevAmount > 1)
                return prevAmount - 1
            return 1;
        });
    };

    const addToListHandler = () => {
        const newFood = {
            name: props.name,
            id: props.id,
            price: props.price,
            amount: amount,
        };

        addFood(newFood);
    };

    return (
        <Wrapper>
            <div className='close-btn-wrapper'>
                <Button onClick={props.onClose}>
                    <i className="fa-solid fa-xmark" />
                </Button>
            </div>

            <div className='image-wrapper'>
                <img src={props.img} alt="food" />
            </div>

            <div className='contents-wrapper'>
                <h2 className='food-name'>{props.name}</h2>

                <p className='food-description'>{props.description}</p>

                <h3 className='food-price'>Price: {props.price}$</h3>
            </div>

            <div className='actions'>
                <OrederButton onClick={addToListHandler}>{isAdded ? 'Added' : 'Add to List'}</OrederButton>

                <div>
                    <p className='amount'>Amount: {amount}</p>
                    <div className='btns-wrapper'>
                        <AmountButton onClick={increaseAmountHandler}>+</AmountButton>
                        <AmountButton onClick={decreaseAmountHandler}>-</AmountButton>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;