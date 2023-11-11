import styled from "styled-components";

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    z-index: 3;
    backdrop-filter: blur(5px);
`;

export default BackDrop;