import React from 'react';
import {Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page:{
        flexDirection: 'row',
        backgroundColor: '#C0C0C0'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const MyPDF = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>테스팅</Text>
                </View>
                <View style={styles.section}>
                    <Text>테스팅팅2</Text>
                </View>
            </Page>
        </Document>
    );

export default MyPDF;