import styled from "styled-components";
import Categorie from "./Categorie";
import { snacks, lunch, dinner, breakfast } from "../../data";

const Wrapper = styled.main`
    background-color: #111;
    width: 100%;
`;

const Menu = props => {
    const filteredSankes = snacks.filter(food => food.name.toLowerCase().includes(props.searchedName));
    const filteredLunch = lunch.filter(food => food.name.toLowerCase().includes(props.searchedName));
    const filteredDinner = dinner.filter(food => food.name.toLowerCase().includes(props.searchedName));
    const filteredBreakfast = breakfast.filter(food => food.name.toLowerCase().includes(props.searchedName));

    return (
        <Wrapper>
            <Categorie id='snake' categorie='Snakes' items={filteredSankes} />
            <Categorie id='lunch' categorie='Lunch' items={filteredLunch} />
            <Categorie id='dinner' categorie='Dinner' items={filteredDinner} />
            <Categorie id='breakfast' categorie='Breakfast' items={filteredBreakfast} />
        </Wrapper>
    );
};

export default Menu;