import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: none;
        outline: none;
        font-weight: 400;
	}

    html {
        font-size: 62.5%;
        font-family: 'Nunito', sans-serif;
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;