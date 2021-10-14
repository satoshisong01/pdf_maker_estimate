import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  Font,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';
import font from '../font/NanumGothic-Bold.ttf';
import { useState } from 'react';
import images from '../img/hd_logo_ov.png';

Font.register({
  family: 'Sunflower',
  fonts: [{ src: font }],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  body: {
    padding: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: '1px solid gray',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableColHeaderRow: {
    width: '40%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeaderRow2: {
    width: '5%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeaderRow3: {
    width: '12%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeaderRow4: {
    width: '43%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'row',
  },
  ColRow: {
    width: '25%',
  },
  ColCol: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  tableCol: {
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  image: {
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 500,
    width: 210,
    height: 65,
    opacity: 0.3,
  },
  main_title: {
    marginBottom: 15,
    fontSize: 25,
    marginTop: 5,
    marginLeft: 5,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottom: '1px solid gray',
  },
  change_name: {
    marginTop: 10,
  },
  black_bg: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  black_bg2: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20,
    color: 'gray',
  },
  black_bg3: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 7,
    paddingTop: 8,
    backgroundColor: 'lightgray',
    marginBottom: 1,
  },
  black_bg4: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 7,
    paddingTop: 8,
    marginBottom: 1,
  },
  black_bg6: {
    left: 90,
    fontSize: 10,
    paddingBottom: 7,
    paddingTop: 8,
    marginBottom: 1,
  },
  testing: {
    flexDirection: 'column',
    width: '33%',
    marginTop: 30,
    right: 25,
    textAlign: 'center',
  },
  owner_name: {
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 7,
    paddingTop: 8,
    marginBottom: 1,
  },
  company_name: {
    fontSize: 10,
    textAlign: 'left',
    paddingBottom: 7,
    paddingTop: 8,
    marginBottom: 1,
  },
  owner_name_box: {
    fontSize: 10,
    paddingBottom: 7,
    textAlign: 'left',
    paddingTop: 8,
    backgroundColor: 'lightgray',
    marginBottom: 1,
  },
  teeeee: {
    flexDirection: 'column',
  },
  texttext: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    top: 50,
    right: 120,
  },
});

