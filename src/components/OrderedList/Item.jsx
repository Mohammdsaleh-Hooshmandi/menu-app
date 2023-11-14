import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import ListContext from "../../store/list-context";
import AmountButton from "../Common/AmountButton";

const Wrapper = styled.li`
    display: block;
    padding: 0 .5rem;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1rem solid #ccc;

    .food-name {
        color: #fff;
        font-size: 2rem;
    }

    .food-amount {
        display: inline;
        color: #fff;
        font-size: 1.6rem;
    }

`;

const Item = props => {
    const [modifiedAmount, setModifiedAmount] = useState(props.amount);
    const { removeFood, changeAmount } = useContext(ListContext);

    const increaseAmountHandler = () => {
        setModifiedAmount(prevAmount => prevAmount + 1);
        changeAmount(props.id, modifiedAmount + 1);
    };

    const decreaseAmountHandler = () => {
        setModifiedAmount(prevAmount => {
            if (prevAmount > 1)
                return prevAmount - 1
            return 1;
        });

        if (modifiedAmount - 1 > 0) {
            changeAmount(props.id, modifiedAmount - 1);
        }
    };

    return (
        <Wrapper>
            <div>
                <h3 className='food-name'>{props.name}</h3>
                <p className='food-amount'>amount: {modifiedAmount}</p>

                <AmountButton onClick={increaseAmountHandler}>+</AmountButton>
                <AmountButton onClick={decreaseAmountHandler}>-</AmountButton>
            </div>

            <Button onClick={removeFood.bind(undefined, props.id)}>
                <i className="fa-solid fa-trash" />
            </Button>
        </Wrapper>
    );
};

export default Item;