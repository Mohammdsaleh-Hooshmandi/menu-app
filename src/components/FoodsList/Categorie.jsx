import styled from "styled-components";
import CategorieItem from "./CategorieItem";

const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 3%;

    .categorie-name {
        font-size: 3rem;
        margin-bottom: .5rem;
        color: #fff;
        text-transform: capitalize;
        font-weight: 600;
        letter-spacing: .1rem;
    }

    .foods-list {
        max-width: 150rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 4rem;
        place-items: center;

        @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
    }

    
`;

const Categorie = props => {

    return (
        <Wrapper id={props.id}>
            <h2 className='categorie-name'>{props.categorie}</h2>

            <ul className='foods-list'>
                {props.items.map(item => <CategorieItem name={item.name} id={item.id} key={item.id} price={item.price} description={item.description} img={item.img} />)}
            </ul>
        </Wrapper>
    );
};

export default Categorie;