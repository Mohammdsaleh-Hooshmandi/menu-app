import styled from "styled-components";

const Input = styled.input.attrs(() => {
    return {
        type: 'text',
        placeholder: 'Search...'
    }
})`
    background-color: transparent;
    border: .1rem solid rgb(232, 126, 75);
    height: 4rem;
    width: 30rem;
    border-radius: 1rem;
    color: rgb(232, 126, 75);
    font-size: 2rem;
    padding-left: .5rem;

    &::placeholder {
        color: rgb(232, 126, 75);
    }
`;

const SearchBar = () => {

    return (
        <Input />
    );
};

export default SearchBar;