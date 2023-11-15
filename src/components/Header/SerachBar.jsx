import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Common/Button";

const Wrapper = styled.div`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 5;
    display: flex;

    .bar {
        display: flex;
        align-items: center;
        background-color: #111;
        height: 4rem;
        width: 0;
        overflow: hidden;
        border-radius: 1rem;
    }

    .bar.open {
        width: 28rem;
        transition: width .3s linear;
        border: .1rem solid rgba(232, 125, 75, 1);
    }

    .close-btn {
        height: 100%;
        width: 4rem;
        background-color: transparent;
        cursor: pointer;
        color: rgba(232, 125, 75, 1);
        font-size: 2rem;
    }

    .input {
        width: 24rem;
        height: 100%;
        background-color: transparent;
        color: rgba(232, 125, 75, 1);
        font-size: 2rem;
    }
`;

const SearchBar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [enteredFood, setEnteredName] = useState('');

    const openBarHandler = () => {
        setIsOpen(true);
    };
    const closeBarHandler = () => {
        setIsOpen(false);
    };
    const inputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onSearch(enteredFood.toLowerCase());
        }, 500);

        return () => { clearTimeout(timer) };
    }, [enteredFood]);

    return (
        <Wrapper>
            <div className={`bar ${isOpen && 'open'}`}>
                <button className='close-btn' onClick={closeBarHandler}>
                    <i className="fa-solid fa-xmark" />
                </button>

                <input
                    className='input'
                    type="text"
                    placeholder='Search'
                    value={enteredFood}
                    onChange={inputChangeHandler}
                />
            </div>

            {!isOpen && <Button onClick={openBarHandler}>
                <i className="fa-solid fa-magnifying-glass" />
            </Button>}
        </Wrapper>
    );
};

export default SearchBar;