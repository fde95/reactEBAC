import styled from 'styled-components';

export const Title = styled.h1`
    color: #0D0D0D;
    font-size: 40px;
    margin-top: 24px;

    span{
        color: #c4c4c4;
        font-size: 32px ;
        display: block;
    }
`;

export const SubTitulo = styled.h2`
    margin-top: 60px;
    font-size: 24px;
    color: #0D0D0D;
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 768px){
        width: 90%;
    }
    @media (min-width: 768px) and (max-width: 1022px){
        width: 90%;
    }
`

export const GridHabilidades = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

export const Item = styled.h3`
    color: #777777;
    margin: 16px 0;
    span{
        font-size: 16px;
        color: #c4c4c4;
    }
`