const Sendinof = (props) => {
  let [changenames, setChangeNames] = useState('');
  let [changecompanys, setChangeCompanys] = useState('');
  let [changeemails, setChangeEmails] = useState('');

  let pdfList_Ui = props.arrui;
  let pdfList_Service = props.arrservice;
  let pdfList = props.arrtotal;

  const MyDoc = () => (
    <Document style={{ fontFamily: 'Sunflower' }}>
      <Page style={styles.page}>
        <Text style={styles.main_title}>
          견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeaderRow}>
              <Text style={styles.black_bg}>{nowTime}</Text>
              <Text style={styles.black_bg}>{changecompanys} 귀하</Text>
              <Text style={styles.black_bg}>아래와 같이 견적합니다.</Text>
            </View>
            <View style={styles.tableColHeaderRow2}>
              <Text style={styles.black_bg2}>공</Text>
              <Text style={styles.black_bg2}>급</Text>
              <Text style={styles.black_bg2}>자</Text>
            </View>
            <View style={styles.tableColHeaderRow3}>
              <Text style={styles.black_bg3}>등록번호</Text>
              <Text style={styles.black_bg3}>
                상&nbsp;&nbsp;호&nbsp;&nbsp;명
              </Text>
              <Text style={styles.black_bg3}>
                주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소
              </Text>
              <Text style={styles.black_bg3}>
                업&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;태
              </Text>
              <Text style={styles.black_bg3}>전화번호</Text>
            </View>
            <View style={styles.tableColHeaderRow4}>
              <Text style={styles.black_bg6}>
                582&nbsp;-&nbsp;86&nbsp;-&nbsp;01465
              </Text>
              <View style={styles.ColCol}>
                <View style={styles.testing}>
                  <Text style={styles.company_name}>(주)시스너</Text>
                </View>
                <View style={styles.testing}>
                  <Text style={styles.owner_name_box}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대&nbsp;&nbsp;표&nbsp;&nbsp;자
                  </Text>
                </View>
                <View style={styles.testing}>
                  <Text style={styles.owner_name}>서진석</Text>
                </View>
              </View>
              <View style={styles.teeeee}>
                <Text style={styles.texttext}>
                  경기도 안양시 동안구 벌말로 123(관양동) 605호
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>{nowTime}</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>{changenames}</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>견적일로부터 30일</Text>
            </View>
          </View> */}

        {/* <Text style={styles.supplier}>공급자</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tablesupply}>
              <Text style={styles.black_bg}>사업자번호</Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.black_bg}>상호</Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.black_bg}>주소</Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.black_bg}>날인</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tablesupply}>
              <Text style={styles.tableCellHeader}>582-86-01465</Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.tableCellHeader}>(주)시스너</Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.tableCellHeader}>
                경기도 안양시 동안구 벌말로 123(관양동) 605호
              </Text>
            </View>
            <View style={styles.tablesupply}>
              <Text style={styles.tableCellHeader}></Text>
            </View>
          </View>
        </View> */}

        {/* <Text style={styles.supplier}>견적 상세 항목 기준</Text> */}

        {/* tteatwaetaweteawteawtawe */}
        {/* <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>기술 구성 항목</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>가격</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>내용</Text>
            </View>
          </View>
          {Sendinfo_mail(pdfList)}
          {Sendinfo_mail_ui(pdfList_Ui)}
          {Sendinfo_mail_service(pdfList_Service)}
        </View>
        <Image style={styles.image} src={images} /> */}
      </Page>
    </Document>
  );

  const Sendinfo_mail = (array) => {
    return array.map((item, index) => (
      <View style={styles.tableRow} key={index}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.name}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.content}</Text>
        </View>
      </View>
    ));
  };

  const Sendinfo_mail_ui = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.name}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {[item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.content}</Text>
          </View>
        </View>
      ));
    }
  };

  const Sendinfo_mail_service = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.tableRow} key={index}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.name}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>
              {[item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{item.content}</Text>
          </View>
        </View>
      ));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // const info = this.inputRef.current.value;
  };

  const changeCompany = (event) => {
    setChangeCompanys(event.target.value);
  };

  const changeEmail = (event) => {
    setChangeEmails(event.target.value);
  };

  const changeName = (event) => {
    setChangeNames(event.target.value);
  };

  const nowTime = moment().format('YYYY-MM-DD');
  console.log(nowTime);

  return (
    <>
      <div className="forminfo">
        <form className="send-form" onSubmit={onSubmit}>
          <h2 className="estimate">예상 견적</h2>
          <h2 className="price-text">
            {(props.pricedtotal + props.pricedui + props.priceservice)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </h2>
          <input
            type="text"
            className="add-text"
            onChange={changeCompany}
            placeholder="회사명"
          />
          <input
            type="email"
            className="add-email"
            onChange={changeEmail}
            placeholder="이메일주소를입력해주세요"
          />
          <input
            type="text"
            className="add-name"
            onChange={changeName}
            placeholder="이름(견적서의 수신인)"
          />
          {pdfList_Ui.price > 0 ? (
            <button className="send-button">
              <div className="App">
                <PDFDownloadLink document={<MyDoc />} fileName={`견적서.pdf`}>
                  {({ blob, url, loading, error }) =>
                    loading ? '견적서 작성중' : '견적서 메일 보내기'
                  }
                </PDFDownloadLink>
              </div>
            </button>
          ) : (
            <h3 style={{ fontWeight: '900', fontSize: '25px', color: 'red' }}>
              UI 페이지 분량은 필수로 골라주세요
            </h3>
          )}
        </form>
      </div>
    </>
  );
};

export default Sendinof;
