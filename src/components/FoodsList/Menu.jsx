import styled from "styled-components";
import Categorie from "./Categorie";
import { snacks, lunch, dinner, breakfast } from "../../data";

const Wrapper = styled.main`
    background-color: #111;
    width: 100%;
`;

const Menu = () => {

    return (
        <Wrapper>
            <Categorie id='snake' categorie='Snakes' items={snacks} />
            <Categorie id='lunch' categorie='Lunch' items={lunch} />
            <Categorie id='dinner' categorie='Dinner' items={dinner} />
            <Categorie id='breakfast' categorie='Breakfast' items={breakfast} />
        </Wrapper>
    );
};

export default Menu;