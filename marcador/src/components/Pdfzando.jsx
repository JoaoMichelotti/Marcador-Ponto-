import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
        flexGrow: 1,
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
            <Text style={styles.title}>Relatório de Registros</Text>
            <View style={styles.table}>
                <View style={styles.tableRow} >
                <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Entrada</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Saída</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Data</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Horas</Text>
                    </View> 
                </View>
                {props.tabelinha.map((item, index) => {
                    const [ano, mes, dia] = item.data.split('-');
                    const dataLocal = new Date(ano, mes - 1, dia);
                    return <>
                        <View style={styles.tableRow} key={index}>
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
                                <Text style={styles.tableCell}>{item.horas}</Text>
                            </View>
                            
                        </View>
                    </>
                })}
            </View>
        </Page>
    </Document>

}
