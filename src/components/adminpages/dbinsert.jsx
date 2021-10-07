import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Dbinsert = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [content, setContent] = useState("");

    const [dbname, setDbname] = useState(""); //디비이름
    const [dblist, setDblist] = useState([]); //디비리스트


    useEffect(() => {
        fn_dblists();
    }, []);




//-------------------------------------------------------------------------db 넣기 --------------------------------
    const oninit = (event) => {
        setName(event.target.value); //타이틀 이름
    }

    const oninit2 = (event) => {
        setPrice(event.target.value); // 가격
    } 

    const oninit3 = (event) => {
        setContent(event.target.value); // 상품내용
    }
    
    const selectinit = (event) => {
        setDbname(event.target.value); //디비네임
    }



    const onSubmit =(event) => { //이름, 가격, 내용, 테이블명
        let body = {
            name : name,
            price : price,
            content : content,
            dbname: dbname,
        }
    axios.post("/api/insert", body).then(res => {
        console.log(res); //보내기 누르면 바디정보 전송
    })

    }

    const fn_dblists = () => { //전체목록 가저오기 (테이블명)
        axios.get("/api/all")
            .then(res =>{
                setDblist(res.data);
            }
        );   
    };

    useEffect(() => {
        if(dblist.length > 0) {
            // console.log(dblist[0]['Tables_in_test']);
        }
    }, [dblist]);

    const listAry = (array) => { //리스트 불러와서 테이블 출력
        return array.map((item, index) => (
            <option value={dblist[index]['Tables_in_test']} key={index}>{dblist[index]['Tables_in_test']}
            </option>
        ))
    }


//-------------------------------------------------------------------------db 넣기 --------------------------------

    return (
        <>
        <h1>db를넣어보자</h1>
            <form action="" onSubmit={onSubmit}>
                <input className="inputbox" type="text" placeholder="수정할 타이틀을 적어주세요" onChange={oninit}/>
                <input className="inputbox" type="number" placeholder="수정할 가격을 적어주세요" onChange={oninit2}/>
                <input className="inputbox" type="text" placeholder="수정할 내용을 적어주세요" onChange={oninit3}/>
                <button type="submit">보내기</button>
                <select onChange={selectinit} name="" id="">
                    <option >---테이블을 골라주세요---</option>
                    {listAry(dblist)}
                </select> 
            </form>
        </>
    );
}


export default Dbinsert;