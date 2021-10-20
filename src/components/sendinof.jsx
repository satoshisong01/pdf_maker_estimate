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
import { reduceHooks } from 'react-table';

Font.register({
  family: 'Sunflower',
  fonts: [{ src: font }],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: 'black',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  pagesize: {
    width: '95%',
    border: '3px solid black',
    marginBottom: 'auto',
  },
  estimate: {
    flexDirection: 'row',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomColor: 'black',
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
  main_title: {
    marginBottom: 15,
    fontSize: 25,
    marginTop: 15,
    marginLeft: 5,
    textAlign: 'center',
    paddingBottom: 20,
    borderBottom: '1px solid gray',
  },

  cut1: {
    width: '35%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut2: {
    width: '5%',
    border: '1px solid black',
    borderBottomColor: '#342a2a',
    borderLeft: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  cut3: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  cut3_line: {
    width: '100%',
    borderBottom: '1px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut3_line_upte: {
    width: '100%',
    borderBottom: '1px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 1.5,
  },
  cut3_line_phone_num: {
    width: '100%',
    borderBottom: '0.7px solid black',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4: {
    width: '48%',
    border: '1px solid black',
    borderBottomColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4_0: {
    flexDirection: 'row',
  },
  cut4_1: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  cut4_1_ownername: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: '1px solid black',
  },
  cut4_1_sysner: {
    width: '33.3%',
    borderTop: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottom: '1px solid black',
  },
  cut4_gy: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
  },
  cut4_gy_owner: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cut4_gy_list: {
    backgroundColor: 'lightgray',
    width: '33.3%',
    border: '1px solid black',
    borderBottom: 'none',
    borderBottomColor: 'black',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1,
  },
  text_day: {
    fontSize: 10,
    padding: 15,
  },
  text_sub: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 10,
  },
  text_num: {
    fontSize: 10,
    padding: 10,
  },
  text_num_whiteBG: {
    fontSize: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 9,
    marginBottom: 1,
  },
  text_num_whiteBG_addrres: {
    fontSize: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 9,
  },

  price_Sum: {
    width: '34.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_Sum_white: {
    width: '34.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info_gray: {
    width: '100%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  info_white: {
    width: '100%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_Sum_white_gray: {
    width: '49.8%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_sum_Total: {
    width: '65.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item1: {
    width: '15%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item2: {
    width: '20.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item3: {
    width: '18%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item4: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  price_item1_white: {
    width: '15%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item2_white: {
    width: '20.2%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item3_white: {
    width: '18%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    borderRight: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_item4_white: {
    width: '12%',
    border: '1px solid black',
    borderBottomColor: 'black',
    borderTop: 'none',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 500,
    width: 210,
    height: 65,
    opacity: 0.3,
    position: 'absolute',
  },
  text_total_price: {
    fontSize: 10,
    padding: 3,
  },
  text_sum_price: {
    fontSize: 10,
    padding: 3,
  },
  price_kor_Total: {
    fontSize: 10,
  },
  text_item_name: {
    fontSize: 10,
    padding: 7,
  },
  text_item_item_name: {
    fontSize: 10,
    padding: 4,
  },
  text_item_item_name_total: {
    fontSize: 10,
    padding: 5,
  },
  text_item_item_name_total_write: {
    fontSize: 10,
    padding: 30,
    color: 'red',
  },
});

const Sendinof = (props) => {
  let [changenames, setChangeNames] = useState('');
  let [changecompanys, setChangeCompanys] = useState('');
  let [changeemails, setChangeEmails] = useState('');
  let [countTotal, setCountTotal] = useState(0);
  let [countUi, setCountUi] = useState(0);
  let [countService, setCountService] = useState(0);

  let total_item_count = countService + countTotal + countUi;

  let pdfList_Ui = props.arrui;
  let pdfList_Service = props.arrservice;
  let pdfList = props.arrtotal;
  let korPrice = '';
  let totalprice = props.pricedtotal + props.pricedui + props.priceservice;

  console.log(totalprice);

  let sendtotalcount = props.sendtcount;

  const MyDoc = () => {
    if (sendtotalcount < 16) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    } else if ((sendtotalcount > 15) & (sendtotalcount < 33)) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_semi(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    } else if ((sendtotalcount >= 33) & (sendtotalcount < 49)) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_semi(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_thrd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    } else if ((sendtotalcount >= 49) & (sendtotalcount < 65)) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_semi(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_thrd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_fourd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    } else if ((sendtotalcount >= 65) & (sendtotalcount < 81)) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_semi(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_thrd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_fourd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_five(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    } else if ((sendtotalcount >= 81) & (sendtotalcount < 97)) {
      return (
        <Document style={{ fontFamily: 'Sunflower' }}>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_mail_ui(pdfList_Ui)}
              {Sendinfo_mail_service(pdfList_Service)}
              {Sendinfo_mail(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_semi(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_thrd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_fourd(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
          <Page style={styles.page}>
            <Text style={styles.main_title}>
              견&nbsp;&nbsp;&nbsp;&nbsp;적&nbsp;&nbsp;&nbsp;&nbsp;서
            </Text>
            <View style={styles.pagesize}>
              <View style={styles.tableRow}>
                <View style={styles.cut1}>
                  <Text style={styles.text_day}>
                    {nowTime_H}&nbsp;년&nbsp;&nbsp;&nbsp;{nowTime_M}
                    &nbsp;월&nbsp;&nbsp;&nbsp;{nowTime_D}&nbsp;일
                  </Text>
                  <Text style={styles.text_day}>
                    <span style={{ color: 'red' }}>{changecompanys}</span> 귀하
                  </Text>
                  <Text style={styles.text_day}>아래와 같이 견적합니다.</Text>
                </View>
                <View style={styles.cut2}>
                  <Text style={styles.text_sub}>공</Text>
                  <Text style={styles.text_sub}>급</Text>
                  <Text style={styles.text_sub}>자</Text>
                </View>
                <View style={styles.cut3}>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>등록번호</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>상호명</Text>
                  </View>
                  <View style={styles.cut3_line}>
                    <Text style={styles.text_num}>주소</Text>
                  </View>
                  <View style={styles.cut3_line_upte}>
                    <Text style={styles.text_num}>업태</Text>
                  </View>
                  <View style={styles.cut3_line_phone_num}>
                    <Text style={styles.text_num}>전화번호</Text>
                  </View>
                </View>
                <View style={styles.cut4}>
                  <Text style={styles.text_num_whiteBG}>582-86-01465</Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1_sysner}>
                      <Text style={styles.text_num_whiteBG}>(주)시스너</Text>
                    </View>
                    <View style={styles.cut4_gy_owner}>
                      <Text style={styles.text_num}>대표자</Text>
                    </View>
                    <View style={styles.cut4_1_ownername}>
                      <Text style={styles.text_num_whiteBG}>서진석</Text>
                    </View>
                  </View>
                  <Text style={styles.text_num_whiteBG_addrres}>
                    경기도 안양시 동안구 벌말로 123(관양동) 605호
                  </Text>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>서비스</Text>
                    </View>
                    <View style={styles.cut4_gy_list}>
                      <Text style={styles.text_num}>종목</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>온라인</Text>
                    </View>
                  </View>
                  <View style={styles.cut4_0}>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>010-5178-2219</Text>
                    </View>
                    <View style={styles.cut4_gy}>
                      <Text style={styles.text_num}>팩스</Text>
                    </View>
                    <View style={styles.cut4_1}>
                      <Text style={styles.text_num_whiteBG}>031-383-3322</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_sum_price}>
                    합&nbsp;계&nbsp;금&nbsp;액
                  </Text>
                  <Text style={styles.text_total_price}>
                    (공급가액&nbsp;&nbsp;+&nbsp;&nbsp;세액)
                  </Text>
                </View>
                <View style={styles.price_sum_Total}>
                  <Text style={styles.price_kor_Total}>
                    <span style={{ color: 'red' }}>{korPrice}</span>
                    &nbsp;원&nbsp;정&nbsp; (₩{' '}
                    <span style={{ color: 'red' }}>
                      {(totalprice / 10 + totalprice)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    &nbsp;)
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum}>
                  <Text style={styles.text_item_name}>
                    품&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
                  </Text>
                </View>
                <View style={styles.price_item1}>
                  <Text style={styles.price_kor_Total}>
                    단&nbsp;&nbsp;&nbsp;가
                  </Text>
                </View>
                <View style={styles.price_item2}>
                  <Text style={styles.price_kor_Total}>
                    공&nbsp;급&nbsp;가&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item3}>
                  <Text style={styles.price_kor_Total}>
                    세&nbsp;&nbsp;&nbsp;액
                  </Text>
                </View>
                <View style={styles.price_item4}>
                  <Text style={styles.price_kor_Total}>
                    비&nbsp;&nbsp;&nbsp;고
                  </Text>
                </View>
              </View>
              {Sendinfo_six(pdfList)}
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white}>
                  <Text style={styles.text_item_item_name}>&nbsp;</Text>
                </View>
                <View style={styles.price_item1_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.price_Sum_white_gray}>
                  <Text style={styles.text_item_item_name_total}>계</Text>
                </View>
                <View style={styles.price_item2_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {totalprice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item3_white}>
                  <Text
                    style={
                      (styles.text_item_item_name,
                      { color: 'red', fontSize: 10 })
                    }
                  >
                    {(totalprice / 10)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
                <View style={styles.price_item4_white}>
                  <Text style={styles.text_item_item_name}></Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_gray}>
                  <Text style={styles.text_item_item_name_total}>
                    특&nbsp;&nbsp;이&nbsp;&nbsp;사&nbsp;&nbsp;항
                  </Text>
                </View>
              </View>
              <View style={styles.estimate}>
                <View style={styles.info_white}>
                  <Text style={styles.text_item_item_name_total_write}>
                    ※ 본 견적서는 견적일로부터 30일간 유효합니다.
                  </Text>
                </View>
              </View>
            </View>
            <Image style={styles.image} src={images} />
          </Page>
        </Document>
      );
    }
  };

  const Sendinfo_mail = (array) => {
    return array.map((item, index) => {
      if (index < 15)
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
    });
  };

  const Sendinfo_semi = (array) => {
    return array.map((item, index) => {
      if ((index >= 15) & (index < 32)) {
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
      }
    });
  };

  const Sendinfo_thrd = (array) => {
    return array.map((item, index) => {
      if ((index >= 32) & (index < 48)) {
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
      }
    });
  };

  const Sendinfo_fourd = (array) => {
    return array.map((item, index) => {
      if ((index >= 48) & (index < 64)) {
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
      }
    });
  };

  const Sendinfo_five = (array) => {
    return array.map((item, index) => {
      if ((index >= 64) & (index < 80)) {
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
      }
    });
  };

  const Sendinfo_six = (array) => {
    return array.map((item, index) => {
      if ((index >= 80) & (index < 96)) {
        return (
          <View style={styles.estimate} key={index}>
            <View style={styles.price_Sum_white}>
              <span style={{ color: 'red' }}>
                <Text style={styles.text_item_item_name}>{item.name}</Text>
              </span>
            </View>
            <View style={styles.price_item1_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item2_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item3_white}>
              <Text style={styles.text_item_item_name}>
                <span style={{ color: 'red' }}>
                  {(item.price / 10)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </Text>
            </View>
            <View style={styles.price_item4_white}>
              <Text style={styles.text_item_item_name}></Text>
            </View>
          </View>
        );
      }
    });
  };

  const Sendinfo_mail_ui = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.estimate} key={index}>
          <View style={styles.price_Sum_white}>
            <span style={{ color: 'red' }}>
              <Text style={styles.text_item_item_name}>{item.name}</Text>
            </span>
          </View>
          <View style={styles.price_item1_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item2_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item3_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {(item.price / 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item4_white}>
            <Text style={styles.text_item_item_name}></Text>
          </View>
        </View>
      ));
    }
  };

  const Sendinfo_mail_service = (array) => {
    if (array.price > 0) {
      return [array].map((item, index) => (
        <View style={styles.estimate} key={index}>
          <View style={styles.price_Sum_white}>
            <span style={{ color: 'red' }}>
              <Text style={styles.text_item_item_name}>{item.name}</Text>
            </span>
          </View>
          <View style={styles.price_item1_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item2_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item3_white}>
            <Text style={styles.text_item_item_name}>
              <span style={{ color: 'red' }}>
                {(item.price / 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
            </Text>
          </View>
          <View style={styles.price_item4_white}>
            <Text style={styles.text_item_item_name}></Text>
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

  const nowTime_H = moment().format('YYYY');
  const nowTime_M = moment().format('MM');
  const nowTime_D = moment().format('DD');

  function priceConvertKorean(num) {
    num = num / 10 + num;
    let changenum = num.toString();
    var x = new Array(
      '',
      '일',
      '이',
      '삼',
      '사',
      '오',
      '육',
      '칠',
      '팔',
      '구',
      '십',
    );
    var y = new Array(
      '',
      '십',
      '백',
      '천',
      '',
      '십',
      '백',
      '천',
      '',
      '십',
      '백',
      '천',
      '',
      '십',
      '백',
      '천',
    );
    var han = '';
    var str = '';
    var result = '';

    for (let i = 0; i < changenum.length; i++) {
      str = '';
      han = x[changenum.charAt(changenum.length - (i + 1))];
      if (han != '') str += han + y[i];
      if (i === 4) str += '만';
      if (i === 8) str += '억';
      if (i === 12) str += '조';
      if (i === 16) str += '경';

      result = str + result;
    }

    if (changenum != 0) result = result;
    return result;
  }

  korPrice = priceConvertKorean(totalprice);
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
            placeholder="회사명 또는 성함"
          />
          <input
            type="email"
            className="add-email"
            onChange={changeEmail}
            placeholder="이메일주소를입력해주세요"
          />
          {/* <input
            type="text"
            className="add-name"
            onChange={changeName}
            placeholder="이름(견적서의 수신인)"
          /> */}
          {pdfList_Ui.price > 0 ? (
            <button className="send-button">
              <div className="App">
                <PDFDownloadLink
                  document={<MyDoc />}
                  fileName={`견적서_${changecompanys}_${nowTime_H}_${nowTime_M}_${nowTime_D}.pdf`}
                >
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
