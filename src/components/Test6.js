import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width : 300px; 
    padding : 20px;
    border : 1px solid black;
    `;
const Box1 = styled.section`
    background : pink;
    margin : 10px;
`;
const Box2 = styled.article`
    padding : 10px;
    background: skyblue;
`;
const Box3 = styled('div')`
    margin : 10px;
    border : 10px  solid pink;
    background : orange;
`;

const Test6 = () => {
    return (
        <div>
            <Container>
                <Box1>안녕</Box1>
                <Box2>하세요</Box2>
                <Box3>ㅡ,.ㅡ</Box3>
            </Container>
        </div>
    );
};

export default Test6;


/*
    cosnt 컴포넌트명 = styled.태그``
    cosnt 컴포넌트명 = styled.div``

    cosnt 컴포넌트명 = styled.('태그')``
    cosnt 컴포넌트명 = styled.('div')``

    스타일 위/ 아래 
    어디다 써도 상관 없다.
*/