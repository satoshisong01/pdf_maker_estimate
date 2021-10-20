import React from 'react';
import './App.css';
import Price from './components/price';
import Dbinsert from './components/adminpages/dbinsert';
import Dbdelete from './components/adminpages/dbdelete';
import Dbupdate from './components/adminpages/dbupdate';
import AdminUi from './components/admin-ui/admin_ui';
import 'antd/dist/antd.css';
import Test from './components/admin-ui/test';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './components/admin-ui/create';
import Update from './components/admin-ui/update';
import Testing from './components/testing';
// import ReactDOM from 'react-dom';
// import { PDFViewer } from '@react-pdf/renderer';
// import MyPDF from './mypdf';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

function App() {
  // const [Test, setTest] = useState({});
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   axios.get("/api").then(res => {
  //     setTest(res);

  //   })

  // }, []);

  // const oninit = (event) => {
  //   setName(event.target.value);
  // }

  // const oninit2 = (event) => {
  //   setPrice(event.target.value);
  // }

  // const oninit3 = (event) => {
  //   setContent(event.target.value);
  // }

  // const onSubmit =(event) => {
  //   event.preventDefault();
  //   let body = {
  //     name : name,
  //     price : price,
  //     content : content,
  //   }

  //   axios.post("/api/insert", body).then(res => {
  //     console.log(res);
  //   })

  // }

  // console.log(name, price,content);

  //{/* <select action="" onSubmit={onSubmit}>
  //   <input type="text" onChange={oninit}/>
  //   <input type="text" onChange={oninit2}/>
  //   <input type="text" onChange={oninit3}/>
  //  <button type="submit">보내기</button>
  // </select>   */}
  //  {/* <PDFViewer>
  //   <MyPDF/>
  // </PDFViewer> */}
  // {/* <Price/> */}
  // {/* <AdminUi/> */}
  // {/* <Dbinsert/>
  // <Dbdelete/>
  //<Dbupdate/> */}

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Price} exact={true} />
        <Route path="/admin" component={Test} />
        <Route path="/create/:table" component={Create} />
        <Route
          path="/update/:data/:table/:title/:price/:content"
          component={Update}
        />
        <Route path="/test" component={Testing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
