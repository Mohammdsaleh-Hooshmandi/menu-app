import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "../Common/Button";

const barAnimation = keyframes`
    from {
        width: 0;
    }

    to {
        width: 28rem;
    }
`;

const Wrapper = styled.div`
    ${props => props.$smallScreen ?
        css`
        display: none;`
        :
        css`  
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 2;
    display: flex;`
    }

    .bar {
        display: flex;
        align-items: center;
        background-color: #111;
        height: 4rem;
        width: 28rem;
        overflow: hidden;
        border-radius: 1rem;
        border: .1rem solid rgba(232, 125, 75, 1);
        animation: ${barAnimation} .3s linear;
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

    @media (max-width: 1100px) {
        display: ${props => props.$smallScreen ? 'initial' : 'none'};
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
        setEnteredName('');
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
        <Wrapper $smallScreen={props.smallScreen}>
            {isOpen && <div className='bar'>
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
            </div>}

            {!isOpen && <Button onClick={openBarHandler}>
                <i className="fa-solid fa-magnifying-glass" />
            </Button>}
        </Wrapper>
    );
};

export default SearchBar;