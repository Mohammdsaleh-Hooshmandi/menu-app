import { Fragment } from "react";
import styled from "styled-components";
import bgImage from './bg-header.jpg';
import { Navbar } from "./Navbar";

const HeaderWrapper = styled.header`
    width: 100%;
    height: 55vh;
    background: linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, .3)),
    url(${bgImage}) no-repeat center;
    background-size: cover;
`;

const Header = () => {

    return (
        <Fragment>
            <HeaderWrapper />
            <Navbar></Navbar>
        </Fragment>
    );
};

export default Header;