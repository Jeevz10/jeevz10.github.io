import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: #faebd7;
    height: 100vh;
    width: 100vw;
`;


export const ProfileWrapper = styled.div`
    display: grid;
    grid-auto-rows: auto;
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 5% 5%;
    justify-content: center;
`;

export const Layer1 = styled.div`
    height: 20%;
    width: 100%;
`;

export const SectionHeader = styled.h1`
    font-size: 10vmin; // TODO this is overshooting the div size so you might want to add a restrictive layer
    
`;

export const Layer2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;


export const ImageCol = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    align-self: left;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const FactsCol = styled.div`
    height: 20%;
    width: 20%;
`;

export const FactsList = styled.ul`

`;

export const AboutMeCol = styled.div`

`;