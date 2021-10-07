import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Dbupdate = () => {
    const [Test, setTest] = useState({});

    const [upitem, setUpitem] = useState([]); //업데이트할 테이블 정보 (//insert에 dbname이랑 같음)
    const [updatelist, setUpdatelist] = useState([]); //전체목록 가져오기(업데이트)
    const [loadupdate, setLoadupdate] = useState([]);
    const [upname, setUpname] = useState("");
    const [upprice, setUpprice] = useState("");
    const [upcontent, setUpcontent] = useState("");

    const [inputname, setInputname] = useState("");
    const [inputprice, setInputprice] = useState("");
    const [inputcontent, setInputcontent] = useState("");



    useEffect(() => {
        fn_updatelist();
        axios.get("/api").then(res => {
        setTest(res);
        })
    }, []);


     //---------------------------- 업데이트 input-----------------------

    const upinit1 = (event) => {
        setUpname(event.target.value) //업데이트 할 이름
    }

    const upinit2 = (event) => {
        setUpprice(event.target.value) // 업데이트할 가격
    }

    const upinit3 = (event) => {
        setUpcontent(event.target.value) // 업데이트할 멘트
    }

 //---------------------------- 업데이트 input-----------------------

//-------------------------------------------------------------------------db 수정하기 #### --------------------------------

    const selectupdate = (event) =>{ //셀렉트 지울 목록벨류 저장해서 post로 넘기기
        setUpitem(event.target.value)
    }

const onupdateSubmit = (event) => {
    event.preventDefault();
    let body = {
        upitem : upitem,
    }
    axios.post("/api/update", body).then(res => {
        setLoadupdate(res.data)
        // console.log(res); //고르면 목록전송
    })
}

const fn_updatelist = () => { //전체목록 가저오기 (테이블명)
    axios.get("/api/all")
        .then(res =>{
            setUpdatelist(res.data);
        }
    );   
};


useEffect(() => {
    if(updatelist.length > 0) {
        // console.log(deletelistn[0]['Tables_in_test']);
    }
}, [updatelist]);


const updatelistAry = (array) => { //삭제할 리스트 불러오기
    return array.map((item, index) => (
        <option value={updatelist[index]['Tables_in_test']} key={index}>{updatelist[index]['Tables_in_test']}
        </option>
    ))
}

const onChangeUpdate = (item, e) => { //체크된값 반환하기
        console.log(item);
        setInputname(item.name);
        setInputprice(item.price);
        setInputcontent(item.content);
    }

const updateMap = (array) =>{
    return array.map((item, index) =>(
        <div className="content" key={index}>
                    <label onChange={(e) => onChangeUpdate(item, e)}>
                        <div className="mm_1">
                            <div className="main_title">
                                <h5 className="content-name">{item.name}</h5>
                                <input className="checkbox" name="radio-btn" type="radio"/>
                            </div>
                                <h4 className="content-price">{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</h4>
                                <span className="content-comment">{item.content}</span>
                        </div>
                    </label>
                </div>
    ))
}

const onUpdatesend = (event) => {
    event.preventDefault();
    let body = {
        upname : upname,
        upprice: upprice,
        upcontent: upcontent,
        upitem : upitem,
    }
    axios.post("/api/updateitem", body).then(res => {
        // console.log(res); //고르면 목록전송
        return;
    })
    
}

//-------------------------------------------------------------------------db 수정하기 @@@@ --------------------------------

    return (
        <>
        <h1>db를 수정해보자</h1>
            <form onSubmit={onupdateSubmit}>
                <select onChange={selectupdate} name="" id="">
                    <option >---테이블을 골라주세요---</option>
                    {updatelistAry(updatelist)}
                </select>
                <button type="submit">가져오기</button>
                <br></br>
                {updateMap(loadupdate)}
            </form>
            <form onSubmit={onUpdatesend}>
                <input className="inputbox" type="text" placeholder="수정할 타이틀" value={inputname}/>
                <input className="inputbox" type="text" placeholder="수정할 가격" value={inputprice}/>
                <input className="inputbox" type="text" placeholder="수정할 내용" value={inputcontent}/>
                <button type="submit">수정</button>
            </form>
        </>
    );
}


export default Dbupdate;