import React from 'react';
import styled from 'styled-components'



const Test7 = () => {
    return (
        <SContainer>
            <STitle> styled components </STitle>
            <SButton>BTN</SButton>
        </SContainer>
    );
};

const SContainer = styled.div`
        width : 400px;
        border : 1px solid black;
        padding : 10px;
        margin : 10px;
`;
const STitle = styled.p`
    color : tomato;
    font-size : 18px;
`;
const SButton = styled.button`
    background : pink;
    
`;

export default Test7;