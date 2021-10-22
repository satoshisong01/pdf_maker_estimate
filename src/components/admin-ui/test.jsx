import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './test.css';
import AdminUi from './admin_ui';
import Adminstrator_sidbar from './adminstrator_sidbar';
import { Link, Route, useHistory } from 'react-router-dom';
import Create from './create';
import Update from './update';

const { SubMenu } = Menu;

const Test = (props) => {
  const [dblist, setDblist] = useState([]); //디비리스트
  const [dbitem, setDbitem] = useState([]); //첫번째 값 가져오기 -> 클릭시 값이바껴요
  const [tablename, setTablename] = useState('Overseas');

  useEffect(() => {
    fn_dblists();
    axios.get('/api/Overseas').then((res) => {
      setDbitem(res.data);
    });
  }, []);

  const fn_dblists = () => {
    //전체목록 가저오기 (테이블명)
    axios.get('/api/all').then((res) => {
      setDblist(res.data);
    });
  };

  const onsenddata = (event) => {
    setTablename(event.Tables_in_sysner);
    let body = {
      content_name: event.Tables_in_sysner,
    };
    axios.post('/api/selectItem', body).then((res) => {
      setDbitem(res.data);
      console.log(dbitem);
    });
  };

  const deletebtn = (event) => {
    if (window.confirm('정말 삭제하시겠습니까?') === true) {
      console.log(event, '이벤트');
      let deleteitem = event.idx;
      let body = {
        idx: deleteitem,
        tablename: tablename,
      };

      axios.post('/api/deleteitem/admin', body).then((res) => {
        props.history.push('/');
      });
      document.form.submit();
    } else {
      return;
    }
  };

  const paintdata = (array) => {
    return array.map((item, index) => (
      <tr key={index}>
        <th className="item-table">{item.idx} </th>
        <th className="item-table">{item.name} </th>
        <th className="item-table">
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </th>
        <th className="item-table">{item.content} </th>
        <th>
          <form>
            <Link
              to={`/update/${item.idx}/${tablename}/${item.name}/${item.price}/${item.content}`}
            >
              <button type="click">수정</button>
            </Link>
          </form>
        </th>
        <th>
          <form>
            <button type="click" onClick={(e) => deletebtn(item, e)}>
              삭제
            </button>
          </form>
        </th>
      </tr>
    ));
  };

  const list_Array = (array) => {
    return array.map((item, index) => (
      <Menu.Item
        onClick={(event) => {
          onsenddata(item, event);
        }}
        key={index}
        icon={<PieChartOutlined />}
      >
        {item['Tables_in_sysner']}
      </Menu.Item>
    ));
  };

  return (
    <>
      <div className="testpages">
        <div style={{ width: '20%' }}>
          <Menu
            defaultSelectedKeys={['0']} // 기본적으로 선택된 메뉴 항목의 키가 있는 배열
            defaultOpenKeys={['sub1']} //기본 열린 하위 메뉴의 키가 있는 배열
            mode="inline" // 메뉴 스타일
            theme="dark" // 메뉴 색상
            //인라인 들여쓰기 (각 인라인 메뉴 항목의 들여쓰기)
          >
            <SubMenu key="sub1" icon={<MailOutlined />} title="카테고리">
              {list_Array(dblist)}
            </SubMenu>
          </Menu>
        </div>
        <div className="admin_ui">
          <div className="admin-right">
            <h1 className="admin-title">카테고리 추가 제거 및 수정</h1>
            <table className="main-table" border="1">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>타이틀</th>
                  <th>가격</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>{paintdata(dbitem)}</tbody>
            </table>
          </div>
        </div>
        {/* <AdminUi dbitem={dbitem}/> */}

        <form>
          <Link to={`/create/${tablename}`}>
            <button type="click" className="add-btn">
              카테고리 추가
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Test;
