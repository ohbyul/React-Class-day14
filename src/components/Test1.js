import React, { useEffect, useState } from 'react';

const dataList = [
    {id:1,name:'홍길동'},
    {id:2,name:'ohbyul'},
    {id:3,name:'YOO'},
    {id:4,name:'吳별'},
    {id:5,name:'김철수'},
    {id:6,name:'Song'},
    {id:7,name:'이효리'},
    {id:8,name:'홍동'},
    {id:9,name:'힝힝'},
    {id:10,name:'오리'}
]

const Test1 = () => {
    const [data,setData] = useState(dataList)
    const [text,setText] =useState('')

    const changInput = (e) => {
        const {value} = e.target
        setText(value)
    }
    const onShow = () => {
        //setData(dataList.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1))
        //1번이 더 많이 사용

        //setData( dataList.filter ( item => item.name.toLowerCase().includes( text.toLowerCase()) ))
        //includes 사용
        
        setData( dataList.filter( item => {
            const re = new RegExp( text, 'ig')
            return item.name.match(re)
        }))
        //정규 표현식
    }

    useEffect( () => {
        setData( dataList.filter( item => {
            const re = new RegExp( text, 'ig')
            return item.name.match(re)
        }))
    },[text])
    //useEffect 사용시.. 검색을 누르지 않아도 바로 뜬다.


    return (
        <div>
            <input type="text" 
                placeholder="검색어를 입력하세요" 
                value = {text}
                onChange = {changInput} 
            />
            <button onClick = {onShow} >검색</button>
            <hr />
            {
                data.map ( item => <p key = {item.id}>
                    {item.id} / {item.name}
                </p>)
            }
        </div>
    );
};

export default Test1;