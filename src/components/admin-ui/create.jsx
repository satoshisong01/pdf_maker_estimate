import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Create = (props) => {
  const history = useHistory();
  const params = useParams();
  const tablename = params.table;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');

  const onaddtitle = (event) => {
    setName(event.target.value);
  };

  const onaddprice = (event) => {
    setPrice(event.target.value);
  };

  const onaddcontent = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (window.confirm('추가 하시겠습니까?') === true) {
      let body = {
        name: name,
        price: price,
        content: content,
        tablename: tablename,
      };
      axios.post('/api/insert', body).then((res) => {
        props.history.push('/');
      });
    } else {
      return;
    }
  };

  return (
    <>
      <form className="input-menu" onSubmit={onSubmit}>
        <div className="inputdiv">
          <h2 className="title-input">제목</h2>
          <input
            type="text"
            className="inputbox inputbox-text"
            placeholder="추가할 타이틀을 적어주세요"
            onChange={onaddtitle}
          />
          <h2 className="title-input">가격</h2>
          <input
            type="number"
            className="inputbox inputbox-num"
            placeholder="추가할 가격을 적어주세요"
            onChange={onaddprice}
          />
          <h2 className="title-input">내용</h2>
          <input
            type="text"
            className="inputbox inputbox-con"
            placeholder="추가할 내용을 적어주세요"
            onChange={onaddcontent}
          />
          <button type="submit" className="btn">
            추가하기
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
