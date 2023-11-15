import { useState, Fragment } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Card from "../DetailCard/Card";
import BackDrop from "../Common/BackDrop";

const Wrapper = styled.li`
    width: 28rem;
    height: 40rem;
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: .1rem .1rem .8rem #ccc;

    .food-image {
        width: 100%;
        height: 50%;
    }

    .contents-wrapper {
        width: 100%;
        height: 50%;
        padding: 1rem;
        color: #fff;

        & > h2 {
            font-size: 2.5rem;
            font-weight: 600;
        }

        & > p {
            height: 11rem;
            overflow-y: auto;
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 1.8;
        }

        & > h4 {
            font-size: 2rem;
            left: 1rem;
            bottom: 2rem;
        }
    }
`;

const CategorieItem = props => {
    const [isOpen, setIsOpen] = useState(false);

    const openCartHandler = () => {
        setIsOpen(true);
    };

    const closeCartHandler = () => {
        setIsOpen(false);
    };

    return (
        <Fragment>
            {isOpen && createPortal(<BackDrop onClick={closeCartHandler} />, document.getElementById('backdrop-root'))}
            {isOpen && createPortal(<Card onClose={closeCartHandler} {...props} />, document.getElementById('card-root'))}
            <Wrapper onClick={openCartHandler}>
                <img className='food-image' src={props.img} alt="food" />
                <div className='contents-wrapper'>
                    <h2>{props.name}</h2>

                    <p>{props.description}</p>

                    <h4>Price: {props.price}$</h4>
                </div>
            </Wrapper>
        </Fragment>
    );
};

export default CategorieItem;