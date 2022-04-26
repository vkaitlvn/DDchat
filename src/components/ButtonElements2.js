import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 90px;
    background: #14232b;
    white-space: nowrap;
    padding: 10px 10px 10px 10px;
    color: #fff;
    font-size: 22px;
    outline: none;
    border: none;
    cursor: pointer;
    // display: flex;
    text-decoration: none;
    // margin-bottom: -10px;
    // margin-top: 40px;
    margin-left: 30px;
    margin-right: 0px;

    // justify-content: center;
    // align-items: center;
    // text-align: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #8b4fc8;
        color: #fff;
    }

    // @media screen and (max-width: 280px){
    //     font-size: 16px;
    // }

    // @media screen and (max-width: 320px){
    //     font-size: 16px;
    // }

    // @media screen and (max-width: 360px){
    //     font-size: 16px;
    // }

    // @media screen and (max-width: 375px){
    //     font-size: 18px;
    //     margin-top: 15px;
    // }
`;