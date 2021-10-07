import React from 'react';
import Testmain from './testmain';
import Dbinsert from '../adminpages/dbinsert';
import './admin_ui.css';
import { useEffect, useState } from 'react/cjs/react.development';

const AdminUi = (props) => {
    
    const [itemlist, setItemlist] = useState([]);
    

    useEffect(() =>{
        setItemlist(props.dbitem);
        console.log(props.dbitem,"dbitem")
        console.log(itemlist,"를라라라라");
    },[]);


    const paintdata = (array) => {
        return array.map((item, index) => (
            <tr>
                <th className="item-table">{item.name} </th>
                <th className="item-table">{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</th>
                <th className="item-table">{item.content} </th>
                <th><button>수정</button></th>
                <th><button>제거</button></th>
            </tr>

        ))
    }

    return (
        <>
            <div className="admin_ui">
                <div className="admin-right">
                <h1>카테고리 추가 제거 및 수정</h1>
                    <table border ="1">
                        <tr>
                            <th>타이틀</th>
                            <th>가격</th>
                            <th>내용</th>
                        </tr>
                            {paintdata(itemlist)}
                    </table>
                </div>
            </div>
        </>
    )
};

export default AdminUi;