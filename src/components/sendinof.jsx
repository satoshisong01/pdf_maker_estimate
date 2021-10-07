import React from 'react';    
import {PDFDownloadLink, Page, Text, View, Document, Font , StyleSheet, Image} from '@react-pdf/renderer';
import font from '../font/Sunflower-Bold.ttf';
import { useState } from 'react';
import images from '../img/moonup.jpeg'


Font.register({
    family: 'Sunflower',
    fonts:[
        {src: font},
    ],
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    body: {
        padding: 10
    },
    table: { 
        display: "table", 
        width: "auto", 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        borderWidth: 1, 
        borderRightWidth: 0, 
        borderBottomWidth: 0 
    }, 
    tableRow: { 
        margin: "auto", 
        flexDirection: "row" 
    }, 
    tableColHeader: { 
        width: "25%", 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        borderBottomColor: '#000',
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0
    },   
    tableCol: { 
        width: "25%", 
        borderStyle: "solid", 
        borderColor: '#bfbfbf',
        borderWidth: 1, 
        borderLeftWidth: 0, 
        borderTopWidth: 0 
    }, 
    tableCellHeader: {
        margin: 5, 
        fontSize: 12,
        fontWeight: 500,
        backgroundColor : '#50D6FF',

    },  
    tableCell: { 
        margin: 5, 
        fontSize: 10 
    },
    image:{
        marginBottom:10,
        width:100,
        height:100,
    }
});


const Sendinfo_mail = (array) => {
    return array.map((item, index) =>(
        <View style={styles.tableRow} key={index}> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.name}</Text> 
            </View> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text> 
            </View> 
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.content}</Text> 
            </View>
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.idx}</Text> 
            </View> 
        </View>
    ))
}

const Sendinfo_mail_ui = (array) => {
    return [array].map((item, index) =>(
        <View style={styles.tableRow} key={index}> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.name}</Text> 
            </View> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{[(item.price)].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text> 
            </View> 
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.content}</Text> 
            </View>
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.idx}</Text> 
            </View> 
        </View>
    ))
}

const Sendinfo_mail_service = (array) => {
    return [array].map((item, index) =>(
        <View style={styles.tableRow} key={index}> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.name}</Text> 
            </View> 
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{[(item.price)].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text> 
            </View> 
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{item.content}</Text> 
            </View>
            <View style={styles.tableCol}> 
                <Text style={styles.tableCell}>{item.idx}</Text> 
            </View> 
        </View>
    ))
}




const Sendinof = (props) => {
    let [changenames, setChangeNames] = useState("");
    let [changecompanys, setChangeCompanys] = useState("");
    let [changeemails, setChangeEmails] = useState("");

    let pdfList_Ui = props.arrui;
    let pdfList_Service = props.arrservice;
    let pdfList = props.arrtotal;

    const MyDoc = () => (
        <Document style={{ fontFamily: 'Sunflower' }} >
            <Page style={styles.body}>
            <Text>{changecompanys} 견적서</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableColHeader}>
                            <Text style={styles.tableCellHeader}>기술 구성 항목</Text>
                        </View> 
                        <View style={styles.tableColHeader}> 
                            <Text style={styles.tableCellHeader}>가격</Text> 
                        </View> 
                        <View style={styles.tableColHeader}> 
                            <Text style={styles.tableCellHeader}>비용</Text> 
                        </View> 
                        <View style={styles.tableColHeader}> 
                            <Text style={styles.tableCellHeader}>Price</Text> 
                        </View> 
                    </View>
                    {Sendinfo_mail(pdfList)}
                    {Sendinfo_mail_ui(pdfList_Ui)}
                    {Sendinfo_mail_service(pdfList_Service)}
                </View>
                <Text>{changenames}님 귀하</Text><Image style={styles.image} src={images}/>
            </Page>
        </Document>
    );

    const onSubmit = (event) => {
        event.preventDefault();
        // const info = this.inputRef.current.value;
    }

    const changeCompany = (event) => {
        setChangeCompanys(event.target.value);
    }

    const changeEmail = (event) => {
        setChangeEmails(event.target.value);
    }

    const changeName = (event) => {
        setChangeNames(event.target.value);
    }


    return (
        <>
            <div className="forminfo">
                <form className="send-form" onSubmit={onSubmit}>
                    <h2 className="estimate">예상 견적</h2>
                    <h2 className="price-text">{(props.pricedtotal + props.pricedui + props.priceservice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</h2>
                    <input type="text" className="add-text" onChange={changeCompany} placeholder="회사명"/>
                    <input type="email" className="add-email" onChange={changeEmail} placeholder="이메일주소를입력해주세요"/>
                    <input type="text" className="add-name" onChange={changeName} placeholder="이름(견적서의 수신인)"/>
                    <button className="send-button">
                    <div className="App">
                        <PDFDownloadLink  document={<MyDoc />} fileName={`111.pdf`}>
                        {({ blob, url, loading, error }) => (loading ? '견적서 작성중' : '견적서 메일 보내기')}
                        </PDFDownloadLink>
                        </div>
                    </button>
                </form>
            </div>
        </>
    );
}


export default Sendinof;