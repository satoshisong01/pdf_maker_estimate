import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './updateui.css';

const Update = (props) => {
    let params = useParams();
    console.log(params);
    const [datas, setDatas] = useState([]); //불러온 데이터
    const [name, setName] = useState(params.title);
    const [price, setPrice] = useState(params.price);
    const [content, setContent] = useState(params.content);

    const tablename = params.table;
    const idx = params.data;


    useEffect(() =>{
        let body = {
            tablename: tablename,
            idx: idx,
        }
        axios.post("/api/update/table", body).then(res =>{
            setDatas(res.data);
        })
        
    },[]);

    
    const oninitName = (event, item) =>{
        if(event.target.value === undefined && null){
            setName(item.name);
        }else{
            setName(event.target.value);
        }
        console.log(event.target.value,"입력된값");
        console.log(item.name,"받아온값");
    }

    const oninitPrice = (event, item) =>{
        if(event.target.value === undefined && null){
            setPrice(item.price);
        }else{
            setPrice(event.target.value);
        }
        console.log(event.target.value);
        console.log(item.price);
    }

    const oninitContent = (event, item) =>{
        if(event.target.value === undefined && null){
            setContent(item.content);
        }else{
            setContent(event.target.value);
        }
        console.log(event.target.value);
        console.log(item.content);
    }
    
    

    const onSubmit = (event) =>{
        event.preventDefault();
        if (window.confirm("수정 하시겠습니까?") === true){
            let body = {
                name: name,
                price: price,
                content: content,
                idx: idx,
                tablename: tablename,
        }
        axios.post(`/api/insert/table`, body).then(res =>{
            props.history.push("/");
        })

        }else {
            return;
        }
    }
    
    // onClick={(e) => deletebtn(item, e)}

    const list_Array = (abc) => {
        return abc.map((item, index) =>(
                <form className="input-menu"  key={index} onSubmit={onSubmit}>
                    <div className="inputdiv">
                        <h2 className="title-input">제목</h2>
                        <input className="inputbox inputbox-text" type="text" defaultValue={item.name} onChange={(e) => oninitName(e, item)}/>
                        <h2 className="title-input">가격</h2>
                        <input className="inputbox inputbox-num" type="number" defaultValue={item.price}onChange={(e) => oninitPrice(e, item)}/>
                        <h2 className="title-input">내용</h2>
                        <input className="inputbox inputbox-con" type="text" defaultValue={item.content}onChange={(e) => oninitContent(e, item)}/>
                        <button type="submit" className="btn"> 수정하기 </button>
                    </div>
                </form>
        ))
    }
    
        return (
            <>
                {list_Array(datas)}
            </>
        );
    };

export default Update;