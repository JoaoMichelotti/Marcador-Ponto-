import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import TimeConvert from '../functions/TimeConverter';
// Estilos do PDF
const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCol: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        flex: 1
    },
    tableCellHeader: {
        fontSize: 13,
    },
    tableCell: {
        fontSize: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default function Pdfzando(props){

    return <Document>
        <Page style={styles.page}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={styles.title}>Relatório de Registros</Text>
                <Text style={styles.title}>Horas Totais: {TimeConvert(props.tabelinha, "Total")}</Text>
            </View>
            <View style={styles.table}>
                <View style={styles.tableRow} >
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Entrada</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Saída</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Data</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Tempo Gasto</Text>
                    </View> 
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Assinatura</Text>
                    </View> 
                </View>
                {props.tabelinha.map((item, index) => {
                    const [ano, mes, dia] = item.data.split('-');
                    const dataLocal = new Date(ano, mes - 1, dia);
                    return <View style={styles.tableRow} key={index}>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{item.hEntrada}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{item.hSaida}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{dataLocal.toLocaleDateString('pt-BR')}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>{TimeConvert(item, "Individual")}</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}></Text>
                            </View>
                            
                        </View>
                })}
            </View>
        </Page>
    </Document>

}
