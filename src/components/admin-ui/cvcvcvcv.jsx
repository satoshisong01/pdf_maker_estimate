import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { postList } from './dumbdata';

const PostList = props => {
    const [dataList, setDataList] = useState([]);


    useEffect(()=> {
        setDataList(postList);
    }, [])

    return(
        <>
            <h1>글번호 000  제목 000 등록일 000 조회수</h1>
            {
                dataList ? dataList.map((item, idex) =>{
                    return(
                        <>
                            <h3>{item.no}</h3>
                            <h3>{item.title}</h3>
                            <h3>{item.createDate}</h3>
                            <h3>{item.readCount}</h3>
                        </>
                    )
                }): ''
            }
        </>
    )


};
export default PostList;