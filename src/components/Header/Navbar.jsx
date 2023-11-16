import styled from "styled-components";
import HeaderOrderBtn from "./HeaderOrderBtn";
import SearchBar from "./SerachBar";

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 8rem;
    position: sticky;
    background-color: #111;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3%;
    overflow-y: auto;

    > ul {
        display: flex;
        color: #fff;
        gap: 3rem;
        align-items: center;
    }
`;

const NavbarLink = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    font-weight: 600;
    width: 12rem;
    height: 3rem;
    border-radius: 1rem;
    cursor: pointer;
    color: #fff;
    border: .1rem solid rgb(232, 126, 75);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:hover,
    &:active {
        background-color: rgb(232, 126, 75);
    }
`;

const Navbar = props => {

    return (
        <NavbarWrapper>
            <ul>
                <li>
                    <HeaderOrderBtn onClick={props.onOpenList}>Your Order</HeaderOrderBtn>
                </li>

                <li>
                    <NavbarLink href="#snake">Snakes</NavbarLink>
                </li>

                <li>
                    <NavbarLink href="#lunch">Lunch</NavbarLink>
                </li>

                <li>
                    <NavbarLink href="#dinner">Dinner</NavbarLink>
                </li>

                <li>
                    <NavbarLink href="#breakfast">Breakfast</NavbarLink>
                </li>

                <li>
                    <SearchBar smallScreen={true} onSearch={props.onSearch} />
                </li>
            </ul>
        </NavbarWrapper>
    );
};

export default Navbar;