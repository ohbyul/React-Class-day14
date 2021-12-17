import React from 'react';
import './Test4.css';
import myStyle from './Test4.module.css'

const Test4 = () => {
    return (
        <div className = "wrap">
            <div className = "box"></div>
            <div className = {myStyle.box}></div>

            {/* 다중 클래스 */}
            <div className = "size bg"></div>
            <div className = { `${myStyle.size} ${myStyle.bg}`} ></div>
            <div className = {`size ${myStyle.bg}`}></div>

            {/* 다중 클래스 (수업이니까 그냥 알려드리는것 )*/}
            <div className = {[myStyle.size , myStyle.bg].join(' ')}></div>
                {/* 배열 형식 조인 중간에 띄어쓰기 필수 */}
            <div className ={["size", myStyle.bg].join(' ')}></div>

            {/* 독립 클래스 */}
            <div className='mybox'></div>
        </div>
    );
};

export default Test4;

/*
    파일명.module.css
    클래스이름의 중첩을 제거하기 위해서 사용
    import 참조변수 from './파일명.module.css'

    클래스명 : 파일명.클래스명__아무거나
    .box {}
    Test4.box__xxx
    (언더바 두개)




    vscode-styled-components
    설치
*/