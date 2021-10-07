import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Dbdelete = () => {
    const [Test, setTest] = useState({});

    const [delitem, setDelitem] = useState([]); //아이템 이름
    const [deletelistn, setDeletelistn] = useState([]); //전체목록 가져오기(딜리트)
    const [loaditem, setLoaditem] = useState([]); //로드 테이블한 정보
    const [delpostitem, setDelpostitem] = useState([]); //삭제할 아이템 전송    


    useEffect(() => {
        fn_delist();
        axios.get("/api").then(res => {
        setTest(res);
        })
    }, []);


//-------------------------------------------------------------------------db 지우기 @@@@ --------------------------------


    const selectinitdelete = (event) =>{ //셀렉트 지울 목록벨류 저장해서 post로 넘기기
        setDelitem(event.target.value)
    }

    const ondeletSubmit = (event) => {
        event.preventDefault();
        let body = {
            delitem : delitem,
        }
        axios.post("/api/delete", body).then(res => {
            setLoaditem(res.data)
            // console.log(res); //고르면 목록전송
        })
    }

    const fn_delist = () => { //전체목록 가저오기 (테이블명)
        axios.get("/api/all")
            .then(res =>{
                setDeletelistn(res.data);
            }
        );   
    };
    

    useEffect(() => {
        if(deletelistn.length > 0) {
            // console.log(deletelistn[0]['Tables_in_test']);
        }
    }, [deletelistn]);


    const deletelisttAry = (array) => { //삭제할 리스트 불러오기
        return array.map((item, index) => (
            <option value={deletelistn[index]['Tables_in_test']} key={index}>{deletelistn[index]['Tables_in_test']}
            </option>
        ))
    }

    const onChangeRemove = (item, e) => { //체크된값 반환하기
        let num = item.idx;
            const newlist = delpostitem.indexOf(num);

            console.log(newlist);
            const newitem = [...delpostitem]
            if(newlist === -1){
                newitem.push(num);
            }else{
                newitem.splice(newlist, 1);
            }
            setDelpostitem(newitem);
        }

    const arrayMap = (array) =>{
        return array.map((item, index) =>(
            <div className="content" key={index}>
                        <label onChange={(e) => onChangeRemove(item, e)}>
                            <div className="mm_1">
                                <div className="main_title">
                                    <h5 className="content-name">{item.name}</h5>
                                    <input className="checkbox" type="checkbox"/>
                                </div>
                                    <h4 className="content-price">{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</h4>
                                    <span className="content-comment">{item.content}</span>
                            </div>
                        </label>
                    </div>
        ))
    }

    const ondeletesend = (event) => {
        let body = {
            delpostitem : delpostitem,
            delitem: delitem,
        }
        axios.post("/api/deleteitem", body).then(res => {
            // console.log(res); //고르면 목록전송
            return;
        })
        
    }
//-------------------------------------------------------------------------db 지우기 @@@@ --------------------------------

    return (
        <>
        <h1>db를지워보자</h1>
            <form onSubmit={ondeletSubmit}>
                <select onChange={selectinitdelete} name="" id="">
                    <option >---테이블을 골라주세요---</option>
                    {deletelisttAry(deletelistn)}
                </select>
                <button type="submit">가져오기</button>
                <br></br>
                {arrayMap(loaditem)}
            </form>
            <form onSubmit={ondeletesend}>
                <button type="submit">삭제</button>
            </form>
            <br></br>
        <h1>-----------------------------------------------------------------------------------------------------------</h1>
        </>
    );
}


export default Dbdelete;